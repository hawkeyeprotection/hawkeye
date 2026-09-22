# Hawk Eye Protection Services — site

React 19 + Vite marketing site for Hawk Eye Protection Services Pvt. Ltd.,
built to the **Hawk Eye Refactor Dossier** — its sitemap (§06), page blueprints
(§07) and design system (§08).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
npm run lint     # oxlint
```

## Pages

| Route | Page | Source |
| ----- | ---- | ------ |
| `/` | Home | rebuilt from `index.php` |
| `/about` | About — story, 1991→today timeline, vision, 5 values, directors, registrations | `about_us.php` + `mission_vision.php` |
| `/services` | Services hub — category → role explorer | `service.php` |
| `/services/:slug` | Service detail — scope, sectors, process, FAQ, sticky quote CTA | new |
| `/industries` | Industries — 6 sector tiles with the client on post | new |
| `/how-we-work` | Takeover sequence, timeframes, capabilities, mechanisms, drills | `why-us.php` |
| `/training` | Training & Licences — week tabs, rank ladder, partners, PSARA states | `training.php` |
| `/clients` | Clients — marquee, postings by sector | new |
| `/careers` | Careers — roles, eligibility, Hindi toggle, WhatsApp apply | `career.php` |
| `/compliance` | Public compliance statement + client portal login | replaces `campilation.php` |
| `/contact` | Survey form, WhatsApp, map, hours, FAQs | `contact.php` |
| `*` | 404 | — |

`src/routes.js` holds the nav, the footer column, the router and the legacy
redirect map — add a route there and it appears everywhere.

## Content provenance

Page copy lives in `src/data/`, transcribed from the live site where it existed.
**Where the client has not supplied content, the UI says so** rather than passing
placeholder prose off as approved — see `components/common/DraftNote`:

- **Service descriptions** — the old site listed titles only. Every entry in
  `data/serviceDetails.js` is `draft: true`.
- **Training syllabus** — the three-week shape is the client's; the week-by-week
  breakdown is ours, pending the real syllabus.
- **Testimonials** — none supplied. The section renders an explicit placeholder.
- **Guards on post** — the bento tile awaits a real figure.
- **CIN** — the 2016 site published `U74899DL1991PTO 43290`; `PTC` is carried
  here as the corrected form. Confirm against the MCA record before launch.

## Signature interactions (§07)

- **Home** — hero entrance with the emblem swoop, overlapping quick-links card,
  numbers bento (scroll fly-in + count-up), takeover preview, timeframe band.
- **Services** — sticky category rail → role sub-tabs → staggered cards, with the
  selected role written to the URL hash so any role is linkable.
- **How we work** — scroll-pinned takeover sequence (disabled under 768px per
  §08), tabbed capabilities/mechanisms explorer, drills gallery.
- **Training** — week-by-week tabs, insignia ladder, PSARA state grid.
- **Careers** — role filter chips, English/Hindi toggle, WhatsApp apply.

Motion respects `prefers-reduced-motion`; pinning and count-up both no-op.

## Compliance note

The old `/campilation.php` published 213 payroll PDFs — salary sheets, bank
transfer lists and cheque copies naming individual staff — with no login. That
directory is gone. `/compliance` states what the company files; the documents sit
behind the client portal. `public/_redirects` returns **410 Gone** for
`/webmaster/uploads/*`.

## Deploying

This is a build, not a static folder — serving the repo root gives a white screen,
because `index.html` there points at `/src/main.jsx`, which no browser can run.
Run `npm run dev`, or `npm run build` and serve `dist/`.

GitHub Pages publishes `dist/` via `.github/workflows/deploy.yml` on every push to
`main` (Pages source must be set to **GitHub Actions**, not a branch). The site sits
at `/hawkeye/`, so `vite.config.js` sets `base` to match and the router takes its
`basename` from it; set `VITE_BASE=/` to build for a domain root instead.

Client-routed SPA, so a hard refresh on `/services` needs a server-side fallback.
The build writes `404.html` as a copy of `index.html`, which is how Pages serves one.
`public/_redirects` carries the same fallback plus the §06 301 map in Netlify format;
on another host, reproduce both.

## Structure

```
src/
  routes.js                 nav + footer + router + legacy redirects
  components/
    layout/                 TopStrip, Header, Footer, Layout, ScrollToTop
    common/                 PageHero, CtaBand, Explorer, Bento, DraftNote
    forms/                  SiteSurveyForm (Home teaser + Contact)
    home/                   Home-only sections, in blueprint order
  pages/<Name>/             one folder per page: .jsx + .module.css
  data/                     all page copy
  hooks/                    openState, reveal, autoplay, surveyCta,
                            countUp, mediaQuery, scrollSteps
  styles/                   tokens, animations, section primitives
```
