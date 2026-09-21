import { execSync } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

// Avatar is roughly 120x120 around x=340, y=545 in frame_132.jpg
execSync(`"${ffmpeg.path}" -i public/images/frame_132.jpg -vf "crop=120:120:340:545" -q:v 2 public/images/host_avatar.jpg -y`);
console.log('Saved host_avatar.jpg');
