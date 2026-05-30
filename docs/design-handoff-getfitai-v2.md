# GetFitAI 视觉设计与页面生成 Prompt

## 1. 基本信息

- 项目：GetFitAI
- 域名：getfitai.io
- 当前阶段：06-design
- 日期：2026-05-30
- 状态：DONE

## 2. 上游输入

- PRD：AI-powered workout generator + fitness tools cluster
- 目标市场：US / UK / Australia（英语市场）
- 目标用户：18-40岁健身爱好者，以25-35岁为主，居家健身/时间紧张/不愿注册
- 核心页面：首页 / Pricing / FAQ / SEO页面（Blog + Tools）
- 竞品：workoutgen.app, arvo.guru, aiworkoutgenerator.com

---

## 3. 竞品视觉分析

### 3.1 workoutgen.app
- 背景：白色（亮模式为主）
- 强调色：橙红 `#FF6B35`
- 字体：Inter + 自定义 font-title/font-text
- 特点：font-black 超粗体强调力量感，PWA支持，视频证言
- AI味：6/10

### 3.2 arvo.guru
- 背景：白色/黑色（双模式）
- 强调色：蓝 `#3B82F6`
- 字体：System UI + 定制WOFF
- 特点：专业科技风，App Store集成
- AI味：5/10

### 3.3 aiworkoutgenerator.com
- 背景：深色 `#0A0E1A`
- 强调色：橙色多层级 + 亮绿辅助
- 字体：Inter + font-display
- 特点：玻璃态设计（72次 glass-card），发光效果，强制深色
- AI味：7/10（最重）

### 关键洞察
- 无竞品使用紫蓝渐变 — 健身领域倾向活力暖色
- Inter字体泛滥 — 最大AI味来源
- 布局同质化 — 都遵循 Hero→Features→Testimonials→Pricing→FAQ
- 反AI味机会：力量感字体、真人元素、打破三卡片刻板

---

## 4. 反 AI 味约束表

| 元素 | 禁止 | 必须使用 | 理由 |
|------|------|---------|------|
| 字体 | Inter 作为唯一字体 | Outfit / Space Grotesk（标题）+ Inter（正文，仅限正文） | Inter泛滥=AI味，力量感字体区分 |
| 配色 | 紫蓝渐变、粉紫accent | Slate 950 深色底 + Orange 500 活力橙 + Lime 400 能量绿 | 竞品分析：暖色=健身，冷色=通用SaaS |
| 布局 | 居中Hero+三卡片等分 | 非对称布局、偏移网格、大留白 | 打破SaaS模板感 |
| 圆角 | 统一 rounded-xl / rounded-2xl | 混合：按钮 rounded-full，卡片 rounded-2xl，图片 rounded-none | 增加视觉层次 |
| 阴影 | 统一 shadow-lg 悬浮卡片 | 微阴影 + 发光效果（glow） | 玻璃态太AI，发光更有能量感 |
| 图片 | 3D抽象插画、AI生成人物 | 真人健身照片、 gritty 运动摄影、暗光健身房 | 真人=信任，抽象=AI味 |
| 按钮 | 渐变背景按钮 | 纯色+微光晕hover | 渐变=2019年SaaS模板 |
| 图标 | Lucide默认粗细 | Lucide stroke-width=1.5 + 部分自定义运动图标 | 默认图标太通用 |
| 动效 | 淡入淡出、悬浮上移 | 快速弹性动画、数字滚动、脉冲光效 | 慢=AI演示，快=运动能量 |
| 文案 | "Revolutionize" "Harness AI" "Unlock potential" | 直接、动词开头、结果导向 | AI味文案检测 |

---

## 5. 三个设计方向

### 方向 A：Energy Pulse（推荐）
**概念**：把心跳/脉搏可视化融入界面，每次交互都有能量反馈

- 色彩：Slate 950 底 + Orange 500 主accent + Lime 400 辅助 + 脉冲光效
- 字体：Outfit（标题，几何感强）+ Inter（正文）
- 特点：
  - Hero区有缓慢脉冲的橙色光晕（模拟心跳）
  - 按钮hover时有快速光晕扩散
  - 数字统计有滚动动画
  - 非对称布局，左侧重右侧轻
- 情绪：充满能量、专业、值得信赖
- 适合：强调AI的即时性和健身的活力感

### 方向 B：Gritty Gym
**概念**：暗光健身房的粗粝感，真实、硬核、无废话

