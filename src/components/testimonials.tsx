import { Star } from "lucide-react";

const items = [
  { name: "Sarah Johnson", role: "Busy Professional", content: "GetFitAI has been a game-changer for me. As someone who travels frequently, having personalized hotel room workouts is incredible.", rating: 5 },
  { name: "Mike Chen", role: "Fitness Beginner", content: "I was intimidated by the gym, but GetFitAI gave me a clear plan to follow. I've already seen results in just 4 weeks!", rating: 5 },
  { name: "Emma Davis", role: "Marathon Runner", content: "The cross-training plans are excellent. They've helped me build strength without compromising my running schedule.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto">
            Loved by fitness enthusiasts worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
