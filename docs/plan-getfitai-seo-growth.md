# GetFitAI SEO 增长计划

> **目标**: 将 getfitai.io 从 13 页 MVP 升级为 80+ 页工具+内容矩阵站，3 个月内月 UV 达到 2000-5000。

**当前状态**: 13 个可索引页面，预估月流量 0-100 UV  
**目标状态**: 80+ 页面，预估月流量 5000-15000 UV  
**技术栈**: Next.js 14 + Tailwind + shadcn/ui + DeepSeek API  
**代码路径**: `/Volumes/Data/GitHub/data`

---

## 阶段一: 立即修复 (Week 1)

### Task 1: 修复首页 H1 SEO 问题

**目标**: 将 "FreeAI" 分开为 "Free AI"，提升关键词可读性

**文件**: `src/components/hero.tsx:91-93`

**修改**:
```tsx
// 修改前
<span className="text-white">Your Free</span>
<br />
<span className="gradient-text">AI Fitness Coach</span>

// 修改后
<span className="text-white">Your Free AI</span>
<br />
<span className="gradient-text">Fitness Coach</span>
```

**验证**: 刷新首页，H1 显示 "Your Free AI Fitness Coach"

---

### Task 2: 创建独立 Workout Generator 页面

**目标**: 将首页的 workout generator 抽取为独立可索引页面 `/tools/workout-generator`

**文件**:
- 创建: `src/app/tools/workout-generator/page.tsx`
- 创建: `src/app/tools/workout-generator/content.mdx`
- 修改: `src/app/sitemap.ts` (添加新页面)
- 修改: `src/app/tools/tools-client.tsx` (添加卡片)

**Step 1: 创建页面**

`src/app/tools/workout-generator/page.tsx`:
```tsx
import type { Metadata } from "next";
import { WorkoutGenerator } from "@/components/workout-generator";

export const metadata: Metadata = {
  title: "AI Workout Generator — Free Personalized Plans | GetFitAI",
  description:
    "Generate personalized workout plans with AI. Choose your goal, experience level, and equipment. Get a custom training plan in seconds. No signup required.",
  alternates: {
    canonical: "https://getfitai.io/tools/workout-generator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/workout-generator",
  },
};

export default function WorkoutGeneratorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              AI Workout Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer a few questions and get a personalized workout plan built by AI. 
              Tailored to your goals, experience, and available equipment.
            </p>
          </div>
          <WorkoutGenerator />
        </div>
      </section>
    </main>
  );
}
```

**Step 2: 添加 content.mdx**

`src/app/tools/workout-generator/content.mdx`:
```mdx
## How It Works

Our AI workout generator creates personalized training plans based on:

- **Your Goal**: Build muscle, lose fat, or improve strength
- **Experience Level**: Beginner, intermediate, or advanced
- **Equipment**: Gym, home, or minimal equipment
- **Schedule**: How many days per week you can train

## Why Use an AI Workout Generator?

- **Personalized**: Every plan is tailored to your specific situation
- **Fast**: Get a complete plan in under 30 seconds
- **Free**: No signup, no credit card required
- **Evidence-Based**: Exercises selected based on scientific research

## Sample Workout Plans

### Beginner Home Workout (3 Days/Week)
- Full body focus
- Bodyweight exercises
- 45 minutes per session

### Intermediate Gym Workout (4 Days/Week)
- Upper/lower split
- Progressive overload built in
- 60 minutes per session

### Advanced Strength Program (5 Days/Week)
- Push/pull/legs split
- Heavy compound lifts
- 75 minutes per session
```

**Step 3: 更新 sitemap**

`src/app/sitemap.ts` 的 staticPages 数组添加:
```ts
{ path: "/tools/workout-generator", priority: 0.95, changefreq: "weekly" as const },
```

**Step 4: 更新工具列表页**

