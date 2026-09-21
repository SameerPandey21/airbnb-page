import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

// In media_1789897469661.png (1024x490):
// Avatar is at roughly: x: 130 to 165, y: 170 to 205 (or around that area)
// Let's crop a box around x=125, y=165, w=50, h=50
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=40:40:130:170" "public/images/mirashya_avatar_test.png" -y`);

console.log('Avatar cropped');
