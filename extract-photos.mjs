import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const ffmpegPath = ffmpeg.path;
console.log('FFmpeg binary:', ffmpegPath);

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Timestamps to extract from Screen Recording 2026-09-18 164538.mp4
const frames = [
  { time: '00:00:02', name: 'hero_grid.jpg' },
  { time: '00:00:13', name: 'living_room_1_sofa.jpg' },
  { time: '00:00:14', name: 'living_room_1_tv.jpg' },
  { time: '00:00:15', name: 'living_room_2_jacuzzi.jpg' },
  { time: '00:00:16', name: 'living_room_2_atrium.jpg' },
  { time: '00:00:17', name: 'living_room_2_wide.jpg' },
  { time: '00:00:18', name: 'living_room_2_dining.jpg' },
  { time: '00:00:19', name: 'kitchen.jpg' },
  { time: '00:00:20', name: 'bedroom.jpg' },
  { time: '00:00:23', name: 'gym.jpg' },
  { time: '00:00:30', name: 'pool.jpg' },
  { time: '00:00:43', name: 'photo_tour_bathroom.jpg' },
  { time: '00:02:00', name: 'map_candolim.jpg' },
  { time: '00:02:22', name: 'nearby_stays.jpg' },
];

for (const frame of frames) {
  const outPath = path.join(outputDir, frame.name);
  const cmd = `"${ffmpegPath}" -ss ${frame.time} -i "Screen Recording 2026-09-18 164538.mp4" -vframes 1 -q:v 2 "${outPath}" -y`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Extracted ${frame.name}`);
  } catch (err) {
    console.error(`Failed ${frame.name}:`, err.message);
  }
}
