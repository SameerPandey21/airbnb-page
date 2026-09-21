import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=18:18:633:50,colorkey=white:0.12:0.05" "public/images/discount_tag.png" -y`);
console.log('Discount tag cropped tightly');
