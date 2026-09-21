import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const htmlPath = path.resolve('docs/architecture-template.html');
const outPng = path.resolve('docs/architecture_diagram.png');
const outPdf = path.resolve('docs/architecture_diagram.pdf');

// Check available browser executable
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browserExe = fs.existsSync(chromePath) ? chromePath : (fs.existsSync(edgePath) ? edgePath : null);

if (!browserExe) {
  console.error('No Chrome or Edge browser found!');
  process.exit(1);
}

console.log(`Using browser: ${browserExe}`);

// 1. Generate high-res PNG (2400x1350)
const screenshotCmd = `"${browserExe}" --headless=new --disable-gpu --force-device-scale-factor=1 --window-size=2400,1350 --screenshot="${outPng}" "file://${htmlPath}"`;
console.log('Generating PNG screenshot...');
execSync(screenshotCmd, { stdio: 'inherit' });
console.log(`Saved PNG to ${outPng}`);

// 2. Generate PDF
const pdfCmd = `"${browserExe}" --headless=new --disable-gpu --print-to-pdf-no-header --print-to-pdf="${outPdf}" "file://${htmlPath}"`;
console.log('Generating PDF document...');
execSync(pdfCmd, { stdio: 'inherit' });
console.log(`Saved PDF to ${outPdf}`);

// 3. Also copy to root directory and public for easy viewing
fs.copyFileSync(outPng, path.resolve('architecture_diagram.png'));
fs.copyFileSync(outPdf, path.resolve('architecture_diagram.pdf'));

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.copyFileSync(outPng, path.resolve('public/architecture_diagram.png'));
fs.copyFileSync(outPdf, path.resolve('public/architecture_diagram.pdf'));

console.log('Successfully generated architecture diagram image and PDF across workspace!');
