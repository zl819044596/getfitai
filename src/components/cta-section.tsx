import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your fitness?
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          Join thousands of people who have already achieved their fitness goals with GetFitAI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Started Free
            <ChevronRight className="w-6 h-6 ml-2" />
          </button>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            About Us
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          No credit card required. No sign-up needed.
        </p>
      </div>
    </section>
  );
}
