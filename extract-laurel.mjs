import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import path from 'path';

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

// Extract large 4.95 laurel branches from media_1789897631081.png (1024x408)
// In media_1789897631081.png:
// The big 4.95 emblem is at:
// Left branch: x: 410, y: 35, width: 45, height: 95
// Right branch: x: 575, y: 35, width: 45, height: 95
// Let's crop them with colorkey=white for transparent background
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897631081.png" -vf "crop=48:95:408:35,colorkey=white:0.15:0.1" "public/images/laurel_large_left.png" -y`);
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897631081.png" -vf "crop=48:95:575:35,colorkey=white:0.15:0.1" "public/images/laurel_large_right.png" -y`);

// Extract small Guest favourite badge from media_1789897469661.png (1024x490)
// The whole Guest favourite badge (left branch, Guest favourite text, right branch):
// x: 145 to 255, y: 110 to 155
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=110:46:146:110,colorkey=white:0.12:0.05" "public/images/guest_fav_badge.png" -y`);

// Extract individual small laurel branches
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=24:46:146:110,colorkey=white:0.12:0.05" "public/images/laurel_small_left.png" -y`);
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=24:46:232:110,colorkey=white:0.12:0.05" "public/images/laurel_small_right.png" -y`);

console.log('Laurel assets extracted successfully!');
