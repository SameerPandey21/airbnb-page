import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import path from 'path';

const ffmpegPath = ffmpeg.path;

// In nearby_frame.jpg (1916x968):
// The 4 cards are positioned horizontally:
// Card 1: x=250, y=550, w=262, h=250
// Card 2: x=536, y=550, w=262, h=250
// Card 3: x=822, y=550, w=262, h=250
// Card 4: x=1108, y=550, w=262, h=250

const nearbyCrops = [
  { name: 'nearby_1.jpg', crop: 'crop=260:248:252:550' },
  { name: 'nearby_2.jpg', crop: 'crop=260:248:538:550' },
  { name: 'nearby_3.jpg', crop: 'crop=260:248:824:550' },
  { name: 'nearby_4.jpg', crop: 'crop=260:248:1110:550' },
];

for (const nc of nearbyCrops) {
  const inP = path.join('public/images/nearby_frame.jpg');
  const outP = path.join('public/images', nc.name);
  const cmd = `"${ffmpegPath}" -i "${inP}" -vf "${nc.crop}" -q:v 2 "${outP}" -y`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Cropped ${nc.name}`);
  } catch (e) {
    console.error(e.message);
  }
}
