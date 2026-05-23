const API_KEY = process.env.DEEPSEEK_API_KEY;
const BASE_URL = "https://api.deepseek.com";
const MODEL = "deepseek-chat";

const articlePrompt = `You are a professional fitness content writer. Write a comprehensive 3000-word article in English.

Topic: "How to Lose Belly Fat: 10 Science-Backed Exercises That Actually Work"

Target audience: People aged 25-45 who want to lose belly fat, mostly beginners to intermediate fitness level.

SEO requirements:
- Primary keyword: "how to lose belly fat" (use naturally 8-12 times)
- Secondary keywords: "belly fat exercises", "stomach fat workout", "lose belly fat fast", "core exercises", "fat burning workout"
- Include a compelling H1, H2s, and H3s

Structure:
1. Introduction (300 words): Hook with a relatable pain point, explain why belly fat is stubborn (visceral vs subcutaneous), mention that spot reduction is a myth but overall fat loss + core strengthening works.

2. The Science (400 words): Briefly explain:
   - Caloric deficit is key
   - HIIT vs steady-state cardio for fat loss
   - Role of strength training in boosting metabolism
   - Importance of sleep and stress management
   Cite general scientific consensus without specific studies.

3. 10 Exercises (1500 words total, ~150 words each):
   For each exercise include:
   - Exercise name (H3)
   - Target muscles
   - Step-by-step instructions (3-5 steps)
   - Sets/reps recommendation
   - Why it works for belly fat
   
   Exercises to cover:
   1. Plank
   2. Mountain Climbers
   3. Russian Twists
   4. Burpees
   5. Dead Bug
   6. High Knees
   7. Bicycle Crunches
   8. Flutter Kicks
   9. Walking Lunges with Twist
   10. Jump Rope

4. 7-Day Workout Plan (300 words):
   - Day 1: Full Body + Core
   - Day 2: HIIT Cardio
   - Day 3: Rest or Light Walk
   - Day 4: Strength + Core
   - Day 5: HIIT + Abs
   - Day 6: Active Recovery (yoga/stretching)
   - Day 7: Rest
   Include specific exercises from the list above for each day.

5. Nutrition Tips (300 words): Brief, actionable tips:
   - Protein intake (0.7-1g per lb bodyweight)
   - Cut refined carbs and sugar
   - Eat more fiber
   - Stay hydrated
   - Limit alcohol

6. Conclusion + CTA (200 words): Encourage consistency, mention that a personalized plan works better, include a call-to-action like "Get your personalized belly fat workout plan with GetFitAI's AI workout generator."

Formatting:
- Use Markdown format
- Use **bold** for emphasis
- Use bullet points for lists
- Keep paragraphs short (2-4 sentences)
- Write in an encouraging, authoritative but friendly tone
- No fluff, every sentence should provide value

Output ONLY the article content, no meta commentary.`;

async function generate() {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "user", content: articlePrompt }],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  const data = await res.json();
  console.log(data.choices[0].message.content);
}

generate();
