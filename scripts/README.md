# GetFitAI Image Scripts

## 1. Download Pexels Images

Create a JSON config file, then run:

```bash
node scripts/download-pexels-images.js config.json
```

**Example `config.json`:**
```json
{
  "outputDir": "public/images/blog",
  "images": [
    {"filename": "hero.jpg", "query": "gym workout dark", "orientation": "landscape", "size": "large"},
    {"filename": "avatar.jpg", "query": "fitness portrait", "orientation": "square", "size": "small"}
  ]
}
```

**Parameters:**
- `orientation`: `landscape` | `portrait` | `square`
- `size`: `small` | `medium` | `large` | `large2x`

Requires `PEXELS_API_KEY` env var (already set in Vercel).

---

## 2. Generate OG Images

Create a JSON config file, then run:

```bash
node scripts/generate-og-images.js og-config.json
```

**Example `og-config.json`:**
```json
{
  "outputDir": "public/images",
  "images": [
    {"filename": "og-home.png", "title": "Home Workouts", "subtitle": "No equipment needed", "cta": "Start Free"}
  ]
}
```

Generates 1200×630 PNGs with dark theme + orange accent (matching site design).
