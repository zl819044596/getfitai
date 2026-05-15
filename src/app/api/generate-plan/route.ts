import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY || '',
  baseURL: process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com',
});

export async function POST(req: NextRequest) {
  try {
    const { goal, experience, duration, equipment } = await req.json();

    const prompt = `Create a personalized workout plan based on the following profile:

Goal: ${goal}
Experience Level: ${experience}
Available Time: ${duration} minutes
Equipment: ${equipment}

Requirements:
1. Create a workout plan that fits within ${duration} minutes
2. Include warm-up (5-10 min), main workout, and cool-down (5 min)
3. For each exercise, provide: name, sets, reps, rest time, and brief form tips
4. If equipment is limited, suggest bodyweight alternatives
5. Adjust intensity based on experience level
6. Include estimated calories burned

Format the response as a structured JSON object with this exact structure:
{
  "title": "Workout Title",
  "duration": "Total duration",
  "intensity": "Intensity level",
  "warmup": ["Warmup exercise 1", "Warmup exercise 2"],
  "exercises": [
    {
      "name": "Exercise Name",
      "sets": 3,
      "reps": "10-12",
      "rest": "60s",
      "notes": "Form tips"
    }
  ],
  "cooldown": ["Cooldown exercise 1", "Cooldown exercise 2"]
}`;

    const completion = await openai.chat.completions.create({
      model: process.env.DEEPSEEK_MODEL || 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: 'You are an expert fitness trainer and workout planner. Create safe, effective, and personalized workout plans. Always return valid JSON.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = completion.choices[0]?.message?.content || '';
    
    // Extract JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse workout plan');
    }

    const plan = JSON.parse(jsonMatch[0]);
    
    return NextResponse.json({ success: true, plan });
  } catch (error) {
    console.error('Error generating plan:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate workout plan' },
      { status: 500 }
    );
  }
}
