import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GetFitAI",
  description: "Read GetFitAI's privacy policy to understand how we collect, use, and protect your personal information when using our AI fitness tools.",
  alternates: {
    canonical: "https://getfitai.io/privacy",
  },
  openGraph: {
    url: "https://getfitai.io/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
<section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: May 20, 2025</p>
          </div>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect minimal information to provide our services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Workout preferences (goals, experience level, equipment available)</li>
              <li>Generated workout plans (stored locally in your browser)</li>
              <li>Email address (only if you choose to receive plans by email)</li>
              <li>Usage analytics (anonymous, via Vercel Analytics)</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use your information solely to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Generate personalized workout plans</li>
              <li>Send workout plans to your email (if requested)</li>
              <li>Improve our AI models and service quality</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Data Storage</h2>
            <p className="text-muted-foreground mb-6">
              Workout plans and preferences are stored locally in your browser using localStorage. 
              We do not store this data on our servers. Email addresses are only used to send 
              the requested plan and are not retained.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground mb-6">
              We use Vercel for hosting and analytics, and OpenRouter for AI plan generation. 
              These services may collect standard server logs and usage data according to their own privacy policies.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              We use minimal cookies for analytics purposes. You can disable cookies in your browser settings.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              You can clear all locally stored data by clearing your browser's localStorage for getfitai.io. 
              For any privacy concerns, contact us at hello@getfitai.io.
            </p>
          </div>
        </div>
      </section>
</main>
  );
}
