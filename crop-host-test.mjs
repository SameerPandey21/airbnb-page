import { execSync } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

// Let's crop a few test slices of frame_132.jpg to see where the host card is:
// Left column is roughly x=250 to x=950.
// y is between 100 and 800.
execSync(`"${ffmpeg.path}" -i public/images/frame_132.jpg -vf "crop=400:300:250:200" -q:v 2 public/images/host_slice_1.jpg -y`);
execSync(`"${ffmpeg.path}" -i public/images/frame_132.jpg -vf "crop=400:300:250:450" -q:v 2 public/images/host_slice_2.jpg -y`);
console.log('Slices saved');
