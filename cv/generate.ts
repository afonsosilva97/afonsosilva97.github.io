import { execFileSync } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import data, { type Experience } from '../src/data/personalData.ts';

const cvDir = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(cvDir, 'cv.html');
const pdfPath = join(cvDir, '..', 'public', 'afonso-silva-cv.pdf');

const esc = (s: string) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const dates = (e: Experience) => `${e.startDate} - ${e.endDate}`;

const shortLocation = (e: Experience) => e.location?.split(' · ')[0] ?? '';

const bullets = (e: Experience) => (e.cvBullets ?? []).map((b) => `<li>${esc(b)}</li>`).join('\n');

const job = (e: Experience) => `
  <article class="job">
    <div class="job-head">
      <h3>${esc(e.title)}, ${esc(e.companyName)}</h3>
      <span class="dates">${esc(dates(e))}</span>
    </div>
    <p class="meta">${esc(shortLocation(e))}${e.tech ? ` · ${esc(e.tech.join(', '))}` : ''}</p>
    <ul>${bullets(e)}</ul>
  </article>`;

const internship = (e: Experience) => `
  <article class="line-entry">
    <div class="job-head">
      <h3>${esc(e.title)}, ${esc(e.companyName)}</h3>
      <span class="dates">${esc(dates(e))}</span>
    </div>
    <p class="line-desc">${esc(e.cvBullets?.[0] ?? '')}</p>
  </article>`;

const educationEntry = (e: Experience) => `
  <article class="line-entry">
    <div class="job-head">
      <h3>${esc(e.title)}</h3>
      <span class="dates">${esc(dates(e))}</span>
    </div>
    <p class="line-desc">${esc(e.companyName)}</p>
  </article>`;

const skillRow = (name: string, keywords: string[]) => `
  <div class="skill-row">
    <span class="skill-name">${esc(name)}</span>
    <span class="skill-list">${esc(keywords.join(', '))}</span>
  </div>`;

const linkedin = data.social.find((s) => s.name === 'LinkedIn')!.url;
const github = data.social.find((s) => s.name === 'GitHub')!.url;
const strip = (url: string) => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '');

const icons: Record<string, string> = {
  globe: `<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  mail: `<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  linkedin: `<svg class="ci" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>`,
  github: `<svg class="ci" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
};

const contactLine = (icon: string, href: string, label: string) =>
  `<div class="contact-line"><a href="${href}">${esc(label)}</a>${icons[icon]}</div>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(data.name)} - CV</title>
<style>
  @font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/montserrat-var.woff2') format('woff2-variations');
    font-weight: 100 900;
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('../public/fonts/plex-sans-var.woff2') format('woff2-variations');
    font-weight: 100 700;
  }

  @page {
    size: A4;
    margin: 13mm 15mm;
  }

  :root {
    --heading: #17181c;
    --text: #33342e;
    --muted: #6e6a63;
    --accent: #b0722a;
    --rule: #dcd9d4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 9.7pt;
    line-height: 1.42;
    color: var(--text);
    background: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--heading);
    margin-bottom: 12px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 21pt;
    font-weight: 700;
    color: var(--heading);
    letter-spacing: 0.01em;
  }

  .role {
    font-family: 'Montserrat', sans-serif;
    font-size: 10.5pt;
    font-weight: 600;
    color: var(--accent);
    margin-top: 2px;
  }

  .contact {
    font-size: 8.8pt;
    color: var(--muted);
  }

  .contact-line {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    margin-bottom: 3px;
  }

  .ci {
    width: 10px;
    height: 10px;
    color: var(--accent);
    flex-shrink: 0;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 9.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: var(--accent);
    margin: 13px 0 6px;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--rule);
  }

  .summary {
    max-width: 62em;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 10pt;
    font-weight: 600;
    color: var(--heading);
  }

  .job-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
  }

  .dates {
    font-size: 8.8pt;
    color: var(--muted);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .meta {
    font-size: 8.8pt;
    color: var(--muted);
    margin: 1px 0 3px;
  }

  .job {
    margin-bottom: 9px;
  }

  .job ul {
    list-style: none;
  }

  .job li {
    padding-left: 12px;
    position: relative;
  }

  .job li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.52em;
    width: 5px;
    height: 5px;
    border-radius: 1px;
    background: var(--accent);
  }

  .line-entry {
    margin-bottom: 6px;
  }

  .line-desc {
    color: var(--text);
  }

  .skill-row {
    display: flex;
    gap: 10px;
    margin-bottom: 2px;
  }

  .skill-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 8.8pt;
    font-weight: 600;
    color: var(--heading);
    width: 150px;
    flex-shrink: 0;
  }
</style>
</head>
<body>
  <header>
    <div>
      <h1>${esc(data.name)}</h1>
      <p class="role">${esc(data.profession)}</p>
    </div>
    <div class="contact">
      ${contactLine('globe', 'https://afonsosilva.dev', 'afonsosilva.dev')}
      ${contactLine('mail', 'mailto:hello@afonsosilva.dev', 'hello@afonsosilva.dev')}
      ${contactLine('linkedin', linkedin, strip(linkedin))}
      ${contactLine('github', github, strip(github))}
    </div>
  </header>

  <p class="summary">${esc(data.hook)}</p>

  <h2>Experience</h2>
  ${data.workExperience.map(job).join('\n')}

  <h2>Tech Stack</h2>
  ${data.techStack
    .filter((s) => s.cvKeywords)
    .map((s) => skillRow(s.name, s.cvKeywords!))
    .join('\n')}

  <h2>Internships</h2>
  ${data.internships.map(internship).join('\n')}

  <h2>Education</h2>
  ${data.education.map(educationEntry).join('\n')}
</body>
</html>
`;

writeFileSync(htmlPath, html);
console.log(`Wrote ${htmlPath}`);

const browsers = [
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
];
const browser = browsers.find(existsSync);
if (!browser) {
  console.error('No Chromium or Chrome found; cv.html written, PDF skipped.');
  process.exit(1);
}

execFileSync(browser, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--allow-file-access-from-files',
  // Chrome's sandbox needs unprivileged user namespaces, restricted on CI runners.
  ...(process.env.CI ? ['--no-sandbox'] : []),
  `--print-to-pdf=${pdfPath}`,
  `file://${htmlPath}`,
]);
console.log(`Wrote ${pdfPath}`);
