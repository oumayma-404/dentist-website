/**
 * Single source of truth for page URLs.
 *
 * The paths are the ones the previous static site used, so links shared on social
 * networks and Google's index keep working. Every navigation link, the language
 * switcher, hreflang tags and the sitemap are derived from this map.
 */
export const LOCALES = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export const PAGE_KEYS = ['home', 'about', 'services', 'abroad', 'contact'] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

const ROUTES: Record<PageKey, Record<Locale, string>> = {
  home: { fr: '/', en: '/pages/en/index-en.html', ar: '/pages/ar/index-ar.html' },
  about: { fr: '/pages/fr/about-fr.html', en: '/pages/en/about-en.html', ar: '/pages/ar/about-ar.html' },
  services: { fr: '/pages/fr/services-fr.html', en: '/pages/en/services-en.html', ar: '/pages/ar/services-ar.html' },
  abroad: {
    fr: '/pages/fr/patients-abroad-fr.html',
    en: '/pages/en/patients-abroad-en.html',
    ar: '/pages/ar/patients-abroad-ar.html',
  },
  contact: { fr: '/pages/fr/contact-fr.html', en: '/pages/en/contact-en.html', ar: '/pages/ar/contact-ar.html' },
};

export function href(page: PageKey, lang: Locale, hash?: string): string {
  return ROUTES[page][lang] + (hash ? `#${hash}` : '');
}

export function dir(lang: Locale): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

/** Absolute URL of a page, for canonical links, hreflang and the sitemap. */
export function absoluteUrl(page: PageKey, lang: Locale, site: URL | undefined): string {
  return new URL(href(page, lang), site).href;
}

const ROUTE_PATTERN = /^\/pages\/(fr|en|ar)\/([\w-]+)\.html$/;

/**
 * Static paths for `src/pages/pages/[lang]/[page].astro`: every page except the
 * French home, which is served from `src/pages/index.astro` at the site root.
 */
export function pagePaths() {
  return PAGE_KEYS.flatMap((pageKey) =>
    LOCALES.flatMap((lang) => {
      const match = ROUTE_PATTERN.exec(ROUTES[pageKey][lang]);
      if (!match) return [];
      return [{ params: { lang: match[1], page: match[2] }, props: { lang, pageKey } }];
    }),
  );
}
