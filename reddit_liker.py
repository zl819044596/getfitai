import asyncio
from playwright.async_api import async_playwright
import random
import time
from datetime import datetime

# 目标 subreddit 列表（健身相关）
SUBREDDITS = [
    "fitness",
    "bodyweightfitness",
    "running",
    "nutrition",
    "loseit",
    "gainit",
    "crossfit",
    "yoga",
    "homegym",
    "progresspics",
    "Stronglifts5x5",
    "xxfitness"
]

# 行为配置
LIKE_PROBABILITY = 0.4  # 40% 概率点赞
MIN_STAY = 3
MAX_STAY = 8

async def random_delay(min_sec=2, max_sec=5):
    await asyncio.sleep(random.uniform(min_sec, max_sec))

async def simulate_browsing(page):
    """模拟人类浏览：随机滚动"""
    scrolls = random.randint(3, 8)
    for _ in range(scrolls):
        await page.mouse.wheel(0, random.randint(300, 700))
        await asyncio.sleep(random.uniform(0.3, 1.2))
    await asyncio.sleep(random.uniform(MIN_STAY, MAX_STAY))

async def like_post(page):
    """点赞帖子"""
    try:
        # Reddit 新版的 upvote 按钮选择器
        upvote_selectors = [
            'button[aria-label="upvote"]',
            'button[aria-pressed="false"] svg[icon-name="upvote-outline"]',
            '[data-testid="upvote-button"]',
            'shreddit-post button:first-child'
        ]
        
        for selector in upvote_selectors:
            btn = await page.query_selector(selector)
            if btn:
                # 检查是否已点赞
                aria_pressed = await btn.get_attribute('aria-pressed')
                if aria_pressed != 'true':
                    await btn.click()
                    print(f"  👍 点赞")
                    await random_delay(1, 2)
                    return True
                else:
                    print(f"  ⏭️ 已点赞，跳过")
                    return False
        
        print(f"  ⚠️ 未找到点赞按钮")
        return False
    except Exception as e:
        print(f"  ❌ 点赞失败: {e}")
        return False

async def browse_and_like(page, subreddit_name):
    """浏览 subreddit 并点赞"""
    print(f"\n📱 r/{subreddit_name}")
    
    await page.goto(f"https://www.reddit.com/r/{subreddit_name}/")
    await random_delay(3, 5)
    await simulate_browsing(page)
    
    # 获取帖子列表
    posts = await page.query_selector_all('shreddit-post')
    if not posts:
        posts = await page.query_selector_all('[data-testid="post-container"]')
    
    if not posts:
        print(f"  ⚠️ 未找到帖子")
        return
    
    # 随机选择 2-4 个帖子浏览
    num_posts = min(random.randint(2, 4), len(posts))
    selected_posts = random.sample(posts, num_posts)
    
    for i, post in enumerate(selected_posts, 1):
        try:
            # 获取帖子标题
            title_elem = await post.query_selector('a[data-testid="post-title-text"], h3')
            title = await title_elem.inner_text() if title_elem else "未知标题"
            title = title[:50] + "..." if len(title) > 50 else title
            
            print(f"\n  [{i}/{num_posts}] {title}")
            
            # 点击帖子
            await post.click()
            await random_delay(3, 5)
            await simulate_browsing(page)
            
            # 决定是否点赞
            if random.random() < LIKE_PROBABILITY:
                await like_post(page)
            else:
                print(f"  ⏭️ 跳过点赞")
            
            # 返回列表
            await page.go_back()
            await random_delay(2, 4)
            
        except Exception as e:
            print(f"  ❌ 处理帖子失败: {e}")
            continue

async def main():
    print("=" * 50)
    print("Reddit 自动点赞工具")
    print("=" * 50)
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=False,  # 必须可见，让你手动登录
            args=['--disable-blink-features=AutomationControlled']
        )
        
        context = await browser.new_context(
            viewport={'width': 1440, 'height': 900},
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            locale='en-US',
            timezone_id='America/New_York',
            geolocation={'latitude': 40.7128, 'longitude': -74.0060},
            permissions=['geolocation'],
            color_scheme='light'
        )
        
        # 高级反检测脚本
        await context.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', {get: () => undefined});
            Object.defineProperty(navigator, 'plugins', {get: () => [
                {name: 'Chrome PDF Plugin', filename: 'internal-pdf-viewer'},
                {name: 'Native Client', filename: 'native-client.dll'},
                {name: 'Widevine Content Decryption Module', filename: 'widevinecdmadapter.dll'}
            ]});
            Object.defineProperty(navigator, 'languages', {get: () => ['en-US', 'en']});
            Object.defineProperty(navigator, 'platform', {get: () => 'MacIntel'});
            Object.defineProperty(navigator, 'hardwareConcurrency', {get: () => 8});
            Object.defineProperty(navigator, 'deviceMemory', {get: () => 8});
            
            // 覆盖 chrome 对象
            window.chrome = {
                runtime: {},
                loadTimes: function() {},
                csi: function() {},
                app: {}
            };
            
            // 覆盖 permissions API
            const originalQuery = window.navigator.permissions.query;
            window.navigator.permissions.query = (parameters) => (
                parameters.name === 'notifications' ?
                    Promise.resolve({state: Notification.permission}) :
                    originalQuery(parameters)
            );
        """)
        
        page = await context.new_page()
        
        # 打开 Reddit 登录页
        print("\n🌐 打开 Reddit 登录页面...")
        await page.goto("https://www.reddit.com/login/")
        
        # 等待用户手动登录
        print("\n" + "=" * 50)
        print("请手动登录 Reddit 账号")
        print("登录完成后，按回车键继续...")
        print("=" * 50)
        input()
        
        # 验证登录状态
        try:
            await page.wait_for_selector('shreddit-avatar-icon, [data-testid="user-menu"]', timeout=5000)
            print("✅ 登录状态检测成功\n")
        except:
            print("⚠️ 未检测到登录状态，继续执行...\n")
        
        # 随机浏览 subreddit
        subreddits_to_visit = random.sample(SUBREDDITS, random.randint(3, 5))
        print(f"计划浏览 {len(subreddits_to_visit)} 个社区: {', '.join(subreddits_to_visit)}\n")
        
        for subreddit in subreddits_to_visit:
            await browse_and_like(page, subreddit)
            await random_delay(5, 10)
        
        print("\n" + "=" * 50)
        print("✅ 任务完成")
        print("=" * 50)
        
        # 保持浏览器打开，方便查看
        print("\n按回车键关闭浏览器...")
        input()
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
