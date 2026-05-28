# GetFitAI

AI-powered fitness tools and workout plan generator. Built with Next.js 14 + DeepSeek API.

## 🚀 Live Site

**https://data-dun-six.vercel.app**

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: Radix UI + Base UI
- **AI**: DeepSeek API (deepseek-chat / deepseek-v4-flash / deepseek-v4-pro)
- **Deployment**: Vercel
- **Domain**: Cloudflare

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/
│   │   └── generate-plan/  # AI workout plan API
│   ├── tools/              # Fitness calculators
│   │   ├── bmi-calculator
│   │   ├── body-fat-calculator
│   │   ├── one-rep-max
│   │   ├── plate-calculator
│   │   ├── tdee-calculator
│   │   └── workout-timer
│   ├── workouts/           # Workout landing pages
│   │   ├── [type]/         # gym / home / beginner
│   ├── blog/               # SEO articles
│   ├── about/
│   ├── contact/
│   ├── privacy/
│   └── terms/
├── components/             # React components
│   ├── workout-generator.tsx
│   ├── ExerciseDetailPanel.tsx
│   ├── hero.tsx
│   └── ...
├── lib/                    # Utilities
│   ├── workout-configs.ts
│   └── exercise-images.ts
└── ...
```

## ✨ Features

- **AI Workout Generator** — Personalized plans based on goals, level, equipment
- **Exercise Detail Panel** — 4 view modes (Minimal / Steps / Keyframes / Muscles)
- **Dynamic Image Switching** — Click exercise to show demo image
- **Fitness Tools** — BMI, body fat, 1RM, plate calculator, TDEE, workout timer
- **SEO Optimized** — Blog articles, sitemap, structured data

## 🧠 AI Model Selection

| Scenario | Model |
|----------|-------|
| Default | `deepseek-v4-flash` |
| Injury / Pain / Surgery / Rehab | `deepseek-v4-pro` |
| Chronic disease / Special goals | `deepseek-v4-pro` |

## 📝 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## 🔄 Recent Changes

See `~/.hermes/projects/getfitai/changes/` for detailed change logs.

## 📄 License

Private — All rights reserved.