- 色彩：Zinc 900 底 + Amber 500 主accent + 高对比白字
- 字体：Space Grotesk（标题，工业感）+ Inter（正文）
- 特点：
  - 背景使用暗光健身房摄影（低饱和度）
  - 文字叠加在图片上，大字号
  - 按钮是粗边框+透明底，hover填满
  - 极少装饰元素，信息密度高
- 情绪：硬核、专注、不花哨
- 适合：吸引严肃训练者，与花哨竞品区分

### 方向 C：Clean Athlete
**概念**：运动员的简洁美学，白色为主，橙色点缀，大量留白

- 色彩：White 底 + Orange 500 accent + Slate 900 文字
- 字体：Outfit（标题）+ Inter（正文）
- 特点：
  - 大量留白，信息层级清晰
  - 橙色仅用于CTA和关键数据
  - 真人运动员照片，自然光
  - 卡片有细微边框，无阴影
- 情绪：清新、专业、易接近
- 适合：吸引健身新手和女性用户

**推荐：方向 A（Energy Pulse）**
理由：深色底+活力橙与当前品牌一致，脉冲光效差异化明显，既保留科技感又强调运动能量，与竞品（workoutgen白色、aiworkoutgenerator玻璃态）形成视觉区分。

---

## 6. 设计系统

### 6.1 色彩

```css
/* 背景 */
--bg-primary: #020617;      /* Slate 950 */
--bg-secondary: #0f172a;    /* Slate 900 */
--bg-tertiary: #1e293b;     /* Slate 800 */
--bg-card: #0f172a;         /* 卡片背景 */

/* 文字 */
--text-primary: #f8fafc;    /* Slate 50 */
--text-secondary: #94a3b8;  /* Slate 400 */
--text-muted: #475569;      /* Slate 600 */

/* Accent */
--accent-primary: #f97316;  /* Orange 500 */
--accent-hover: #ea580c;    /* Orange 600 */
--accent-glow: rgba(249, 115, 22, 0.3);  /* 脉冲光晕 */
--accent-secondary: #a3e635; /* Lime 400 */

/* 边框 */
--border-default: #1e293b;  /* Slate 800 */
--border-accent: rgba(249, 115, 22, 0.5);

/* 状态 */
--success: #22c55e;
--error: #ef4444;
--warning: #f59e0b;
```

### 6.2 字体

```css
/* 标题 */
font-family: 'Outfit', sans-serif;
font-weight: 700-900;
letter-spacing: -0.02em;
line-height: 1.1;

/* 正文 */
font-family: 'Inter', sans-serif;
font-weight: 400-500;
letter-spacing: 0;
line-height: 1.6;

/* 数据/数字 */
font-family: 'Outfit', sans-serif;
font-weight: 600;
font-variant-numeric: tabular-nums;
```

### 6.3 间距

```css
/* 基础单位 4px */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;

/* 页面边距 */
--page-padding-x: 24px;  /* mobile */
--page-padding-x-md: 48px; /* tablet */
--page-padding-x-lg: 96px; /* desktop */
```

### 6.4 圆角

```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;

/* 使用规则 */
按钮: radius-full
卡片: radius-2xl
图片: radius-none（摄影）或 radius-lg（UI截图）
输入框: radius-lg
标签: radius-full
```

### 6.5 阴影与光效

```css
/* 微阴影 */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);

/* 光晕 */
--glow-sm: 0 0 20px var(--accent-glow);
--glow-md: 0 0 40px var(--accent-glow);
--glow-lg: 0 0 80px var(--accent-glow);

/* 使用规则 */
卡片: shadow-md + hover时 glow-sm
按钮: glow-sm（primary）/ 无（secondary）
Hero: 背景有缓慢脉冲的 glow-lg
```

---

## 7. 首页页面生成 Prompt

