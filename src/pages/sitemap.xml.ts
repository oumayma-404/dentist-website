import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import cabinet1 from '../assets/clinic/cabinet1.jpg';
import cabinet2 from '../assets/clinic/cabinet2.jpg';
import cabinet3 from '../assets/clinic/cabinet3.jpg';
import doctor from '../assets/doctor.png';
import { DEFAULT_LOCALE, LOCALES, PAGE_KEYS, absoluteUrl, type PageKey } from '../i18n/routes';

/**
 * /sitemap.xml (the address robots.txt and Google Search Console already use), with
 * hreflang alternates so Google pairs the French, English and Arabic versions of each page,
 * and the doctor and clinic photos for Google Images.
 */
export const GET: APIRoute = async ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const imageUrl = async (src: ImageMetadata) => new URL((await getImage({ src, width: 1200, format: 'jpg' })).src, site).href;

  const doctorPhoto = await imageUrl(doctor);
  const clinicPhotos = await Promise.all([cabinet1, cabinet2, cabinet3].map(imageUrl));
  const PAGE_IMAGES: Record<PageKey, string[]> = {
    home: [doctorPhoto, clinicPhotos[0], clinicPhotos[2]],
    about: [doctorPhoto, ...clinicPhotos],
    services: [],
    abroad: [doctorPhoto],
    contact: [],
  };

  const urls = PAGE_KEYS.flatMap((page) => {
    const alternates = [
      ...LOCALES.map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${absoluteUrl(page, code, site)}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(page, DEFAULT_LOCALE, site)}"/>`,
    ].join('\n');
    const images = PAGE_IMAGES[page].map((loc) => `    <image:image><image:loc>${loc}</image:loc></image:image>`).join('\n');

    return LOCALES.map(
      (lang) => `  <url>
    <loc>${absoluteUrl(page, lang, site)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}${images ? `\n${images}` : ''}
  </url>`,
    );
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
