import type { ImageMetadata } from 'astro';

import greffeAvant from '../assets/cases/greffe-avant.jpg';
import greffeApres from '../assets/cases/greffe-apres.jpg';
import gingivectomieAvant from '../assets/cases/gingivectomie-avant.jpg';
import gingivectomieApres from '../assets/cases/gingivectomie-apres.jpg';
import contentionAvant from '../assets/cases/contention-avant.jpg';
import contentionApres from '../assets/cases/contention-apres.jpg';
import protheseAvant from '../assets/cases/prothese-avant.jpg';
import protheseApres from '../assets/cases/prothese-apres.jpg';
import implantAvant from '../assets/cases/implant-avant.jpg';
import implantApres from '../assets/cases/implant-apres.jpg';

/**
 * Before / after pairs. Each image is cropped from the clinic's original collage to the
 * same 4:3 frame, so every pair lines up. Published with the patients' consent.
 */
export interface ClinicalCase {
  before: ImageMetadata;
  after: ImageMetadata;
}

export const CASES = {
  greffe: {
    before: greffeAvant,
    after: greffeApres,
  },
  gingivectomie: {
    before: gingivectomieAvant,
    after: gingivectomieApres,
  },
  contention: {
    before: contentionAvant,
    after: contentionApres,
  },
  prothese: {
    before: protheseAvant,
    after: protheseApres,
  },
  implant: {
    before: implantAvant,
    after: implantApres,
  },
} satisfies Record<string, ClinicalCase>;

export type CaseKey = keyof typeof CASES;

