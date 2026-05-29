import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protein Intake Calculator: How Much Protein Do You Need? | GetFitAI",
  description:
    "Learn how much protein you need daily based on your weight, activity level, and fitness goals. Use our free protein calculator for personalized recommendations.",
  alternates: {
    canonical: "https://getfitai.io/blog/protein-intake-calculator-guide",
  },
  openGraph: {
    url: "https://getfitai.io/blog/protein-intake-calculator-guide",
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
            Protein Intake Calculator: How Much Protein Do You Need?
          </h1>
          <p className="text-slate-400 text-lg">
            The science-backed guide to calculating your optimal daily protein intake.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Protein is the building block of muscle. Whether you want to build muscle, 
            lose fat, or maintain your physique, getting enough protein is crucial. But 
            how much is enough? Let&apos;s break it down.
          </p>

          <h2>How Much Protein Do You Need?</h2>
          <p>Protein needs depend on several factors:</p>
          <ul>
            <li><strong>Body weight</strong> — Heavier people need more protein</li>
            <li><strong>Activity level</strong> — Active people need more than sedentary</li>
            <li><strong>Fitness goal</strong> — Muscle building requires the most protein</li>
            <li><strong>Age</strong> — Older adults need more to prevent muscle loss</li>
          </ul>

          <h2>Protein Intake Guidelines</h2>
          <table>
            <thead>
              <tr>
                <th>Goal / Activity</th>
                <th>Protein per kg</th>
                <th>Protein per lb</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sedentary adult</td>
                <td>0.8 g/kg</td>
                <td>0.36 g/lb</td>
              </tr>
              <tr>
                <td>General fitness</td>
                <td>1.2-1.4 g/kg</td>
                <td>0.55-0.65 g/lb</td>
              </tr>
              <tr>
                <td>Endurance athletes</td>
                <td>1.4-1.6 g/kg</td>
                <td>0.65-0.75 g/lb</td>
              </tr>
              <tr>
                <td>Strength training</td>
                <td>1.6-2.2 g/kg</td>
                <td>0.75-1.0 g/lb</td>
              </tr>
              <tr>
                <td>Building muscle</td>
                <td>1.8-2.4 g/kg</td>
                <td>0.8-1.1 g/lb</td>
              </tr>
              <tr>
                <td>Fat loss (maintaining muscle)</td>
                <td>2.0-2.4 g/kg</td>
                <td>0.9-1.1 g/lb</td>
              </tr>
            </tbody>
          </table>

          <h2>Example Calculations</h2>
          <p>For a 70 kg (154 lb) person:</p>
          <ul>
            <li><strong>Sedentary:</strong> 70 × 0.8 = <strong>56g protein/day</strong></li>
            <li><strong>General fitness:</strong> 70 × 1.3 = <strong>91g protein/day</strong></li>
            <li><strong>Building muscle:</strong> 70 × 2.0 = <strong>140g protein/day</strong></li>
            <li><strong>Fat loss:</strong> 70 × 2.2 = <strong>154g protein/day</strong></li>
          </ul>

          <h2>Best Protein Sources</h2>
          <h3>Animal Sources (Complete Proteins)</h3>
          <ul>
            <li>Chicken breast: 31g per 100g</li>
            <li>Salmon: 25g per 100g</li>
            <li>Eggs: 6g per large egg</li>
            <li>Greek yogurt: 10g per 100g</li>
            <li>Whey protein: 20-25g per scoop</li>
          </ul>

          <h3>Plant Sources</h3>
          <ul>
            <li>Tofu: 8g per 100g</li>
            <li>Lentils: 9g per 100g (cooked)</li>
            <li>Chickpeas: 9g per 100g (cooked)</li>
            <li>Quinoa: 4g per 100g (cooked)</li>
            <li>Pea protein powder: 20g per scoop</li>
          </ul>

          <h2>Protein Timing</h2>
          <p>
            While total daily intake matters most, spreading protein across meals 
            optimizes muscle protein synthesis:
          </p>
          <ul>
            <li>Aim for 20-40g protein per meal</li>
            <li>Include protein in every meal, not just dinner</li>
            <li>Post-workout protein within 2 hours helps recovery</li>
            <li>Casein protein before bed may help overnight recovery</li>
          </ul>

          <h2>Can You Eat Too Much Protein?</h2>
          <p>
            For healthy individuals, high protein intake (up to 3-4 g/kg) is generally 
            safe. However, extremely high intakes may cause:
          </p>
          <ul>
            <li>Digestive discomfort</li>
            <li>Reduced intake of other nutrients</li>
            <li>Increased kidney workload (only a concern for existing kidney disease)</li>
          </ul>

          <h2>Calculate Your Protein Needs</h2>
          <p>
            Use our{" "}
            <a href="/tools/protein-calculator" className="text-orange-400 hover:underline">
              free Protein Calculator
            </a>
            {" "}to get your personalized daily protein target based on your weight, 
            activity level, and goals.
          </p>
        </div>
      </article>
    </main>
  );
}
