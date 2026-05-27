import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
  description:
    "GetFitAI: Free AI-powered workout plans and fitness calculators including BMI, TDEE, body fat, and 1RM. No signup required. Build muscle, lose fat, and get stronger with personalized training plans.",
  keywords: [
    "AI workout planner",
    "free fitness tools",
    "BMI calculator",
    "TDEE calculator",
    "body fat calculator",
    "1RM calculator",
    "workout plan generator",
    "fitness AI",
    "personalized training",
    "free workout plans",
  ],
  openGraph: {
    title: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
    description:
      "Free AI-powered workout plans and fitness calculators. No signup required.",
    url: "https://getfitai.io",
    siteName: "GetFitAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
    description:
      "Free AI-powered workout plans and fitness calculators. No signup required.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MFH7XYRCCT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MFH7XYRCCT');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}
