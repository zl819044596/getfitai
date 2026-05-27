"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "GetFitAI completely changed how I approach fitness. As someone who travels frequently, having a personalized hotel room workout plan is a game changer.",
    author: "James Chen",
    role: "Business Professional",
    avatar: "sarah-johnson",
    rating: 5,
  },
  {
    content: "I used to feel intimidated at the gym, but GetFitAI gave me a clear workout plan. In just 4 weeks, I saw noticeable results!",
    author: "Sarah Liu",
    role: "Fitness Beginner",
    avatar: "mike-chen",
    rating: 5,
  },
  {
    content: "The cross-training plan is excellent. It helped me build strength without compromising my running performance.",
    author: "David Wang",
    role: "Marathon Runner",
    avatar: "emma-davis",
    rating: 5,
  },
  {
    content: "I have tried dozens of workout apps and free fitness plans. GetFitAI is the first one that actually felt like it was built for me. My personalized training plan pushed me harder than I would have pushed myself.",
    author: "Sarah M.",
    role: "Home Gym User",
    avatar: "sarah-johnson",
    rating: 5,
  },
  {
    content: "As someone who travels for work, I needed a workout plan that works with hotel gyms and limited equipment. GetFitAI adapted my training perfectly. I have never been more consistent.",
    author: "James T.",
    role: "Business Traveler",
    avatar: "mike-chen",
    rating: 5,
  },
  {
    content: "The AI-generated workout plans are surprisingly smart. It knew when to increase weight and when to deload. I gained more muscle in 8 weeks than I did in 6 months following a generic plan.",
    author: "Mike R.",
    role: "Beginner to Intermediate",
    avatar: "emma-davis",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Loved by Fitness Enthusiasts Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 relative hover:shadow-xl hover:shadow-primary/5 transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={`/images/avatars/${testimonial.avatar}.jpg`}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
