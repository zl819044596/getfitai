import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Build Muscle: The Complete Beginner's Guide | GetFitAI",
  description:
    "Learn how to build muscle with this complete beginner's guide. Covers the 6 fundamental exercises, workout plans, nutrition, and recovery. Start gaining muscle today.",
  keywords: [
    "how to build muscle",
    "muscle building workout",
    "beginner strength training",
    "hypertrophy workout",
    "gain muscle fast",
    "strength training for beginners",
    "muscle growth",
  ],
  alternates: {
    canonical: "https://getfitai.io/blog/how-to-build-muscle",
  },
  openGraph: {
    title: "How to Build Muscle: The Complete Beginner's Guide | GetFitAI",
    description:
      "Learn how to build muscle with this complete beginner's guide. Covers exercises, workout plans, nutrition, and recovery.",
    url: "https://getfitai.io/blog/how-to-build-muscle",
    images: [
      {
        url: "https://getfitai.io/images/og-build-muscle.png",
        width: 1200,
        height: 630,
        alt: "How to Build Muscle - Complete Beginner's Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Build Muscle: The Complete Beginner's Guide",
  description:
    "Learn how to build muscle with this complete beginner's guide. Covers the 6 fundamental exercises, workout plans, nutrition, and recovery.",
  image: "https://getfitai.io/images/og-build-muscle.png",
  author: {
    "@type": "Organization",
    name: "GetFitAI",
    url: "https://getfitai.io",
  },
  publisher: {
    "@type": "Organization",
    name: "GetFitAI",
    logo: {
      "@type": "ImageObject",
      url: "https://getfitai.io/logo.png",
    },
  },
  datePublished: "2025-05-22",
  dateModified: "2025-05-22",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getfitai.io/blog/how-to-build-muscle",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build muscle as a beginner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most beginners see visible changes in 8-12 weeks with consistent training and proper nutrition. Significant transformation typically takes 6 months. The 'newbie gains' phase lasts 6-12 months, during which muscle growth is fastest.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to lift heavy to build muscle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Muscle growth occurs across a range of rep ranges (6-30 reps). The key is training close to failure and applying progressive overload. Beginners should focus on form first, then gradually increase weight.",
      },
    },
    {
      "@type": "Question",
      name: "How much protein do I need to build muscle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aim for 0.7-1 gram of protein per pound of body weight daily. For a 150-pound person, that's 105-150 grams of protein per day. Spread intake across 3-5 meals for optimal muscle protein synthesis.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build muscle at home without a gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but it requires creativity. Bodyweight exercises like push-ups, squats, and pull-ups can build muscle, especially for beginners. As you get stronger, you'll need to add resistance through bands, weights, or harder exercise variations.",
      },
    },
    {
      "@type": "Question",
      name: "How many days a week should I train as a beginner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3 days per week is ideal for beginners. A full-body routine 3x weekly allows adequate recovery while providing enough stimulus for growth. Rest at least one day between workouts.",
      },
    },
  ],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-background">
<JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <article className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Muscle Building
              </span>
              <span className="text-sm text-muted-foreground">May 22, 2025</span>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                alt="Barbell squat in gym"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              How to Build Muscle: The Complete Beginner's Guide
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn the science of muscle growth, the 6 fundamental exercises, a complete workout plan,
              and nutrition strategies to start gaining muscle today.
            </p>
          </header>

          {/* CTA Box */}
          <div className="bg-muted rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-lg font-bold text-foreground mb-2">
              Want a Personalized Muscle-Building Plan?
            </h3>
            <p className="text-muted-foreground mb-4">
              Get a custom strength training plan tailored to your experience level, goals, and available equipment.
            </p>
            <Link
              href="/workouts/gym"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Generate My Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            <h2>Introduction</h2>
            <p>
              You look in the mirror and see the same reflection you've seen for years—lean, maybe a little soft, but definitely not the strong, defined physique you envision. You've tried random workouts before, but nothing stuck. Maybe you're the skinny guy who can't seem to gain weight, or the woman who wants to feel stronger and more confident in her own skin. Here's the truth: <strong>you can change your body</strong>. Building muscle isn't just about looking good—it transforms your metabolism (muscle burns more calories at rest), boosts your confidence, strengthens your bones, and protects you from injury as you age. But let's set realistic expectations: <strong>muscle growth takes time</strong>. You won't look like a fitness model in 30 days. However, with consistent effort, you will see visible changes in 8-12 weeks, and significant transformation in 6 months. This guide will teach you exactly <strong>how to build muscle</strong> from scratch, using proven science and simple strategies that work for both men and women. No fluff, no magic pills—just actionable steps you can start today.
            </p>

            <h2>The Science of Muscle Growth</h2>
            <p>
              Before you touch a single weight, you need to understand what actually makes muscle grow. It's not complicated, but it's non-negotiable.
            </p>

            <h3>Muscle Protein Synthesis vs. Breakdown</h3>
            <p>
              Your muscles are in a constant state of turnover. <strong>Muscle protein synthesis (MPS)</strong> builds new muscle tissue, while <strong>muscle protein breakdown</strong> tears it down. For <strong>muscle growth</strong> to occur, MPS must exceed breakdown over time. When you lift weights, you create microscopic tears in your muscle fibers. This triggers your body to repair and reinforce those fibers, making them thicker and stronger. That's the entire process—damage, repair, growth.
            </p>

            <h3>Progressive Overload</h3>
            <p>
              This is the single most important principle for <strong>how to build muscle</strong>. Your body adapts to stress. If you lift the same weight for the same reps every workout, your muscles have no reason to grow. <strong>Progressive overload</strong> means gradually increasing the demands on your muscles—by adding weight, doing more reps, or decreasing rest time. Without it, you'll plateau. With it, you'll keep growing.
            </p>

            <h3>Hormones and Growth</h3>
            <p>
              Testosterone and growth hormone play supporting roles in <strong>muscle growth</strong>, but you don't need supraphysiological levels to build muscle. Compound exercises like squats and deadlifts naturally boost these hormones. Women have lower testosterone, but they still build muscle efficiently—just with a different aesthetic outcome (leaner, more defined, not bulky).
            </p>

            <h3>Recovery Is Where Growth Happens</h3>
            <p>
              Here's what most beginners get wrong: <strong>you don't build muscle during your workout</strong>. You build it during rest. When you lift, you break down muscle. When you sleep and eat, you rebuild it stronger. Train hard, but respect recovery. Overtraining is a real thing and kills progress.
            </p>

            <h3>Newbie Gains</h3>
            <p>
              Good news: beginners gain muscle faster than experienced lifters. Your nervous system adapts rapidly, and your muscles respond quickly to the novel stimulus. This "newbie gains" phase can last 6-12 months. Take advantage of it by being consistent—don't waste this window with random workouts.
            </p>

            <h2>The 6 Fundamental Exercises</h2>
            <p>
              These six movements form the foundation of any effective <strong>muscle building workout</strong>. They're compound exercises, meaning they work multiple muscle groups at once. This gives you more growth per minute spent in the gym.
            </p>

            <h3>1. Barbell Squat (or Goblet Squat for Beginners)</h3>
            <p>
              <strong>Target muscles:</strong> Quadriceps, hamstrings, glutes, core, lower back
            </p>
            <p>
              <strong>Why it's essential:</strong> The squat is the king of leg exercises. It builds lower body strength, improves mobility, and releases the most anabolic hormones of any movement. If you only do one leg exercise, make it this.
            </p>
            <p><strong>Step-by-step instructions:</strong></p>
            <ul>
              <li>Set the barbell on a squat rack at shoulder height. Step under it, positioning the bar across your upper traps (not your neck).</li>
              <li>Grip the bar with hands slightly wider than shoulder-width, squeeze your shoulder blades together, and unrack the bar.</li>
              <li>Take two steps back, feet shoulder-width apart, toes slightly pointed out.</li>
              <li>Brace your core, push your hips back, and lower your body as if sitting in a chair. Go down until your thighs are parallel to the ground (or as low as you can with good form).</li>
              <li>Drive through your heels to stand back up, squeezing your glutes at the top.</li>
            </ul>
            <p>
              <strong>Sets/reps for beginners:</strong> 3 sets of 8-10 reps
            </p>
            <p>
              <strong>Common mistakes to avoid:</strong> Letting your knees cave inward (push them out), rounding your lower back (keep it neutral), and not going deep enough (parallel or below).
            </p>
            <p>
              <strong>Beginner alternative:</strong> Goblet squat—hold one dumbbell vertically against your chest. This forces better form and reduces lower back strain.
            </p>

            <h3>2. Barbell Bench Press (or Push-ups)</h3>
            <p>
              <strong>Target muscles:</strong> Pectorals (chest), anterior deltoids (front shoulders), triceps
            </p>
            <p>
              <strong>Why it's essential:</strong> The bench press is the gold standard for upper body pushing strength. It builds a thick, strong chest and contributes significantly to <strong>muscle growth</strong> in your entire upper body.
            </p>
            <p><strong>Step-by-step instructions:</strong></p>
            <ul>
              <li>Lie on a flat bench with your eyes under the bar. Grip the bar with hands slightly wider than shoulder-width.</li>
              <li>Unrack the bar by straightening your arms, then lower it to your mid-chest with control.</li>
              <li>Touch the bar lightly to your chest (don't bounce it), then press it back up explosively.</li>
              <li>At the top, fully extend your arms but don't lock your elbows aggressively.</li>
              <li>Keep your shoulder blades retracted and pinned to the bench throughout the movement.</li>
            </ul>
            <p>
              <strong>Sets/reps for beginners:</strong> 3 sets of 8-12 reps
            </p>
            <p>
              <strong>Common mistakes to avoid:</strong> Flaring your elbows out at 90 degrees (keep them at about 75 degrees), bouncing the bar off your chest, and lifting your glutes off the bench.
            </p>
            <p>
              <strong>Beginner alternative:</strong> Push-ups. Do 3 sets to failure. If you can do more than 20, elevate your feet or add a weighted vest.
            </p>

            <h3>3. Barbell Deadlift (or Romanian Deadlift)</h3>
            <p>
              <strong>Target muscles:</strong> Hamstrings, glutes, lower back, traps, forearms, core
            </p>
            <p>
              <strong>Why it's essential:</strong> The deadlift is the ultimate full-body strength builder. It teaches you how to lift safely from the ground, builds a powerful posterior chain, and is arguably the most functional exercise you can do.
            </p>
            <p><strong>Step-by-step instructions:</strong></p>
            <ul>
              <li>Stand with your mid-foot under the bar, feet hip-width apart. Bend down and grip the bar with hands just outside your knees (mixed grip or double overhand).</li>
              <li>Lower your hips, keep your chest up, and flatten your back. Your shins should touch the bar.</li>
              <li>Take a deep breath, brace your core, and drive through your heels to lift the bar.</li>
              <li>Keep the bar close to your body as it rises. Stand tall at the top, shoulders back, hips fully extended.</li>
              <li>Lower the bar with control by pushing your hips back first, then bending your knees once the bar passes them.</li>
            </ul>
            <p>
              <strong>Sets/reps for beginners:</strong> 3 sets of 5-8 reps
            </p>
            <p>
              <strong>Common mistakes to avoid:</strong> Rounding your back (deadly for injury), jerking the bar up (pull the slack out first), and hyperextending at the top (just stand straight).
            </p>
            <p>
              <strong>Beginner alternative:</strong> Romanian deadlift with dumbbells. This reduces lower back stress while still building hamstring and glute strength.
            </p>

            <h3>4. Overhead Press</h3>
            <p>
              <strong>Target muscles:</strong> Deltoids (shoulders), triceps, upper chest, core
            </p>
            <p>
              <strong>Why it's essential:</strong> The overhead press builds strong, capped shoulders and is the best exercise for upper body pressing power. It also forces intense core stabilization, giving you abs without direct ab work.
            </p>
            <p><strong>Step-by-step instructions:</strong></p>
            <ul>
              <li>Stand with feet shoulder-width apart. Grip the bar at shoulder height, hands just outside your shoulders.</li>
              <li>Brace your core and squeeze your glutes. The bar should rest on your front delts.</li>
              <li>Press the bar straight up, moving your head back slightly to clear your chin.</li>
              <li>Once the bar passes your head, push your head through so your ears are next to your arms.</li>
              <li>Lower with control back to the starting position.</li>
            </ul>
            <p>
              <strong>Sets/reps for beginners:</strong> 3 sets of 8-10 reps
            </p>
            <p>
              <strong>Common mistakes to avoid:</strong> Using leg drive (that's a push press, different exercise), arching your lower back excessively, and not getting full range of motion.
            </p>
            <p>
              <strong>Beginner alternative:</strong> Seated dumbbell press. This removes the balance component and lets you focus on pressing.
            </p>

            <h3>5. Pull-ups (or Lat Pulldown)</h3>
            <p>
              <strong>Target muscles:</strong> Latissimus dorsi (lats), biceps, rear deltoids, core
            </p>
            <p>
              <strong>Why it's essential:</strong> Pull-ups are the ultimate test of relative strength and build a wide, V-tapered back. They're also incredibly functional—being able to pull your own bodyweight up is a fundamental human movement.
            </p>
            <p><strong>Step-by-step instructions:</strong></p>
            <ul>
              <li>Hang from a pull-up bar with hands slightly wider than shoulder-width, palms facing away (overhand grip).</li>
              <li>Brace your core and squeeze your glutes to prevent swinging.</li>
              <li>Pull your shoulder blades down and back, then drive your elbows down to pull your chin over the bar.</li>
              <li>Pause briefly at the top, squeezing your lats.</li>
              <li>Lower with control until your arms are fully extended.</li>
            </ul>
            <p>
              <strong>Sets/reps for beginners:</strong> 3 sets of as many reps as possible (AMRAP). If you can't do 1, use bands or negatives.
            </p>
            <p>
              <strong>Common mistakes to avoid:</strong> Swinging/kipping (strict form only for beginners), not going full range of motion, and shrugging your shoulders up.
            </p>
            <p>
              <strong>Beginner alternative:</strong> Lat pulldown machine. This lets you adjust the weight and build pulling strength progressively.
            </p>

            <h3>6. Dumbbell Rows</h3>
            <p>
              <strong>Target muscles:</strong> Lats, rhomboids, middle trapezius, rear deltoids, biceps
            </p>
            <p>
              <strong>Why it's essential:</strong> Rows build thickness in your upper back, improve posture, and balance out all the pressing work. A strong back is essential for shoulder health and overall strength.
            </p>
            <p><strong>Step-by-step instructions:</strong></p>
            <ul>
              <li>Place one knee and the same-side hand on a flat bench. Hold a dumbbell in the other hand, arm extended toward the floor.</li>
              <li>Keep your back flat and parallel to the floor. Brace your core.</li>
              <li>Pull the dumbbell up toward your hip, driving your elbow back and squeezing your shoulder blade.</li>
              <li>Pause at the top, then lower with control.</li>
              <li>Complete all reps on one side, then switch.</li>
            </ul>
            <p>
              <strong>Sets/reps for beginners:</strong> 3 sets of 10-12 reps per side
            </p>
            <p>
              <strong>Common mistakes to avoid:</strong> Rotating your torso excessively (keep your shoulders square), using momentum to swing the weight, and not pulling to your hip (pulling to your chest engages less lat).
            </p>
            <p>
              <strong>Beginner alternative:</strong> Chest-supported row machine. This removes the stability requirement and lets you focus purely on pulling.
            </p>

            <h2>Sample Beginner Workout Plan</h2>
            <p>
              This is a full-body routine you do 3 days per week (Monday, Wednesday, Friday). It hits every major muscle group each session, which is ideal for <strong>beginner strength training</strong> because frequency drives faster adaptation.
            </p>

            <h3>Day A</h3>
            <ul>
              <li>Barbell Squat: 3 sets × 8-10 reps</li>
              <li>Barbell Bench Press: 3 sets × 8-12 reps</li>
              <li>Dumbbell Row: 3 sets × 10-12 reps per side</li>
              <li>Plank: 3 sets × 30-45 seconds</li>
            </ul>

            <h3>Day B</h3>
            <ul>
              <li>Barbell Deadlift: 3 sets × 5-8 reps</li>
              <li>Overhead Press: 3 sets × 8-10 reps</li>
              <li>Pull-ups or Lat Pulldown: 3 sets × AMRAP (or 10-12 reps)</li>
              <li>Hanging Leg Raise: 3 sets × 10-15 reps</li>
            </ul>

            <h3>Day C</h3>
            <ul>
              <li>Barbell Squat (lighter than Day A): 3 sets × 10-12 reps</li>
              <li>Incline Dumbbell Press: 3 sets × 10-12 reps</li>
              <li>One-Arm Dumbbell Row: 3 sets × 10-12 reps per side</li>
              <li>Face Pulls: 3 sets × 15-20 reps</li>
            </ul>

            <h3>Important Notes</h3>
            <ul>
              <li><strong>Warm-up:</strong> 5 minutes of light cardio + dynamic stretching + 2 lighter sets of your first exercise</li>
              <li><strong>Rest between sets:</strong> 2-3 minutes for compound exercises, 1-2 minutes for isolation</li>
              <li><strong>Progression:</strong> When you hit the top of the rep range for all sets, add 2.5-5 lbs the next workout</li>
              <li><strong>Cool-down:</strong> 5 minutes of stretching the muscles you trained</li>
            </ul>

            <h2>Nutrition for Muscle Growth</h2>
            <p>
              You can train perfectly, but without proper nutrition, you won't grow. Here's exactly what you need to know about eating for <strong>muscle growth</strong>.
            </p>

            <h3>Caloric Surplus</h3>
            <p>
              To build muscle, you must eat more calories than you burn. Aim for a surplus of <strong>300-500 calories per day</strong> above your maintenance level. This is enough to support muscle growth without excessive fat gain. A good starting point: multiply your bodyweight in pounds by 16-18 to estimate maintenance, then add 300-500.
            </p>

            <h3>Protein: The Building Block</h3>
            <p>
              Protein provides the amino acids your muscles need to repair and grow. Aim for <strong>0.7-1 gram of protein per pound of bodyweight</strong> daily. For a 150-pound person, that's 105-150 grams. Spread this across 3-5 meals for optimal muscle protein synthesis. Best sources: chicken, beef, fish, eggs, Greek yogurt, cottage cheese, whey protein, tofu, and legumes.
            </p>

            <h3>Carbohydrates: Fuel for Performance</h3>
            <p>
              Carbs are not the enemy—they're your primary fuel source for intense training. They also spike insulin, which helps drive amino acids into muscle cells. Aim for 2-3 grams per pound of bodyweight. Focus on complex carbs: rice, oats, potatoes, quinoa, fruits, and vegetables.
            </p>

            <h3>Fats: Hormone Production</h3>
            <p>
              Dietary fat is essential for testosterone production and overall health. Aim for 0.4-0.5 grams per pound of bodyweight. Sources: nuts, olive oil, avocado, fatty fish, and egg yolks.
            </p>

            <h3>Meal Timing</h3>
            <p>
              While total daily intake matters most, eating protein every 3-4 hours helps maximize muscle protein synthesis. Have a protein-rich meal within 2 hours before training and within 2 hours after. A pre-bed protein shake (casein or Greek yogurt) can help with overnight recovery.
            </p>

            <h3>Supplements (Optional)</h3>
            <p>
              Supplements are not required, but two have strong evidence:
            </p>
            <ul>
              <li><strong>Creatine monohydrate:</strong> 5 grams daily. The most researched supplement for muscle and strength. Safe, cheap, and effective.</li>
              <li><strong>Whey protein:</strong> Convenient way to hit protein targets. Use when whole food isn't practical.</li>
            </ul>

            <h3>Sample Day of Eating (150 lb person, ~2500 calories)</h3>
            <ul>
              <li><strong>Breakfast:</strong> 3 eggs, 2 slices whole grain toast, 1 cup Greek yogurt with berries (~600 cal, 40g protein)</li>
              <li><strong>Lunch:</strong> 6 oz chicken breast, 1.5 cups rice, mixed vegetables (~650 cal, 50g protein)</li>
              <li><strong>Snack:</strong> Protein shake with banana and peanut butter (~400 cal, 30g protein)</li>
              <li><strong>Dinner:</strong> 6 oz salmon, 1 cup quinoa, roasted vegetables (~600 cal, 40g protein)</li>
              <li><strong>Pre-bed:</strong> Cottage cheese with honey (~250 cal, 25g protein)</li>
            </ul>

            <h2>Recovery and Lifestyle</h2>
            <p>
              Training breaks muscle down. Recovery builds it up. Neglect recovery and you'll stall or regress.
            </p>

            <h3>Sleep</h3>
            <p>
              Aim for <strong>7-9 hours of quality sleep per night</strong>. Growth hormone peaks during deep sleep, and this is when most muscle repair occurs. Poor sleep reduces testosterone, increases cortisol, and impairs performance. Make sleep a non-negotiable priority.
            </p>

            <h3>Stress Management</h3>
            <p>
              Chronic stress elevates cortisol, which promotes muscle breakdown and fat storage. Incorporate stress-reduction practices: meditation, walking, reading, or whatever helps you unwind. You can't eliminate stress, but you can manage it.
            </p>

            <h3>Rest Days</h3>
            <p>
              Don't train the same muscle group two days in a row. Your muscles need 48-72 hours to recover and grow. This is why the 3-day full-body split works so well for beginners—you hit each muscle frequently but with adequate recovery.
            </p>

            <h3>Deload Weeks</h3>
            <p>
              Every 4-6 weeks, take a deload week where you reduce volume and intensity by 40-50%. This allows accumulated fatigue to dissipate and prevents burnout. You'll often come back stronger after a deload.
            </p>

            <h2>Conclusion</h2>
            <p>
              Building muscle is simple, but not easy. It requires consistent training, adequate nutrition, and proper recovery. The good news? As a beginner, you have the advantage of newbie gains—your body will respond quickly to the right stimulus. Follow the 6 fundamental exercises, stick to the 3-day split, eat in a slight surplus with plenty of protein, and prioritize sleep.
            </p>
            <p>
              Remember: <strong>consistency beats intensity</strong>. A mediocre plan followed consistently will always outperform a perfect plan followed sporadically. Start today, track your progress, and trust the process. In 6 months, you'll be amazed at how far you've come.
            </p>
            <p>
              Want a personalized approach? <strong>Get your custom muscle-building plan with GetFitAI's AI workout generator</strong>—tailored to your experience level, goals, and available equipment. Stop guessing, start growing.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Get Your Personalized Muscle-Building Plan
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Stop guessing. Our AI creates a custom strength training plan based on your experience, goals, and equipment.
            </p>
            <Link
              href="/workouts/gym"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-bold hover:bg-background/90 transition-colors"
            >
              Generate My Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">How long does it take to build muscle as a beginner?</h3>
                <p className="text-muted-foreground">
                  Most beginners see visible changes in 8-12 weeks with consistent training and proper nutrition. Significant transformation typically takes 6 months. The "newbie gains" phase lasts 6-12 months, during which muscle growth is fastest.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">Do I need to lift heavy to build muscle?</h3>
                <p className="text-muted-foreground">
                  Not necessarily. Muscle growth occurs across a range of rep ranges (6-30 reps). The key is training close to failure and applying progressive overload. Beginners should focus on form first, then gradually increase weight.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">How much protein do I need to build muscle?</h3>
                <p className="text-muted-foreground">
                  Aim for 0.7-1 gram of protein per pound of body weight daily. For a 150-pound person, that's 105-150 grams of protein per day. Spread intake across 3-5 meals for optimal muscle protein synthesis.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">Can I build muscle at home without a gym?</h3>
                <p className="text-muted-foreground">
                  Yes, but it requires creativity. Bodyweight exercises like push-ups, squats, and pull-ups can build muscle, especially for beginners. As you get stronger, you'll need to add resistance through bands, weights, or harder exercise variations.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">How many days a week should I train as a beginner?</h3>
                <p className="text-muted-foreground">
                  3 days per week is ideal for beginners. A full-body routine 3x weekly allows adequate recovery while providing enough stimulus for growth. Rest at least one day between workouts.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
</main>
  );
}
