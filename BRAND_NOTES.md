# Brand & Content Notes — Hope Springs International

Source of truth: the client brief (`Document (26).odt`, extracted) plus the
supplied photo/video set. This file records what is real, what was derived,
and what is still an open TODO for the owner.

## Verified facts (from the brief — used verbatim on the site)

- **Name:** Hope Springs International
- **Motto:** "Lasting change, One village at a time."
- **Secondary line (from the branding banner):** "Living Water Through Sustainable Skills."
- **Identity:** faith-based charity founded on Christian principles; ministry
  to the whole person (physical + spiritual); ultimate goal to share the love
  of God so that people may come to know Jesus Christ as their Lord and Savior.
- **Three pillars:** Clean Water (community boreholes), Education, Healthcare.
- **Process:** Field Evaluation (Gombe field office) → Community Partnership
  (stewardship conditions) → HQ Approval & Funding (US headquarters) → Free
  Delivery (completely free of charge).
- **Phone & WhatsApp:** +234 809 100 9155 (wa.me/2348091009155)
- **Nigeria Field Office:** Suite 1, Doho Plaza, Beside Tumfure Divisional
  Police Headquarters, Tumfure, Gombe State, Nigeria (Postal 771104)
- **International HQ:** 2100 Nashville Pike, Gallatin, TN 37066, USA
- **Official brand colours:** Sky Blue and White (per the brief)

## Derived brand system

- **Sky blue #047DDF** — sampled from the logo's water drop (primary)
- **#4FB0E5** — lighter sky for tints; **#F3F9FD** — near-white sky tint background
- **#12283F** deep navy for text; **#5B6B7A** soft grey secondary
- **#4E7D3A** muted green — used only as an echo of the Africa-map banner; kept rare
- **#25D366** WhatsApp green — reserved exclusively for WhatsApp buttons
- **Type:** Bitter (friendly serif, headings) + Inter (body/UI) via `next/font`
- **Logo:** extracted from the brief's embedded images; white background
  converted to transparency (`public/images/logo.png`), pump-only mark
  (`public/images/logo-mark.png`) used for the navbar, footer, and favicon.

## Photo placement (all photos are the charity's own field photos)

| File (web copy) | Content | Used on |
|---|---|---|
| `borehole-drilling.jpg` | drilling rig at work | Home hero, Our Work (Clean Water), OG image |
| `team-celebration.jpg` | muddy drill team celebrating | Home impact strip, Our Work, How We Work, Get Involved hero |
| `community-meeting.jpg` | needs assessment under a tree with visiting clinician | Home, About hero, How We Work (Field Evaluation), Our Work (Healthcare) |
| `aid-delivery.jpg` | medical/aid delivery from a van | Healthcare pillar card, Home impact strip, Contact hero |
| `us-nigeria-partnership.jpg` | Nigerian staffer + US volunteer | About (partnership), Get Involved |
| `team-leaders.jpg` | two team leaders outside an office | About |
| `branding-banner.jpg` | children + Africa map banner | Home (who-we-are), About |

All originals were downscaled to ≤1600px long edge, ~170–340KB, lowercase
filenames (GitHub Pages is case-sensitive).

## Videos

Four clips were supplied (up to ~46MB — far too heavy to commit or stream).
**Choice made: option (a) — self-hosted compressed clips.** The two best clips
(completed water points with flowing taps and community members, with visible
Hope Springs signage) were compressed to 720p H.264, muted:

- `public/videos/water-point-flowing.mp4` (~3.7MB) — Home impact strip
- `public/videos/water-point-community.mp4` (~4.9MB) — Our Work

Both are lazy-loaded with poster images, `muted playsinline loop`, and only
autoplay when scrolled into view (and never for reduced-motion users). The two
remaining clips (driving footage) were not used. Raw MP4s are **not**
committed (`brand-assets/` is gitignored).

## Open TODOs for the owner (deliberately NOT invented)

- **Giving details:** no bank account, donation platform, or payment link was
  supplied → `app/get-involved/page.tsx` has a clearly-marked placeholder and
  routes givers to WhatsApp. Search `TODO(owner)`.
- **Email address:** none supplied → Contact page says "coming soon". 
- **Charity registration:** no EIN / 501(c)(3) / CAC number supplied → no
  tax-deductibility claims are made anywhere.
- **Founding year, staff names/bios, impact statistics, donor/partner names:**
  none supplied → none published.
- **Map pins:** the embedded Google Maps use address searches; replace with
  exact pins when confirmed (`lib/site.ts` → `mapQuery`).
