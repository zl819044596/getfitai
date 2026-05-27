"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is GetFitAI really free?",
    answer: "Yes, completely free! All features including the AI workout plan generator and fitness calculators are free to use, with no hidden fees and no account registration required.",
  },
  {
    question: "How accurate is the BMI calculator?",
    answer: "Our BMI calculator uses the World Health Organization (WHO) standard formula. While BMI is a great health reference indicator, it cannot distinguish between muscle and fat. We recommend using it alongside our body fat calculator for a more comprehensive understanding.",
  },
  {
    question: "Can AI workout plans help me build muscle?",
    answer: "Absolutely! Our AI generates workout plans following progressive overload principles based on muscle gain goals. With appropriate training volume, intensity, and recovery time to maximize muscle growth.",
  },
  {
    question: "What is the difference between TDEE and BMR?",
    answer: "BMR (Basal Metabolic Rate) is the minimum calories your body needs at complete rest. TDEE (Total Daily Energy Expenditure) includes BMR plus calories burned through daily activities and exercise, making it more practical for diet planning.",
  },
  {
    question: "Do I need gym equipment?",
    answer: "Not at all! GetFitAI can generate workout plans for any situation: full gym, dumbbells only, or completely bodyweight. Just tell us what you have and we will customize accordingly.",
  },
  {
    question: "How often should I measure body fat?",
    answer: "We recommend measuring body fat every 4-6 weeks. Measuring too frequently may cause confusion due to daily fluctuations. Keeping consistent measurement conditions (morning, fasted) provides more accurate trend tracking.",
  },
  {
    question: "What is GetFitAI?",
    answer: "GetFitAI is a free AI workout plan generator that creates personalized fitness training programs based on your goals, schedule, and available equipment. It uses machine learning to adapt your plan as you progress.",
  },
  {
    question: "How is an AI workout plan different from a regular plan?",
    answer: "A regular plan is static — the same exercises, sets, and reps for everyone. An AI workout plan from GetFitAI is dynamic: it considers your fitness level, equipment, time constraints, and adapts based on your actual training performance.",
  },
  {
    question: "Can I use GetFitAI for home workouts?",
    answer: "Absolutely. GetFitAI generates workout plans for home gyms, commercial gyms, and even hotel fitness centers. Just select your available equipment during setup.",
  },
  {
    question: "What types of fitness goals does GetFitAI support?",
    answer: "GetFitAI supports muscle building, fat loss, strength training, endurance improvement, and general fitness. Each goal triggers a different AI training algorithm optimized for that outcome.",
  },
  {
    question: "How often should I follow my GetFitAI workout plan?",
    answer: "Most users train 3-5 times per week depending on their plan and recovery capacity. GetFitAI schedules rest days strategically to maximize muscle growth and prevent overtraining.",
  },
  {
    question: "Does GetFitAI work for beginners?",
    answer: "Yes. GetFitAI has a dedicated beginner mode that introduces fundamental exercises with proper form guidance and manageable training volume. The AI gradually increases intensity as your fitness improves.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-400 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-5 text-left hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/5 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-500 shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
