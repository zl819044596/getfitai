import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Mail, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | GetFitAI",
  description: "Contact the GetFitAI team for questions, feedback, or partnership opportunities. We're here to help with your fitness journey.",
  alternates: {
    canonical: "https://getfitai.io/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-500">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-black">Email</h3>
                <p className="text-gray-500 text-sm">hello@getfitai.io</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-black">Response Time</h3>
                <p className="text-gray-500 text-sm">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Message</label>
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 text-base font-semibold rounded-full bg-black hover:bg-neutral-800 text-white transition-all duration-300 shadow-lg shadow-black/10"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
