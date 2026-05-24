# NiyamDesk Website

Professional Astro + Tailwind CSS website for a compliance and registration firm offering GST, company registration, income tax filing, FSSAI, Startup India, MSME/Udyam, GeM, IEC, ROC compliance, trademark registration, FEMA compliance, and related services in India.

## Tech Stack

- Astro static site
- Tailwind CSS
- Markdown service pages with root-level clean URLs
- Netlify Forms
- Astro sitemap integration
- JSON-LD schema for business, services, FAQs, and breadcrumbs
- Google Analytics and Microsoft Clarity placeholders through public environment variables

## Project Structure

```text
public/
  favicon.svg
  og-image.svg
  robots.txt
src/
  components/
  content/services/
  data/
  layouts/
  pages/
  styles/
astro.config.mjs
netlify.toml
tailwind.config.mjs
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Analytics Setup

Set these environment variables in Netlify when ready:

```text
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_CLARITY_ID=xxxxxxxxxx
```

## Content Updates

- Edit services in `src/content/services/`.
- Edit pricing in `src/data/pricing.ts`.
- Edit global contact details in `src/data/site.ts`.
- Edit homepage FAQ content in `src/data/faqs.ts`.

## Service URLs

- `/gst-registration`
- `/gst-return-filing`
- `/gst-notice-support`
- `/company-registration`
- `/llp-registration`
- `/opc-registration`
- `/income-tax-return-filing`
- `/fssai-registration`
- `/startup-india-registration`
- `/msme-udyam-registration`
- `/gem-registration`
- `/iec-registration`
- `/roc-compliance`
- `/trademark-registration`
- `/fema-compliance`

## Netlify

The project includes `netlify.toml`. The contact form uses Netlify Forms with the form name `contact`.