`src/app/tools/tools-client.tsx` 的 tools 数组添加:
```ts
{
  icon: <Dumbbell className="w-6 h-6" />,
  title: "Workout Generator",
  description: "Generate personalized AI workout plans tailored to your goals and equipment.",
  href: "/tools/workout-generator",
},
```

**验证**: 访问 `/tools/workout-generator` 正常显示

---

### Task 3: 新增 Macro Calculator 工具页

**目标**: 创建 `/tools/macro-calculator` 页面，抢占 "macro calculator" 关键词

**文件**:
- 创建: `src/app/tools/macro-calculator/page.tsx`
- 创建: `src/app/tools/macro-calculator/macro-calculator-client.tsx`
- 创建: `src/app/tools/macro-calculator/content.mdx`
- 修改: `src/app/sitemap.ts`
- 修改: `src/app/tools/tools-client.tsx`

**Step 1: 创建客户端组件**

`src/app/tools/macro-calculator/macro-calculator-client.tsx`:
```tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function MacroCalculatorClient() {
  const [weight, setWeight] = useState(70);
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<{
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  } | null>(null);

  const calculate = () => {
    // Simple Mifflin-St Jeor + activity multiplier
    const bmr = 10 * weight + 6.25 * 170 - 5 * 30 + 5; // simplified
    const tdee = bmr * 1.55;
    
    let calories = tdee;
    if (goal === "lose") calories -= 500;
    if (goal === "gain") calories += 300;

    const protein = weight * (goal === "gain" ? 2.2 : 2.0);
    const fat = (calories * 0.25) / 9;
    const carbs = (calories - protein * 4 - fat * 9) / 4;

    setResult({
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <Label>Weight (kg): {weight}</Label>
            <Slider
              value={[weight]}
              onValueChange={(v) => setWeight(v[0])}
              min={40}
              max={150}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Goal</Label>
            <RadioGroup value={goal} onValueChange={setGoal} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lose" id="lose" />
                <Label htmlFor="lose">Lose Fat</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maintain" id="maintain" />
                <Label htmlFor="maintain">Maintain</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gain" id="gain" />
                <Label htmlFor="gain">Build Muscle</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={calculate} className="w-full">
            Calculate Macros
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Your Daily Macros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.calories}</div>
              <div className="text-sm text-muted-foreground">Calories</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.protein}g</div>
              <div className="text-sm text-muted-foreground">Protein</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.carbs}g</div>
              <div className="text-sm text-muted-foreground">Carbs</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{result.fat}g</div>
              <div className="text-sm text-muted-foreground">Fat</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
```

**Step 2: 创建页面**

`src/app/tools/macro-calculator/page.tsx`:
```tsx
import type { Metadata } from "next";
import { MacroCalculatorClient } from "./macro-calculator-client";

export const metadata: Metadata = {
  title: "Macro Calculator — Free Protein, Carbs & Fat | GetFitAI",
  description:
    "Calculate your daily macros for free. Get personalized protein, carb, and fat targets based on your weight and fitness goals. No signup required.",
  alternates: {
    canonical: "https://getfitai.io/tools/macro-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/macro-calculator",
  },
};

export default function MacroCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Macro Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your daily protein, carbs, and fat targets based on your weight and fitness goals.
            </p>
          </div>
          <MacroCalculatorClient />
        </div>
      </section>
    </main>
  );
}
```

**Step 3: 更新 sitemap 和工具列表** (同 Task 2 模式)

---

### Task 4: 新增 Calorie Calculator 工具页

**目标**: 创建 `/tools/calorie-calculator`，抢占 "calorie calculator" 关键词

**文件**: 同 Task 3 模式
- `src/app/tools/calorie-calculator/page.tsx`
- `src/app/tools/calorie-calculator/calorie-calculator-client.tsx`
- `src/app/tools/calorie-calculator/content.mdx`

**实现**: 基于 TDEE 计算，添加活动量选择和目标调整

---

