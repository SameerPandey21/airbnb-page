import fs from 'fs';
import path from 'path';

const source = 'C:\\Users\\samee\\.gemini\\antigravity-ide\\brain\\808f2768-fb0a-45b1-a935-f7df53e8369f\\architecture_1789757634324.jpg';
const destDir = path.resolve('docs');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(source, path.join(destDir, 'architecture.png'));
console.log('Successfully copied architecture diagram to docs/architecture.png');
