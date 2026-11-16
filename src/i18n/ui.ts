import type { Locale, PageKey } from './routes';

interface PageMeta {
  title: string;
  description: string;
}

interface Item {
  title: string;
  text?: string;
}

/**
 * Every visible string of the site, per language. The shared `Dictionary` type makes
 * `astro check` fail when a translation is missing.
 */
export interface Dictionary {
  languageName: string;
  doctorName: string;
  meta: Record<PageKey, PageMeta>;
  nav: Record<PageKey, string> & { book: string; menu: string; closeMenu: string; language: string; skip: string; main: string; breadcrumb: string };
  common: {
    call: string;
    whatsapp: string;
    whatsappMessage: string;
    whatsappAbout: string;
    write: string;
    directions: string;
    openMaps: string;
    phone: string;
    email: string;
    address: string;
    addressShort: string;
    addressLabel: string;
    hours: string;
    copy: string;
    copied: string;
    before: string;
    after: string;
    beforeAfter: string;
    seeTreatment: string;
    allTreatments: string;
    bookTreatment: string;
  };
  hours: { weekdays: string; saturday: string; sunday: string; weekdaysTime: string; saturdayTime: string; closed: string; short: string };
  home: {
    eyebrow: string;
    title: string;
    titleEm: string;
    lead: string;
    credentials: string[];
    portraitAlt: string;
    portraitRole: string;
    expertise: { kicker: string; title: string; text: string };
    perio: { title: string; text: string; link: string };
    implant: { title: string; text: string; link: string };
    also: { title: string; text: string; wisdomTeeth: string };
    faq: { kicker: string; title: string; text: string; items: { q: string; a: string }[] };
    clinic: { kicker: string; title: string; hygieneTitle: string; hygieneText: string; link: string };
    reviews: { kicker: string; title: string };
    abroadBand: { kicker: string; title: string; text: string; link: string };
  };
  cta: { title: string; text: string; call: string };
  about: {
    kicker: string;
    role: string;
    bio: string[];
    seeTreatments: string;
    cv: { kicker: string; title: string; diplomas: string; experience: string; diplomaItems: Item[]; experienceItems: Item[] };
    values: { kicker: string; title: string; items: Item[] };
    clinic: { kicker: string; title: string; paragraphs: string[] };
    photos: { room: string; office: string; consultation: string };
  };
  services: {
    title: string;
    lead: string;
    groupsLabel: string;
    groups: Record<'implantologie' | 'parodontologie' | 'chirurgie-orale', { title: string; text: string }>;
  };
  contact: { title: string; lead: string; mapTitle: string; place: string };
  abroad: {
    kicker: string;
    title: string;
    lead: string;
    facts: { doctor: Item; languages: Item; contact: Item; travel: Item };
    treatments: Item;
    faq: { title: string; items: { q: string; a: string }[] };
  };
  footer: { tagline: string; pages: string; contact: string; follow: string; languages: string; rights: string };
  notFound: { title: string; text: string; back: string };
}

