// Checks the built site (dist/): every link to a page of this site leads to a page that exists,
// and every #anchor to a heading on it. Run after `npm run build`: `npm run check-links`.
// Also lists the outside addresses the pages link to, to check by hand now and then.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === 'pagefind' ? [] : htmlFiles(path);
    return name.endsWith('.html') ? [path] : [];
  });
}

function target(pathname) {
  const clean = decodeURIComponent(pathname);
  for (const candidate of [join(dist, clean), join(dist, clean, 'index.html'), join(dist, `${clean}.html`)]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}

const ids = new Map();
function idsOf(file) {
  if (!ids.has(file)) {
    const html = readFileSync(file, 'utf8');
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return ids.get(file);
}

const problems = [];
const outside = new Set();
for (const file of htmlFiles(dist)) {
  const page = '/' + relative(dist, file).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://docs.debitmydata.io')) outside.add(href.replace(/&amp;/g, '&'));
      continue;
    }
    if (href.startsWith('mailto:') || href.startsWith('data:')) continue;
    const url = new URL(href.replace(/&amp;/g, '&'), `https://docs.debitmydata.io${page}`);
    const found = target(url.pathname);
    if (!found) {
      problems.push(`${page}: ${href} leads nowhere`);
    } else if (url.hash && found.endsWith('.html') && !idsOf(found).has(decodeURIComponent(url.hash.slice(1)))) {
      problems.push(`${page}: ${href}: no heading #${url.hash.slice(1)}`);
    }
  }
}

console.log(`Outside addresses linked (${outside.size}):`);
for (const href of [...outside].sort()) console.log(`  ${href}`);
if (problems.length) {
  console.log(`\n${problems.length} broken link(s):`);
  for (const problem of problems) console.log(`  ${problem}`);
  process.exit(1);
}
console.log('\nEvery link inside the site works.');
