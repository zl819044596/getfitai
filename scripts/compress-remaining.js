const sharp = require('sharp');

async function compress(file, quality, width) {
  let pipeline = sharp(file);
  if (width) pipeline = pipeline.resize(width, null, { withoutEnlargement: true });
  await pipeline.jpeg({ quality, progressive: true }).toFile(file + '.tmp');
  require('fs').renameSync(file + '.tmp', file);
  const stats = require('fs').statSync(file);
  console.log(`${file}: ${(stats.size/1024).toFixed(1)}KB`);
}

compress('/Volumes/Data/GitHub/getfitai/public/images/blog/meal-prep.jpg', 40, 800);
compress('/Volumes/Data/GitHub/getfitai/public/images/workout-1.jpg', 45, 800);