const fr: Dictionary = {
  languageName: 'Français',
  doctorName: 'Dr Khaireddine Hamdane',
  meta: {
    home: {
      title: 'Dentiste parodontiste à Hammamet · Dr Khaireddine Hamdane',
      description:
        'Cabinet dentaire à Hammamet (Nabeul) : parodontologie, implants dentaires et chirurgie orale. Rendez-vous par téléphone ou WhatsApp, du lundi au samedi.',
    },
    about: {
      title: 'Dr Khaireddine Hamdane, dentiste parodontiste à Hammamet',
      description:
        "Le Dr Hamdane, parodontiste et implantologiste à Hammamet : doctorat d'État en médecine dentaire, spécialiste en parodontologie, CECU en implantologie.",
    },
    services: {
      title: 'Implants dentaires et parodontologie à Hammamet, Tunisie',
      description:
        "Pose d'implants, greffe osseuse, greffe gingivale, traitement des gencives et dents de sagesse : les soins du Dr Hamdane, parodontiste à Hammamet.",
    },
    abroad: {
      title: "Soins et implants dentaires en Tunisie depuis l'étranger",
      description:
        "Vous vivez à l'étranger ? Le Dr Hamdane, dentiste parodontiste à Hammamet, reçoit ses patients en français, anglais et arabe. Contact par WhatsApp.",
    },
    contact: {
      title: 'Rendez-vous chez le parodontiste à Hammamet · Horaires',
      description:
        'Cabinet du Dr Hamdane, Immeuble Olympia, rue du Koweït, Hammamet. Ouvert du lundi au vendredi de 9 h à 17 h, le samedi de 9 h à 13 h.',
    },
  },
  nav: {
    home: 'Accueil',
    about: 'Le docteur',
    services: 'Soins',
    abroad: "Venir de l'étranger",
    contact: 'Contact',
    book: 'Prendre rendez-vous',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    skip: 'Aller au contenu',
    main: 'Navigation principale',
    breadcrumb: "Fil d'Ariane",
  },
  common: {
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Bonjour Docteur, je souhaite prendre rendez-vous.',
    whatsappAbout: 'Bonjour Docteur, je souhaite un rendez-vous pour : ',
    write: 'Écrire',
    directions: 'Itinéraire',
    openMaps: 'Ouvrir dans Google Maps',
    phone: 'Téléphone',
    email: 'E-mail',
    address: 'Immeuble Olympia, rue du Koweït, Hammamet, Nabeul, Tunisie',
    addressShort: 'Immeuble Olympia, rue du Koweït, Hammamet',
    addressLabel: 'Adresse',
    hours: 'Horaires',
    copy: 'Copier',
    copied: 'Copié',
    before: 'Avant',
    after: 'Après',
    beforeAfter: 'Avant / après',
    seeTreatment: 'Voir le soin',
    allTreatments: 'Tous les soins',
    bookTreatment: 'Demander un rendez-vous pour ce soin',
  },
  hours: {
    weekdays: 'Lundi – vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    weekdaysTime: '9 h – 17 h',
    saturdayTime: '9 h – 13 h',
    closed: 'Fermé',
    short: 'Lun – ven 9 h – 17 h · sam 9 h – 13 h',
  },
  home: {
    eyebrow: 'Dentiste parodontiste à Hammamet',
    title: 'Des gencives saines, des implants',
    titleEm: 'qui durent.',
    lead: 'Le Dr Khaireddine Hamdane, parodontiste et implantologiste, vous reçoit dans son cabinet dentaire de Hammamet, dans le gouvernorat de Nabeul.',
    credentials: ["Doctorat d'État en médecine dentaire", 'Spécialiste en parodontologie', 'CECU en implantologie avancée'],
    portraitAlt: 'Le Dr Khaireddine Hamdane, dentiste parodontiste, dans son cabinet de Hammamet',
    portraitRole: 'Parodontiste · Implantologiste',
    expertise: {
      kicker: 'Expertise',
      title: 'Parodontologie et implantologie, au cœur de sa pratique',
      text: "Le Dr Hamdane s'est spécialisé dans le soin des gencives et la pose d'implants. Il assure aussi la chirurgie orale et d'autres soins dentaires au cabinet.",
    },
    perio: {
      title: 'Parodontologie',
      text: 'Prévenir, traiter et stabiliser les maladies des gencives pour garder vos dents naturelles.',
      link: 'Les soins de parodontologie',
    },
    implant: {
      title: 'Implantologie',
      text: 'Remplacer une ou plusieurs dents manquantes par une solution fixe, esthétique et durable.',
      link: "Les soins d'implantologie",
    },
    also: { title: 'Et aussi', text: 'Chirurgie orale et autres soins dentaires', wisdomTeeth: 'Dents de sagesse' },
    faq: {
      kicker: 'Comprendre',
      title: 'Vos questions sur la parodontologie et les implants',
      text: 'Trois réponses à lire avant votre première consultation.',
      items: [
        {
          q: "C'est quoi la parodontologie ?",
          a: "La parodontologie est la spécialité dentaire qui se concentre sur la prévention, le diagnostic et le traitement des maladies des gencives et des structures de soutien des dents. Elle vise à maintenir la santé des tissus parodontaux. Les maladies parodontales, telles que la gingivite et la parodontite, peuvent entraîner la perte des dents si elles ne sont pas traitées. Un parodontiste est formé pour gérer ces conditions, effectuer des traitements spécifiques et conseiller sur les meilleures pratiques d'hygiène buccale.",
        },
        {
          q: "C'est quoi l'implantologie ?",
          a: "L'implantologie est une branche de la dentisterie qui concerne la pose d'implants dentaires. Les implants sont des dispositifs en titane insérés chirurgicalement dans l'os de la mâchoire pour remplacer les racines des dents manquantes. Ils servent de support pour des prothèses dentaires, telles que des couronnes, des bridges ou des dentures, permettant ainsi de restaurer la fonction et l'esthétique dentaire. L'implantologie nécessite une formation spécialisée, car elle implique une compréhension approfondie de l'anatomie dentaire et de la chirurgie.",
        },
        {
          q: 'Que fait un parodontiste implantologiste ?',
          a: "Un parodontiste implantologiste est un dentiste spécialisé dans le traitement des maladies parodontales et la pose d'implants dentaires. Il joue un rôle crucial dans le diagnostic et le traitement des problèmes de gencives tout en préparant le terrain pour des solutions d'implants efficaces. Ce spécialiste évalue la santé bucco-dentaire globale du patient, effectue des interventions chirurgicales pour traiter les maladies parodontales et réalise également la pose d'implants dentaires lorsque cela est nécessaire.",
        },
      ],
    },
    clinic: {
      kicker: 'Le cabinet',
      title: 'Un cabinet calme et lumineux au cœur de Hammamet',
      hygieneTitle: 'Hygiène et stérilisation',
      hygieneText:
        'Chaque procédure est réalisée avec du matériel soigneusement stérilisé, en conformité avec les standards internationaux.',
      link: 'Découvrir le cabinet',
    },
    reviews: { kicker: 'Avis patients', title: 'Ce que disent nos patients' },
    abroadBand: {
      kicker: "Patients de l'étranger",
      title: "Vous vivez à l'étranger ?",
      text: "Le Dr Hamdane reçoit à Hammamet des patients venus de l'étranger, en français, en anglais ou en arabe.",
      link: 'Préparer votre venue',
    },
  },
  cta: {
    title: 'Prenez rendez-vous au cabinet de Hammamet',
    text: "Appelez, écrivez sur WhatsApp ou passez nous voir à l'Immeuble Olympia.",
    call: 'Appeler le cabinet',
  },
  about: {
    kicker: 'Parodontiste',
    role: 'Dentiste parodontiste et implantologiste à Hammamet',
    bio: [
      "Après avoir acquis une expérience en milieu hospitalier et en pratique libérale, le Dr Hamdane a ouvert son cabinet à Hammamet, Nabeul, où il se consacre au traitement des maladies parodontales et à la pose d'implants dentaires.",
      "Il participe régulièrement à des formations et des séminaires pour se tenir informé des dernières avancées dans le domaine dentaire. Le cabinet offre un environnement accueillant, où chaque patient peut se sentir à l'aise tout en recevant des soins adaptés à ses besoins.",
    ],
    seeTreatments: 'Voir les soins',
    cv: {
      kicker: 'Parcours',
      title: 'Formation et expérience',
      diplomas: 'Diplômes',
      experience: 'Expérience',
      diplomaItems: [
        { title: "Doctorat d'État en médecine dentaire" },
        { title: 'Diplôme de spécialisation en parodontologie' },
        { title: 'CECU en implantologie avancée' },
      ],
      experienceItems: [
        { title: 'Exercice en milieu hospitalier' },
        { title: 'Pratique libérale' },
        { title: 'Cabinet à Hammamet', text: 'Immeuble Olympia, rue du Koweït' },
        { title: 'Formation continue', text: 'Formations et séminaires réguliers' },
      ],
    },
    values: {
      kicker: 'Son approche',
      title: 'Ce qui guide sa pratique',
      items: [
        {
          title: 'Des soins adaptés à chacun',
          text: 'Un environnement accueillant, où chaque patient se sent à l’aise et reçoit des soins adaptés à ses besoins.',
        },
        {
          title: 'Hygiène et stérilisation',
          text: 'Matériel stérilisé selon les standards internationaux, pour les soins courants comme pour la chirurgie.',
        },
        {
          title: 'Formation continue',
          text: 'Formations et séminaires réguliers pour suivre les dernières avancées du domaine dentaire.',
        },
      ],
    },
    clinic: {
      kicker: 'Le cabinet',
      title: "Des soins de qualité, dans le strict respect de l'hygiène",
      paragraphs: [
        "Notre cabinet dentaire, situé à Hammamet, s'engage à offrir des soins de qualité tout en respectant strictement les normes d'hygiène et de stérilisation.",
        "Chaque procédure est réalisée avec du matériel soigneusement stérilisé, en conformité avec les standards internationaux. Nous utilisons des technologies de pointe pour la stérilisation des instruments, garantissant ainsi un environnement sûr pour chaque intervention. Notre équipe est formée et sensibilisée aux meilleures pratiques d'hygiène pour assurer une sécurité optimale à chaque patient, que ce soit pour des soins de routine, des implants dentaires ou des traitements parodontaux spécialisés.",
      ],
    },
    photos: {
      room: 'Salle de soins du cabinet dentaire à Hammamet',
      office: 'Bureau du cabinet dentaire du Dr Hamdane',
      consultation: 'Bureau de consultation du Dr Hamdane à Hammamet',
    },
  },
  services: {
    title: 'Implants dentaires et soins des gencives à Hammamet',
    lead: 'Les principaux soins du cabinet, de la parodontologie à la chirurgie orale. Pour tout autre soin dentaire, contactez le cabinet.',
    groupsLabel: 'Catégories de soins',
    groups: {
      implantologie: {
        title: 'Implantologie',
        text: 'Remplacer une ou plusieurs dents manquantes par une solution fixe, esthétique et durable.',
      },
      parodontologie: {
        title: 'Parodontologie',
        text: 'Prévenir, traiter et stabiliser les maladies des gencives pour garder vos dents naturelles.',
      },
      'chirurgie-orale': {
        title: 'Chirurgie orale',
        text: 'Interventions chirurgicales réalisées au cabinet, des dents de sagesse aux kystes.',
      },
    },
  },
  contact: {
    title: 'Prendre rendez-vous au cabinet de Hammamet',
    lead: 'Appelez le cabinet, écrivez sur WhatsApp ou passez nous voir à Hammamet.',
    mapTitle: "Plan d'accès au cabinet du Dr Hamdane",
    place: 'Hammamet, Nabeul, Tunisie',
  },
  abroad: {
    kicker: "Patients de l'étranger",
    title: "Se faire soigner à Hammamet depuis l'étranger",
    lead: "Vous vivez en France, en Europe, au Maghreb ou ailleurs ? Le Dr Khaireddine Hamdane, dentiste parodontiste et implantologiste, reçoit à son cabinet de Hammamet des patients venus de l'étranger.",
    facts: {
      doctor: {
        title: 'Qui vous reçoit',
        text: "Le Dr Khaireddine Hamdane, dentiste parodontiste et implantologiste : doctorat d'État en médecine dentaire, spécialisation en parodontologie et CECU en implantologie avancée.",
      },
      languages: { title: 'Langues', text: 'Les consultations se font en français, en anglais ou en arabe.' },
      contact: {
        title: 'Préparer votre venue',
        text: 'Contactez le cabinet avant votre voyage, par WhatsApp, par téléphone ou par e-mail, pour organiser votre rendez-vous.',
      },
      travel: {
        title: 'Venir à Hammamet',
        text: "Hammamet est desservie par les aéroports internationaux d'Enfidha-Hammamet et de Tunis-Carthage. Le cabinet se trouve à l'Immeuble Olympia, rue du Koweït.",
      },
    },
    treatments: {
      title: 'Les soins les plus demandés',
      text: 'Implants dentaires, greffes osseuses et gingivales, traitement des maladies des gencives : découvrez les soins proposés au cabinet.',
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          q: "Le cabinet reçoit-il des patients qui vivent à l'étranger ?",
          a: "Oui. Le Dr Hamdane reçoit à son cabinet de Hammamet des patients venus de l'étranger. Contactez le cabinet avant votre voyage pour organiser votre rendez-vous.",
        },
        { q: 'Dans quelles langues se passent les consultations ?', a: 'En français, en anglais ou en arabe.' },
        {
          q: "Comment prendre rendez-vous depuis l'étranger ?",
          a: 'Par WhatsApp ou par téléphone au +216 22 920 867, ou par e-mail à dr.khaireddine.hamdane@gmail.com.',
        },
        {
          q: 'Quel aéroport choisir pour venir à Hammamet ?',
          a: "Hammamet est desservie par l'aéroport international d'Enfidha-Hammamet et par celui de Tunis-Carthage.",
        },
        {
          q: 'Quels sont les horaires du cabinet ?',
          a: 'Du lundi au vendredi de 9 h à 17 h, et le samedi de 9 h à 13 h. Le cabinet est fermé le dimanche.',
        },
      ],
    },
  },
  footer: {
    tagline: "Cabinet de parodontologie et d'implantologie orale à Hammamet.",
    pages: 'Pages',
    contact: 'Contact',
    follow: 'Suivez le cabinet',
    languages: 'Langues',
    rights: 'Cabinet Dr Khaireddine Hamdane',
  },
  notFound: {
    title: 'Page introuvable',
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};

