const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('\n=== Checking https://lasvegasnevadainjurylawyer.com ===\n');
  await page.goto('https://lasvegasnevadainjurylawyer.com', { waitUntil: 'domcontentloaded', timeout: 30000 });

  const title = await page.title();
  console.log('Title:', title);

  // Check nav practice area links
  const navLinks = await page.evaluate(() => {
    const links = document.querySelectorAll('nav a');
    return Array.from(links).map(el => ({ text: el.textContent.trim(), href: el.getAttribute('href') }));
  });
  console.log('\nNav links:');
  navLinks.forEach(l => console.log(' ', l.href, '-', l.text));

  // Check footer practice area links (first 6)
  const footerLinks = await page.evaluate(() => {
    const links = document.querySelectorAll('footer a');
    return Array.from(links).slice(0, 10).map(el => ({ text: el.textContent.trim(), href: el.getAttribute('href') }));
  });
  console.log('\nFooter links (first 10):');
  footerLinks.forEach(l => console.log(' ', l.href, '-', l.text));

  // Check for "Areas We Serve" section in footer
  const footerH3s = await page.evaluate(() => {
    const h3s = document.querySelectorAll('footer h3');
    return Array.from(h3s).map(el => el.textContent.trim());
  });
  console.log('\nFooter section headings:', footerH3s);

  // Check for AI receptionist button
  const buttons = await page.evaluate(() => {
    const btns = document.querySelectorAll('button');
    return Array.from(btns).map(el => ({ text: el.textContent.trim().slice(0, 30), class: el.className.slice(0, 50) }));
  });
  const aiBtn = buttons.find(b => b.class.includes('bottom') || b.text.toLowerCase().includes('call') || b.text.includes('📞'));
  console.log('\nAI receptionist button found:', !!aiBtn);
  if (aiBtn) console.log('  Button:', aiBtn);

  // Test clicking a practice area link that should work
  const carLink = await page.$('a[href="/car-accident-lawyer"]');
  console.log('\nCar accident lawyer link exists:', !!carLink);

  const oldCarLink = await page.$('a[href="/car-accidents"]');
  console.log('Old broken car accidents link still present:', !!oldCarLink);

  await browser.close();
  console.log('\nDone.');
})().catch(e => {
  console.error('Playwright error:', e.message);
  process.exit(1);
});
