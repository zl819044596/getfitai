import { Zap, Dumbbell, Clock, TrendingUp, Shield, Award } from "lucide-react";

const items = [
  { icon: <Zap className="w-6 h-6 text-red-500" />, title: "AI-Powered Plans", description: "Advanced algorithms create personalized workouts based on your unique profile." },
  { icon: <Dumbbell className="w-6 h-6 text-blue-500" />, title: "Equipment Flexibility", description: "Works with full gym, dumbbells only, or no equipment at all." },
  { icon: <Clock className="w-6 h-6 text-green-500" />, title: "Time Optimized", description: "Get effective workouts whether you have 15 minutes or 90 minutes." },
  { icon: <TrendingUp className="w-6 h-6 text-purple-500" />, title: "Progress Tracking", description: "Track completed workouts and monitor your improvement over time." },
  { icon: <Shield className="w-6 h-6 text-orange-500" />, title: "No Sign-up Required", description: "Start generating workouts immediately. No account needed." },
  { icon: <Award className="w-6 h-6 text-yellow-500" />, title: "Expert Designed", description: "All exercises are based on proven fitness principles and research." },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto">
            Everything you need to reach your fitness goals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-black mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