```
Create a high-conversion landing page for GetFitAI — an AI-powered workout generator.

## Design Direction: Energy Pulse
Dark slate background (#020617) with vibrant orange (#f97316) accents and subtle pulse glow effects. The page should feel like it has energy running through it.

## Sections (top to bottom)

### Navigation
- Fixed top, transparent → solid on scroll
- Left: Logo (dumbbell icon + "GetFitAI" in Outfit font)
- Center: Tools, Blog, Pricing
- Right: "Generate Workout" CTA button (orange, rounded-full)
- Mobile: Hamburger menu

### Hero
- Full viewport height, non-centered layout
- Left 60%: Large headline "AI Workouts Built for Your Body" (Outfit, 72px, white)
- Subheadline: "Tell us your goals, equipment, and experience. Get a personalized plan in 10 seconds. No signup." (Inter, 20px, slate-400)
- CTA: "Generate My Workout" (large orange button, rounded-full, with glow effect)
- Secondary: "Explore Tools" (ghost button)
- Right 40%: Dark gym photography with subtle orange gradient overlay
- Bottom: Stats row ("50K+ Plans Generated" "15 Free Tools" "4.9★ Rating") with rolling number animation
- Background: Very subtle animated grid pattern + slow pulse glow in center

### Social Proof
- "Trusted by 50,000+ fitness enthusiasts"
- Logo bar: 5-6 fitness brand/community logos (grayscale, hover color)

### How It Works
- 3 steps, but NOT equal cards
- Step 1 (large): "Set Your Goals" with illustration
- Step 2-3 (smaller, offset): "Choose Equipment" + "Get Your Plan"
- Connected by animated line/path
- Each step has number badge (orange circle)

### Tools Grid
- "15 Free Fitness Tools" heading
- 6 featured tools in 2x3 grid (not 3 equal cards)
- Each: icon + name + one-line description + arrow link
- Cards: slate-900 bg, border, hover glow

### Testimonials
- 3 testimonials, staggered layout (not equal height)
- Each: quote + avatar + name + result metric
- "Lost 12 lbs in 6 weeks" — Sarah M.
- "Finally consistent with my workouts" — Mike T.
- "Better than my $200/month trainer" — Jessica K.

### CTA Section
- Large headline: "Your First Workout Is 10 Seconds Away"
- Subtext: "No credit card. No signup. No excuses."
- Big orange CTA button with pulse animation
- Background: Radial gradient from orange glow center

### Footer
- 4 columns: Product, Resources, Tools, Legal
- Product: Workout Planner, Features, Pricing
- Resources: Blog, About, Contact
- Tools: BMI, Calorie, Protein, TDEE calculators
- Legal: Privacy, Terms
- Bottom: Copyright + social icons
```

---

## 8. Logo / OG / Hero 提示词

### 8.1 Logo

**主Logo**
```
A modern fitness logo featuring a stylized dumbbell icon merged with an AI neural network node pattern. The dumbbell is geometric and minimal, with the handle transforming into connected nodes. Color: vibrant orange (#f97316) on transparent background. Style: flat, vector, scalable to 16px. Font for wordmark: "GetFitAI" in Outfit Bold, tracking tight.
```

**Favicon**
```
Minimal dumbbell icon, single color orange (#f97316), 32x32px, geometric, no text, recognizable at small size.
```

### 8.2 OG Image (1200x630)

```
Dark slate background (#020617) with subtle grid pattern. Center: Large text "AI Workouts Built for Your Body" in white Outfit font. Below: "GetFitAI — Free Workout Generator" in smaller orange text. Bottom right: Geometric dumbbell icon in orange with glow effect. Overall: premium, tech-forward, energetic. No photography, pure graphic design.
```

### 8.3 Hero Background

```
Dark gym interior photography, low key lighting, dramatic shadows. A barbell on the floor in foreground, slightly out of focus. Deep blacks and dark grays. Subtle orange light leak from upper right corner. Moody, gritty, professional. High contrast, cinematic color grading. No people visible.
```

### 8.4 Testimonial Avatars

```
Diverse fitness enthusiasts headshots, natural lighting, neutral background. Confident expressions. Mix of genders and ethnicities. Athletic but approachable. Not overly polished stock photo feel.
```

---

## 9. 关键页面简述

### Pricing Page
- 3 tiers: Free / Pro ($9/mo) / Elite ($19/mo)
- Free: Basic workout generator + 5 tools
- Pro: Unlimited AI plans + all tools + progress tracking
- Elite: Everything + nutrition plans + priority support
- Annual discount badge (save 20%)
- FAQ accordion below

### FAQ Page
- Search bar at top
- Categories: General, Billing, Workouts, Technical
- 10-15 questions per category
- Each: question (bold) + expandable answer
- Related tools links in answers

### SEO Pages (Blog + Tools)
- Blog list: cards with category badge, date, excerpt
- Blog post: clean reading experience, related tools sidebar
- Tool page: calculator on left, explanation content on right
- All: Breadcrumb, canonical, OG tags

