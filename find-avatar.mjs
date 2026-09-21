import { execSync } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

try {
  const cmd = `"${ffmpeg.path}" -i public/images/host_frame.jpg -vf "crop=600:400:200:300" -q:v 2 public/images/test_host_area.jpg -y`;
  execSync(cmd);
  console.log('Saved test_host_area.jpg');
} catch (e) {
  console.error(e.message);
}
