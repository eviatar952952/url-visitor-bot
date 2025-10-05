const puppeteer = require('puppeteer');

async function visitUrl() {
  console.log('Starting browser...');
  // Flags needed for running in an automated environment
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  // The URL the bot will visit. Change it here if needed in the future.
  const targetUrl = 'https://hanahotplus-jlm.base44.app/AutoGenerateAI';

  console.log(`Navigating to ${targetUrl}...`);
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });

  console.log('Waiting for 10 seconds to let scripts run...');
  await new Promise(resolve => setTimeout(resolve, 10000)); 

  console.log('Closing browser.');
  await browser.close();
  console.log('Script finished successfully.');
}

visitUrl().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
