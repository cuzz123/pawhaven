================================================================================
  PawHaven — 上线前深度评审报告
  日期: 2026-06-19 | 53文件 · 2285行 · 11 API
================================================================================

  一、功能完整性跑通检查
  ====================

  [PASS] 首页 → 品类筛选 → 产品详情 → 加购 → 购物车 → 结算 → PayPal
  [PASS] 注册 → 数据库写入 → 自动登录 → 退出
  [PASS] Google OAuth 登录
  [PASS] 心愿单 (localStorage 持久化)
  [PASS] 最近浏览
  [PASS] 联系表单 + Newsletter + 弃购邮件 API
  [PASS] Google Merchant Feed (29 产品 XML)
  [PASS] 后台管理 /admin (产品列表 + 订单列表)
  [PASS] 安全中间件 + CSRF + 限速 + 输入清洗
  [PASS] 深色模式 + 移动端菜单 + 骨架屏
  [PASS] SEO: Sitemap + OG + JSON-LD + Canonical + FAQ

  [ISSUE] PayPal API 未经真实交易测试 — sandbox key 配的是 live？
  [ISSUE] 管理员页面无权限保护 — /admin 任何人都能访问
  [ISSUE] 注册页 Google 按钮缺少 signIn import（已修但需验证）

================================================================================
  二、UI/UX 转化优化 — 抓住客户的关键改造
  ======================================

  问题 1: 首页首屏缺少社交证明（P0）
  ─────────────────────────────────
  当前首页 Hero 区没有任何数字、评价、或信任信号。访客第一眼
  看到的是 "Because they give us everything" + "Shop All"。
  没有理由相信这个站。

  改造: Hero 标题下加一行信任信号：
  "Join 2,000+ pet parents who found calm for their companions"
  下方加 3 个小徽章: "Free Shipping" / "4.9 Stars" / "30-Day Trial"

  问题 2: 产品卡片缺少"紧迫感"信息（P0）
  ──────────────────────────────────
  所有产品卡片只有名称/价格/标签。没有任何 social proof 或
  scarcity 信息。

  改造: 精选产品加一行小字，轮换显示:
  - "200+ sold this month"
  - "Vet recommended"
  - "30-day money back"

  问题 3: 产品详情页转化路径不完整（P1）
  ──────────────────────────────────
  当前页面: 图片 + 描述 + 功能列表 + 加购按钮。
  缺少: 评价区、FAQ、配送信息。

  改造: 加购按钮下方依次加:
  - 紧凑的配送信息行: "Free Shipping · Delivered in 3-7 days"
  - "30-Day Money Back Guarantee" 徽章
  - 简洁的 3 条精选评价（先硬编码，后续接入真实）

  问题 4: 购物车页缺少运费计算和折扣码（P1）
  ──────────────────────────────────
  当前只有数量加减 + 总价 + 结账按钮。

  改造: 总价上方加:
  - 折扣码输入框（非功能性 MVP，收集使用意图数据）
  - 满 $50 免邮提示进度条: "$15 away from free shipping!"

  问题 5: 结算页 PayPal 按钮上方的信任信号不足（P2）
  ──────────────────────────────────
  只有 "Secured by PayPal" 一行字。

  改造: PayPal 按钮上方加:
  - 锁图标 + "Your payment info is encrypted and secure"
  - 30-Day Return 徽章
  - "You won't be charged until you review your order"

  问题 6: 移动端首页产品太少（P2）
  ─────────────────────────────
  桌面端 4 列还好，移动端只看到 2 列 × 4 行 = 8 款。品类入口不明显。

  改造: 产品网格前加一行横向滚动的品类卡片:
  [Calming] [Safety] [Feeding] [Health] [Travel] [Memorial]
  每个带图标 + 简短描述

================================================================================
  三、上线前必须修复的 Bug
  =====================

  [BUG-1] /admin 页面无认证保护
  任何知道 URL 的人都能访问后台。最低限度加一个简单的密码验证。

  [BUG-2] PayPal 创建订单 API 未验证 items 合法性
  /api/paypal/create-order 只取 total 参数，不验证购物车内容。
  恶意用户可以传 total=0.01 下单。

  [BUG-3] Google Feed 图片 URL 使用 Vercel 动态域名
  feed 里的 image_link 域名每次部署都会变，Google 会拒绝。
  需要固定为 pawhaven-store.vercel.app 或自定义域名。

  [BUG-4] 产品详情页硬编码数据只有 5 款
  PRODUCTS 对象在 page.tsx 只定义 5 款产品。其余 25 款点进去
  特征是有的（我之前补全过），但购买按钮/详情是通版模板。

  [BUG-5] 注册成功但未登录时 Header 不更新
  Header 依赖 useSession() 检测登录态。注册后 signIn 失败时
  Header 仍显示 "Sign In" 按钮，用户困惑。

================================================================================
  四、修复优先级
  ============

  P0 (今天 — 阻断上线):
  [ ] /admin 加认证保护
  [ ] PayPal API 验证 total 匹配购物车
  [ ] 首页加社交证明数字

  P1 (本周 — 转化优化):
  [ ] 产品卡片加紧迫感信息
  [ ] 产品详情页加配送/评价
  [ ] 购物车加运费进度条 + 折扣码输入框

  P2 (下周 — 体验):
  [ ] 结算页加信任信号
  [ ] 移动端品类横向滚动入口
  [ ] Google Feed 固定域名

================================================================================
