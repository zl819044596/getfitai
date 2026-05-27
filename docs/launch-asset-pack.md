# GetFitAI 上线发布与冷启动增长 — 交付物

## 1. 基本信息

- 项目：GetFitAI
- 域名：https://getfitai.io
- 当前阶段：11-ops
- 日期：2026-05-20
- 状态：[DONE]

## 2. 产品描述

**短介绍：**
GetFitAI — 免费 AI 健身计划生成器。输入目标、经验、设备，30 秒获得个性化训练方案。

**长介绍：**
GetFitAI 是一款免费的 AI 驱动健身工具，无需注册即可生成个性化训练计划。无论你是增肌、减脂还是提升耐力，只需选择目标、经验水平和可用设备，AI 就会在 30 秒内为你定制包含热身、主训练和放松的完整方案。附带 6 款实用健身计算器（BMI、卡路里、1RM 等），让训练更科学。

## 3. FAQ

- Q: 需要注册吗？A: 不需要，打开即用。
- Q: 免费吗？A: 完全免费。
- Q: 支持什么设备？A: 健身房、哑铃、自重均可。
- Q: 计划可以保存吗？A: 可以，支持本地保存和邮件发送。

## 4. UTM 规范

| 渠道 | UTM Source | UTM Medium | UTM Campaign |
|------|-----------|-----------|-------------|
| Reddit r/fitness | reddit | social | launch_r_fitness |
| Reddit r/bodyweightfitness | reddit | social | launch_r_bodyweight |
| Reddit r/loseit | reddit | social | launch_r_loseit |
| Hacker News | hackernews | social | show_hn |
| X/Twitter | twitter | social | launch |
| Product Hunt | producthunt | referral | ph_launch |
| Futurepedia | futurepedia | referral | directory_submit |
| TheresAnAIForThat | taaft | referral | directory_submit |
| Toolify | toolify | referral | directory_submit |

## 5. 社区文案

### Reddit r/fitness

```
I built a free AI workout planner — no signup needed

Hey r/fitness,

Been lifting for 3 years and always hated planning workouts. Built GetFitAI to fix that:

- Select goal (muscle/fat loss/strength/endurance)
- Pick experience + equipment
- Get a full plan in 30s (warmup + exercises + cooldown)

Also added 6 free calculators (BMI, 1RM, plate calc, etc.)

Everything runs in browser, no account needed.

Would love feedback from this community — what features would actually help your routine?

https://getfitai.io?utm_source=reddit&utm_medium=social&utm_campaign=launch_r_fitness
```

### Hacker News (Show HN)

```
Show HN: Free AI workout planner with rest timer and form tips

Built a no-signup fitness tool that generates personalized workout plans in ~30 seconds.

Tech stack: Next.js 14, Tailwind, DeepSeek API, Vercel.

Features:
- Streamed AI plan generation
- Editable training cards with weight suggestions
- Built-in rest timer with audio cues
- "How to" panel with form steps, common mistakes, video links
- 6 free fitness calculators (BMI, TDEE, 1RM, etc.)

Everything client-side except the AI stream. No tracking, no cookies wall.

Looking for feedback from builders who also struggle with workout consistency.

https://getfitai.io?utm_source=hackernews&utm_medium=social&utm_campaign=show_hn
```

### X/Twitter

```
Shipped a free AI workout planner

No signup. No paywall.

30 seconds → personalized training plan with:
• Warmup + exercises + cooldown
• Weight suggestions
• Rest timer
• Form tips per exercise

+ 6 free fitness calculators

https://getfitai.io?utm_source=twitter&utm_medium=social&utm_campaign=launch

What should I add next?
```

## 6. Product Hunt 素材

**Tagline:** Free AI workout planner — personalized plans in 30 seconds

**Maker Comment:**
```
I built GetFitAI because I was tired of generic workout apps that require accounts, subscriptions, and still don't adapt to my schedule.

The core idea: AI generates a plan tailored to your goal, experience, and equipment. Then the training cards guide you through each exercise with weight suggestions, a rest timer, and form tips.

No account needed. No tracking. Just open and train.

Built with Next.js + DeepSeek API on Vercel.

Happy to answer questions and take feature requests!
```

**Gallery 图片清单：**
1. 首页 Hero
2. 计划生成器表单
3. 生成的训练计划
4. 训练卡片细节（weight + timer）
5. How to 展开面板
6. 工具页面集合

## 7. 目录提交清单

| 目录 | URL | 状态 | 提交日期 |
|------|-----|------|---------|
| Futurepedia | futurepedia.io | 待提交 | |
| TheresAnAIForThat | theresanaiforthat.com | 待提交 | |
| Toolify | toolify.ai | 待提交 | |
| AI Tools Directory | aitoolsdirectory.com | 待提交 | |

## 8. 首周执行计划

| 日期 | 动作 | 渠道 | 状态 |
|------|------|------|------|
| Day 0 | 准备素材包 | - | DONE |
| Day 1 | 发布 Reddit | r/fitness | 待执行 |
| Day 1 | 发布 HN | Show HN | 待执行 |
| Day 1 | 发布 X | Twitter | 待执行 |
| Day 2 | 提交工具目录 | Futurepedia/TAFFT/Toolify | 待执行 |
| Day 3-4 | Product Hunt 发布 | producthunt.com | 待执行 |
| Day 3-7 | 回收反馈 | 全渠道 | 待执行 |

## 9. 下游交接

- 下一阶段：site-data-review-iteration
- 启动条件：首周发布完成后，收集到初步数据
