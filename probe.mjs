import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';

const userDir = 'C:/Users/samee/.gemini/antigravity-ide/brain/44bd0f88-548a-4937-89a7-e2e09d7e4ac6/.user_uploaded';

try {
  const out1 = execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897469661.png" 2>&1`).toString();
  const match1 = out1.match(/Stream.*Video.* (\d+x\d+)/);
  console.log('media_1789897469661.png size:', match1 ? match1[1] : 'unknown');

  const out2 = execSync(`"${ffmpeg.path}" -i "${userDir}/media_1789897631081.png" 2>&1`).toString();
  const match2 = out2.match(/Stream.*Video.* (\d+x\d+)/);
  console.log('media_1789897631081.png size:', match2 ? match2[1] : 'unknown');
} catch (e) {
  console.error(e);
}