const en: Dictionary = {
  languageName: 'English',
  doctorName: 'Dr Khaireddine Hamdane',
  meta: {
    home: {
      title: 'Periodontist and dental implants in Hammamet · Dr Hamdane',
      description:
        'Dental clinic in Hammamet, Tunisia: periodontics, dental implants and oral surgery by Dr Khaireddine Hamdane. Book by phone or WhatsApp, Mon–Sat.',
    },
    about: {
      title: 'Dr Khaireddine Hamdane, periodontist in Hammamet, Tunisia',
      description:
        'Dr Khaireddine Hamdane, periodontist and implantologist in Hammamet: State Doctorate in Dental Medicine, periodontology specialist, CECU in implantology.',
    },
    services: {
      title: 'Dental implants and gum treatment in Hammamet, Tunisia',
      description:
        'Implant placement, bone and gum grafts, periodontal treatment and wisdom tooth extraction by Dr Hamdane, periodontist in Hammamet, Tunisia.',
    },
    abroad: {
      title: 'Dental implants in Tunisia for patients from abroad',
      description:
        'Dr Khaireddine Hamdane, periodontist in Hammamet, treats patients in English, French and Arabic. Contact the clinic on WhatsApp to plan your treatment.',
    },
    contact: {
      title: 'Book a periodontist in Hammamet · Hours and contact',
      description:
        "Dr Hamdane's clinic, Immeuble Olympia, rue du Koweit, Hammamet. Open Monday to Friday 9 am to 5 pm and Saturday 9 am to 1 pm. Phone and WhatsApp.",
    },
  },
  nav: {
    home: 'Home',
    about: 'The doctor',
    services: 'Treatments',
    abroad: 'From abroad',
    contact: 'Contact',
    book: 'Book an appointment',
    menu: 'Menu',
    closeMenu: 'Close menu',
    language: 'Language',
    skip: 'Skip to content',
    main: 'Main navigation',
    breadcrumb: 'Breadcrumb',
  },
  common: {
    call: 'Call',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Hello Doctor, I would like to book an appointment.',
    whatsappAbout: 'Hello Doctor, I would like an appointment for: ',
    write: 'Message',
    directions: 'Directions',
    openMaps: 'Open in Google Maps',
    phone: 'Phone',
    email: 'Email',
    address: 'Immeuble Olympia, rue du Koweit, Hammamet, Nabeul, Tunisia',
    addressShort: 'Immeuble Olympia, rue du Koweit, Hammamet',
    addressLabel: 'Address',
    hours: 'Opening hours',
    copy: 'Copy',
    copied: 'Copied',
    before: 'Before',
    after: 'After',
    beforeAfter: 'Before / after',
    seeTreatment: 'See the treatment',
    allTreatments: 'All treatments',
    bookTreatment: 'Ask for an appointment for this treatment',
  },
  hours: {
    weekdays: 'Monday – Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    weekdaysTime: '9 am – 5 pm',
    saturdayTime: '9 am – 1 pm',
    closed: 'Closed',
    short: 'Mon – Fri 9 am – 5 pm · Sat 9 am – 1 pm',
  },
  home: {
    eyebrow: 'Periodontist in Hammamet, Tunisia',
    title: 'Healthy gums, implants',
    titleEm: 'that last.',
    lead: 'Dr Khaireddine Hamdane, periodontist and implantologist, welcomes you to his dental clinic in Hammamet, in the Nabeul governorate.',
    credentials: ['State Doctorate in Dental Medicine', 'Specialist in periodontology', 'CECU in advanced implantology'],
    portraitAlt: 'Dr Khaireddine Hamdane, periodontist, in his clinic in Hammamet',
    portraitRole: 'Periodontist · Implantologist',
    expertise: {
      kicker: 'Expertise',
      title: 'Periodontology and implantology at the heart of his practice',
      text: 'Dr Hamdane specialised in gum care and dental implants. He also provides oral surgery and other dental care at the clinic.',
    },
    perio: {
      title: 'Periodontology',
      text: 'Preventing, treating and stabilising gum disease to keep your natural teeth.',
      link: 'Periodontal treatments',
    },
    implant: {
      title: 'Implantology',
      text: 'Replacing one or more missing teeth with a fixed, natural-looking and lasting solution.',
      link: 'Implant treatments',
    },
    also: { title: 'Also', text: 'Oral surgery and other dental care', wisdomTeeth: 'Wisdom teeth' },
    faq: {
      kicker: 'Understand',
      title: 'Your questions about periodontology and implants',
      text: 'Three answers to read before your first visit.',
      items: [
        {
          q: 'What is periodontology?',
          a: 'Periodontology is the dental specialty that focuses on the prevention, diagnosis and treatment of diseases of the gums and supporting structures of the teeth. Its aim is to maintain the health of periodontal tissues. Periodontal diseases, such as gingivitis and periodontitis, can lead to tooth loss if left untreated. A periodontist is trained to manage these conditions, perform specific treatments and advise on best oral hygiene practices.',
        },
        {
          q: 'What is implantology?',
          a: 'Implantology is a branch of dentistry concerned with the placement of dental implants. Implants are titanium devices surgically inserted into the jawbone to replace the roots of missing teeth. They serve as a support for dental prostheses, such as crowns, bridges or dentures, restoring dental function and aesthetics. Implantology requires specialized training, as it involves a thorough understanding of dental anatomy and surgery.',
        },
        {
          q: 'What does a periodontist-implantologist do?',
          a: "A periodontist-implantologist is a dentist who specializes in the treatment of periodontal disease and the placement of dental implants. They play a crucial role in diagnosing and treating gum problems, while paving the way for effective implant solutions. This specialist assesses the patient's overall oral health, performs surgical procedures to treat periodontal disease, and also places dental implants when necessary.",
        },
      ],
    },
    clinic: {
      kicker: 'The clinic',
      title: 'A calm, bright clinic in the heart of Hammamet',
      hygieneTitle: 'Hygiene and sterilisation',
      hygieneText: 'Every procedure is carried out using carefully sterilised equipment, in compliance with international standards.',
      link: 'About the clinic',
    },
    reviews: { kicker: 'Patient reviews', title: 'What our patients say' },
    abroadBand: {
      kicker: 'Patients from abroad',
      title: 'Do you live abroad?',
      text: 'Dr Hamdane welcomes patients from abroad in Hammamet, in English, French or Arabic.',
      link: 'Plan your visit',
    },
  },
  cta: {
    title: 'Book an appointment at the Hammamet clinic',
    text: 'Call, send a WhatsApp message or visit us at Immeuble Olympia.',
    call: 'Call the clinic',
  },
  about: {
    kicker: 'Periodontist',
    role: 'Periodontist and implantologist in Hammamet',
    bio: [
      'After gaining experience in hospitals and private practice, Dr Hamdane opened his own practice in Hammamet, Nabeul, where he specialises in the treatment of periodontal disease and the placement of dental implants.',
      'He regularly attends training courses and seminars to keep abreast of the latest developments in the dental field. The practice offers a welcoming environment, where every patient can feel at ease while receiving care tailored to their needs.',
    ],
    seeTreatments: 'See the treatments',
    cv: {
      kicker: 'Background',
      title: 'Training and experience',
      diplomas: 'Qualifications',
      experience: 'Experience',
      diplomaItems: [
        { title: 'State Doctorate in Dental Medicine' },
        { title: 'Specialist diploma in periodontology' },
        { title: 'CECU in advanced implantology' },
      ],
      experienceItems: [
        { title: 'Hospital practice' },
        { title: 'Private practice' },
        { title: 'Own clinic in Hammamet', text: 'Immeuble Olympia, rue du Koweit' },
        { title: 'Continuing education', text: 'Regular training courses and seminars' },
      ],
    },
    values: {
      kicker: 'His approach',
      title: 'What guides his practice',
      items: [
        {
          title: 'Care tailored to each patient',
          text: 'A welcoming environment where every patient feels at ease and receives care tailored to their needs.',
        },
        {
          title: 'Hygiene and sterilisation',
          text: 'Equipment sterilised to international standards, for routine care and surgery alike.',
        },
        {
          title: 'Continuing education',
          text: 'Regular courses and seminars to keep up with the latest advances in dentistry.',
        },
      ],
    },
    clinic: {
      kicker: 'The clinic',
      title: 'Quality care, with strict hygiene standards',
      paragraphs: [
        'Our dental practice, located in Hammamet, is committed to providing quality care while strictly complying with hygiene and sterilisation standards.',
        'Every procedure is carried out using carefully sterilised equipment, in compliance with international standards. We use state-of-the-art technology for instrument sterilisation, ensuring a safe environment for every procedure. Our team is trained and aware of best hygiene practices to ensure optimal safety for every patient, whether for routine care, dental implants or specialist periodontal treatments.',
      ],
    },
    photos: {
      room: 'Treatment room of the dental clinic in Hammamet',
      office: "Office of Dr Hamdane's dental clinic",
      consultation: "Dr Hamdane's consultation office in Hammamet",
    },
  },
  services: {
    title: 'Dental implants and gum treatment in Hammamet',
    lead: "The clinic's main treatments, from periodontology to oral surgery. For any other dental care, contact the clinic.",
    groupsLabel: 'Treatment categories',
    groups: {
      implantologie: {
        title: 'Implantology',
        text: 'Replacing one or more missing teeth with a fixed, natural-looking and lasting solution.',
      },
      parodontologie: {
        title: 'Periodontology',
        text: 'Preventing, treating and stabilising gum disease to keep your natural teeth.',
      },
      'chirurgie-orale': {
        title: 'Oral surgery',
        text: 'Surgical procedures carried out at the clinic, from wisdom teeth to cysts.',
      },
    },
  },
  contact: {
    title: 'Book an appointment in Hammamet',
    lead: 'Call the clinic, send a WhatsApp message or visit us in Hammamet.',
    mapTitle: "Map to Dr Hamdane's clinic",
    place: 'Hammamet, Nabeul, Tunisia',
  },
  abroad: {
    kicker: 'Patients from abroad',
    title: 'Dental care in Hammamet for patients from abroad',
    lead: 'Do you live in Europe, the Maghreb or further away? Dr Khaireddine Hamdane, periodontist and implantologist, welcomes patients from abroad at his clinic in Hammamet, Tunisia.',
    facts: {
      doctor: {
        title: 'Who you will see',
        text: 'Dr Khaireddine Hamdane, periodontist and implantologist: State Doctorate in Dental Medicine, specialist diploma in periodontology and CECU in advanced implantology.',
      },
      languages: { title: 'Languages', text: 'Consultations are held in English, French or Arabic.' },
      contact: {
        title: 'Planning your visit',
        text: 'Contact the clinic before you travel, on WhatsApp, by phone or by email, to arrange your appointment.',
      },
      travel: {
        title: 'Getting to Hammamet',
        text: 'Hammamet is served by Enfidha-Hammamet and Tunis-Carthage international airports. The clinic is at Immeuble Olympia, rue du Koweit.',
      },
    },
    treatments: {
      title: 'Most requested treatments',
      text: 'Dental implants, bone and gum grafts and treatment of gum disease: see the treatments offered at the clinic.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Does the clinic see patients who live abroad?',
          a: 'Yes. Dr Hamdane welcomes patients from abroad at his clinic in Hammamet. Contact the clinic before you travel to arrange your appointment.',
        },
        { q: 'Which languages are consultations held in?', a: 'English, French or Arabic.' },
        {
          q: 'How do I book an appointment from abroad?',
          a: 'On WhatsApp or by phone at +216 22 920 867, or by email at dr.khaireddine.hamdane@gmail.com.',
        },
        {
          q: 'Which airport should I fly to?',
          a: 'Hammamet is served by Enfidha-Hammamet International Airport and Tunis-Carthage International Airport.',
        },
        {
          q: 'What are the opening hours?',
          a: 'Monday to Friday 9 am to 5 pm, and Saturday 9 am to 1 pm. The clinic is closed on Sunday.',
        },
      ],
    },
  },
  footer: {
    tagline: 'Periodontology and oral implantology clinic in Hammamet.',
    pages: 'Pages',
    contact: 'Contact',
    follow: 'Follow the clinic',
    languages: 'Languages',
    rights: 'Dr Khaireddine Hamdane clinic',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has moved.',
    back: 'Back to the home page',
  },
};

