# implants-hammamet.tn

Website of Dr Khaireddine Hamdane's periodontology and oral implantology clinic in Hammamet,
in French, English and Arabic. Built with [Astro](https://astro.build) as a static site and
hosted on GitHub Pages.

## Run it locally

Requires Node 22.23.4 or later.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, writes the site to dist/, then runs the SEO checks
npm run preview   # serves dist/ as it will be published
```

## Where things live

| To change…                                   | Edit                         |
| -------------------------------------------- | ---------------------------- |
| Any text, in all three languages             | `src/i18n/ui.ts`             |
| Page titles and descriptions (Google results) | `meta` in `src/i18n/ui.ts`   |
| Structured data read by Google               | `src/data/structured-data.ts` |
| Treatments (titles, descriptions, photos)    | `src/data/treatments.ts`     |
| Before / after photos                        | `src/data/cases.ts`, `src/assets/cases/` |
| Phone, e-mail, address, hours, social links  | `src/data/clinic.ts`         |
| Page addresses                               | `src/i18n/routes.ts`         |
| Colours and fonts                            | `src/styles/tokens.css`      |
| Layout of each page                          | `src/views/`                 |

Every language shares one `Dictionary` type, so `npm run build` fails if a translation is
missing. Page addresses are the ones the previous site used (`/pages/fr/about-fr.html`, …),
so existing links and Google rankings keep working. The sitemap is generated at `/sitemap.xml`.

`scripts/check-seo.mjs` runs after every build and fails it when a page breaks an SEO rule:
title over 60 characters, description outside 70–155, not exactly one `<h1>`, missing or
wrong canonical, missing or one-way hreflang, image without `alt`, invalid structured data,
or a broken link or anchor.

## Deploying

Pushing to `make-changes` runs `.github/workflows/deploy.yml`, which builds the site and publishes it
to implants-hammamet.tn. You can also start it by hand from the repository's **Actions** tab.
In the repository settings, **Pages → Source** must be set to **GitHub Actions**, and the
custom domain `implants-hammamet.tn` must stay set there.
