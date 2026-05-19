import { NextRequest } from 'next/server';
import OpenAI from 'openai';

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

Return valid JSON only, no markdown:
{
  "title": "Descriptive workout name",
  "duration": "X min",
  "intensity": "Beginner / Intermediate / Advanced",
  "difficulty": "Easy / Moderate / Challenging",
  "calories": "Estimated calories (e.g. 200-350 kcal)",
  "warmup": ["5 items max"],
  "exercises": [
    { "name": "Exercise", "sets": 3, "reps": "10-12", "rest": "60s", "notes": "Form tip" }
  ],
  "cooldown": ["4 items max"]
}`;
}

export async function POST(req: NextRequest) {
  try {
    const { goal, experience, duration, equipment, targetArea, notes } = await req.json();

    const prompt = buildPrompt({ goal, experience, duration, equipment, targetArea, notes });
    const openai = getOpenAI();

    const stream = await openai.chat.completions.create({
      model: process.env.DEEPSEEK_MODEL || 'deepseek-chat',
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
