# Hope Springs International — Website

> **Lasting change, One village at a time.**

The official website for **Hope Springs International**, a faith-based charity
bringing holistic transformation to underserved communities through **Clean
Water**, **Education**, and **Healthcare** — delivered completely free of
charge.

**Live site:** https://gideon-george.github.io/hope-springs-international/

---

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript — **static export** (`output: 'export'`)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for subtle scroll animations (respects reduced-motion)
- [lucide-react](https://lucide.dev/) icons
- Deployed to **GitHub Pages** via GitHub Actions

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build / export

```bash
npm run build      # produces the static site in out/
npx serve out      # preview the production build locally
```

Note: in production the site is served under `/hope-springs-international`
(the GitHub Pages project path). `next.config.js` applies that `basePath`
only for production builds, so `npm run dev` works at the root as normal.

## How deployment works

Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. installs dependencies and runs `npm run build` (static export to `out/`),
2. adds `.nojekyll` (stops GitHub Pages' Jekyll from deleting the `_next/` folder),
3. uploads `out/` and deploys it to GitHub Pages.

The site goes live automatically a minute or two after each push — no manual
steps.

---

## Editing guide (no coding experience needed)

All the words and facts live in a few small files:

| What you want to change | File |
|---|---|
| Phone number, addresses, motto, site URL | `lib/site.ts` |
| WhatsApp number + pre-filled messages | `lib/whatsapp.ts` |
| The three pillars (titles + descriptions) | `lib/pillars.ts` |
| The 4-step process | `lib/process.ts` |
| Page copy (Home, About, etc.) | `app/<page>/page.tsx` |

Edit the text between quotes, save, commit, and push — the site redeploys
itself.

### Adding / replacing photos (important rules)

1. **Resize first.** Keep the long edge around **1600px** and the file under
   ~400KB (any free tool like Squoosh works). Huge photos won't load on
   mobile data.
2. **Lowercase filenames**, e.g. `new-borehole.jpg` — **never** `PHOTO.JPG`.
   GitHub Pages is case-sensitive; uppercase names are the #1 cause of
   "works on my computer, broken online".
3. Put the file in `public/images/` and reference it in code as
   `asset('/images/new-borehole.jpg')`.
4. Always write meaningful `alt` text describing the photo with dignity.

### Adding donation / giving details (TODO)

When official giving details exist (bank account, giving platform link,
registration numbers), add them in
`app/get-involved/page.tsx` — search for `TODO(owner)`. Until then the page
routes givers to WhatsApp. **Never publish account details that didn't come
directly from the organisation.**

### Adding an email address (TODO)

Search for `TODO(owner)` in `app/contact/page.tsx` and replace the
"coming soon" note with the official email.

### Custom domain (later)

Add a `CNAME` file with your domain to `public/`, configure the domain in the
repo's Pages settings, and set `basePath` to `''` in `next.config.js`.

---

## Deploy troubleshooting

| Symptom | Cause / fix |
|---|---|
| Live page is blank or unstyled | `.nojekyll` missing from `out/` — the workflow adds it; check the "Ensure .nojekyll" step ran |
| Images or CSS 404 online but fine locally | Wrong `basePath`/`assetPrefix` in `next.config.js`, or an UPPERCASE filename referenced in lowercase (Pages is case-sensitive) |
| 404 when refreshing or opening a direct link | `trailingSlash: true` missing from `next.config.js` |
| Images fine locally, broken online | `images: { unoptimized: true }` missing — the Next image optimizer doesn't run on GitHub Pages |
