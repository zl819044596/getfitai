import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  description: "Generate personalized workout plans tailored to your goals, experience, and available equipment. No sign-up required. Free AI-powered fitness tool.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "GetFitAI — AI Workout Generator",
    description: "Generate personalized workout plans in seconds. No sign-up required.",
    creator: "@getfitai",
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
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