### Task 5: 新增 Protein Calculator 工具页

**目标**: 创建 `/tools/protein-calculator`，抢占 "protein calculator" 关键词

**文件**: 同 Task 3 模式

**实现**: 根据体重、活动量、目标计算每日蛋白质需求

---

### Task 6: blog 内容扩充 — 5 篇核心文章

**目标**: 新增 5 篇高价值 SEO 文章

**文章清单**:
1. `/blog/ai-fitness-coach-vs-personal-trainer` — 对比型，抢占 "ai fitness coach vs personal trainer"
2. `/blog/best-ai-fitness-apps-2026` — 评测型，抢占 "best ai fitness apps"
3. `/blog/how-to-use-ai-workout-generator` — 指南型，抢占 "how to use ai workout generator"
4. `/blog/what-is-tdee-and-how-to-calculate` — 科普型，抢占 "what is tdee"
5. `/blog/protein-intake-calculator-guide` — 指南型，抢占 "protein intake calculator"

**每篇文章结构**:
```tsx
// page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article Title | GetFitAI",
  description: "...",
  alternates: { canonical: "https://getfitai.io/blog/slug" },
};

export default function ArticlePage() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto pt-32 pb-16 px-4">
      <h1>Title</h1>
      {/* Content */}
    </article>
  );
}
```

---

## 阶段二: 内容矩阵 (Week 2-4)

### Task 7: 新增 5 个工具页

| 页面 | 关键词 |
|------|--------|
| `/tools/heart-rate-calculator` | heart rate zone calculator |
| `/tools/pace-calculator` | running pace calculator |
| `/tools/wilks-calculator` | wilks calculator |
| `/tools/bmr-calculator` | bmr calculator |
| `/tools/ideal-weight-calculator` | ideal weight calculator |

---

### Task 8: 新增 10 篇 blog 文章

**主题列表**:
1. How to Calculate BMI — Step by Step Guide
2. TDEE Calculator: How to Use It for Weight Loss
3. Body Fat Percentage: What's Healthy?
4. One Rep Max: Why It Matters and How to Test
5. Meal Prep for Fat Loss: Complete Guide
6. Intermittent Fasting: 16/8 Schedule for Beginners
7. Home Workout Equipment: Essential Gear
8. Progressive Overload: The Key to Muscle Growth
9. Rest Days: How Often Should You Take Them?
10. Pre-Workout Nutrition: What to Eat Before Training

---

### Task 9: 新增 20 个长尾问答页面

**目标**: 创建 `/blog/[question-slug]` 形式的问答页面，抢占长尾搜索

**示例**:
- `/blog/what-is-bmi` → "What is BMI and Why Does It Matter?"
- `/blog/how-many-calories-to-lose-weight` → "How Many Calories Should I Eat to Lose Weight?"
- `/blog/how-much-protein-per-day` → "How Much Protein Do I Need Per Day?"
- `/blog/best-workout-for-beginners` → "Best Workout Routine for Beginners"
- `/blog/how-long-to-see-results` → "How Long Does It Take to See Workout Results?"

**生成方式**: 用 DeepSeek API 批量生成，每篇 800-1200 字

---

## 阶段三: SEO 技术优化 (持续)

### Task 10: 内链结构优化

**目标**: 在工具页和内容页之间建立内链

**规则**:
- 每个工具页底部添加 "Related Articles" 链接到 3 篇相关 blog
- 每篇 blog 文章内添加 "Try Our Tools" CTA，链接到相关工具页
- 使用描述性锚文本，不要 "click here"

**示例** (在 BMI Calculator 页底部):
```tsx
<section className="mt-12">
  <h3 className="text-xl font-bold mb-4">Related Articles</h3>
  <ul className="space-y-2">
    <li>
      <Link href="/blog/what-is-bmi" className="text-orange-400 hover:underline">
        What is BMI and Why Does It Matter?
      </Link>
    </li>
    <li>
      <Link href="/blog/how-to-calculate-bmi" className="text-orange-400 hover:underline">
        How to Calculate BMI: Step by Step Guide
      </Link>
    </li>
  </ul>
</section>
```

