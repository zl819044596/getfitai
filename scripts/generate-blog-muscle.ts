const API_KEY = process.env.DEEPSEEK_API_KEY;
const BASE_URL = "https://api.deepseek.com";
const MODEL = "deepseek-chat";

const articlePrompt = `You are a professional fitness content writer. Write a comprehensive 3000-word article in English.

Topic: "How to Build Muscle: The Complete Beginner's Guide"

Target audience: Men and women aged 20-35 who are new to strength training and want to build muscle.

SEO requirements:
- Primary keyword: "how to build muscle" (use naturally 8-12 times)
- Secondary keywords: "muscle building workout", "beginner strength training", "hypertrophy workout", "gain muscle fast", "strength training for beginners", "muscle growth"
- Include a compelling H1, H2s, and H3s

Structure:
1. Introduction (300 words): Hook with a relatable scenario (skinny guy/girl wanting to change), explain why building muscle matters (metabolism, confidence, health), set expectations (muscle growth takes time but results are guaranteed with consistency).

2. The Science of Muscle Growth (400 words): Briefly explain:
   - Muscle protein synthesis (MPS) vs muscle protein breakdown
   - Progressive overload principle
   - Role of testosterone and growth hormone (briefly, not overly technical)
   - Recovery and muscle growth happens during rest, not during workout
   - Why beginners gain muscle faster (newbie gains)

3. The 6 Fundamental Exercises (1200 words total, ~200 words each):
   For each exercise include:
   - Exercise name (H3)
   - Target muscles
   - Why it's essential for beginners
   - Step-by-step instructions (4-5 steps)
   - Sets/reps recommendation for beginners
   - Common mistakes to avoid
   
   Exercises to cover:
   1. Barbell Squat (or Goblet Squat for beginners)
   2. Barbell Bench Press (or Push-ups)
   3. Barbell Deadlift (or Romanian Deadlift)
   4. Overhead Press
   5. Pull-ups (or Lat Pulldown)
   6. Dumbbell Rows

4. Sample Beginner Workout Plan (400 words):
   - Full Body 3-Day Split (Monday/Wednesday/Friday)
   - Day A: Squat, Bench Press, Row, Plank
   - Day B: Deadlift, Overhead Press, Pull-up/Lat Pulldown, Leg Raise
   - Day C: Squat (lighter), Incline Press, Dumbbell Row, Face Pulls
   - Include warm-up and cool-down
   - Rest between sets: 2-3 minutes for compounds, 1-2 for isolation
   - How to progress: add 2.5-5 lbs when you hit all reps

5. Nutrition for Muscle Growth (400 words):
   - Caloric surplus: +300-500 calories above maintenance
   - Protein: 0.7-1g per pound of bodyweight
   - Carbs: important for energy and recovery
   - Fats: essential for hormone production
   - Meal timing: protein every 3-4 hours
   - Supplements (optional): creatine monohydrate, whey protein
   - Sample day of eating

6. Recovery and Lifestyle (200 words):
   - Sleep: 7-9 hours
   - Stress management
   - Don't train the same muscle 2 days in a row
   - Deload weeks every 4-6 weeks

7. Conclusion + CTA (100 words): Encourage consistency, mention that a personalized plan works better, include call-to-action to GetFitAI's workout generator.

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
  if (data.error) {
    console.error("API Error:", JSON.stringify(data.error, null, 2));
    process.exit(1);
  }
  console.log(data.choices[0].message.content);
}

generate();
