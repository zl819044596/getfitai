const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = '/Volumes/Data/GitHub/getfitai/public/images';
const maxSizeKB = 80; // 压缩目标：80KB

async function compressImage(filePath) {
  const stats = fs.statSync(filePath);
  const originalSize = stats.size / 1024;
  
  if (originalSize <= maxSizeKB) return null;
  
  const ext = path.extname(filePath).toLowerCase();
  const tempPath = filePath + '.tmp';
  
  let pipeline = sharp(filePath);
  const metadata = await pipeline.metadata();
  
  // 如果图片宽度超过 1200px，先缩小
  if (metadata.width > 1200) {
    pipeline = pipeline.resize(1200, null, { withoutEnlargement: true });
  }
  
  // 根据格式压缩
  if (ext === '.jpg' || ext === '.jpeg') {
    await pipeline.jpeg({ quality: 75, progressive: true }).toFile(tempPath);
  } else if (ext === '.png') {
    await pipeline.png({ quality: 75, compressionLevel: 9 }).toFile(tempPath);
  } else if (ext === '.webp') {
    await pipeline.webp({ quality: 75 }).toFile(tempPath);
  } else {
    return null;
  }
  
  const newStats = fs.statSync(tempPath);
  const newSize = newStats.size / 1024;
  
  // 如果压缩后还超过 100KB，继续降低质量
  if (newSize > 100) {
    fs.unlinkSync(tempPath);
    let quality = 60;
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality, progressive: true }).toFile(tempPath);
    } else if (ext === '.png') {
      await pipeline.png({ quality, compressionLevel: 9 }).toFile(tempPath);
    } else if (ext === '.webp') {
      await pipeline.webp({ quality }).toFile(tempPath);
    }
    
    const finalStats = fs.statSync(tempPath);
    const finalSize = finalStats.size / 1024;
    
    fs.renameSync(tempPath, filePath);
    return { file: filePath, original: originalSize.toFixed(1), new: finalSize.toFixed(1) };
  }
  
  fs.renameSync(tempPath, filePath);
  return { file: filePath, original: originalSize.toFixed(1), new: newSize.toFixed(1) };
}

async function main() {
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(imagesDir);
  
  const results = [];
  for (const file of files) {
    const result = await compressImage(file);
    if (result) results.push(result);
  }
  
  console.log('Compressed images:');
  results.forEach(r => console.log(`${r.file}: ${r.original}KB → ${r.new}KB`));
  console.log(`\nTotal: ${results.length} images compressed`);
}

main().catch(console.error);
