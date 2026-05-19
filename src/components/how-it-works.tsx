import { Dumbbell, Zap, TrendingUp } from "lucide-react";

const steps = [
  { step: "01", title: "Tell us about you", description: "Share your fitness goal, experience level, and what equipment you have access to.", icon: <Dumbbell className="w-6 h-6" /> },
  { step: "02", title: "AI generates your plan", description: "Our advanced AI creates a personalized workout plan optimized for your specific situation.", icon: <Zap className="w-6 h-6" /> },
  { step: "03", title: "Start training", description: "Follow your plan, track your progress, and watch your fitness improve week by week.", icon: <TrendingUp className="w-6 h-6" /> },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto">
            Three steps to your perfect workout
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="relative group">
              <div className="bg-gray-50 rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="text-sm font-medium text-gray-300 mb-4">Step {item.step}</div>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-black mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
