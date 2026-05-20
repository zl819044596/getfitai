import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ToolsPreview() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/bmi-hero.webp"
              alt="Fitness Tools"
              width={500}
              height={350}
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
          <div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">Free Tools</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">More than just workouts</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Explore our collection of free fitness calculators and tools to help you track your progress and optimize your training.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Tools
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
