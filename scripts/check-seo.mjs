// Checks the built site (dist/) against the SEO rules of the project and fails the build
// when one breaks. Runs after `astro build`; see "build" in package.json.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const SITE = 'https://implants-hammamet.tn';
const LIMITS = { title: 60, descriptionMin: 70, descriptionMax: 155 };
const HREFLANGS = ['fr', 'en', 'ar', 'x-default'];

const decode = (text) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
const length = (text) => [...text].length;
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return entry.endsWith('.html') ? [path] : [];
  });
}

const pages = new Map(
  htmlFiles(DIST).map((file) => ['/' + relative(DIST, file).split(sep).join('/'), readFileSync(file, 'utf8')]),
);
const urlToPath = (url) => {
  const path = new URL(url, SITE).pathname;
  return path === '/' ? '/index.html' : path;
};
const ids = new Map([...pages].map(([path, html]) => [path, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));
const hreflangsOf = (html) =>
  Object.fromEntries([...html.matchAll(/<link[^>]+rel="alternate"[^>]*>/g)].map(([tag]) => [attr(tag, 'hreflang'), attr(tag, 'href')]));

const problems = [];
const fail = (page, message) => problems.push(`${page}: ${message}`);

for (const [page, html] of pages) {
  // Pages hidden from search engines (404) only need a title, headings and working links.
  const indexable = !/<meta name="robots" content="noindex"/.test(html);

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  if (!title) fail(page, 'missing <title>');
  else if (length(title) > LIMITS.title) fail(page, `title is ${length(title)} characters (max ${LIMITS.title}): "${title}"`);

  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const descriptionLength = length(description);
  if (indexable && (descriptionLength < LIMITS.descriptionMin || descriptionLength > LIMITS.descriptionMax)) {
    fail(page, `description is ${descriptionLength} characters (expected ${LIMITS.descriptionMin}–${LIMITS.descriptionMax})`);
  }

  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) fail(page, `${h1Count} <h1> elements (expected 1)`);

  const htmlTag = html.match(/<html[^>]*>/)?.[0] ?? '';
  const lang = attr(htmlTag, 'lang');
  if (!lang) fail(page, 'missing lang on <html>');
  if (lang === 'ar' && attr(htmlTag, 'dir') !== 'rtl') fail(page, 'Arabic page without dir="rtl"');

  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!attr(tag, 'alt')) fail(page, `image without a description: ${attr(tag, 'src')}`);
  }

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(json);
    } catch {
      fail(page, 'structured data is not valid JSON');
    }
  }

  for (const [, raw] of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const href = decode(raw);
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const url = new URL(href, SITE + page);
    const target = url.pathname === '/' ? '/index.html' : url.pathname;
    if (!pages.has(target)) fail(page, `broken link ${href}`);
    else if (url.hash && !ids.get(target).has(decodeURIComponent(url.hash.slice(1)))) fail(page, `missing anchor ${href}`);
  }

  if (!indexable) continue;

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical?.startsWith(SITE)) fail(page, 'missing or relative canonical URL');
  else if (urlToPath(canonical) !== page) fail(page, `canonical points elsewhere: ${canonical}`);

  const alternates = hreflangsOf(html);
  for (const code of HREFLANGS) {
    const target = alternates[code];
    if (!target) {
      fail(page, `missing hreflang="${code}"`);
      continue;
    }
    const targetHtml = pages.get(urlToPath(target));
    if (!targetHtml) fail(page, `hreflang="${code}" points to a missing page: ${target}`);
    else if (!Object.values(hreflangsOf(targetHtml)).includes(canonical)) fail(page, `hreflang="${code}" page does not link back`);
  }
}

if (!existsSync(join(DIST, 'sitemap.xml'))) problems.push('dist/sitemap.xml is missing');

if (problems.length) {
  console.error(`SEO check failed (${problems.length}):\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`SEO check passed: ${pages.size} pages.`);
