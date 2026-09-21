import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import path from 'path';

const ffmpegPath = ffmpeg.path;

// Extract bathroom from photo tour frame
// At 00:43: photo_tour_bathroom.jpg has the bathroom photo in the middle right
// In 00:02:12: host avatar and info is visible!
// Let's extract host avatar frame at 00:02:10
const extraFrames = [
  { time: '00:02:10', name: 'host_frame.jpg' },
  { time: '00:02:22', name: 'nearby_frame.jpg' },
  { time: '00:00:43', name: 'bathroom_frame.jpg' }
];

for (const f of extraFrames) {
  const outPath = path.join('public/images', f.name);
  const cmd = `"${ffmpegPath}" -ss ${f.time} -i "Screen Recording 2026-09-18 164538.mp4" -vframes 1 -q:v 2 "${outPath}" -y`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Extracted ${f.name}`);
  } catch (e) {
    console.error(e.message);
  }
}

// Extract bathroom picture from bathroom_frame.jpg
// Crop the round/rectangular bathroom photo
const extraCrops = [
  // Bathroom photo on right side of photo tour:
  { in: 'bathroom_frame.jpg', out: 'bathroom_clean.jpg', crop: 'crop=580:400:980:120' },
  // Host avatar:
  { in: 'host_frame.jpg', out: 'host_avatar.jpg', crop: 'crop=104:104:255:408' },
  // Map snippet:
  { in: 'map_candolim.jpg', out: 'candolim_map.jpg', crop: 'crop=1120:460:250:620' },
];

for (const c of extraCrops) {
  const inP = path.join('public/images', c.in);
  const outP = path.join('public/images', c.out);
  const cmd = `"${ffmpegPath}" -i "${inP}" -vf "${c.crop}" -q:v 2 "${outP}" -y`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Cropped ${c.out}`);
  } catch (e) {
    console.error(e.message);
  }
}
