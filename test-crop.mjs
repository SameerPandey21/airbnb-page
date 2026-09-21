import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import path from 'path';

// Let's adjust:
// In nearby_frame.jpg:
// Photo height is around 235px (from y=672 to y=907)
// Card 1 starts at x=170, w=245, h=235
// Gaps between cards:
// Let's test Card 1: x=170, y=672, w=245, h=235
execSync(`"${ffmpeg.path}" -i public/images/nearby_frame.jpg -vf "crop=250:235:168:672" -q:v 2 public/images/test_nearby_1.jpg -y`);
