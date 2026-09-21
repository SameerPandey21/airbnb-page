import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

// Perfectly center the 32x32 circle avatar
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=34:34:133:175" "public/images/mirashya_host_avatar.png" -y`);

// Also crop the green discount tag icon from media_1789897469661.png
// The tag is at roughly: x: 630, y: 55, w: 25, h: 25
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=24:24:630:57,colorkey=white:0.12:0.05" "public/images/discount_tag.png" -y`);

console.log('Avatar and discount tag cropped');
