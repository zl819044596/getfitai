"use client";

import { Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const btn = form.querySelector("button[type=submit]") as HTMLButtonElement;
    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = "Sending...";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        btn.innerText = "Sent!";
        btn.classList.add("bg-green-500");
        form.reset();
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove("bg-green-500");
          btn.disabled = false;
        }, 3000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      btn.innerText = "Failed, try again";
      btn.disabled = false;
    }
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
                <p className="text-muted-foreground text-sm">hello (at) getfitai.io</p>
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
              Send Message
            </button>
          </form>
        </div>
      </section>
</main>
  );
}
