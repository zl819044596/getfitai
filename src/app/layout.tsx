import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import { GoogleAdSense } from "@/components/google-adsense";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "GetFitAI — AI Workout Generator",
    template: "%s | GetFitAI",
  },
  description: "Generate personalized workout plans with AI. Tailored to your goals, experience, and equipment. No signup required. Free BMI, TDEE, and 1RM calculators included.",
  keywords: ["AI workout generator", "fitness planner", "personalized workout", "gym workout", "home workout"],
  authors: [{ name: "GetFitAI" }],
  creator: "GetFitAI",
  publisher: "GetFitAI",
  robots: "index, follow",
  alternates: {
    canonical: "https://getfitai.io",
  },
  openGraph: {
    title: "GetFitAI — AI Workout Generator",
    description: "Generate personalized workout plans in seconds. No sign-up required.",
    url: "https://getfitai.io",
    siteName: "GetFitAI",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://getfitai.io/images/og-default.png",
      width: 1200,
      height: 630,
      alt: "GetFitAI - AI Workout Generator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetFitAI — AI Workout Generator",
    description: "Generate personalized workout plans in seconds. No sign-up required.",
    creator: "@getfitai",
    images: ["https://getfitai.io/images/og-default.png"],
  },
  verification: {
    google: "32QcaLR9reDN-2_rpqpyzjjD-jiH1AsPu3oINwFD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleAnalytics />
        <GoogleAdSense />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
