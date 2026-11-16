import type { ImageMetadata } from 'astro';
import type { IconName } from '../components/icons';
import type { Locale } from '../i18n/routes';
import type { CaseKey } from './cases';

import detartrage from '../assets/treatments/detartrage.jpg';
import frenectomie from '../assets/treatments/frenectomie.jpg';
import extraction from '../assets/treatments/extraction.jpg';
import enucleation from '../assets/treatments/enucleation.jpg';

type Localized = Record<Locale, string>;

export const GROUP_KEYS = ['implantologie', 'parodontologie', 'chirurgie-orale'] as const;
export type GroupKey = (typeof GROUP_KEYS)[number];

export interface Treatment {
  /** Stable anchor on the treatments page, shared by all languages (e.g. #greffe-gingivale). */
  slug: string;
  group: GroupKey;
  icon: IconName;
  title: Localized;
  /** One line shown on the collapsed card. */
  summary: Localized;
  /** Full description shown when the card is opened. */
  body: Localized;
  /** Before / after pair shown when the card is opened. */
  caseKey?: CaseKey;
  /** Explanatory image (diagram or X-ray) for treatments without a before / after pair. */
  illustration?: ImageMetadata;
}

export const TREATMENTS: Treatment[] = [
  // ───────── Implantologie ─────────
  {
    slug: 'pose-implants',
    group: 'implantologie',
    icon: 'implant',
    caseKey: 'implant',
    title: { fr: "Pose d'implants dentaires", en: 'Dental implant placement', ar: 'زرع الغرسات السنية' },
    summary: {
      fr: 'Remplacer une dent manquante par un implant en titane.',
      en: 'Replacing a missing tooth with a titanium implant.',
      ar: 'تعويض السن المفقودة بغرسة من التيتانيوم.',
    },
    body: {
      fr: 'Remplacement de dents manquantes par des implants en titane, offrant une solution durable, esthétique et fonctionnelle pour retrouver un sourire harmonieux.',
      en: 'Replacement of missing teeth with titanium implants, offering a durable, aesthetic and functional solution for restoring a harmonious smile.',
      ar: 'استبدال الأسنان المفقودة بغرسات تيتانية، مما يوفر حلاً دائمًا وجماليًا ووظيفيًا لاستعادة ابتسامة متناغمة.',
    },
  },
  {
    slug: 'prothese-sur-implants',
    group: 'implantologie',
    icon: 'implant',
    caseKey: 'prothese',
    title: { fr: 'Prothèse sur implants', en: 'Implant-supported prosthesis', ar: 'طرف صناعي مدعوم بالغرسات' },
    summary: {
      fr: 'Couronnes, bridges ou prothèses complètes fixés sur implants.',
      en: 'Crowns, bridges or full dentures fixed on implants.',
      ar: 'تيجان أو جسور أو أطقم كاملة مثبتة على الغرسات.',
    },
    body: {
      fr: "Confection et pose de couronnes, bridges ou prothèses complètes sur implants pour restaurer la fonction et l'esthétique dentaire.",
      en: 'Making and fitting crowns, bridges or full dentures on implants to restore dental function and aesthetics.',
      ar: 'صناعة وتركيب التيجان والجسور أو الأطقم الكاملة على الغرسات لاستعادة الوظيفة الجمالية للأسنان.',
    },
  },
  {
    slug: 'implants-immediats',
    group: 'implantologie',
    icon: 'bolt',
    title: { fr: 'Implants dentaires immédiats', en: 'Immediate dental implants', ar: 'زراعة الأسنان الفورية' },
    summary: {
      fr: "Implant posé juste après l'extraction, pour réduire le temps sans dent.",
      en: 'An implant placed right after extraction, to shorten the time without a tooth.',
      ar: 'غرسة توضع مباشرة بعد القلع لتقليل مدة غياب السن.',
    },
    body: {
      fr: "Pose d'implants juste après l'extraction d'une dent, permettant une solution rapide tout en minimisant le temps sans dent.",
      en: 'Placement of implants immediately after tooth extraction, providing a rapid solution while minimising the time spent without a tooth.',
      ar: 'زرع الغرسات على الفور بعد استخراج الأسنان، مما يوفر حلاً سريعًا مع تقليل الوقت المستغرق بدون سن.',
    },
  },
  {
    slug: 'greffe-osseuse',
    group: 'implantologie',
    icon: 'layers',
    title: { fr: 'Greffe osseuse pré-implantaire', en: 'Pre-implant bone grafting', ar: 'زراعة العظام قبل الزرع' },
    summary: {
      fr: "Restaurer le volume osseux pour une base d'implant solide.",
      en: 'Restoring bone volume for a solid implant base.',
      ar: 'استعادة حجم العظم لتوفير قاعدة صلبة للغرسة.',
    },
    body: {
      fr: "Procédure visant à restaurer le volume osseux insuffisant pour permettre la pose d'implants, assurant une base solide et stable.",
      en: 'Procedure aimed at restoring insufficient bone volume to allow for the placement of implants, ensuring a solid and stable foundation.',
      ar: 'إجراء يهدف إلى استعادة حجم العظم غير الكافي للسماح بزراعة الزرعات، مما يضمن أساسًا قويًا ومستقرًا.',
    },
  },
  {
    slug: 'reconstruction-arcade',
    group: 'implantologie',
    icon: 'arch',
    title: { fr: "Reconstruction complète de l'arcade", en: 'Full-arch reconstruction', ar: 'إعادة بناء كاملة للقوس' },
    summary: {
      fr: 'Réhabiliter toute une arcade avec des solutions fixes sur implants.',
      en: 'Restoring a full arch with fixed solutions on implants.',
      ar: 'إعادة تأهيل القوس السني كاملًا بحلول ثابتة على الغرسات.',
    },
    body: {
      fr: "Réhabilitation de toute l'arcade dentaire à l'aide de plusieurs implants, permettant de remplacer plusieurs dents absentes avec des solutions prothétiques fixes.",
      en: 'Rehabilitation of the entire dental arch using multiple implants, allowing for the replacement of several missing teeth with fixed prosthetic solutions.',
      ar: 'إعادة تأهيل كامل للقوس السني باستخدام عدة زراعة، مما يسمح باستبدال عدة أسنان مفقودة بحلول تركيبية ثابتة.',
    },
  },

  // ───────── Parodontologie ─────────
  {
    slug: 'detartrage-curetage',
    group: 'parodontologie',
    icon: 'sparkle',
    illustration: detartrage,
    title: {
      fr: 'Détartrage profond et curetage parodontal',
      en: 'Deep scaling and periodontal curettage',
      ar: 'تنظيف عميق وكشط لثة الأسنان',
    },
    summary: {
      fr: 'Nettoyage sous-gingival qui stoppe la progression de la maladie.',
      en: 'Below-the-gum cleaning that stops the disease from progressing.',
      ar: 'تنظيف تحت اللثة يوقف تقدم المرض.',
    },
    body: {
      fr: 'Nettoyage sous-gingival pour éliminer la plaque et le tartre, essentiel pour stopper la progression des maladies parodontales.',
      en: 'Subgingival cleaning to remove plaque and tartar, essential for halting the progression of periodontal diseases.',
      ar: 'تنظيف تحت اللثة لإزالة البلاك والتكلس، وهو أمر ضروري لإيقاف تقدم الأمراض اللثوية.',
    },
  },
  {
    slug: 'traitement-chirurgical',
    group: 'parodontologie',
    icon: 'scalpel',
    title: {
      fr: 'Traitement chirurgical des maladies parodontales',
      en: 'Surgical treatment of periodontal disease',
      ar: 'العلاج الجراحي للأمراض اللثوية',
    },
    summary: {
      fr: 'Chirurgie des gencives pour prévenir la perte des dents.',
      en: 'Gum surgery to prevent tooth loss.',
      ar: 'جراحة اللثة للوقاية من فقدان الأسنان.',
    },
    body: {
      fr: 'Soins chirurgicaux visant à prévenir et traiter les infections des gencives et des structures de soutien des dents, pour prévenir la perte dentaire.',
      en: 'Surgical care aimed at preventing and treating infections of the gums and supporting structures of the teeth to prevent tooth loss.',
      ar: 'رعاية جراحية تهدف إلى منع ومعالجة التهابات اللثة والهياكل الداعمة للأسنان لمنع فقدان الأسنان.',
    },
  },
  {
    slug: 'greffe-gingivale',
    group: 'parodontologie',
    icon: 'gum',
    caseKey: 'greffe',
    title: { fr: 'Greffe gingivale', en: 'Gingival graft', ar: 'زراعة اللثة' },
    summary: {
      fr: 'Recouvrir les récessions et renforcer la gencive.',
      en: 'Covering gum recession and strengthening the gum.',
      ar: 'تغطية انحسار اللثة وتقويتها.',
    },
    body: {
      fr: "Interventions chirurgicales pour recouvrir les récessions gingivales et améliorer à la fois l'esthétique et la santé des gencives.",
      en: 'Surgical interventions to cover gingival recessions and improve both the aesthetics and health of the gums.',
      ar: 'تدخلات جراحية لتغطية تراجع اللثة وتحسين كل من المظهر الجمالي وصحة اللثة.',
    },
  },
  {
    slug: 'regeneration-parodontale',
    group: 'parodontologie',
    icon: 'sprout',
    title: { fr: 'Régénération parodontale guidée', en: 'Guided periodontal regeneration', ar: 'التجديد اللثوي الموجه' },
    summary: {
      fr: "Membranes pour régénérer l'os et les tissus de soutien.",
      en: 'Membranes that regrow bone and supporting tissue.',
      ar: 'أغشية لتجديد العظم والأنسجة الداعمة.',
    },
    body: {
      fr: "Technique chirurgicale utilisant des membranes pour favoriser la régénération de l'os et des tissus de soutien autour des dents affectées par des maladies parodontales.",
      en: 'Surgical technique using membranes to promote the regeneration of bone and supporting tissues around teeth affected by periodontal diseases.',
      ar: 'تقنية جراحية تستخدم الأغشية لتعزيز تجديد العظام والأنسجة الداعمة حول الأسنان المتأثرة بالأمراض اللثوية.',
    },
  },
  {
    slug: 'gingivectomie',
    group: 'parodontologie',
    icon: 'gumcut',
    caseKey: 'gingivectomie',
    title: { fr: 'Gingivectomie', en: 'Gingivectomy', ar: 'استئصال اللثة' },
    summary: {
      fr: "Retirer l'excès de gencive et redessiner son contour.",
      en: 'Removing excess gum tissue and reshaping its outline.',
      ar: 'إزالة النسيج اللثوي الزائد وإعادة تشكيل حدوده.',
    },
    body: {
      fr: "Intervention chirurgicale qui retire l'excès de tissu gingival, en cas d'inflammation avancée ou pour des raisons esthétiques, afin de réduire les poches parodontales et de faciliter l'hygiène buccale.",
      en: 'Surgical removal of excess gum tissue, in cases of advanced gum inflammation or for aesthetic reasons, to reduce periodontal pockets and make oral hygiene easier.',
      ar: 'تدخل جراحي يهدف إلى إزالة النسيج اللثوي الزائد في حالات التهاب اللثة المتقدم أو لأسباب جمالية، من أجل تقليل الجيوب اللثوية وتسهيل نظافة الفم.',
    },
  },
  {
    slug: 'contention-parodontale',
    group: 'parodontologie',
    icon: 'link',
    caseKey: 'contention',
    title: { fr: 'Contention parodontale', en: 'Periodontal splinting', ar: 'تثبيت اللثة' },
    summary: {
      fr: 'Stabiliser les dents mobiles.',
      en: 'Stabilising loose teeth.',
      ar: 'تثبيت الأسنان المتحركة.',
    },
    body: {
      fr: "La contention parodontale est un traitement visant à stabiliser les dents mobiles suite à une perte de support osseux causée par la parodontite. Elle permet de renforcer la stabilité des dents en répartissant les forces de mastication et en aidant à préserver l'alignement dentaire.",
      en: 'Periodontal splinting is a treatment aimed at stabilizing mobile teeth following loss of bony support caused by periodontitis. It strengthens the stability of the teeth by distributing chewing forces and helping to preserve dental alignment.',
      ar: 'تثبيت اللثة هو علاج يهدف إلى استقرار الأسنان المتحركة بعد فقدان الدعم العظمي الناتج عن التهاب اللثة. يعزز استقرار الأسنان عن طريق توزيع قوى المضغ والمساعدة في الحفاظ على محاذاة الأسنان.',
    },
  },

  // ───────── Chirurgie orale ─────────
  {
    slug: 'frenectomie',
    group: 'chirurgie-orale',
    icon: 'scissors',
    illustration: frenectomie,
    title: { fr: 'Frénectomie labiale et linguale', en: 'Labial and lingual frenectomy', ar: 'فك الالتصاقات الشفوية واللسانية' },
    summary: {
      fr: 'Corriger un frein gênant, avant orthodontie ou implant.',
      en: 'Correcting a restrictive frenum, before orthodontics or an implant.',
      ar: 'تصحيح اللجام المزعج قبل تقويم الأسنان أو الزرع.',
    },
    body: {
      fr: "Correction des freins labiaux ou linguaux qui causent des problèmes esthétiques ou fonctionnels, notamment en orthodontie ou pour faciliter l'implantation dentaire.",
      en: 'Correction of labial or lingual frena that cause aesthetic or functional problems, particularly in orthodontics or to facilitate dental implantation.',
      ar: 'تصحيح الالتصاقات الشفوية أو اللسانية التي تسبب مشاكل جمالية أو وظيفية، لا سيما في تقويم الأسنان أو لتسهيل زراعة الأسنان.',
    },
  },
  {
    slug: 'extraction-chirurgicale',
    group: 'chirurgie-orale',
    icon: 'extract',
    illustration: extraction,
    title: { fr: 'Extraction chirurgicale des dents', en: 'Surgical tooth extraction', ar: 'قلع الأسنان جراحيًا' },
    summary: {
      fr: "Dents incluses ou difficiles d'accès, dont les dents de sagesse.",
      en: 'Impacted or hard-to-reach teeth, including wisdom teeth.',
      ar: 'الأسنان المنطمرة أو صعبة الوصول، ومنها ضروس العقل.',
    },
    body: {
      fr: "L'extraction chirurgicale est pratiquée lorsque les dents sont incluses ou difficiles d'accès, comme les dents de sagesse. Cette intervention permet de retirer les dents de manière sécurisée, tout en minimisant les risques et les complications.",
      en: 'Surgical extraction is performed when teeth are impacted or difficult to access, such as wisdom teeth. This procedure allows for the safe removal of teeth while minimizing risks and complications.',
      ar: 'يتم إجراء الخلع الجراحي عندما تكون الأسنان متأثرة أو يصعب الوصول إليها، مثل ضروس العقل. يسمح هذا الإجراء بالخلع الآمن للأسنان مع تقليل المخاطر والمضاعفات.',
    },
  },
  {
    slug: 'enucleation-kystes',
    group: 'chirurgie-orale',
    icon: 'target',
    illustration: enucleation,
    title: { fr: 'Énucléation des kystes', en: 'Cyst enucleation', ar: 'استئصال الكيسة' },
    summary: {
      fr: 'Retirer un kyste et favoriser la régénération osseuse.',
      en: 'Removing a cyst and helping the bone heal.',
      ar: 'إزالة الكيس وتعزيز تجدد العظم.',
    },
    body: {
      fr: "L'énucléation des kystes consiste à retirer un kyste présent dans les tissus osseux ou mous. Cette chirurgie vise à éliminer l'infection et à favoriser la régénération osseuse pour rétablir la santé buccale.",
      en: 'Cyst enucleation involves removing a cyst present in the bone or soft tissues. This surgery aims to eliminate infection and promote bone regeneration to restore oral health.',
      ar: 'يتضمن استئصال الكيسة إزالة الكيسة الموجودة في العظام أو الأنسجة الرخوة. تهدف هذه الجراحة إلى القضاء على العدوى وتعزيز تجديد العظام لاستعادة صحة الفم.',
    },
  },
];

export const GROUP_ICONS: Record<GroupKey, IconName> = {
  implantologie: 'implant',
  parodontologie: 'tooth',
  'chirurgie-orale': 'scalpel',
};

export function treatmentsIn(group: GroupKey): Treatment[] {
  return TREATMENTS.filter((t) => t.group === group);
}

export function treatmentBySlug(slug: string): Treatment {
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) throw new Error(`Unknown treatment slug: ${slug}`);
  return treatment;
}
