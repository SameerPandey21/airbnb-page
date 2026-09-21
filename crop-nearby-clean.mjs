import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import path from 'path';

// Clean crop without text at the bottom:
// Height 214 completely excludes the titles below the cards
const cards = [
  { name: 'nearby_1.jpg', crop: 'crop=255:214:235:672' },
  { name: 'nearby_2.jpg', crop: 'crop=255:214:526:672' },
  { name: 'nearby_3.jpg', crop: 'crop=255:214:835:672' },
  { name: 'nearby_4.jpg', crop: 'crop=255:214:1144:672' },
  { name: 'nearby_5.jpg', crop: 'crop=255:214:1453:672' },
];

for (const c of cards) {
  const inP = path.join('public/images/nearby_frame.jpg');
  const outP = path.join('public/images', c.name);
  const cmd = `"${ffmpeg.path}" -i "${inP}" -vf "${c.crop}" -q:v 2 "${outP}" -y`;
  execSync(cmd, { stdio: 'pipe' });
  console.log(`Saved ${c.name}`);
}
