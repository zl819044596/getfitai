import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GetFitAI - Free AI Workout Generator & Fitness Tools | Personalized Plans",
  description:
    "GetFitAI: Free AI-powered workout generator and fitness calculators. Create personalized training plans for muscle building, fat loss, and strength. No signup required. Try our BMI, TDEE, body fat, and 1RM calculators.",
  keywords: [
    "AI workout generator",
    "free workout planner",
    "personalized fitness plan",
    "BMI calculator",
    "TDEE calculator",
    "body fat calculator",
    "1RM calculator",
    "workout plan generator",
    "fitness AI tools",
    "free training plans",
    "beginner gym plan",
    "get fit workout plan",
    "home vs gym workout",
    "build muscle fast",
    "lose belly fat",
  ],
  openGraph: {
    title: "GetFitAI - Free AI Workout Generator & Fitness Tools",
    description:
      "Create personalized AI workout plans and use free fitness calculators. No signup required.",
    url: "https://getfitai.io",
    siteName: "GetFitAI",
    type: "website",
    images: [
      {
        url: "https://getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetFitAI - Free AI Workout Generator & Fitness Tools",
    description:
      "Create personalized AI workout plans and use free fitness calculators. No signup required.",
  },
  verification: {
    google: "G-MFH7XYRCCT",
  },
  alternates: {
    canonical: null,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GetFitAI",
              url: "https://getfitai.io",
              description: "Free AI-powered workout generator and fitness calculators",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://getfitai.io/tools?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GetFitAI",
              url: "https://getfitai.io",
              logo: "https://getfitai.io/logo.png",
              sameAs: [
                "https://twitter.com/getfitai",
                "https://github.com/getfitai",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${outfit.variable} antialiased`}>
        <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}
