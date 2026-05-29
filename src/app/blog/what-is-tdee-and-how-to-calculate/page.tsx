import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is TDEE and How to Calculate It? | GetFitAI",
  description:
    "Learn what TDEE (Total Daily Energy Expenditure) means, how to calculate it, and why it matters for your fitness goals. Free calculator included.",
  alternates: {
    canonical: "https://getfitai.io/blog/what-is-tdee-and-how-to-calculate",
  },
  openGraph: {
    url: "https://getfitai.io/blog/what-is-tdee-and-how-to-calculate",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-sm font-medium rounded-full mb-4">
            Nutrition
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Is TDEE and How to Calculate It?
          </h1>
          <p className="text-slate-400 text-lg">
            Understanding your Total Daily Energy Expenditure is the foundation of any nutrition plan.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            TDEE stands for <strong>Total Daily Energy Expenditure</strong>. It represents 
            the total number of calories your body burns in a day. Knowing your TDEE is 
            essential for managing your weight — whether you want to lose fat, build muscle, 
            or maintain your current physique.
          </p>

          <h2>What Makes Up TDEE?</h2>
          <p>TDEE consists of four components:</p>
          <ol>
            <li>
              <strong>BMR (Basal Metabolic Rate)</strong> — Calories burned at complete rest, 
              accounting for 60-75% of TDEE. This keeps your organs functioning.
            </li>
            <li>
              <strong>TEF (Thermic Effect of Food)</strong> — Calories burned digesting food, 
              about 10% of TDEE. Protein has the highest thermic effect.
            </li>
            <li>
              <strong>NEAT (Non-Exercise Activity Thermogenesis)</strong> — Calories burned 
              through daily movement like walking, fidgeting, and standing. Highly variable.
            </li>
            <li>
              <strong>EAT (Exercise Activity Thermogenesis)</strong> — Calories burned during 
              deliberate exercise. Usually the smallest component.
            </li>
          </ol>

          <h2>How to Calculate TDEE</h2>
          <p>There are two main methods:</p>

          <h3>Method 1: The Mifflin-St Jeor Equation</h3>
          <p>
            <strong>For men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
          </p>
          <p>
            <strong>For women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
          </p>
          <p>Then multiply by an activity factor:</p>
          <ul>
            <li>Sedentary (desk job): × 1.2</li>
            <li>Light activity (1-2 days/week): × 1.375</li>
            <li>Moderate activity (3-5 days/week): × 1.55</li>
            <li>Active (6-7 days/week): × 1.725</li>
            <li>Very active (physical job): × 1.9</li>
          </ul>

          <h3>Method 2: Use Our Free Calculator</h3>
          <p>
            The easiest way is to use our{" "}
            <a href="/tools/calorie-calculator" className="text-orange-400 hover:underline">
              free Calorie Calculator
            </a>
            . It handles all the math for you.
          </p>

          <h2>How to Use TDEE for Your Goals</h2>
          <table>
            <thead>
              <tr>
                <th>Goal</th>
                <th>Calorie Adjustment</th>
                <th>Expected Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lose fat</td>
                <td>TDEE - 500 calories</td>
                <td>~0.5 kg / 1 lb per week</td>
              </tr>
              <tr>
                <td>Maintain</td>
                <td>Eat at TDEE</td>
                <td>No change</td>
              </tr>
              <tr>
                <td>Build muscle</td>
                <td>TDEE + 200-300 calories</td>
                <td>~0.25 kg / 0.5 lb per week</td>
              </tr>
            </tbody>
          </table>

          <h2>Common TDEE Mistakes</h2>
          <ul>
            <li><strong>Overestimating activity</strong> — Most people overestimate by 20-30%</li>
            <li><strong>Not recalculating</strong> — Recalculate every 5-10 kg of weight change</li>
            <li><strong>Ignoring NEAT changes</strong> — Your daily movement varies day to day</li>
            <li><strong>Being too aggressive</strong> — Extreme deficits lead to muscle loss</li>
          </ul>

          <h2>Calculate Your TDEE Now</h2>
          <p>
            Use our{" "}
            <a href="/tools/tdee-calculator" className="text-orange-400 hover:underline">
              TDEE Calculator
            </a>
            {" "}or{" "}
            <a href="/tools/calorie-calculator" className="text-orange-400 hover:underline">
              Calorie Calculator
            </a>
            {" "}to get your personalized numbers in seconds.
          </p>
        </div>
      </article>
    </main>
  );
}
