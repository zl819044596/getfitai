#!/usr/bin/env node
/**
 * Generate OG (Open Graph) images for social sharing
 * Creates 1200x630 PNGs with brand styling
 *
 * Usage: node scripts/generate-og-images.js <config.json>
 *
 * Config format:
 * {
 *   "outputDir": "public/images",
 *   "images": [
 *     {"filename": "og-home.png", "title": "Home Workouts", "subtitle": "No equipment needed", "cta": "Start Free"}
 *   ]
 * }
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');

// Simple 5x7 bitmap font
const FONT = {
  'A': [0b00100,0b01010,0b10001,0b11111,0b10001,0b10001,0b10001],
  'B': [0b11110,0b10001,0b11110,0b10001,0b10001,0b10001,0b11110],
  'C': [0b01110,0b10001,0b10000,0b10000,0b10000,0b10001,0b01110],
  'D': [0b11110,0b10001,0b10001,0b10001,0b10001,0b10001,0b11110],
  'E': [0b11111,0b10000,0b11110,0b10000,0b10000,0b10000,0b11111],
  'F': [0b11111,0b10000,0b11110,0b10000,0b10000,0b10000,0b10000],
  'G': [0b01110,0b10001,0b10000,0b10011,0b10001,0b10001,0b01110],
  'H': [0b10001,0b10001,0b10001,0b11111,0b10001,0b10001,0b10001],
  'I': [0b01110,0b00100,0b00100,0b00100,0b00100,0b00100,0b01110],
  'J': [0b00001,0b00001,0b00001,0b00001,0b10001,0b10001,0b01110],
  'K': [0b10001,0b10010,0b10100,0b11000,0b10100,0b10010,0b10001],
  'L': [0b10000,0b10000,0b10000,0b10000,0b10000,0b10000,0b11111],
  'M': [0b10001,0b11011,0b10101,0b10001,0b10001,0b10001,0b10001],
  'N': [0b10001,0b11001,0b10101,0b10011,0b10001,0b10001,0b10001],
  'O': [0b01110,0b10001,0b10001,0b10001,0b10001,0b10001,0b01110],
  'P': [0b11110,0b10001,0b10001,0b11110,0b10000,0b10000,0b10000],
  'Q': [0b01110,0b10001,0b10001,0b10001,0b10101,0b10010,0b01101],
  'R': [0b11110,0b10001,0b10001,0b11110,0b10100,0b10010,0b10001],
  'S': [0b01111,0b10000,0b10000,0b01110,0b00001,0b00001,0b11110],
  'T': [0b11111,0b00100,0b00100,0b00100,0b00100,0b00100,0b00100],
  'U': [0b10001,0b10001,0b10001,0b10001,0b10001,0b10001,0b01110],
  'V': [0b10001,0b10001,0b10001,0b10001,0b10001,0b01010,0b00100],
  'W': [0b10001,0b10001,0b10001,0b10101,0b10101,0b10101,0b01010],
  'X': [0b10001,0b10001,0b01010,0b00100,0b01010,0b10001,0b10001],
  'Y': [0b10001,0b10001,0b01010,0b00100,0b00100,0b00100,0b00100],
  'Z': [0b11111,0b00001,0b00010,0b00100,0b01000,0b10000,0b11111],
  'a': [0b00000,0b00000,0b01110,0b00001,0b01111,0b10001,0b01111],
  'b': [0b10000,0b10000,0b10110,0b11001,0b10001,0b10001,0b11110],
  'c': [0b00000,0b00000,0b01110,0b10000,0b10000,0b10001,0b01110],
  'd': [0b00001,0b00001,0b01011,0b10011,0b10001,0b10001,0b01111],
  'e': [0b00000,0b00000,0b01110,0b10001,0b11111,0b10000,0b01110],
  'f': [0b00110,0b01000,0b11100,0b01000,0b01000,0b01000,0b01000],
  'g': [0b00000,0b00000,0b01111,0b10001,0b10001,0b01111,0b00001,0b01110],
  'h': [0b10000,0b10000,0b10110,0b11001,0b10001,0b10001,0b10001],
  'i': [0b00100,0b00000,0b01100,0b00100,0b00100,0b00100,0b01110],
  'j': [0b00010,0b00000,0b00110,0b00010,0b00010,0b10010,0b01100],
  'k': [0b10000,0b10000,0b10010,0b10100,0b11000,0b10100,0b10010],
  'l': [0b01100,0b00100,0b00100,0b00100,0b00100,0b00100,0b01110],
  'm': [0b00000,0b00000,0b11010,0b10101,0b10101,0b10001,0b10001],
  'n': [0b00000,0b00000,0b10110,0b11001,0b10001,0b10001,0b10001],
  'o': [0b00000,0b00000,0b01110,0b10001,0b10001,0b10001,0b01110],
  'p': [0b00000,0b00000,0b11110,0b10001,0b10001,0b11110,0b10000,0b10000],
  'q': [0b00000,0b00000,0b01111,0b10001,0b10001,0b01111,0b00001,0b00001],
  'r': [0b00000,0b00000,0b10110,0b11001,0b10000,0b10000,0b10000],
  's': [0b00000,0b00000,0b01111,0b10000,0b01110,0b00001,0b11110],
  't': [0b01000,0b01000,0b11100,0b01000,0b01000,0b01001,0b00110],
  'u': [0b00000,0b00000,0b10001,0b10001,0b10001,0b10011,0b01101],
  'v': [0b00000,0b00000,0b10001,0b10001,0b10001,0b01010,0b00100],
  'w': [0b00000,0b00000,0b10001,0b10001,0b10101,0b10101,0b01010],
  'x': [0b00000,0b00000,0b10001,0b01010,0b00100,0b01010,0b10001],
  'y': [0b00000,0b00000,0b10001,0b10001,0b10001,0b01111,0b00001,0b01110],
  'z': [0b00000,0b00000,0b11111,0b00010,0b00100,0b01000,0b11111],
  '0': [0b01110,0b10011,0b10101,0b10101,0b11001,0b10001,0b01110],
  '1': [0b00100,0b01100,0b00100,0b00100,0b00100,0b00100,0b01110],
  '2': [0b01110,0b10001,0b00001,0b00110,0b01000,0b10000,0b11111],
  '3': [0b01110,0b10001,0b00001,0b00110,0b00001,0b10001,0b01110],
  '4': [0b00010,0b00110,0b01010,0b10010,0b11111,0b00010,0b00010],
  '5': [0b11111,0b10000,0b11110,0b00001,0b00001,0b10001,0b01110],
  '6': [0b01110,0b10001,0b10000,0b11110,0b10001,0b10001,0b01110],
  '7': [0b11111,0b00001,0b00010,0b00100,0b01000,0b01000,0b01000],
  '8': [0b01110,0b10001,0b10001,0b01110,0b10001,0b10001,0b01110],
  '9': [0b01110,0b10001,0b10001,0b01111,0b00001,0b10001,0b01110],
  ' ': [0,0,0,0,0,0,0],
  '-': [0,0,0,0b11111,0,0,0],
  '?': [0b01110,0b10001,0b00001,0b00110,0b00100,0,0b00100],
  '!': [0b00100,0b00100,0b00100,0b00100,0,0b00100,0],
  '.': [0,0,0,0,0,0b01100,0b01100],
  '/': [0b00001,0b00010,0b00100,0b01000,0b10000,0,0],
  ':': [0,0b01100,0b01100,0,0b01100,0b01100,0],
  '+': [0,0b00100,0b00100,0b11111,0b00100,0b00100,0],
  '·': [0,0,0,0b01100,0b01100,0,0],
};

function crc32(buf) {
  let table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ -1) >>> 0;
}

function createPNG(W, H, pixels) {
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  const rowSize = W * 3 + 1;
  const rawData = Buffer.alloc(H * rowSize);
  for (let y = 0; y < H; y++) {
    rawData[y * rowSize] = 0;
    for (let x = 0; x < W; x++) {
      const idx = (y * W + x) * 4;
      const offset = y * rowSize + 1 + x * 3;
      rawData[offset] = pixels[idx];
      rawData[offset + 1] = pixels[idx + 1];
      rawData[offset + 2] = pixels[idx + 2];
    }
  }
  const compressed = zlib.deflateSync(rawData);

  return Buffer.concat([
    signature, chunk('IHDR', ihdr), chunk('IDAT', compressed), chunk('IEND', Buffer.alloc(0))
  ]);
}

function drawRect(pixels, W, H, x, y, rw, rh, r, g, b) {
  for (let py = Math.max(0, y); py < Math.min(H, y + rh); py++) {
    for (let px = Math.max(0, x); px < Math.min(W, x + rw); px++) {
      const idx = (py * W + px) * 4;
      pixels[idx] = r; pixels[idx + 1] = g; pixels[idx + 2] = b;
    }
  }
}

function drawCircle(pixels, W, H, cx, cy, radius, r, g, b, alpha) {
  for (let py = Math.max(0, cy - radius); py < Math.min(H, cy + radius); py++) {
    for (let px = Math.max(0, cx - radius); px < Math.min(W, cx + radius); px++) {
      const dist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
      if (dist <= radius) {
        const idx = (py * W + px) * 4;
        const a = alpha * (1 - dist / radius);
        pixels[idx] = Math.min(255, pixels[idx] + r * a);
        pixels[idx + 1] = Math.min(255, pixels[idx + 1] + g * a);
        pixels[idx + 2] = Math.min(255, pixels[idx + 2] + b * a);
      }
    }
  }
}

function drawText(pixels, W, H, text, startX, startY, scale, r, g, b) {
  let x = startX;
  for (const char of text) {
    const pattern = FONT[char];
    if (!pattern) { x += 4 * scale; continue; }
    const height = pattern.length;
    const width = 5;
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if ((pattern[row] >> (4 - col)) & 1) {
          for (let sy = 0; sy < scale; sy++) {
            for (let sx = 0; sx < scale; sx++) {
              const px = x + col * scale + sx;
              const py = startY + row * scale + sy;
              if (px >= 0 && px < W && py >= 0 && py < H) {
                const idx = (py * W + px) * 4;
                pixels[idx] = r; pixels[idx + 1] = g; pixels[idx + 2] = b;
              }
            }
          }
        }
      }
    }
    x += (width + 1) * scale;
  }
}

function createOGImage(title, subtitle, cta, outputPath) {
  const W = 1200, H = 630;
  const pixels = Buffer.alloc(W * H * 4);

  // Background #020617
  for (let i = 0; i < W * H; i++) {
    pixels[i * 4] = 2; pixels[i * 4 + 1] = 6; pixels[i * 4 + 2] = 23; pixels[i * 4 + 3] = 255;
  }

  // Orange glow top-right
  drawCircle(pixels, W, H, 900, 100, 400, 249, 115, 22, 0.12);

  // Logo square
  drawRect(pixels, W, H, 80, 80, 60, 60, 249, 115, 22);

  // Decorative circle
  const cx = 1050, cy = 500, radius = 120;
  for (let i = 0; i < 360; i++) {
    const angle = (i * Math.PI) / 180;
    const x = Math.round(cx + radius * Math.cos(angle));
    const y = Math.round(cy + radius * Math.sin(angle));
    if (x >= 0 && x < W && y >= 0 && y < H) {
      const idx = (y * W + x) * 4;
      pixels[idx] = 249; pixels[idx + 1] = 115; pixels[idx + 2] = 22;
    }
  }

  // Brand
  drawText(pixels, W, H, 'GetFitAI', 160, 95, 4, 255, 255, 255);

  // Title
  drawText(pixels, W, H, title, 80, 240, 5, 255, 255, 255);

  // Subtitle
  drawText(pixels, W, H, subtitle, 80, 320, 3, 148, 163, 184);

  // CTA button
  drawRect(pixels, W, H, 80, 400, 280, 50, 249, 115, 22);
  drawText(pixels, W, H, cta, 110, 415, 3, 255, 255, 255);

  const png = createPNG(W, H, pixels);
  fs.writeFileSync(outputPath, png);
  console.log(`Created ${outputPath} (${(png.length / 1024).toFixed(1)}KB)`);
}

function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error('Usage: node scripts/generate-og-images.js <config.json>');
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const outDir = path.resolve(config.outputDir || 'public/images');
  fs.mkdirSync(outDir, { recursive: true });

  for (const img of config.images) {
    const filepath = path.join(outDir, img.filename);
    createOGImage(img.title || '', img.subtitle || '', img.cta || 'Get Started', filepath);
  }

  console.log('Done!');
}

main();