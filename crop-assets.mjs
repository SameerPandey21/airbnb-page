import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execSync } from 'child_process';
import path from 'path';

const ffmpegPath = ffmpeg.path;

// In 1916x968 video frame of lightbox:
// The photo is centered in the viewport between header (y=75) and bottom (y=925)
// Height is approx 820px, width is approx 1100px-1200px.
// Let's crop the center photo cleanly:
const crops = [
  // Center photo in lightbox: w=1100, h=780, x=(1916-1100)/2 = 408, y=100
  { src: 'living_room_1_sofa.jpg', out: 'living_room_1.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'living_room_1_tv.jpg', out: 'living_room_tv.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'living_room_2_jacuzzi.jpg', out: 'jacuzzi_deck.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'living_room_2_atrium.jpg', out: 'atrium_view.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'living_room_2_wide.jpg', out: 'living_room_wide.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'kitchen.jpg', out: 'kitchen_clean.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'bedroom.jpg', out: 'bedroom_clean.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'gym.jpg', out: 'gym_clean.jpg', crop: 'crop=1080:760:418:105' },
  { src: 'pool.jpg', out: 'pool_clean.jpg', crop: 'crop=1080:760:418:105' },
];

for (const c of crops) {
  const inP = path.join('public/images', c.src);
  const outP = path.join('public/images', c.out);
  const cmd = `"${ffmpegPath}" -i "${inP}" -vf "${c.crop}" -q:v 2 "${outP}" -y`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Cropped ${c.out}`);
  } catch (e) {
    console.error(`Failed crop ${c.out}:`, e.message);
  }
}

// Now let's extract the 5 hero grid items directly from hero_grid.jpg (which is 1916x968)
// In hero_grid.jpg:
// The listing container is centered.
// Grid starts around y=200 to y=660 (height ~460px), x=248 to 1668 (width ~1420px)
// Let's crop the exact 5 tiles:
// 1. Big main left image: x=250, y=206, w=705, h=455
// 2. Top-middle: x=965, y=206, w=345, h=223
// 3. Top-right: x=1320, y=206, w=345, h=223
// 4. Bottom-middle: x=965, y=438, w=345, h=223
// 5. Bottom-right: x=1320, y=438, w=345, h=223

const heroTiles = [
  { name: 'hero_1_main.jpg', crop: 'crop=700:454:253:206' },
  { name: 'hero_2_top_mid.jpg', crop: 'crop=344:222:963:206' },
  { name: 'hero_3_top_right.jpg', crop: 'crop=344:222:1316:206' },
  { name: 'hero_4_bot_mid.jpg', crop: 'crop=344:222:963:438' },
  { name: 'hero_5_bot_right.jpg', crop: 'crop=344:222:1316:438' },
];

for (const tile of heroTiles) {
  const inP = path.join('public/images/hero_grid.jpg');
  const outP = path.join('public/images', tile.name);
  const cmd = `"${ffmpegPath}" -i "${inP}" -vf "${tile.crop}" -q:v 2 "${outP}" -y`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Extracted hero tile ${tile.name}`);
  } catch (e) {
    console.error(`Failed hero tile ${tile.name}:`, e.message);
  }
}
