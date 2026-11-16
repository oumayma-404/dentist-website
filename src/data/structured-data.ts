/**
 * Builders for the schema.org data Google reads from each page. Pages and components
 * render the result with <JsonLd />. Every value comes from the clinic data and the
 * dictionaries, so the structured data always matches what visitors see.
 */
import { absoluteUrl, type Locale } from '../i18n/routes';
import { t } from '../i18n/ui';
import { clinic } from './clinic';
import { TREATMENTS } from './treatments';

type JsonLd = Record<string, unknown>;

const LANGUAGE_NAMES: Record<string, string> = { fr: 'French', en: 'English', ar: 'Arabic' };

const languages = () =>
  clinic.languages.map((code) => ({ '@type': 'Language', name: LANGUAGE_NAMES[code], alternateName: code }));

export const clinicId = (site: URL | undefined) => new URL('/#clinic', site).href;
export const doctorId = (site: URL | undefined) => new URL('/#doctor', site).href;
const websiteId = (site: URL | undefined) => new URL('/#website', site).href;

/** The clinic as a local business, on every page. */
export function clinicSchema(
  lang: Locale,
  site: URL | undefined,
  images: { photo: string; logo: string },
  options: { withServices?: boolean } = {},
): JsonLd {
  const ui = t(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': clinicId(site),
    name: clinic.name,
    description: ui.meta.home.description,
    url: absoluteUrl('home', lang, site),
    image: images.photo,
    logo: images.logo,
    telephone: clinic.phoneHref.replace('tel:', ''),
    email: clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.locality,
      addressRegion: clinic.address.region,
      addressCountry: clinic.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: clinic.geo.latitude, longitude: clinic.geo.longitude },
    hasMap: clinic.mapsUrl,
    areaServed: [
      { '@type': 'City', name: clinic.address.locality },
      { '@type': 'AdministrativeArea', name: `Gouvernorat de ${clinic.address.region}` },
    ],
    availableLanguage: languages(),
    openingHoursSpecification: clinic.openingHours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [clinic.social.facebook, clinic.social.instagram],
    founder: { '@type': 'Person', '@id': doctorId(site), name: clinic.doctor, jobTitle: ui.about.kicker },
    ...(options.withServices && {
      availableService: TREATMENTS.map((treatment) => ({
        '@type': 'MedicalProcedure',
        name: treatment.title[lang],
        description: treatment.summary[lang],
        url: `${absoluteUrl('services', lang, site)}#${treatment.slug}`,
      })),
    }),
  };
}

/** The site itself, on the home pages: gives Google the site name shown above results. */
export function websiteSchema(lang: Locale, site: URL | undefined): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(site),
    name: clinic.doctor,
    alternateName: [clinic.name, 'implants-hammamet.tn'],
    url: new URL('/', site).href,
    inLanguage: lang,
    publisher: { '@id': clinicId(site) },
  };
}

/** Dr Hamdane as a person, on the doctor page. */
export function doctorSchema(lang: Locale, site: URL | undefined, photo: string): JsonLd {
  const ui = t(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': doctorId(site),
    name: clinic.doctor,
    jobTitle: ui.about.kicker,
    description: ui.about.role,
    image: photo,
    url: absoluteUrl('about', lang, site),
    worksFor: { '@id': clinicId(site) },
    knowsLanguage: languages(),
    hasOccupation: { '@type': 'Occupation', name: ui.about.kicker },
    hasCredential: ui.about.cv.diplomaItems.map((item) => ({
      '@type': 'EducationalOccupationalCredential',
      name: item.title,
    })),
    sameAs: [clinic.social.instagram],
  };
}

/** Questions and answers shown on the page, word for word. */
export function faqSchema(items: { q: string; a: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** The breadcrumb trail shown on the page. */
export function breadcrumbSchema(trail: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: step.name,
      item: step.url,
    })),
  };
}