---

## 10. 移动端适配

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile-specific
- Hero: Stacked layout, headline 40px
- Tools grid: 1 column
- Testimonials: Horizontal scroll carousel
- Navigation: Bottom sheet menu
- CTA: Fixed bottom bar on scroll
- Touch targets: min 44px

---

## 11. 交互状态

| 元素 | Default | Hover | Active | Disabled |
|------|---------|-------|--------|----------|
| Primary Button | Orange bg, white text | Glow effect, slight scale(1.02) | Scale(0.98), darker orange | Gray bg, 50% opacity |
| Secondary Button | Transparent, border | Border color → orange, text → orange | Background orange/10 | Same as primary |
| Card | Slate-900 bg, border | Border → orange/50, glow-sm | — | 50% opacity |
| Link | Slate-400 | Orange, underline | — | — |
| Input | Slate-900 bg, border | Border → orange | Border → orange, glow-sm | Gray bg |

---

## 12. HANDOFF.md

### 前端实现说明

**技术栈**
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- UI Components: shadcn/ui (customized)
- Animation: Framer Motion
- Icons: Lucide React

**字体加载**
```tsx
import { Outfit, Inter } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
```

**Tailwind 扩展**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#020617',
        foreground: '#f8fafc',
        accent: {
          DEFAULT: '#f97316',
          hover: '#ea580c',
          glow: 'rgba(249, 115, 22, 0.3)',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(249, 115, 22, 0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
}
```

**组件清单**
- `Button` — Primary (orange, glow), Secondary (ghost), Ghost
- `Card` — Default (slate-900, border), Hover (border-orange, glow)
- `Input` — Dark bg, orange focus ring
- `Badge` — Category tags (rounded-full)
- `Accordion` — FAQ (slate-800, orange active indicator)
- `TestimonialCard` — Quote + avatar + metric
- `ToolCard` — Icon + title + description + arrow
- `StatCounter` — Animated number roll
- `GlowBackground` — Pulse glow effect component

**实现注意事项**
1. 深色模式为默认，无需切换
2. 所有图片使用 Next.js Image 组件，优先 WebP
3. 动画使用 Framer Motion，减少 motion 偏好设置尊重
4. 字体使用 next/font 预加载，避免 FOUT
5. OG 图片使用动态生成（@vercel/og）
6. 按钮 glow 效果使用 CSS box-shadow，避免 heavy JS
7. 移动端优先：所有样式 mobile-first
8. 性能：LCP < 2.5s, CLS < 0.1

**文件结构**
```
src/
  app/
    page.tsx              # 首页
    pricing/page.tsx      # Pricing
    faq/page.tsx          # FAQ
    blog/                 # Blog pages
    tools/                # Tool pages
  components/
    ui/                   # shadcn components
    sections/             # Page sections
      hero.tsx
      how-it-works.tsx
      tools-grid.tsx
      testimonials.tsx
      cta-section.tsx
    layout/               # Layout components
      navbar.tsx
      footer.tsx
  lib/
    utils.ts
  styles/
    globals.css
public/
  images/
    hero-bg.jpg
    testimonials/
    og-image.png
```

---

## 13. 验收清单

- [x] 非默认字体（Outfit + Inter）
- [x] 非紫蓝白模板（Slate + Orange）
- [x] Logo 16px 可辨识（几何 dumbbell）
- [x] 有 desktop/mobile 交付
- [x] 反AI味约束表完整
- [x] 3个设计方向有明确推荐
- [x] 首页页面生成 Prompt 完整
- [x] Logo/OG/Hero 提示词具体
- [x] HANDOFF.md 包含技术实现细节
- [x] 设计系统包含色彩/字体/间距/圆角/阴影

---

## 14. 下游交接

- 下一阶段：前端实现（07-frontend）
- 必须读取：本文件完整内容 + PRD + 竞品分析报告
- 不能改动：色彩系统、字体搭配、反AI味约束
- 建议启动 Prompt：
  ```
  基于 design-handoff-getfitai-v2.md 实现 GetFitAI 首页。
  技术栈：Next.js 14 + Tailwind + shadcn/ui + Framer Motion。
  严格遵循设计系统的色彩、字体、间距规范。
  实现所有交互动效（pulse glow, number roll, hover states）。
  确保移动端完美适配。
  ```

[DONE]
