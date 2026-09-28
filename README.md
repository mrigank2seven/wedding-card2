# Rupali & Sumit — wedding site

A single-page, config-driven wedding website built with Vite, React, Tailwind CSS v4, and Motion. It deploys to GitHub Pages.

[Hosted website](https://sumitwedsrupali.vercel.app/)

## Edit the site (non-technical)

All guest-facing content lives in **one file**:

[`src/data/site.config.js`](src/data/site.config.js)

Change names, the hashtag, dates, invitation copy, event line-up, venue, photos, music path, footer text, navigation labels, and the default colour theme there. You should not need to edit any React component to launch the site.

Keep `navItems[].id` in sync with section ids (`hero`, `invitation`, `countdown`, `lineup`, `venue`, `gallery`).

## Bilingual Support (English & Hindi)

The site supports **English and Hindi** with an instant language toggle in the top-right corner.

### Edit translations

All translations live in:

[`src/lib/translations.js`](src/lib/translations.js)

The file contains two language objects: `en` and `hi`. Update text strings in both languages:

```js
// English
events: {
  mandap: {
    title: "Mandap Sthapana & Haldi",
    note: "Mandap preparation and Haldi ceremony with family.",
  },
}
```

```js
// Hindi
events: {
  mandap: {
    title: "मंडप स्थापना और हल्दी",
    note: "मंडप की तैयारी और परिवार के साथ हल्दी समारोह।",
  },
}
```

**English is the default language.** Users toggle to Hindi via the top-right button. Choice is saved to `localStorage` and persists across reloads.

Also update `siteUrl` and `meta` in that file so WhatsApp / Open Graph previews point at your live GitHub Pages URL.

## Swap photos

1. Add files under `public/photos/` (JPG, PNG, or SVG).
2. Update `gallery.photos` in `src/data/site.config.js` with `src`, descriptive `alt`, `width`, and `height`.
3. Keep `src` relative to `public/`, for example `photos/ceremony.jpg`.

Placeholder SVGs ship so the gallery works before real photographs exist.

Background music: replace `public/music/celebration.wav` or change `music.src` in the config. Music never autoplays; it starts after a tap on the floating control.

## Enable GitHub Pages

1. Push this repository to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys.

The workflow sets `VITE_BASE_PATH` to `/<repository-name>/`, which is required for **project** sites (`https://<user>.github.io/<repo>/`).

If this is a **user site** (`https://<user>.github.io`), build with `VITE_BASE_PATH=/` instead of deriving the path from the repository name.

## The base-path rule

GitHub Pages project sites serve from `/<repo>/`. If Vite’s `base` does not match, every asset 404s and the page can look blank.

`vite.config.js` uses:

```js
base: process.env.VITE_BASE_PATH || "/"
```

Verify locally:

```bash
# PowerShell
$env:VITE_BASE_PATH="/test/"; npm run build
```

Then confirm `dist/index.html` references assets under `/test/assets/...`.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Language Toggle

A language toggle button appears in the top-right corner of the site:
- Click to switch between English and Hindi instantly
- Current language preference is saved to browser storage
- Persists across page reloads and browser sessions
- Styled to match the wedding theme

The toggle is implemented via React Context (`LanguageContext`) and a custom hook (`useTranslation`).

## Preview themes

Palettes are listed in `site.themes`. The default is `defaultTheme`.

Append a query parameter:

`http://localhost:5173/?theme=marigold`

Available ids: `marigold`, `ruby`, `emerald`, `sapphire`, `lotus`.
