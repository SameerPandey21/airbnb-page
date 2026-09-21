import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

// 1. Right branch of big 4.95
// Let's test a few offsets for big laurel right:
// The '5' ended around 580. Laurel right should be around x=584 to 630.
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897631081.png" -vf "crop=48:95:584:35,colorkey=white:0.15:0.1" "public/images/laurel_large_right.png" -y`);

// 2. Right branch of small guest favourite in media_1789897469661.png
// Let's crop a strip around x=200 to 240, y=110 to 155 to see exactly where the right branch is
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=30:46:210:110,colorkey=white:0.12:0.05" "public/images/laurel_small_right.png" -y`);

// 3. And also crop the entire Guest favourite text + laurels as a single unit without the middle text "One of the most loved..."
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=102:46:146:110,colorkey=white:0.12:0.05" "public/images/guest_fav_badge.png" -y`);

console.log('Tested crops generated');
