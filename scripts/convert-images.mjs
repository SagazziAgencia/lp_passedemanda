import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

async function convertImages() {
  const files = fs.readdirSync(publicDir);
  
  console.log('🖼️  Converting images to WebP format...\n');
  
  for (const file of files) {
    if (file.endsWith('.png') && !file.includes('favicon')) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, file.replace('.png', '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const webpSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`✓ ${file.padEnd(20)} → ${file.replace('.png', '.webp').padEnd(20)} (${savings}% smaller)`);
      } catch (error) {
        console.error(`✗ Error converting ${file}:`, error.message);
      }
    }
  }
  
  console.log('\n✅ Conversion complete!');
}

convertImages().catch(console.error);
