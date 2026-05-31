const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');

// Simple bitmap font (5x7)
const font = {
  'G': [0b01110,0b10000,0b10111,0b10001,0b01110],
  'e': [0b00000,0b01110,0b10001,0b11111,0b00001,0b01110],
  't': [0b00100,0b01110,0b00100,0b00100,0b00100,0b00010],
  'F': [0b11111,0b10000,0b11110,0b10000,0b10000],
  'i': [0b00100,0b00000,0b00100,0b00100,0b00100],
  'A': [0b00100,0b01010,0b10001,0b11111,0b10001],
  'I': [0b01110,0b00100,0b00100,0b00100,0b01110],
  'B': [0b11110,0b10001,0b11110,0b10001,0b11110],
  'n': [0b00000,0b10110,0b11001,0b10001,0b10001],
  'g': [0b00000,0b01111,0b10001,0b10001,0b01111,0b00001,0b01110],
  'r': [0b00000,0b01010,0b10100,0b10000,0b10000],
  'W': [0b10001,0b10001,0b10101,0b10101,0b01010],
  'o': [0b00000,0b01110,0b10001,0b10001,0b01110],
  'k': [0b10000,0b10010,0b11100,0b10010,0b10001],
  'u': [0b00000,0b10001,0b10001,0b10001,0b01110],
  'P': [0b11110,0b10001,0b11110,0b10000,0b10000],
  'l': [0b01100,0b00100,0b00100,0b00100,0b01110],
  'a': [0b00000,0b01111,0b00001,0b01111,0b01111],
  's': [0b00000,0b01111,0b01110,0b00001,0b11110],
  'G': [0b01110,0b10001,0b10011,0b10001,0b01110],
  'y': [0b00000,0b10001,0b10001,0b01111,0b00001,0b01110],
  'm': [0b00000,0b10010,0b11111,0b10001,0b10001],
  'H': [0b10001,0b10001,0b11111,0b10001,0b10001],
  'v': [0b00000,0b10001,0b10001,0b01010,0b01010],
  'd': [0b00001,0b01111,0b10001,0b10001,0b01111],
  ' ': [0b00000,0b00000,0b00000,0b00000],
  '-': [0b00000,0b00000,0b11111,0b00000,0b00000],
  '?': [0b01110,0b10001,0b00110,0b00100,0b00000,0b00100],
  '!': [0b00100,0b00100,0b00100,0b00000,0b00100],
};

function drawText(pixels, W, H, text, startX, startY, scale, r, g, b) {
  let x = startX;
  for (const char of text) {
    const pattern = font[char] || font['?'];
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
                pixels[idx] = r;
                pixels[idx + 1] = g;
                pixels[idx + 2] = b;
              }
            }
          }
        }
      }
    }
    x += (width + 1) * scale;
  }
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
  
  function crc32(buf) {
    return require('buffer').Buffer.from(crypto.createHash('md5').update(buf).digest()).readUInt32BE(0);
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

function createOGImage(title, subtitle, cta, outputPath) {
  const W = 1200, H = 630;
  const pixels = Buffer.alloc(W * H * 4);
  
  // Background #020617
  for (let i = 0; i < W * H; i++) {
    pixels[i * 4] = 2; pixels[i * 4 + 1] = 6; pixels[i * 4 + 2] = 23; pixels[i * 4 + 3] = 255;
  }
  
  // Orange glow
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const dist = Math.sqrt((x - 900) ** 2 + (y - 100) ** 2);
      if (dist < 400) {
        const idx = (y * W + x) * 4;
        const intensity = 0.12 * (1 - dist / 400);
        pixels[idx] = Math.min(255, pixels[idx] + 249 * intensity);
        pixels[idx + 1] = Math.min(255, pixels[idx + 1] + 115 * intensity);
        pixels[idx + 2] = Math.min(255, pixels[idx + 2] + 22 * intensity);
      }
    }
  }
  
  // Logo
  for (let y = 80; y < 140; y++) {
    for (let x = 80; x < 140; x++) {
      const idx = (y * W + x) * 4;
      pixels[idx] = 249; pixels[idx + 1] = 115; pixels[idx + 2] = 22;
    }
  }
  
  // Decorative circle outline
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
  
  // Draw text
  drawText(pixels, W, H, 'GetFitAI', 160, 95, 4, 255, 255, 255);
  drawText(pixels, W, H, title, 80, 240, 5, 255, 255, 255);
  drawText(pixels, W, H, subtitle, 80, 320, 3, 148, 163, 184);
  
  // CTA button background
  for (let y = 400; y < 450; y++) {
    for (let x = 80; x < 340; x++) {
      const idx = (y * W + x) * 4;
      pixels[idx] = 249; pixels[idx + 1] = 115; pixels[idx + 2] = 22;
    }
  }
  drawText(pixels, W, H, cta, 110, 415, 3, 255, 255, 255);
  
  const png = createPNG(W, H, pixels);
  fs.writeFileSync(outputPath, png);
  console.log(`Created ${outputPath} (${(png.length / 1024).toFixed(1)}KB)`);
}

const outDir = path.join(__dirname, '../public/images');

createOGImage('Beginner Workout Plans', 'Start your fitness journey with AI', 'Generate Free Plan', path.join(outDir, 'og-beginner.png'));
createOGImage('Gym Workout Generator', 'Maximize your gym time', 'Build My Plan', path.join(outDir, 'og-gym.png'));
createOGImage('Home Workouts', 'No equipment? No problem.', 'Start at Home', path.join(outDir, 'og-home.png'));

console.log('All OG images generated!');