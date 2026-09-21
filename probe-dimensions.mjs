import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import path from 'path';

const ffmpegPath = ffmpeg.path;
const probeCmd = `"${ffmpegPath}" -i "public/images/living_room_1_sofa.jpg"`;
try {
  execSync(probeCmd, { stdio: 'pipe' });
} catch (e) {
  console.log(e.stderr.toString());
}
