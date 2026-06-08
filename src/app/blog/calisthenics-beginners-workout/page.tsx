import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Calisthenics for Beginners: The Complete Bodyweight Workout Guide | GetFitAI",
  description:
    "Start calisthenics with zero equipment. Learn basic bodyweight exercises, beginner routines, and progression tips to build strength at home.",
  keywords: [
    "calisthenics for beginners",
    "bodyweight workout for beginners",
    "calisthenics workout plan",
    "beginner calisthenics routine",
    "no equipment workout",
    "home bodyweight exercises",
    "calisthenics progression",
    "bodyweight strength training",
    "calisthenics basics",
    "start calisthenics at home",
  ],
  alternates: {
    canonical: "https://www.getfitai.io/blog/calisthenics-beginners-workout/",
  },
  openGraph: {
    title: "Calisthenics for Beginners: The Complete Bodyweight Workout Guide | GetFitAI",
    description:
      "Start calisthenics with zero equipment. Learn basic bodyweight exercises, beginner routines, and progression tips to build strength at home.",
    url: "https://www.getfitai.io/blog/calisthenics-beginners-workout/",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Calisthenics for Beginners - Bodyweight Workout Guide",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.getfitai.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.getfitai.io/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Calisthenics for Beginners",
      item: "https://www.getfitai.io/blog/calisthenics-beginners-workout",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Calisthenics for Beginners: The Complete Bodyweight Workout Guide",
  description:
    "Start calisthenics with zero equipment. Learn basic bodyweight exercises, beginner routines, and progression tips to build strength at home.",
  image: "https://www.getfitai.io/og-image.webp",
  author: {
    "@type": "Organization",
    name: "GetFitAI",
    url: "https://www.getfitai.io",
  },
  publisher: {
    "@type": "Organization",
    name: "GetFitAI",
    logo: {
      "@type": "ImageObject",
      url: "https://www.getfitai.io/logo.png",
    },
  },
  datePublished: "2026-06-08",
  dateModified: "2026-06-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.getfitai.io/blog/calisthenics-beginners-workout",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I build muscle with just calisthenics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. Calisthenics builds functional muscle and strength, especially for beginners. Bodyweight exercises like push-ups, pull-ups, and squats effectively stimulate muscle growth. As you progress, you can increase difficulty through harder variations, added reps, or weighted vests to continue building muscle.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a beginner do calisthenics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beginners should start with 3 sessions per week, resting at least one day between workouts. A full-body routine performed Monday, Wednesday, Friday works well. This schedule provides enough recovery while building consistency and allowing your body to adapt to the new demands.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need any equipment to start calisthenics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you can start calisthenics with zero equipment using just your bodyweight. Exercises like squats, lunges, push-ups, and plank require no gear. As you progress, a pull-up bar and parallel bars (or sturdy chairs) open up more advanced exercises. For most beginners, your own body is all you need for the first 3-6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Is calisthenics better than weightlifting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither is inherently better — they're different tools. Calisthenics builds functional strength, body control, and is more accessible (no gym required). Weightlifting allows easier progressive overload with smaller increments. Many athletes combine both for best results. For beginners, calisthenics is an excellent and cost-free starting point.",
      },
    },
    {
      "@type": "Question",
      name: "How long until I see results from calisthenics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most beginners notice improved strength and muscle definition within 4-8 weeks of consistent training. Visible muscle growth typically appears around 8-12 weeks. The first improvements are usually in push-ups (more reps), squats (better depth and balance), and plank (longer hold times). Patience and consistency are key.",
      },
    },
  ],
};

export default function CalisthenicsBeginnersPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <article className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full">
                Bodyweight Training
              </span>
              <span className="text-sm text-slate-500">June 8, 2026</span>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img
                src="/images/workout-1.webp"
                alt="Person doing a calisthenics push-up workout outdoors"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Calisthenics for Beginners: The Complete Bodyweight Workout Guide
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Want to get fit without a gym membership or expensive equipment? Calisthenics is your answer. Learn the essential exercises, follow a proven beginner routine, and progress at your own pace — all from home with zero equipment.
            </p>
          </header>

          {/* CTA Box */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-lg font-bold text-white mb-2">
              Want a Personalized Calisthenics Plan?
            </h3>
            <p className="text-slate-400 mb-4">
              Get a custom bodyweight workout plan tailored to your fitness level, goals, and available space. Powered by AI.
            </p>
            <Link
              href="/workouts/home"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Generate My Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>What Is Calisthenics and Why Should You Start?</h2>
            <p>
              Calisthenics is a form of strength training that uses your own bodyweight as resistance. Think push-ups, squats, pull-ups, lunges, and planks — movements humans have used for centuries to build strength and fitness. Unlike gym workouts, <strong>calisthenics for beginners</strong> requires absolutely no equipment, no membership fees, and no commute. You can do it in your living room, a park, or a hotel room.
            </p>
            <p>
              The beauty of calisthenics lies in its scalability. A push-up can be made easier (knee push-ups) or harder (archer push-ups, one-arm push-ups) depending on your level. This means <strong>calisthenics grows with you</strong>. As a beginner, you start with basic movements and gradually progress to more advanced variations — no weight increments needed.
            </p>
            <p>
              Beyond convenience, calisthenics builds functional strength that translates directly to real-world movements. It improves your body awareness, balance, flexibility, and coordination in ways that machine-based gym training often doesn&apos;t. And research shows that bodyweight training can be just as effective as weight training for building muscle and strength in beginners.
            </p>

            <h2>The 6 Foundational Calisthenics Exercises</h2>
            <p>
              These six exercises form the core of any effective <strong>beginner calisthenics routine</strong>. Master these before attempting advanced movements like handstands or muscle-ups.
            </p>

            <h3>1. Squat</h3>
            <p>
              <strong>Target muscles:</strong> Quadriceps, hamstrings, glutes, core
            </p>
            <p>
              The bodyweight squat is the foundation of lower body strength. Stand with feet shoulder-width apart, lower your hips as if sitting in a chair, keeping your chest up and knees tracking over your toes. Go as low as you can while keeping your heels on the ground.
            </p>
            <p>
              <strong>Beginner goal:</strong> 3 sets of 15-20 reps
            </p>

            <h3>2. Push-Up</h3>
            <p>
              <strong>Target muscles:</strong> Chest, shoulders, triceps, core
            </p>
            <p>
              The push-up is the ultimate upper body pushing exercise. Start in a plank position with hands slightly wider than shoulder-width. Lower your chest to the ground, keeping your body in a straight line from head to heels, then push back up.
            </p>
            <p>
              <strong>Beginner goal:</strong> 3 sets of 8-12 reps (use knee push-ups if needed)
            </p>

            <h3>3. Glute Bridge</h3>
            <p>
              <strong>Target muscles:</strong> Glutes, hamstrings, lower back
            </p>
            <p>
              Lie on your back with knees bent and feet flat on the floor. Drive your hips upward, squeezing your glutes at the top. This exercise is crucial for building hip strength and counteracting the effects of prolonged sitting.
            </p>
            <p>
              <strong>Beginner goal:</strong> 3 sets of 15-20 reps
            </p>

            <h3>4. Plank</h3>
            <p>
              <strong>Target muscles:</strong> Core, shoulders, lower back
            </p>
            <p>
              The plank builds isometric core strength. Hold your body in a straight line on your forearms and toes, engaging your core and glutes. Don&apos;t let your hips sag or pike up.
            </p>
            <p>
              <strong>Beginner goal:</strong> 3 sets of 30-45 second holds
            </p>

            <h3>5. Lunges</h3>
            <p>
              <strong>Target muscles:</strong> Quadriceps, glutes, hamstrings, calves
            </p>
            <p>
              Step forward with one leg, lowering your hips until both knees are bent at about 90 degrees. Your front knee should be above your ankle, and your back knee should hover just above the ground. Alternate legs.
            </p>
            <p>
              <strong>Beginner goal:</strong> 3 sets of 10-12 reps per leg
            </p>

            <h3>6. Bird Dog</h3>
            <p>
              <strong>Target muscles:</strong> Core, lower back, glutes, shoulders
            </p>
            <p>
              Start on all fours. Simultaneously extend your right arm forward and left leg backward, keeping your hips and shoulders square. Hold briefly, then return to start and switch sides. This builds core stability and coordination.
            </p>
            <p>
              <strong>Beginner goal:</strong> 3 sets of 8-10 reps per side
            </p>

            <h2>Sample Beginner Calisthenics Routine</h2>
            <p>
              Perform this full-body routine <strong>3 times per week</strong> (e.g., Monday, Wednesday, Friday). Rest at least one day between sessions. Each workout takes about 30-40 minutes.
            </p>

            <h3>Workout A</h3>
            <ul>
              <li>Squats: 3 sets × 15-20 reps</li>
              <li>Push-ups: 3 sets × 8-12 reps (knee push-ups if needed)</li>
              <li>Glute Bridge: 3 sets × 15-20 reps</li>
              <li>Plank: 3 sets × 30-45 seconds</li>
            </ul>

            <h3>Workout B</h3>
            <ul>
              <li>Lunges: 3 sets × 10-12 reps per leg</li>
              <li>Incline Push-ups (hands on a table or chair): 3 sets × 12-15 reps</li>
              <li>Bird Dog: 3 sets × 8-10 reps per side</li>
              <li>Side Plank: 3 sets × 20-30 seconds per side</li>
            </ul>

            <h3>Important Notes</h3>
            <ul>
              <li><strong>Warm-up:</strong> 5 minutes of light jogging in place + arm circles + leg swings</li>
              <li><strong>Rest between sets:</strong> 60-90 seconds</li>
              <li><strong>Progression:</strong> When you hit the top of the rep range for all sets, move to a harder variation</li>
              <li><strong>Cool-down:</strong> 5 minutes of static stretching for the muscles you worked</li>
            </ul>

            <h2>How to Progress in Calisthenics</h2>
            <p>
              The key to long-term success with <strong>calisthenics for beginners</strong> is progressive overload — just like with weights, you need to increase demand on your muscles over time. Here&apos;s how to do it without adding weight:
            </p>

            <h3>Increase Reps</h3>
            <p>
              The simplest method. If you can do 12 push-ups, aim for 13 next week. Keep adding reps until you can comfortably do 20-25, then move to a harder variation.
            </p>

            <h3>Harder Variations</h3>
            <p>
              Once basic exercises become easy, progress to more challenging versions:
            </p>
            <ul>
              <li><strong>Push-ups:</strong> Knee → Standard → Wide → Diamond → Decline → Archer → One-arm</li>
              <li><strong>Squats:</strong> Bodyweight → Pulse squats → Bulgarian split squats → Pistol squats (assisted)</li>
              <li><strong>Plank:</strong> Standard → Extended arm → Leg raise → Side plank → Plank with taps</li>
            </ul>

            <h3>Slow Down the Tempo</h3>
            <p>
              Slowing down the eccentric (lowering) phase of each exercise increases time under tension, making even basic movements challenging. Try 3-4 second lowers on push-ups and squats.
            </p>

            <h3>Add Volume Gradually</h3>
            <p>
              Add one extra set per exercise or increase total workout frequency from 3 to 4 days per week. Listen to your body — add volume only when you recover fully between sessions.
            </p>

            <h2>Common Calisthenics Mistakes to Avoid</h2>

            <h3>Sacrificing Form for Reps</h3>
            <p>
              Quality beats quantity every time. A perfect push-up with full range of motion is far more effective than 20 sloppy half-reps. If you can&apos;t maintain good form, regress to an easier variation.
            </p>

            <h3>Skipping Leg Work</h3>
            <p>
              Many calisthenics enthusiasts focus heavily on upper body (push-ups, pull-ups) while neglecting legs. Squats, lunges, and glute bridges are essential for balanced strength and preventing muscle imbalances.
            </p>

            <h3>Not Resting Enough</h3>
            <p>
              Calisthenics is still strength training. Rest 60-90 seconds between sets. Rushing through your workout reduces intensity and compromises your form on later sets.
            </p>

            <h3>Ignoring Core Work</h3>
            <p>
              A strong core stabilizes every calisthenics movement. Don&apos;t skip plank and bird dog exercises — they directly improve your performance on all other exercises.
            </p>

            <h2>Nutrition Tips for Calisthenics Success</h2>
            <p>
              Your body needs fuel to build strength and recover from workouts. Here&apos;s what to focus on:
            </p>

            <h3>Protein for Muscle Repair</h3>
            <p>
              Aim for 0.7-1 gram of protein per pound of bodyweight daily. Good sources: eggs, chicken, Greek yogurt, tofu, lentils, and protein shakes. Protein provides the amino acids your muscles need to repair and grow stronger.
            </p>

            <h3>Carbohydrates for Energy</h3>
            <p>
              Carbs fuel your workouts. Include rice, oats, potatoes, fruits, and vegetables in your diet. If you&apos;re training for muscle growth, eat slightly more than your maintenance calories.
            </p>

            <h3>Hydration</h3>
            <p>
              Drink water throughout the day. Dehydration reduces performance and recovery. Aim for at least 8-10 glasses daily, more on training days.
            </p>

            <h2>Conclusion</h2>
            <p>
              <strong>Calisthenics for beginners</strong> is the most accessible, practical, and effective way to start your fitness journey. No gym, no equipment, no excuses. With just your bodyweight and the six foundational exercises in this guide, you can build genuine strength, improve your physique, and develop the discipline that carries into every other area of your life.
            </p>
            <p>
              Start with the basic routine, focus on perfect form, and progress when your body tells you it&apos;s ready. Consistency is everything — a 30-minute calisthenics workout done consistently will transform your body faster than a perfect plan you follow sporadically.
            </p>
            <p>
              Ready to take it further? <strong>Generate a personalized calisthenics plan with GetFitAI&apos;s AI workout generator</strong> — tailored to your current fitness level, goals, and available space. Your bodyweight is all the weight you need.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white/90">AI-Powered</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Get Your Personalized
                <br className="hidden md:block" />
                Calisthenics Training Plan
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto text-base md:text-lg">
                Our AI creates a custom bodyweight workout plan based on your fitness level, goals, and available space. Start your calisthenics journey today.
              </p>
              <Link
                href="/tools/workout-generator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl"
              >
                Generate Free Plan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
