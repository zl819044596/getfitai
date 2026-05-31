#!/usr/bin/env node
/**
 * Download images from Pexels API
 * Usage: node scripts/download-pexels-images.js <config.json>
 *
 * Config format:
 * {
 *   "outputDir": "public/images/blog",
 *   "images": [
 *     {"filename": "hero.jpg", "query": "gym workout", "orientation": "landscape", "size": "large"},
 *     {"filename": "avatar.jpg", "query": "fitness portrait", "orientation": "square", "size": "small"}
 *   ]
 * }
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
if (!PEXELS_API_KEY) {
  console.error('Error: PEXELS_API_KEY environment variable not set');
  process.exit(1);
}

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { ...options, timeout: 30000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location, options).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function searchPexels(query, orientation, perPage = 5) {
  const params = new URLSearchParams({ query, per_page: String(perPage) });
  if (orientation) params.set('orientation', orientation);

  const data = await fetch(
    `https://api.pexels.com/v1/search?${params}`,
    { headers: { Authorization: PEXELS_API_KEY } }
  );

  const json = JSON.parse(data.toString());
  if (!json.photos || json.photos.length === 0) {
    throw new Error(`No photos found for: ${query}`);
  }
  return json.photos[0];
}

async function downloadImage(url, filepath) {
  const buffer = await fetch(url);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, buffer);
  return buffer.length;
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error('Usage: node scripts/download-pexels-images.js <config.json>');
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const baseDir = path.resolve(config.outputDir || 'public/images');

  console.log(`Output directory: ${baseDir}\n`);

  for (const img of config.images) {
    const filepath = path.join(baseDir, img.filename);
    try {
      const photo = await searchPexels(img.query, img.orientation || 'landscape');

      const sizeMap = {
        small: photo.src.small,
        medium: photo.src.medium,
        large: photo.src.large,
        large2x: photo.src.large2x,
      };
      const url = sizeMap[img.size || 'large'] || photo.src.large;

      const bytes = await downloadImage(url, filepath);
      const kb = (bytes / 1024).toFixed(0);
      console.log(`✓ ${img.filename} (${kb}KB) by ${photo.photographer}`);

      // Rate limit: max 200 requests/hour on Pexels free tier
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.error(`✗ ${img.filename}: ${err.message}`);
    }
  }
}

main().catch((err) => { console.error(err); process.exit(1); });