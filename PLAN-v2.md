# GetFitAI 重构计划 v2（2026-08-24 修订）

> 方向：免费生成器工具站 → AI 健身教练 Web 产品（Freemium 订阅制）
> 收费价值（有依据）：无限生成（89%流量在生成器）+ 周/月计划（竞品Fitbod/Freeletics核心）+ 打卡进度（留存引擎）+ 云端保存（登录成本低）。$8.99/月在竞品价带内（Fitbod $12.99 / Freeletics $9.99-14.99 / FitnessAI ~$10）。

## 已上线 ✅
- T1 后端骨架：Google OAuth + 免费额度(2次/周,402) + Creem订阅 + 同域API路由(www.getfitai.io/api/*)
- T1-REV IP归一化(IPv6 /64) + DeepSeek空响应重试
- T2 前端：/login Google登录 + /pricing + 额度集成 + 登录态导航
- T3 页脚精简(50+→19链接) + T3-REV 旧文案/死链清理
- 验证：登录302/400 ✓ 额度402 ✓ 生成200 ✓

## 待办（按序）

### P0 Creem 支付接通（等产品ID）
- [ ] 用户 Creem 后台建 GetFitAI Pro 订阅产品($8.99/月) → 产品ID
- [ ] 配 CREEM_API_KEY / CREEM_PRODUCT_ID / CREEM_WEBHOOK_SECRET + webhook URL(https://www.getfitai.io/api/webhooks/creem)
- [ ] 实测：Upgrade → Creem付款页 → 回调 → isPro=true

### P1 跟练动图替换（T4，独立）
- 目标：去掉 YouTube embed（验证弹窗劝退），换 AI 生成动图
- 做法：AI 生成动作静态图（准确姿势）→ CSS 轻动效/帧循环 → WebP；试点 1 个跟练（Full Body Burn 9 动作）→ OK 再批量
- 工具：SiliconFlow 生图（Tongyi-MAI/Z-Image-Turbo，ai-video-studio 同管线）或 wanx2.1-t2i-turbo
- 前端：exercise-video.tsx 的 youtubeId 分支替换为动图组件；数据源加 imageUrl

### P2 打卡 + 成就等级（T5）
- D1 新表 workout_logs（user_id, date, plan_id, exercises, rpe, created_at）
- API：POST /api/checkin（打卡）、GET /api/progress（日历+streak+等级）
- 前端：跟练完成打卡按钮 + /dashboard 进度页（🔥连续打卡日历 + 徽章 + 等级 LV1-10）
- 徽章：首练/连续7天/累计30次；LV5 解锁周计划提示、LV8 解锁月计划提示（付费引导钩子）
- 免费用户可见（拉留存），不锁

### P3 周/月计划（T6，Pro 功能）
- 后端：prompt 升级——目标+每周天数+周期(4周) → 整周/月计划（周几练什么、强度递进）
- 新增 API：POST /api/generate-cycle（Pro 校验）
- 前端：计划展示（周视图/月视图）+ 每周自动进阶说明
- Pro 门控：isPro 才能生成周期计划；未登录/免费 → 引导 /login + /pricing

### P4 增长（批次③后续）
- Landing 重做（hero 卖点对齐新定位）+ 邮件序列（Creem 自带？/Resend）+ 分享链接

## 执行规矩
- 先讨论→拍板→建卡→Codex 执行→听潮复核+部署（Codex 只 dry-run）
- 每批验收再下一批；真实部署由听潮执行
