import { NextRequest } from 'next/server';
import OpenAI from 'openai';
import { createRateLimit } from '@/lib/rate-limit';

const rateLimit = createRateLimit(5, "1 m");

function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function getOpenAI() {
  const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('AI service not configured');
  }
  return new OpenAI({
    apiKey,
    baseURL: process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com',
  });
}

function buildPrompt(params: {
  goal: string;
  experience: string;
  duration: number;
  equipment: string;
  targetArea: string;
  notes?: string;
}) {
  const { goal, experience, duration, equipment, targetArea, notes } = params;

  const goalMap: Record<string, string> = {
    muscle: 'Build muscle and increase size (hypertrophy)',
    fatloss: 'Lose body fat while preserving muscle',
    strength: 'Increase raw strength and power',
    endurance: 'Improve cardiovascular and muscular endurance',
    maintain: 'Maintain current fitness level and stay active',
  };

  const expMap: Record<string, string> = {
    beginner: 'New to fitness, needs clear form instructions and simpler movements',
    intermediate: '6+ months of consistent training, comfortable with basic lifts',
    advanced: '2+ years of training, can handle complex movements and higher intensity',
  };

  const equipMap: Record<string, string> = {
    gym: 'Full gym access: barbells, dumbbells, cables, machines, racks',
    dumbbells: 'Dumbbells only, maybe a bench',
    home: 'No equipment, bodyweight exercises only',
  };

  const areaMap: Record<string, string> = {
    full: 'Full body workout targeting all major muscle groups',
    upper: 'Focus on upper body: chest, back, shoulders, arms',
    lower: 'Focus on lower body: quads, hamstrings, glutes, calves',
    core: 'Focus on core: abs, obliques, lower back stability',
  };

  const notesSection = notes
    ? `\nSpecial considerations: ${notes}\nPlease adapt the plan to accommodate these needs safely.`
    : '';

  return `Create a personalized workout plan:

Fitness goal: ${goalMap[goal] || goal}
Experience: ${expMap[experience] || experience}
Duration: ${duration} minutes
Equipment: ${equipMap[equipment] || equipment}
Target area: ${areaMap[targetArea] || targetArea}${notesSection}

Design a safe, effective workout:
1. Warm-up (5 min): dynamic stretches and mobility specifically for the target area
2. Main workout (${Math.max(duration - 10, 10)} min): 4-6 exercises with sets, reps, rest, and brief form tips
3. Cool-down (5 min): static stretches for worked muscles
4. Match intensity and exercise complexity to the experience level
5. If bodyweight only, suggest creative alternatives that still challenge the user
6. Include an estimated difficulty rating (Easy / Moderate / Challenging)

CRITICAL RULES for weight field:
- Bodyweight exercises: return "BW"
- Fixed weight: return pure number format like "20kg" or "10-15kg". NO extra words like "Moderate" or "e.g."
- If intensity level is needed: return format like "M · 20kg" or "L · BW" (L=Light, M=Moderate, H=Heavy)
- NEVER return sentences or descriptions in the weight field

CRITICAL RULES for exercise names:
- Use standard exercise names from this list when applicable:
  Chest: Bench Press, Incline Bench Press, Dumbbell Fly, Push Up, Chest Press
  Back: Bent Over Row, Lat Pulldown, Pull Up, Deadlift, Romanian Deadlift, Face Pull
  Legs: Squat, Goblet Squat, Leg Press, Lunge, Bulgarian Split Squat, Leg Extension, Leg Curl, Calf Raise, Hip Thrust
  Shoulders: Shoulder Press, Overhead Press, Push Press, Lateral Raise, Front Raise, Upright Row
  Arms: Bicep Curl, Hammer Curl, Tricep Extension, Tricep Pushdown, Skull Crusher
  Core: Plank, Crunch, Leg Raise, Russian Twist, Dead Bug, Ab Wheel Rollout
  Full Body: Burpee, Mountain Climber, Kettlebell Swing, Turkish Get Up, Thruster
- Always include equipment type prefix when relevant: "Dumbbell Goblet Squat", "Barbell Bench Press", "Cable Row"
- Use full words, not abbreviations: "Dumbbell" not "DB", "Kettlebell" not "KB"
- If an exercise has multiple common names, use the most widely recognized one

Return valid JSON only, no markdown:
{
  "title": "Descriptive workout name",
  "duration": "X min",
  "intensity": "Beginner / Intermediate / Advanced",
  "difficulty": "Easy / Moderate / Challenging",
  "calories": "Estimated calories (e.g. 200-350 kcal)",
  "warmup": ["5 items max"],
  "exercises": [
    { "name": "Exercise", "sets": 3, "reps": "10-12", "rest": "60s", "weight": "20kg or BW or M · 15kg", "notes": "1-sentence form tip" }
  ],
  "cooldown": ["4 items max"]
}`;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 5 requests per minute per IP
    const ip = getClientIP(req);
    const { success, remaining } = await rateLimit.limit(ip);
    if (!success) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Try again in a minute." }), {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Remaining": String(remaining),
        },
      });
    }

    const { goal, experience, duration, equipment, targetArea, notes } = await req.json();

    const prompt = buildPrompt({ goal, experience, duration, equipment, targetArea, notes });
    const openai = getOpenAI();

    // 判断是否需要使用 v4-pro：伤病、慢病、特殊目标
    const needsPro = notes && (
      /injur|pain|hurt|surgery|rehab|recover|joint|back pain|knee|shoulder|ankle|wrist|elbow|hip|spine|disc|tear|strain|sprain|fracture|acl|meniscus|rotator cuff/i.test(notes) ||
      /diabetes|hypertension|heart|blood pressure|cholesterol|thyroid|asthma|copd|arthritis|osteoporosis|fibromyalgia|chronic|autoimmune|ms|parkinson|epilepsy/i.test(notes) ||
      /pregnant|pregnancy|postpartum|elderly|senior|teenager|adolescent|obese|overweight|underweight|eating disorder|anorexia|bulimia/i.test(notes)
    );

    const model = needsPro ? 'deepseek-v4-pro' : (process.env.DEEPSEEK_MODEL || 'deepseek-v4-flash');

    const stream = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are an expert certified personal trainer (NASM, ACE). Create safe, effective, personalized workout plans. Always respond with valid JSON only, no markdown wrapping.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 2000,
      stream: true,
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        let buffer = '';
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              buffer += content;
              controller.enqueue(encoder.encode(content));
            }
          }
          controller.close();
        } catch (err) {
          console.error('Stream error:', err);
          controller.enqueue(encoder.encode('\n\n[Error: Stream interrupted. Please try again.]'));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Error generating plan:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate workout plan' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