const ar: Dictionary = {
  languageName: 'العربية',
  doctorName: 'الدكتور خير الدين حمدان',
  meta: {
    home: {
      title: 'طبيب أسنان مختص في أمراض اللثة بالحمامات · د. حمدان',
      description:
        'عيادة أسنان في الحمامات، ولاية نابل: علاج أمراض اللثة وزراعة الأسنان وجراحة الفم لدى الدكتور خير الدين حمدان. احجزوا عبر الهاتف أو واتساب.',
    },
    about: {
      title: 'الدكتور خير الدين حمدان، أخصائي أمراض اللثة في الحمامات',
      description:
        'الدكتور خير الدين حمدان، أخصائي أمراض اللثة وزراعة الأسنان في الحمامات: دكتوراه دولة في طب الأسنان، اختصاص في أمراض اللثة، شهادة CECU في الزراعة.',
    },
    services: {
      title: 'زراعة الأسنان وعلاج اللثة في الحمامات، تونس',
      description:
        'زرع الغرسات، ترميم العظم، زراعة اللثة، علاج أمراض اللثة وقلع ضروس العقل لدى الدكتور حمدان، أخصائي أمراض اللثة في الحمامات.',
    },
    abroad: {
      title: 'علاج وزراعة الأسنان في تونس للمرضى من الخارج',
      description:
        'تعيشون خارج تونس؟ الدكتور خير الدين حمدان، أخصائي أمراض اللثة في الحمامات، يستقبل مرضاه بالعربية والفرنسية والإنجليزية. تواصلوا عبر واتساب.',
    },
    contact: {
      title: 'موعد مع أخصائي أمراض اللثة في الحمامات · ساعات العمل',
      description:
        'عيادة الدكتور حمدان، مبنى أولمبيا، شارع الكويت، الحمامات. مفتوحة من الإثنين إلى الجمعة من 9:00 إلى 17:00 والسبت من 9:00 إلى 13:00.',
    },
  },
  nav: {
    home: 'الرئيسية',
    about: 'الطبيب',
    services: 'العلاجات',
    abroad: 'من الخارج',
    contact: 'اتصل بنا',
    book: 'احجز موعدًا',
    menu: 'القائمة',
    closeMenu: 'إغلاق القائمة',
    language: 'اللغة',
    skip: 'انتقل إلى المحتوى',
    main: 'التنقل الرئيسي',
    breadcrumb: 'مسار التنقل',
  },
  common: {
    call: 'اتصال',
    whatsapp: 'واتساب',
    whatsappMessage: 'مرحبًا دكتور، أرغب في حجز موعد.',
    whatsappAbout: 'مرحبًا دكتور، أرغب في موعد من أجل: ',
    write: 'راسلنا',
    directions: 'الاتجاهات',
    openMaps: 'فتح في خرائط Google',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'مبنى أولمبيا، شارع الكويت، الحمامات، نابل، تونس',
    addressShort: 'مبنى أولمبيا، شارع الكويت، الحمامات',
    addressLabel: 'العنوان',
    hours: 'ساعات العمل',
    copy: 'نسخ',
    copied: 'تم النسخ',
    before: 'قبل',
    after: 'بعد',
    beforeAfter: 'قبل / بعد',
    seeTreatment: 'عرض العلاج',
    allTreatments: 'جميع العلاجات',
    bookTreatment: 'اطلب موعدًا لهذا العلاج',
  },
  hours: {
    weekdays: 'الإثنين – الجمعة',
    saturday: 'السبت',
    sunday: 'الأحد',
    weekdaysTime: '9:00 – 17:00',
    saturdayTime: '9:00 – 13:00',
    closed: 'مغلق',
    short: 'الإثنين – الجمعة 9:00 – 17:00 · السبت 9:00 – 13:00',
  },
  home: {
    eyebrow: 'طبيب أسنان مختص في أمراض اللثة بالحمامات',
    title: 'لثة سليمة',
    titleEm: 'وزراعة أسنان تدوم',
    lead: 'الدكتور خير الدين حمدان، أخصائي أمراض اللثة وزراعة الأسنان، يستقبلكم في عيادته لطب الأسنان بالحمامات، ولاية نابل.',
    credentials: ['دكتوراه دولة في طب الأسنان', 'اختصاص في أمراض اللثة', 'شهادة CECU في زراعة الأسنان المتقدمة'],
    portraitAlt: 'الدكتور خير الدين حمدان، أخصائي أمراض اللثة، في عيادته بالحمامات',
    portraitRole: 'أمراض اللثة · زراعة الأسنان',
    expertise: {
      kicker: 'الخبرة',
      title: 'أمراض اللثة وزراعة الأسنان في صميم ممارسته',
      text: 'تخصص الدكتور حمدان في علاج اللثة وزراعة الأسنان، ويقدم أيضًا جراحة الفم وعلاجات أسنان أخرى في العيادة.',
    },
    perio: {
      title: 'أمراض اللثة',
      text: 'الوقاية من أمراض اللثة وعلاجها وتثبيتها للحفاظ على أسنانكم الطبيعية.',
      link: 'علاجات أمراض اللثة',
    },
    implant: {
      title: 'زراعة الأسنان',
      text: 'تعويض سن أو عدة أسنان مفقودة بحل ثابت وجمالي ودائم.',
      link: 'علاجات زراعة الأسنان',
    },
    also: { title: 'وأيضًا', text: 'جراحة الفم وعلاجات أسنان أخرى', wisdomTeeth: 'ضروس العقل' },
    faq: {
      kicker: 'لفهم أفضل',
      title: 'أسئلتكم حول أمراض اللثة وزراعة الأسنان',
      text: 'ثلاث إجابات قبل زيارتكم الأولى.',
      items: [
        {
          q: 'ما هو طب أمراض اللثة؟',
          a: 'طب أمراض اللثة هو تخصص طب الأسنان الذي يركز على الوقاية من أمراض اللثة والبنى الداعمة للأسنان وتشخيصها وعلاجها. والهدف منه هو الحفاظ على صحة أنسجة اللثة. يمكن أن تؤدي أمراض اللثة، مثل التهاب اللثة والتهاب دواعم الأسنان، إلى فقدان الأسنان إذا تُركت دون علاج. يتم تدريب أخصائي دواعم الأسنان على التعامل مع هذه الحالات وإجراء علاجات محددة وتقديم المشورة بشأن أفضل ممارسات نظافة الفم.',
        },
        {
          q: 'ما هي زراعة الأسنان؟',
          a: 'زراعة الأسنان هي فرع من فروع طب الأسنان. الزرعات هي أجهزة مصنوعة من التيتانيوم يتم إدخالها جراحيًا في عظم الفك لاستبدال جذور الأسنان المفقودة. تعمل الزرعات كدعم للأطقم السنية، مثل التيجان والجسور أو الأطقم المتحركة، مما يعيد وظيفة الأسنان والمظهر الجمالي. تتطلب زراعة الأسنان تدريبًا متخصصًا، حيث تتضمن فهمًا شاملاً للتشريح والأسنان والجراحة.',
        },
        {
          q: 'ماذا يفعل طبيب الأسنان المختص بأمراض اللثة وزراعة الأسنان؟',
          a: 'طبيب الأسنان المختص بأمراض اللثة وزراعة الأسنان هو طبيب أسنان متخصص في علاج أمراض اللثة وزراعة الأسنان. يلعب دورًا حيويًا في تشخيص وعلاج مشاكل اللثة، مما يمهد الطريق لحلول زراعة الأسنان الفعالة. يقوم هذا الاختصاصي بتقييم الصحة الفموية العامة للمريض، ويجري عمليات جراحية لعلاج أمراض اللثة، ويقوم أيضًا بزراعة الأسنان عند الضرورة.',
        },
      ],
    },
    clinic: {
      kicker: 'العيادة',
      title: 'عيادة هادئة ومشرقة في قلب الحمامات',
      hygieneTitle: 'النظافة والتعقيم',
      hygieneText: 'يتم تنفيذ كل إجراء باستخدام معدات معقمة بعناية، بما يتوافق مع المعايير الدولية.',
      link: 'تعرف على العيادة',
    },
    reviews: { kicker: 'آراء المرضى', title: 'ماذا يقول مرضانا' },
    abroadBand: {
      kicker: 'المرضى من الخارج',
      title: 'تعيشون خارج تونس؟',
      text: 'يستقبل الدكتور حمدان في الحمامات المرضى القادمين من الخارج، بالعربية أو الفرنسية أو الإنجليزية.',
      link: 'التحضير لزيارتكم',
    },
  },
  cta: {
    title: 'احجزوا موعدًا في عيادة الحمامات',
    text: 'اتصلوا بنا أو راسلونا عبر واتساب أو زورونا في مبنى أولمبيا.',
    call: 'اتصل بالعيادة',
  },
  about: {
    kicker: 'أخصائي أمراض اللثة',
    role: 'طبيب أسنان أخصائي في أمراض اللثة وزراعة الأسنان بالحمامات',
    bio: [
      'بعد اكتساب الخبرة في المستشفيات والعيادات الخاصة، افتتح الدكتور حمدان عيادته الخاصة في الحمامات، نابل، حيث يتخصص في علاج أمراض اللثة وزراعة الأسنان.',
      'يحضر بانتظام الدورات التدريبية والندوات لمواكبة أحدث التطورات في مجال طب الأسنان. توفر العيادة بيئة ترحيبية، حيث يمكن لكل مريض أن يشعر بالراحة أثناء تلقي الرعاية المصممة خصيصاً لتلبية احتياجاته.',
    ],
    seeTreatments: 'عرض العلاجات',
    cv: {
      kicker: 'المسار',
      title: 'التكوين والخبرة',
      diplomas: 'الشهادات',
      experience: 'الخبرة',
      diplomaItems: [
        { title: 'دكتوراه دولة في طب الأسنان' },
        { title: 'دبلوم تخصص في أمراض اللثة' },
        { title: 'شهادة CECU في زراعة الأسنان المتقدمة' },
      ],
      experienceItems: [
        { title: 'العمل في المستشفيات' },
        { title: 'الممارسة في العيادات الخاصة' },
        { title: 'عيادته الخاصة في الحمامات', text: 'مبنى أولمبيا، شارع الكويت' },
        { title: 'التكوين المستمر', text: 'دورات تدريبية وندوات منتظمة' },
      ],
    },
    values: {
      kicker: 'نهجه',
      title: 'ما يوجه ممارسته',
      items: [
        { title: 'رعاية تناسب كل مريض', text: 'بيئة ترحيبية يشعر فيها كل مريض بالراحة ويتلقى رعاية تلائم احتياجاته.' },
        { title: 'النظافة والتعقيم', text: 'معدات معقمة وفق المعايير الدولية، للعلاجات الروتينية والجراحة على حد سواء.' },
        { title: 'التكوين المستمر', text: 'دورات وندوات منتظمة لمواكبة أحدث التطورات في طب الأسنان.' },
      ],
    },
    clinic: {
      kicker: 'العيادة',
      title: 'رعاية عالية الجودة مع التزام صارم بمعايير النظافة',
      paragraphs: [
        'تلتزم عيادة طب الأسنان لدينا، الواقعة في الحمامات، بتقديم رعاية عالية الجودة مع الالتزام بدقة بمعايير النظافة والتعقيم.',
        'يتم تنفيذ كل إجراء باستخدام معدات معقمة بعناية، بما يتوافق مع المعايير الدولية. نحن نستخدم أحدث التقنيات لتعقيم الأدوات، مما يضمن بيئة آمنة لكل إجراء. فريقنا مدرب ومدرك لأفضل ممارسات النظافة الصحية لضمان السلامة المثلى لكل مريض، سواءً للعناية الروتينية أو زراعة الأسنان أو علاجات اللثة المتخصصة.',
      ],
    },
    photos: {
      room: 'غرفة العلاج في عيادة الأسنان بالحمامات',
      office: 'مكتب عيادة الدكتور حمدان',
      consultation: 'مكتب الاستشارة لدى الدكتور حمدان في الحمامات',
    },
  },
  services: {
    title: 'زراعة الأسنان وعلاج اللثة في الحمامات',
    lead: 'أهم العلاجات المتوفرة في العيادة، من أمراض اللثة إلى جراحة الفم. لأي علاج أسنان آخر، اتصلوا بالعيادة.',
    groupsLabel: 'فئات العلاج',
    groups: {
      implantologie: { title: 'زراعة الأسنان', text: 'تعويض سن أو عدة أسنان مفقودة بحل ثابت وجمالي ودائم.' },
      parodontologie: { title: 'أمراض اللثة', text: 'الوقاية من أمراض اللثة وعلاجها وتثبيتها للحفاظ على أسنانكم الطبيعية.' },
      'chirurgie-orale': { title: 'جراحة الفم', text: 'تدخلات جراحية تُجرى في العيادة، من ضروس العقل إلى الأكياس.' },
    },
  },
  contact: {
    title: 'احجز موعدًا في عيادة الحمامات',
    lead: 'اتصلوا بالعيادة أو راسلونا عبر واتساب أو زورونا في الحمامات.',
    mapTitle: 'خريطة الوصول إلى عيادة الدكتور حمدان',
    place: 'الحمامات، نابل، تونس',
  },
  abroad: {
    kicker: 'المرضى من الخارج',
    title: 'العلاج في الحمامات للمرضى المقيمين في الخارج',
    lead: 'تعيشون في أوروبا أو في المغرب العربي أو في مكان آخر؟ يستقبل الدكتور خير الدين حمدان، أخصائي أمراض اللثة وزراعة الأسنان، المرضى القادمين من الخارج في عيادته بالحمامات، تونس.',
    facts: {
      doctor: {
        title: 'من سيستقبلكم',
        text: 'الدكتور خير الدين حمدان، أخصائي أمراض اللثة وزراعة الأسنان: دكتوراه دولة في طب الأسنان، دبلوم تخصص في أمراض اللثة، وشهادة CECU في زراعة الأسنان المتقدمة.',
      },
      languages: { title: 'اللغات', text: 'تُجرى الاستشارات بالعربية أو الفرنسية أو الإنجليزية.' },
      contact: {
        title: 'التحضير لزيارتكم',
        text: 'تواصلوا مع العيادة قبل سفركم عبر واتساب أو الهاتف أو البريد الإلكتروني لتنظيم موعدكم.',
      },
      travel: {
        title: 'الوصول إلى الحمامات',
        text: 'تخدم الحمامات مطارَي النفيضة-الحمامات الدولي وتونس قرطاج الدولي. تقع العيادة في مبنى أولمبيا، شارع الكويت.',
      },
    },
    treatments: {
      title: 'العلاجات الأكثر طلبًا',
      text: 'زراعة الأسنان، ترميم العظم واللثة، وعلاج أمراض اللثة: اطلعوا على العلاجات المتوفرة في العيادة.',
    },
    faq: {
      title: 'أسئلة شائعة',
      items: [
        {
          q: 'هل تستقبل العيادة المرضى المقيمين في الخارج؟',
          a: 'نعم. يستقبل الدكتور حمدان المرضى القادمين من الخارج في عيادته بالحمامات. تواصلوا مع العيادة قبل سفركم لتنظيم موعدكم.',
        },
        { q: 'بأي لغة تُجرى الاستشارات؟', a: 'بالعربية أو الفرنسية أو الإنجليزية.' },
        {
          q: 'كيف أحجز موعدًا من الخارج؟',
          a: 'عبر واتساب أو الهاتف على الرقم \u2066+216 22 920 867\u2069، أو عبر البريد الإلكتروني \u2066dr.khaireddine.hamdane@gmail.com\u2069.',
        },
        {
          q: 'أي مطار أختار للوصول إلى الحمامات؟',
          a: 'تخدم الحمامات مطار النفيضة-الحمامات الدولي ومطار تونس قرطاج الدولي.',
        },
        {
          q: 'ما هي ساعات عمل العيادة؟',
          a: 'من الإثنين إلى الجمعة من 9:00 إلى 17:00، والسبت من 9:00 إلى 13:00. العيادة مغلقة يوم الأحد.',
        },
      ],
    },
  },
  footer: {
    tagline: 'عيادة أمراض اللثة وزراعة الأسنان في الحمامات.',
    pages: 'الصفحات',
    contact: 'اتصل بنا',
    follow: 'تابعوا العيادة',
    languages: 'اللغات',
    rights: 'عيادة الدكتور خير الدين حمدان',
  },
  notFound: {
    title: 'الصفحة غير موجودة',
    text: 'هذه الصفحة غير موجودة أو تم نقلها.',
    back: 'العودة إلى الصفحة الرئيسية',
  },
};

const UI: Record<Locale, Dictionary> = { fr, en, ar };

export function t(lang: Locale): Dictionary {
  return UI[lang];
}
