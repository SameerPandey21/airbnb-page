import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

// 1. Host avatar
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=34:34:132:169" "public/images/mirashya_host_avatar.png" -y`);

// 2. Discount green tag
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=30:30:629:43,colorkey=white:0.12:0.05" "public/images/discount_tag.png" -y`);

// 3. Laurel large right
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897631081.png" -vf "crop=45:95:588:35,colorkey=white:0.15:0.1" "public/images/laurel_large_right.png" -y`);

// 4. Laurel large left
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897631081.png" -vf "crop=45:95:408:35,colorkey=white:0.15:0.1" "public/images/laurel_large_left.png" -y`);

// 5. Small guest fav badge (combined laurels and text)
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=86:44:148:111,colorkey=white:0.12:0.05" "public/images/guest_fav_badge.png" -y`);

// 6. Laurel small left
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=20:44:148:111,colorkey=white:0.12:0.05" "public/images/laurel_small_left.png" -y`);

// 7. Laurel small right
execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" -vf "crop=20:44:213:111,colorkey=white:0.12:0.05" "public/images/laurel_small_right.png" -y`);

console.log('All crops regenerated with precision');
