import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the directory name from the current module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshots() {
  // HTML files to convert to PNG
  const files = [
    'hero-app-mockup.html',
    'feature-snap-mockup.html',
    'feature-analysis-mockup.html',
    'feature-coach-mockup.html'
  ];

  const browser = await puppeteer.launch();
  
  for (const file of files) {
    const page = await browser.newPage();
    
    // Set viewport to match phone dimensions
    await page.setViewport({
      width: 395,  // 375 + 20 (for border)
      height: 832, // 812 + 20 (for border)
      deviceScaleFactor: 2  // For higher resolution
    });
    
    // Get the full path to the HTML file
    const htmlPath = path.join(__dirname, 'public', 'images', file);
    const fileUrl = `file://${htmlPath}`;
    
    // Navigate to the HTML file
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Take a screenshot
    const outputPath = path.join(__dirname, 'public', 'images', file.replace('.html', '.png'));
    await page.screenshot({ path: outputPath });
    
    console.log(`Created ${outputPath}`);
    await page.close();
  }
  
  await browser.close();
  console.log('All screenshots captured successfully!');
}

captureScreenshots().catch(console.error);
