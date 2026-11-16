/** Practical facts about the clinic, shared by every page and language. */
export const clinic = {
  /** Same name as the clinic's Google Business Profile, so Google matches the site to the listing. */
  name: 'Cabinet de Parodontologie et Implantologie orale Dr Khaireddine Hamdane',
  doctor: 'Dr Khaireddine Hamdane',
  phone: '+216 22 920 867',
  phoneHref: 'tel:+21622920867',
  whatsappNumber: '21622920867',
  email: 'dr.khaireddine.hamdane@gmail.com',
  address: {
    street: 'Immeuble Olympia, rue du Koweït',
    locality: 'Hammamet',
    region: 'Nabeul',
    country: 'TN',
  },
  /** Position of the clinic's pin on Google Maps. */
  geo: { latitude: 36.4064621, longitude: 10.6072859 },
  /** Languages patients can be received in (confirmed by the clinic). */
  languages: ['fr', 'en', 'ar'],
  mapsUrl: 'https://maps.app.goo.gl/rjKfs1NJDj2C9HDXA',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Cabinet%20de%20Parodontologie%20et%20Implantologie%20orale%20Dr%20Khaireddine%20Hamdane%2C%20Hammamet&output=embed',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61559692243807',
    instagram: 'https://www.instagram.com/khaireddine.hamdane/',
  },
  /** Opening hours in schema.org form; the localized labels live in the dictionaries. */
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  /** Google-reviews widget already used by the previous site. */
  elfsightAppClass: 'elfsight-app-6eb4373d-3f07-4943-ae53-c6af5b08def5',
} as const;

/** WhatsApp chat link, optionally with a pre-filled message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${clinic.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
