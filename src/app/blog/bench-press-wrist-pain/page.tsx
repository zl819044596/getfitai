import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Fix Wrist Pain During Bench Press | GetFitAI",
  description:
    "Common causes and proven solutions for wrist discomfort during pressing movements. Fix your bench press form and eliminate wrist pain today.",
  keywords: [
    "bench press wrist pain",
    "wrist pain lifting",
    "bench press form",
    "wrist wraps",
    "pressing pain",
  ],
  alternates: {
    canonical: "https://getfitai.io/blog/bench-press-wrist-pain",
  },
  openGraph: {
    title: "How to Fix Wrist Pain During Bench Press | GetFitAI",
    url: "https://getfitai.io/blog/bench-press-wrist-pain",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Fix Wrist Pain During Bench Press",
  author: { "@type": "Organization", name: "GetFitAI", url: "https://getfitai.io" },
  publisher: { "@type": "Organization", name: "GetFitAI" },
  datePublished: "2025-05-15",
  dateModified: "2025-05-15",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
<JsonLd data={articleSchema} />
      <article className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">Injury Prevention</span>
              <span className="text-sm text-gray-400">May 15, 2025</span>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80"
                alt="Bench press barbell close up"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              How to Fix Wrist Pain During Bench Press
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Wrist pain during bench press is one of the most common complaints among lifters. Here's how to identify the cause and fix it for good.
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-600 prose-strong:text-black prose-li:text-gray-600">
            <h2>Why Your Wrists Hurt During Bench Press</h2>
            <p>
              Wrist pain during bench press usually comes down to one of three things: <strong>bad bar position</strong>, <strong>excessive wrist extension</strong>, or <strong>overloading before your wrists are ready</strong>. Your wrists are not designed to bear heavy loads while bent backward. When the bar sits too high in your palm or your wrists cock back under the weight, the small bones and tendons get compressed.
            </p>
            <p>
              Other contributing factors include weak forearm muscles, previous injuries, and anatomical differences in wrist structure. Some people simply have less wrist mobility and need to adjust their technique accordingly.
            </p>

            <h2>Fix 1: Bar Position in Your Palm</h2>
            <p>
              The bar should sit in the <strong>heel of your palm</strong>, directly over your forearm bones—not high up near your fingers. When the bar is too high, your wrist has to extend backward to keep it from rolling, creating a lever arm that crushes your wrist joint.
            </p>
            <p>
              Before you unrack, look at your wrists from the side. They should be relatively straight, with the bar stacked over your forearm. If your knuckles are pointing toward the ceiling while your palms face forward, the bar is too high.
            </p>

            <h2>Fix 2: Reduce Wrist Extension</h2>
            <p>
              A slight backward bend (10-15 degrees) is normal and acceptable. But if your wrists are bent back 30+ degrees under load, you're asking for pain. Focus on keeping your wrist as neutral as possible.
            </p>
            <p>
              Cue yourself to <strong>"punch the ceiling"</strong> with your knuckles. This engages your forearm muscles and stabilizes the wrist. You can also think about twisting the bar outward (without actually moving your hands) to create torque and rigidity.
            </p>

            <h2>Fix 3: Use Wrist Wraps</h2>
            <p>
              Wrist wraps provide external support and limit how far your wrist can extend. They're not a crutch—they're a tool. Use them on heavy sets (80%+ of your max) or when your wrists feel fatigued.
            </p>
            <p>
              Wrap them snugly but not so tight that your hands go numb. The wrap should cover the wrist joint and extend slightly onto the forearm and hand. Elastic wraps offer more support; cloth wraps are more comfortable for lighter work.
            </p>

            <h2>Fix 4: Strengthen Your Forearms</h2>
            <p>
              Weak wrist extensors and flexors can't stabilize the joint under heavy loads. Add these exercises to your routine 2-3 times per week:
            </p>
            <ul>
              <li><strong>Wrist curls:</strong> 3 sets of 15-20 reps with a light dumbbell</li>
              <li><strong>Reverse wrist curls:</strong> 3 sets of 15-20 reps (targets extensors)</li>
              <li><strong>Farmer's carries:</strong> 3 sets of 30-40 meters with heavy dumbbells</li>
              <li><strong>Plate pinches:</strong> Hold two weight plates together for time</li>
            </ul>

            <h2>Fix 5: Check Your Grip Width</h2>
            <p>
              A grip that's too wide forces your wrists to bend back more to keep the bar stable. A grip that's too narrow puts excessive pressure on the wrist joint during the press. For most people, <strong>1.5x shoulder width</strong> is the sweet spot.
            </p>
            <p>
              Experiment with small adjustments (half-inch at a time) and notice how your wrists feel. Film yourself from the side to check wrist angle at different grip widths.
            </p>

            <h2>When to See a Doctor</h2>
            <p>
              If wrist pain persists after fixing your form and using wraps for 2-3 weeks, consult a sports medicine professional. You may have an underlying condition like:
            </p>
            <ul>
              <li>Carpal tunnel syndrome</li>
              <li>TFCC tear (triangular fibrocartilage complex)</li>
              <li>Wrist impingement</li>
              <li>Stress fracture</li>
            </ul>
            <p>
              Don't train through sharp or worsening pain. A week off now is better than months off later.
            </p>

            <h2>Quick Summary</h2>
            <ul>
              <li>Bar goes in the heel of your palm, not near your fingers</li>
              <li>Keep wrist extension under 15 degrees</li>
              <li>Use wrist wraps for heavy sets</li>
              <li>Strengthen forearms 2-3x per week</li>
              <li>Adjust grip width if needed</li>
              <li>See a doctor if pain persists beyond 2-3 weeks</li>
            </ul>
          </div>

          <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get a Personalized Strength Plan
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Fix your form and build strength safely with an AI-generated workout plan tailored to you.
            </p>
            <Link href="/workouts/gym" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors">
              Generate My Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
</main>
  );
}
