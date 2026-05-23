import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Meal Prep for Muscle Gain | GetFitAI",
  description:
    "Simple meal prep strategies to support your hypertrophy goals. Save time, eat better, and build muscle with these practical tips.",
  keywords: [
    "meal prep muscle gain",
    "meal prep for bulking",
    "high protein meal prep",
    "muscle building meals",
    "meal prep ideas",
  ],
  alternates: {
    canonical: "https://getfitai.io/blog/meal-prep-muscle",
  },
  openGraph: {
    title: "How to Meal Prep for Muscle Gain | GetFitAI",
    url: "https://getfitai.io/blog/meal-prep-muscle",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Meal Prep for Muscle Gain",
  author: { "@type": "Organization", name: "GetFitAI", url: "https://getfitai.io" },
  publisher: { "@type": "Organization", name: "GetFitAI" },
  datePublished: "2025-04-28",
  dateModified: "2025-04-28",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <JsonLd data={articleSchema} />
      <article className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">Nutrition</span>
              <span className="text-sm text-gray-400">Apr 28, 2025</span>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
                alt="Meal prep containers with healthy food"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              How to Meal Prep for Muscle Gain
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Save time, eat better, and build muscle with these simple meal prep strategies designed for hypertrophy.
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-600 prose-strong:text-black prose-li:text-gray-600">
            <h2>Why Meal Prep Matters for Muscle Gain</h2>
            <p>
              Building muscle requires consistent nutrition. You need enough protein to repair tissue, enough carbs to fuel training, and enough calories to support growth. When you're scrambling for meals at the last minute, you default to whatever is convenient—and convenience rarely aligns with muscle-building goals.
            </p>
            <p>
              Meal prep removes decision fatigue. When your food is already cooked and portioned, you simply eat what's planned. This consistency is what separates those who make progress from those who spin their wheels.
            </p>

            <h2>The Muscle-Building Meal Formula</h2>
            <p>
              Every meal should include:
            </p>
            <ul>
              <li><strong>Protein:</strong> 30-40g per meal (palm-sized portion of meat, fish, eggs, or tofu)</li>
              <li><strong>Carbs:</strong> 1-2 cupped handfuls (rice, potatoes, oats, fruit)</li>
              <li><strong>Fats:</strong> 1 thumb-sized portion (olive oil, nuts, avocado, egg yolks)</li>
              <li><strong>Vegetables:</strong> 2 fist-sized portions (for micronutrients and fiber)</li>
            </ul>

            <h2>Step 1: Plan Your Menu</h2>
            <p>
              Pick 2-3 protein sources, 2-3 carb sources, and 2 fat sources for the week. Variety is nice, but simplicity scales. Most successful meal preppers rotate the same 4-6 meals.
            </p>
            <p>
              Example week:
            </p>
            <ul>
              <li><strong>Proteins:</strong> Chicken breast, ground beef, salmon, eggs</li>
              <li><strong>Carbs:</strong> White rice, sweet potatoes, oats</li>
              <li><strong>Fats:</strong> Olive oil, almonds, avocado</li>
              <li><strong>Veggies:</strong> Broccoli, spinach, bell peppers</li>
            </ul>

            <h2>Step 2: Shop Once, Cook Once</h2>
            <p>
              Go grocery shopping on Sunday. Buy everything you need for the week in one trip. Then spend 2-3 hours cooking and portioning.
            </p>
            <p>
              Batch cook your proteins in the oven or slow cooker. Roast vegetables on sheet pans. Cook a large pot of rice. While everything cooks, portion last week's meals into containers.
            </p>

            <h2>Step 3: Portion and Store</h2>
            <p>
              Invest in glass or BPA-free plastic containers. Portion each meal into individual containers so you can grab and go. Label containers with the date if you're prepping more than 3-4 days ahead.
            </p>
            <p>
              Most prepped meals last 4-5 days in the fridge. Freeze anything beyond that. Soups, stews, and cooked meats freeze well. Fresh vegetables and rice do not.
            </p>

            <h2>Sample Muscle-Building Meal Prep Day</h2>
            <p>
              Here's what a full day of eating looks like for a 180-pound man in a lean bulk:
            </p>
            <ul>
              <li><strong>Breakfast:</strong> 3 whole eggs + 3 egg whites, 1 cup oats with banana, 1 tbsp peanut butter (~700 cal, 40g protein)</li>
              <li><strong>Lunch:</strong> 6 oz chicken breast, 1.5 cups rice, 1 cup broccoli, 1 tbsp olive oil (~750 cal, 50g protein)</li>
              <li><strong>Snack:</strong> Greek yogurt with berries and almonds (~400 cal, 25g protein)</li>
              <li><strong>Dinner:</strong> 6 oz salmon, 1 cup sweet potato, mixed salad with avocado (~700 cal, 45g protein)</li>
              <li><strong>Pre-bed:</strong> Casein protein shake or cottage cheese (~200 cal, 25g protein)</li>
            </ul>
            <p>
              <strong>Total:</strong> ~2,750 calories, 185g protein
            </p>

            <h2>Meal Prep Hacks</h2>
            <ul>
              <li><strong>Use a slow cooker:</strong> Set it and forget it. Perfect for shredded chicken, beef stew, and chili.</li>
              <li><strong>Buy pre-cut vegetables:</strong> Worth the extra cost if it saves you from skipping veggies.</li>
              <li><strong>Cook extra dinner:</strong> Intentionally make 2-3 extra portions for tomorrow's lunch.</li>
              <li><strong>Keep sauces simple:</strong> Soy sauce, hot sauce, mustard, and salsa add flavor without significant calories.</li>
              <li><strong>Prep snacks too:</strong> Portion nuts, cut fruit, and prep protein shakes so you're never caught hungry.</li>
            </ul>

            <h2>Common Mistakes</h2>
            <ul>
              <li><strong>Not eating enough:</strong> If you're not gaining weight, you're not eating enough. Track for one week to find your true maintenance.</li>
              <li><strong>Too much variety:</strong> Complex meal plans fail. Simple, repeatable meals win.</li>
              <li><strong>Skipping vegetables:</strong> Micronutrients matter for recovery, energy, and health.</li>
              <li><strong>Prepping too far ahead:</strong> Food quality degrades after day 5. Prep twice a week if needed.</li>
            </ul>
          </div>

          <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get a Personalized Nutrition Plan
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              GetFitAI calculates your exact calorie and protein needs based on your body, goals, and activity level.
            </p>
            <Link href="/workouts/gym" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors">
              Generate My Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
