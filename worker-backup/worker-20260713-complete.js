// GetFitAI Worker - API Backend
// Updated: 2026-07-13 - Added send-plan + reasoning model fix
// Endpoints: POST /api/generate-plan, POST /api/send-plan

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Route handling
    const path = url.pathname;
    try {
      if (path === '/api/generate-plan' && request.method === 'POST') {
        return await handleGeneratePlan(request, env, corsHeaders);
      }
      if (path === '/api/send-plan' && request.method === 'POST') {
        return await handleSendPlan(request, env, corsHeaders);
      }
      
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: 'Failed to process request' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
  },
};

async function handleGeneratePlan(request, env, corsHeaders) {
  const { goal, experience, duration, equipment, targetArea, notes } = await request.json();
  
  const apiKey = env.DEEPSEEK_API_KEY || env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'AI service not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const prompt = buildPrompt({ goal, experience, duration, equipment, targetArea, notes });
  
  // Check if needs Pro model
  const needsPro = notes && (
    /injur|pain|hurt|surgery|rehab|recover|joint|back pain|knee|shoulder|ankle|wrist|elbow|hip|spine|disc|tear|strain|sprain|fracture|acl|meniscus|rotator cuff/i.test(notes) ||
    /diabetes|hypertension|heart|blood pressure|cholesterol|thyroid|asthma|copd|arthritis|osteoporosis|fibromyalgia|chronic|autoimmune|ms|parkinson|epilepsy/i.test(notes) ||
    /pregnant|pregnancy|postpartum|elderly|senior|teenager|adolescent|obese|overweight|underweight|eating disorder|anorexia|bulimia/i.test(notes)
  );

  const model = needsPro ? 'deepseek-v4-pro' : (env.DEEPSEEK_MODEL || 'deepseek-v4-flash');

  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are an expert certified personal trainer (NASM, ACE). Create safe, effective, personalized workout plans. Always respond with valid JSON only, no markdown wrapping.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 8192,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return new Response(JSON.stringify({ error: 'AI service error', details: error }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const data = await response.json();
  const msg = data.choices?.[0]?.message || {};
  
  // Try content first, then reasoning_content as fallback
  let content = msg.content || msg.reasoning_content || '';
  
  // Extract JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return new Response(JSON.stringify({ 
      error: 'Invalid AI response format', 
      debug: { 
        content_length: content.length,
        content_preview: content.substring(0, 200),
        has_content: !!msg.content,
        has_reasoning: !!msg.reasoning_content,
        finish_reason: data.choices?.[0]?.finish_reason
      }
    }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Validate JSON
  try {
    JSON.parse(jsonMatch[0]);
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON from AI', raw: content.substring(0, 500) }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  return new Response(jsonMatch[0], {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      ...corsHeaders,
    },
  });
}

async function handleSendPlan(request, env, corsHeaders) {
  const { email, plan } = await request.json();
  
  if (!email || !plan) {
    return new Response(JSON.stringify({ error: 'Email and plan are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const resendKey = env.RESEND_API_KEY;
  if (!resendKey) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Build exercises HTML
  const exercisesHtml = (plan.exercises || []).map(ex => `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${ex.name}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${ex.sets} sets</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${ex.reps}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">Rest ${ex.rest}</td>
    </tr>
  `).join('');

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: 'GetFitAI <hi@getfitai.io>',
      to: email,
      subject: `Your Workout Plan: ${plan.title || 'Personalized Workout'}`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #000;">Your Personalized Workout Plan</h1>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h2>${plan.title || 'Workout'}</h2>
          <p><strong>Duration:</strong> ${plan.duration || 'N/A'}</p>
          <p><strong>Intensity:</strong> ${plan.intensity || 'N/A'}</p>
        </div>
        <h3>Exercises</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead><tr style="background: #000; color: #fff;">
            <th style="padding: 10px; text-align: left;">Exercise</th>
            <th style="padding: 10px; text-align: left;">Sets</th>
            <th style="padding: 10px; text-align: left;">Reps</th>
            <th style="padding: 10px; text-align: left;">Rest</th>
          </tr></thead>
          <tbody>${exercisesHtml}</tbody>
        </table>
        ${plan.warmup ? `<h3>Warm-up</h3><ul>${plan.warmup.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        ${plan.cooldown ? `<h3>Cool-down</h3><ul>${plan.cooldown.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        <div style="margin-top: 30px; padding: 20px; background: #f5f5f5; border-radius: 10px; text-align: center;">
          <p>Generate more plans at <a href="https://getfitai.io" style="color: #000; font-weight: bold;">GetFitAI.io</a></p>
        </div>
      </div>`,
    }),
  });

  if (!emailRes.ok) {
    const errText = await emailRes.text();
    return new Response(JSON.stringify({ error: 'Failed to send email', details: errText }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const emailData = await emailRes.json();
  return new Response(JSON.stringify({ success: true, id: emailData.id }), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });
}

function buildPrompt(params) {
  const { goal, experience, duration, equipment, targetArea, notes } = params;

  const goalMap = {
    muscle: 'Build muscle and increase size (hypertrophy)',
    fatloss: 'Lose body fat while preserving muscle',
    strength: 'Increase raw strength and power',
    endurance: 'Improve cardiovascular and muscular endurance',
    maintain: 'Maintain current fitness level and stay active',
  };

  const expMap = {
    beginner: 'New to fitness, needs clear form instructions and simpler movements',
    intermediate: '6+ months of consistent training, comfortable with basic lifts',
    advanced: '2+ years of training, can handle complex movements and higher intensity',
  };

  const equipMap = {
    gym: 'Full gym access: barbells, dumbbells, cables, machines, racks',
    dumbbells: 'Dumbbells only, maybe a bench',
    home: 'No equipment, bodyweight exercises only',
  };

  const areaMap = {
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
