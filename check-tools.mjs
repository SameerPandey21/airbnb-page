import { execSync } from 'child_process';

try {
  const ffmpegPath = execSync('where ffmpeg').toString().trim();
  console.log('FFMPEG_FOUND:', ffmpegPath);
} catch (e) {
  console.log('FFMPEG_NOT_FOUND');
}
