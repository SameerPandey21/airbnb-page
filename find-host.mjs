import { execSync } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

// Let's dump frames around 00:02:05 to 00:02:15
for (let s = 120; s <= 135; s += 3) {
  const mm = String(Math.floor(s / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  const time = `00:${mm}:${ss}`;
  execSync(`"${ffmpeg.path}" -ss ${time} -i "Screen Recording 2026-09-18 164538.mp4" -vframes 1 -q:v 2 "public/images/frame_${s}.jpg" -y`);
  console.log(`Saved frame_${s}.jpg at ${time}`);
}
