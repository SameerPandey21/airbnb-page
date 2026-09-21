import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/crops');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

// 1. Big 4.95 with laurel wreath from media_1789897631081.png (1024x408)
// The 4.95 emblem is roughly centered horizontally (x: 350 to 670), y: 10 to 140
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897631081.png" -vf "crop=360:150:330:10" "${outDir}/big_laurel_495.png" -y`);

// 2. Guest favourite banner badge from media_1789897469661.png (1024x490)
// The card is on the left side: x: 130 to 570, y: 100 to 160
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=460:70:125:95" "${outDir}/guest_fav_banner.png" -y`);

// 3. Discount 10% banner from media_1789897469661.png (1024x490)
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=280:75:615:20" "${outDir}/discount_box.png" -y`);

// 5. Highlights section from media_1789897469661.png
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=440:170:125:215" "${outDir}/highlights_section.png" -y`);

console.log('Crops generated successfully in public/images/crops/');