---

### Task 11: Schema Markup 增强

**目标**: 为工具页添加 FAQ 和 HowTo Schema

**文件**: `src/components/json-ld.tsx` 或各页面内添加

**BMI Calculator 示例**:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is BMI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BMI (Body Mass Index) is a measure of body fat based on height and weight...",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate my BMI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enter your height and weight into our free BMI calculator above...",
          },
        },
      ],
    }),
  }}
/>
```

---

### Task 12: 页面速度优化

**目标**: Core Web Vitals 全部达标

**检查清单**:
- [ ] LCP < 2.5s (优化首屏图片)
- [ ] FID < 100ms (减少 JS 阻塞)
- [ ] CLS < 0.1 (图片尺寸预设)

**操作**:
1. 压缩 `/public/images` 下的所有图片 (WebP 格式)
2. 为 Hero 图片添加 `priority` 和 `sizes` 属性
3. 延迟加载非首屏组件
4. 检查并移除未使用的 JS

---

### Task 13: 外链建设

**目标**: 获取 10-20 个高质量外链

**渠道**:
1. **Reddit**: r/fitness, r/bodyweightfitness, r/loseit — 分享工具，不要硬广
2. **Product Hunt**: 提交 GetFitAI
3. **目录提交**: 
   - https://www.producthunt.com
   - https://alternativeto.net
   - https://www.capterra.com
4. **健身论坛**: Bodybuilding.com, T-Nation — 签名档或资源分享
5. **Guest Post**: 联系健身博主，提供客座文章

---

## 阶段四: 数据监控与迭代 (持续)

### Task 14: GSC 数据监控

**每周检查**:
- 总点击数、展示数、平均排名
- 新页面索引状态
- 核心关键词排名变化

**每月检查**:
- 哪些页面流量增长最快
- 哪些页面需要优化 (高展示低点击)
- 新出现的长尾查询词

### Task 15: 内容迭代

**规则**:
- 流量 Top 20% 的页面 → 每月更新，增加内容深度
- 流量 Bottom 20% 的页面 → 3 个月后无改善则合并或删除
- 根据 GSC 查询词 → 新增针对性内容

---

## 预期结果

| 时间 | 页面数 | 预估月 UV | 关键里程碑 |
|------|--------|-----------|-----------|
| Week 1 | 20 | 100-300 | 修复 SEO 问题，新增核心工具页 |
| Week 2-4 | 50 | 500-1500 | 内容矩阵建成，长尾词开始排名 |
| Month 2 | 65 | 1500-3500 | 外链生效，工具页进前 20 |
| Month 3 | 80 | 3000-8000 | 品牌搜索出现，自然增长加速 |
| Month 6 | 100+ | 8000-20000 | 稳定流量，开始变现优化 |

---

## 退出条件

**继续信号** (满足任一):
- 3 个月内月 UV > 1000
- 至少 3 个页面进目标关键词前 10
- GSC 显示持续增长的查询词数量

**放弃信号** (全部满足):
- 6 个月后月 UV < 500
- 没有任何页面进前 20
- AI Fitness 赛道被巨头垄断

---

## 执行优先级

**P0 (本周必须做)**:
1. 修复 H1 "FreeAI" → "Free AI"
2. 创建 `/tools/workout-generator`
3. 创建 `/tools/macro-calculator`
4. 创建 `/tools/calorie-calculator`

**P1 (本月做)**:
5. 新增 5 篇核心 blog 文章
6. 新增 5 个工具页
7. 内链结构优化
8. Schema Markup

**P2 (持续做)**:
9. 20 个长尾问答页面
10. 外链建设
11. 页面速度优化
12. 数据监控与迭代
