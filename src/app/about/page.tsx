import type { Metadata } from "next";
import { Zap, Target, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | GetFitAI",
  description: "Learn about GetFitAI's mission to make personalized fitness accessible to everyone through AI-powered workout plans and free fitness calculators.",
  alternates: {
    canonical: "https://www.getfitai.io/about/",
  },
  openGraph: {
    url: "https://www.getfitai.io/about",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
<section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About GetFitAI
            </h1>
            <p className="text-lg text-muted-foreground">
              Making personalized fitness accessible to everyone through AI.
            </p>
          </div>

          <div className="prose prose-neutral max-w-none mb-16">
            <p className="text-muted-foreground mb-6">
              GetFitAI was built with a simple mission: remove the barriers between people and 
              effective workout plans. No expensive trainers, no confusing apps, no sign-ups — 
              just answer a few questions and get a personalized plan in seconds.
            </p>
            <p className="text-muted-foreground mb-6">
              Our AI analyzes your goals, experience level, available equipment, and any injuries 
              or limitations to create a workout plan that's tailored specifically to you. Every 
              plan includes warm-up, main exercises with sets/reps/rest, and cool-down.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-primary-foreground" />,
                title: "Instant Plans",
                desc: "Get a complete workout plan in under 30 seconds. No waiting, no forms.",
              },
              {
                icon: <Target className="w-6 h-6 text-primary-foreground" />,
                title: "Truly Personalized",
                desc: "AI adapts to your goals, experience, equipment, and even injuries.",
              },
              {
                icon: <Shield className="w-6 h-6 text-primary-foreground" />,
                title: "No Sign-up Required",
                desc: "We don't ask for your email unless you want the plan sent to you.",
              },
              {
                icon: <Users className="w-6 h-6 text-primary-foreground" />,
                title: "For Everyone",
                desc: "From complete beginners to advanced athletes, home or gym.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-muted rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
</main>
  );
}
