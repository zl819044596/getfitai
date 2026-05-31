"use client"

import Link from "next/link"
import { Zap, ArrowLeft, ChevronRight } from "lucide-react"
import { iconMap, type WorkoutConfig } from "@/lib/workout-configs"

export function WorkoutLanding({ config }: { config: WorkoutConfig }) {
  const BadgeIcon = iconMap[config.badgeIcon]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">GetFitAI</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-6">
              {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
              <span>{config.badgeText}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {config.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {config.description}
            </p>
          </div>

          {/* Benefits - Orange Icon Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {config.benefits.map((benefit, i) => {
              const BenefitIcon = iconMap[benefit.icon]
              return (
                <div key={i} className="flex items-center gap-2 bg-[#1e293b] rounded-full px-4 py-2">
                  <div className="text-orange-500">
                    {BenefitIcon && <BenefitIcon className="w-4 h-4" />}
                  </div>
                  <span className="font-medium text-sm text-white">{benefit.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA - Jump to Generator */}
      <section className="py-16 bg-[#0f172a] border-y border-orange-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">{config.generatorTitle}</h2>
          <p className="text-slate-400 mb-8 text-base">{config.generatorSubtitle}</p>
          <Link
            href="/#generator"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
          >
            {config.ctaButton}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Sample Exercises */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Popular Exercises
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {config.sampleExercises.map((exercise, i) => (
              <div key={i} className="flex items-center justify-between bg-muted rounded-xl p-4">
                <div>
                  <p className="font-medium text-foreground">{exercise.name}</p>
                  <p className="text-sm text-muted-foreground">{exercise.muscle}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground bg-background px-3 py-1 rounded-full">
                  {exercise.sets}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {config.faqs.map((faq, i) => (
              <div key={i} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Workouts */}
      <section className="py-16 bg-muted/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            More Workout Plans
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { type: "beginner", title: "Beginner Workout", desc: "Perfect for those just starting their fitness journey" },
              { type: "home", title: "Home Workout", desc: "No equipment needed, train in your living room" },
              { type: "gym", title: "Gym Workout", desc: "Maximize your gym time with structured plans" },
            ]
              .filter((w) => w.type !== config.type)
              .map((workout) => (
                <Link
                  key={workout.type}
                  href={`/workouts/${workout.type}`}
                  className="block bg-background rounded-xl p-6 border border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-semibold mb-2 text-foreground">{workout.title}</h3>
                  <p className="text-sm text-muted-foreground">{workout.desc}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0f172a] border-y border-orange-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-3xl font-bold mb-3 text-white">{config.ctaTitle}</h2>
          <p className="text-slate-400 mb-8 text-base">{config.ctaSubtitle}</p>
          <Link
            href="/#generator"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
          >
            {config.ctaButton}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}
