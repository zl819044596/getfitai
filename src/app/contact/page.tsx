"use client";

import { Mail, Clock } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

export default function ContactPage() {
  const breadcrumb = breadcrumbList([
    { name: "Home", url: "https://www.getfitai.io/" },
    { name: "Contact", url: "https://www.getfitai.io/contact/" },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const subject = encodeURIComponent(`GetFitAI contact from ${name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:zl18672545321@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            <div className="bg-muted rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground text-sm">zl18672545321@gmail.com</p>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Response Time</h3>
                <p className="text-muted-foreground text-sm">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                name="message"
                placeholder="How can we help?"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 text-base font-semibold rounded-full bg-primary hover:bg-neutral-800 text-primary-foreground transition-all duration-300 shadow-lg shadow-black/10"
            >
              Send via Email
            </button>
          </form>
        </div>
      </section>
</main>
  );
}
