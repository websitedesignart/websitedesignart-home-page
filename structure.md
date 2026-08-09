# WebsiteDesignArt Site Structure

Authoritative structural reference for the WebsiteDesignArt website.
Generated from direct inspection of the project source files on 2026-08-09.
Documentation only — this file describes the site as it exists; it authorizes no changes.

---

## 1. Site Overview

- Static HTML website, **27 pages**, no build system and no server-side code.
- Pages are `<x-dc>` documents rendered client-side by `support.js` (resolves `{{ }}` bindings, `style-hover`, per-page component scripts). `backdrop.js` renders the animated background.
- One breakpoint governs responsive layout: `window.innerWidth < 940` (defined in each page's inline component script as `narrow`).
- Fonts: Archivo (headings/UI) and Newsreader (body), loaded from Google Fonts.
- Accent color: `#c2412a` (default of the `accent` prop; options `#1f5c4c`, `#2b4a7d`, `#8a5a2b` exist in page props but `#c2412a` is the default in use).
- Git repository: https://github.com/websitedesignart/websitedesignart-home-page (branch `main`).
- Temporarily live at https://resultnaukari.com/ (deployment mechanism to that host is not part of this repo — see §20).
- Page count breakdown: 1 homepage + 6 pillar (group) pages + 18 service pages + About + Contact.

## 2. Site Hierarchy

```
WebsiteDesignArt
│
├── Home ........................................ index.html
│
├── Web Architecture & Build .................... pillar-web-architecture.dc.html
│   ├── Website Design & Development ............ website-design-development.dc.html
│   └── WordPress Services ...................... wordpress-services.dc.html
│
├── Custom Software & Automation ................ pillar-custom-software.dc.html
│   ├── Software Development .................... software-development.dc.html
│   ├── Business Automation ..................... business-automation.dc.html
│   └── IT & Business Consultancy ............... it-business-consultancy.dc.html
│
├── E-Commerce Operations ....................... pillar-ecommerce.dc.html
│   ├── E-Commerce Website Development .......... ecommerce-website-development.dc.html
│   └── E-Commerce Support ...................... ecommerce-support.dc.html
│
├── Growth & Visibility ......................... pillar-growth.dc.html
│   ├── SEO Services ............................ seo-services.dc.html
│   ├── Digital Marketing ....................... digital-marketing.dc.html
│   └── Social Media Services ................... social-media-services.dc.html
│
├── Brand & Creative Assets ..................... pillar-brand.dc.html
│   ├── Branding ................................ branding.dc.html
│   ├── Graphic Design .......................... graphic-design.dc.html
│   └── Website Content ......................... website-content.dc.html
│
├── Hosting & Site Management ................... pillar-hosting.dc.html
│   ├── Domain, Hosting & Business Email ........ domain-hosting-business-email.dc.html
│   ├── Website Performance ..................... website-performance.dc.html
│   ├── Website Security ........................ website-security.dc.html
│   ├── Website Migration & Recovery ............ website-migration-recovery.dc.html
│   └── Cloud & Digital Solutions ............... cloud-digital-solutions.dc.html
│
├── About Us .................................... about.dc.html
└── Contact Us .................................. contact.dc.html
```

Group membership is verified two ways and matches in both directions: each service page's breadcrumb links to its pillar, and each pillar's "Services in this group" section links to its services.

## 3. Complete Page Inventory

URLs are root-relative (static site — the filename is the URL). Pages have **no `<title>` tags** (see §20/§21).

| #  | Page Type | Group | Page Name (H1) | Filename / URL | Main Image |
|----|-----------|-------|----------------|----------------|------------|
| 1  | Homepage | — | "A site is drawn before it's built." | `index.html` | `assets/hero-tablet-crop.png` (device mockup, used 5×) |
| 2  | Pillar | — | Web Architecture & Build | `pillar-web-architecture.dc.html` | `assets/pillar-web-architecture-hero.png` |
| 3  | Pillar | — | Custom Software & Automation | `pillar-custom-software.dc.html` | `assets/pillar-custom-software-hero.png` |
| 4  | Pillar | — | E-Commerce Operations | `pillar-ecommerce.dc.html` | `assets/pillar-ecommerce-hero.png` |
| 5  | Pillar | — | Growth & Visibility | `pillar-growth.dc.html` | `assets/pillar-growth-hero.png` |
| 6  | Pillar | — | Brand & Creative Assets | `pillar-brand.dc.html` | `assets/pillar-brand-hero.png` |
| 7  | Pillar | — | Hosting & Site Management | `pillar-hosting.dc.html` | `assets/pillar-hosting-hero.png` |
| 8  | Service | Web Architecture & Build | Website Design & Development | `website-design-development.dc.html` | `assets/service-01.webp` |
| 9  | Service | E-Commerce Operations | E-Commerce Website Development | `ecommerce-website-development.dc.html` | `assets/service-02.webp` |
| 10 | Service | Web Architecture & Build | WordPress Services | `wordpress-services.dc.html` | `assets/service-03.webp` |
| 11 | Service | Custom Software & Automation | Software Development | `software-development.dc.html` | `assets/service-04.webp` |
| 12 | Service | Custom Software & Automation | Business Automation | `business-automation.dc.html` | `assets/service-05.webp` |
| 13 | Service | Hosting & Site Management | Domain, Hosting & Business Email | `domain-hosting-business-email.dc.html` | `assets/service-06.webp` |
| 14 | Service | Growth & Visibility | SEO Services | `seo-services.dc.html` | `assets/service-07.webp` |
| 15 | Service | Growth & Visibility | Digital Marketing | `digital-marketing.dc.html` | `assets/service-08.webp` |
| 16 | Service | Growth & Visibility | Social Media Services | `social-media-services.dc.html` | `assets/service-09.webp` |
| 17 | Service | Brand & Creative Assets | Graphic Design | `graphic-design.dc.html` | `assets/service-10.webp` |
| 18 | Service | Brand & Creative Assets | Branding | `branding.dc.html` | `assets/service-11.webp` |
| 19 | Service | Brand & Creative Assets | Website Content | `website-content.dc.html` | `assets/service-12.webp` |
| 20 | Service | Hosting & Site Management | Website Performance | `website-performance.dc.html` | `assets/service-13.webp` |
| 21 | Service | Hosting & Site Management | Website Security | `website-security.dc.html` | `assets/service-14.webp` |
| 22 | Service | Hosting & Site Management | Website Migration & Recovery | `website-migration-recovery.dc.html` | `assets/service-15.webp` |
| 23 | Service | E-Commerce Operations | E-Commerce Support | `ecommerce-support.dc.html` | `assets/service-16.webp` |
| 24 | Service | Hosting & Site Management | Cloud & Digital Solutions | `cloud-digital-solutions.dc.html` | `assets/service-17.webp` |
| 25 | Service | Custom Software & Automation | IT & Business Consultancy | `it-business-consultancy.dc.html` | `assets/service-18.webp` |
| 26 | About | — | About page | `about.dc.html` | `assets/about-hero-v5.png` |
| 27 | Contact | — | Contact page | `contact.dc.html` | `assets/contact-hero.png` |

## 4. Page Groups / Pillars

| Pillar | Filename | Services in group |
|--------|----------|-------------------|
| Web Architecture & Build | `pillar-web-architecture.dc.html` | 2 (Website Design & Development, WordPress Services) |
| Custom Software & Automation | `pillar-custom-software.dc.html` | 3 (Software Development, Business Automation, IT & Business Consultancy) |
| E-Commerce Operations | `pillar-ecommerce.dc.html` | 2 (E-Commerce Website Development, E-Commerce Support) |
| Growth & Visibility | `pillar-growth.dc.html` | 3 (SEO Services, Digital Marketing, Social Media Services) |
| Brand & Creative Assets | `pillar-brand.dc.html` | 3 (Branding, Graphic Design, Website Content) |
| Hosting & Site Management | `pillar-hosting.dc.html` | 5 (Domain/Hosting/Email, Performance, Security, Migration & Recovery, Cloud & Digital) |

Total: 6 pillars covering all 18 services (2+3+2+3+3+5).

## 5. Service Page Register

Card No = the number shown on the homepage service card. **Note the numbering quirk:** cards run 01–17, then IT & Business Consultancy is numbered **20**. There is no card 18; card 19 is the "Something not listed?" CTA card (not a service). See §20.

Rule (verified 36/36 programmatically): a service's Previous/Next thumbnail is always **that neighbouring service's own canonical image** — the same file used for its homepage card and its page hero. No separate navigation image files exist.

| Card No | Service | Filename / URL | Canonical Image | Previous → | Next → |
|----|---------|----------------|-----------------|------------|--------|
| 01 | Website Design & Development | `website-design-development.dc.html` | `assets/service-01.webp` | IT & Business Consultancy | E-Commerce Website Development |
| 02 | E-Commerce Website Development | `ecommerce-website-development.dc.html` | `assets/service-02.webp` | Website Design & Development | WordPress Services |
| 03 | WordPress Services | `wordpress-services.dc.html` | `assets/service-03.webp` | E-Commerce Website Development | Software Development |
| 04 | Software Development | `software-development.dc.html` | `assets/service-04.webp` | WordPress Services | Business Automation |
| 05 | Business Automation | `business-automation.dc.html` | `assets/service-05.webp` | Software Development | Domain, Hosting & Business Email |
| 06 | Domain, Hosting & Business Email | `domain-hosting-business-email.dc.html` | `assets/service-06.webp` | Business Automation | SEO Services |
| 07 | SEO Services | `seo-services.dc.html` | `assets/service-07.webp` | Domain, Hosting & Business Email | Digital Marketing |
| 08 | Digital Marketing | `digital-marketing.dc.html` | `assets/service-08.webp` | SEO Services | Social Media Services |
| 09 | Social Media Services | `social-media-services.dc.html` | `assets/service-09.webp` | Digital Marketing | Graphic Design |
| 10 | Graphic Design | `graphic-design.dc.html` | `assets/service-10.webp` | Social Media Services | Branding |
| 11 | Branding | `branding.dc.html` | `assets/service-11.webp` | Graphic Design | Website Content |
| 12 | Website Content | `website-content.dc.html` | `assets/service-12.webp` | Branding | Website Performance |
| 13 | Website Performance | `website-performance.dc.html` | `assets/service-13.webp` | Website Content | Website Security |
| 14 | Website Security | `website-security.dc.html` | `assets/service-14.webp` | Website Performance | Website Migration & Recovery |
| 15 | Website Migration & Recovery | `website-migration-recovery.dc.html` | `assets/service-15.webp` | Website Security | E-Commerce Support |
| 16 | E-Commerce Support | `ecommerce-support.dc.html` | `assets/service-16.webp` | Website Migration & Recovery | Cloud & Digital Solutions |
| 17 | Cloud & Digital Solutions | `cloud-digital-solutions.dc.html` | `assets/service-17.webp` | E-Commerce Support | IT & Business Consultancy |
| 20 | IT & Business Consultancy | `it-business-consultancy.dc.html` | `assets/service-18.webp` | Cloud & Digital Solutions | Website Design & Development |

The Previous/Next order follows the homepage card order (01→…→17→20) and is **circular**: the last service links forward to the first, the first links back to the last.

## 6. Image / Asset Inventory

29 files in `assets/`. Every file below is referenced by at least one page except where noted.

| File | Role | Used by |
|------|------|---------|
| `assets/logo.webp` | Logo (header home-link, all pages) | All 27 pages. Transparent WebP, rendered at 48px height. **Contains a spelling error: "Website Desing Art"** — replace file in place when corrected. |
| `assets/service-01.webp` … `assets/service-18.webp` | Multi-role service image (see §16) | Homepage card + service-page hero + Previous/Next thumbnails on neighbouring pages. One file per service, reused everywhere that service appears. |
| `assets/pillar-web-architecture-hero.png` | Pillar hero | `pillar-web-architecture.dc.html` only |
| `assets/pillar-custom-software-hero.png` | Pillar hero | `pillar-custom-software.dc.html` only |
| `assets/pillar-ecommerce-hero.png` | Pillar hero | `pillar-ecommerce.dc.html` only |
| `assets/pillar-growth-hero.png` | Pillar hero | `pillar-growth.dc.html` only |
| `assets/pillar-brand-hero.png` | Pillar hero | `pillar-brand.dc.html` only |
| `assets/pillar-hosting-hero.png` | Pillar hero | `pillar-hosting.dc.html` only |
| `assets/about-hero-v5.png` | About hero | `about.dc.html` only |
| `assets/contact-hero.png` | Contact hero | `contact.dc.html` only |
| `assets/hero-tablet-crop.png` | Homepage hero device mockup | `index.html` (referenced 5×, in the hero showcase rotation) |
| `assets/hero-tablet.png` | **Orphan — referenced by no page or script** | Uncropped source of `hero-tablet-crop.png` (kept on disk; do not assume it is safe to delete without authorization) |

## 7. Homepage Structure (`index.html`)

Sections in order (names from `data-screen-label` attributes in the source):

1. **Header** — logo (home link) + main navigation
2. **Hero** — headline "A site is drawn before it's built.", intro, CTA buttons, device-mockup showcase
3. **Marquee** — scrolling strip (disabled under `prefers-reduced-motion`)
4. **Disciplines** (`id="disciplines"`) — all 18 service cards (numbered, each: image, number, title, one-liner, whole-card link) + the "Something not listed?" CTA card (No. 19)
5. **Process** (`id="process"`) — 3-step process (Let's talk / Draw & refine / Build)
6. **Commerce** (`id="enterprise"`) — commerce/enterprise section
7. **Contact** (`id="contact"`) — contact CTA
8. **Footer** — © line + footer links. **The footer section exists only on the homepage** — pillar/service/about/contact pages end at their CTA section.

## 8. Group / Pillar Page Structure

Common template, verified identical across all 6 pillar pages:

1. Header (shared)
2. **Pillar hero** — breadcrumb (Services → pillar), H1, intro, pillar hero image
3. **What to decide** — decision guidance content
4. **Services in this group** — links to the pillar's service pages
5. **CTA** — "Bring us the brief." + `mailto:info@WebsiteDesignArt.com`

## 9. Service Page Structure

Common template, verified identical across all 18 service pages:

1. Header (shared)
2. **Service hero** — breadcrumb (Services → pillar → service), H1, intro, canonical service image
3. **Sub-services** — numbered list of sub-service items
4. **Neighbours** — Previous/Next navigation (see §12)
5. **CTA** — "Bring us the brief." + email link

No page-specific structural deviations were found among the 18 service pages.

## 10. About Us (`about.dc.html`)

Sections: About hero → Growth partner → How we work → What we cover → Team → Studio facts → CTA.

## 11. Contact Us (`contact.dc.html`)

Sections: Contact hero → Contact details → Other ways to reach us → Next steps.
Contact points in source: `mailto:info@WebsiteDesignArt.com`, `tel:+916393503938`.

## 12. Navigation Structure

### Header (all pages)
- Logo image (`assets/logo.webp`) linking home: `index.html` on subpages, `#top` on the homepage itself.
- Nav items: **Home** (`index.html` / `#top`), **Services ▼** (dropdown), **Process** (`index.html#process`), **About** (`about.dc.html`), **Contact** (`contact.dc.html`).
- Services dropdown: all 6 pillar pages + "All 18 services →" (`index.html#disciplines`).
- Known issue (pre-existing): header nav does not collapse on narrow screens; causes horizontal overflow on mobile (~502px content width). See §20.

### Footer (homepage only)
`© 2026 Website DesignART` + links: Design & build (`#disciplines`), Commerce (`#enterprise`), Hosting & email (`#disciplines`), About (`about.dc.html`), Contact (`contact.dc.html`).

### Previous/Next service navigation ("Neighbours" section, service pages only)
Current implementation (this is the implemented state, not a recommendation):

```
Previous panel:  ← [service image 60×40] Service Name     (left-aligned)
Next panel:      Service Name [service image 60×40] →     (right-aligned)
```

- Each panel is **one whole-panel link**; arrows, thumbnail and name are inside the single `<a>`.
- The words "Previous"/"Next" do not appear visually; direction is conveyed by arrows. Screen-reader semantics preserved via `aria-label="Previous service: …"` / `aria-label="Next service: …"`.
- Thumbnails are CSS-sized only: `width: clamp(45px, 4.2vw, 60px); aspect-ratio: 3/2; object-fit: cover`; class `nav-thumb`; hidden below 380px via `@media (max-width: 379px) { .nav-thumb { display: none !important } }`.
- **The section height is intentionally preserved** — measured equal-or-shorter than the pre-thumbnail implementation at 1440/900/390/320px. It must not become taller.
- Two-column grid on desktop; stacks to one column below 940px.

## 13. Previous / Next Service Map

Circular chain in homepage-card order (each arrow = "Next"; Previous is the reverse):

```
Website Design & Development → E-Commerce Website Development → WordPress Services
→ Software Development → Business Automation → Domain, Hosting & Business Email
→ SEO Services → Digital Marketing → Social Media Services → Graphic Design
→ Branding → Website Content → Website Performance → Website Security
→ Website Migration & Recovery → E-Commerce Support → Cloud & Digital Solutions
→ IT & Business Consultancy → (back to Website Design & Development)
```

All 36 link+image pairings (18 Previous + 18 Next) verified programmatically against the source: 36 correct, 0 mismatches.

## 14. Internal Link Structure

```
Homepage
├── header dropdown → 6 pillar pages
├── #disciplines cards → 18 service pages
├── header/footer → About, Contact
└── CTA card → #contact

Pillar page
├── breadcrumb → index.html#disciplines
├── "Services in this group" → its member service pages
└── CTA → mailto

Service page
├── breadcrumb → index.html#disciplines → its pillar page
├── Neighbours → Previous service, Next service
└── CTA → mailto

About / Contact
└── header → everything above
```

## 15. Shared Components

Confirmed shared/common elements (duplicated per page in source — **there is no server-side templating; a change to a shared component must be applied to every page**):

- **Header** with logo + nav + Services dropdown (all 27 pages)
- **Breadcrumb strip** (pillar + service pages)
- **CTA section** "Bring us the brief. We'll draw the rest." (pillar, service, about pages)
- **Previous/Next "Neighbours" navigation** (18 service pages)
- **Service cards** (homepage)
- **Footer** (homepage only)
- **Shared scripts:** `support.js` (x-dc runtime — renders every page) and `backdrop.js` (animated background, loaded on all pages)
- **Per-page inline component script** (bottom of each page): defines `accent`, `narrow` breakpoint (<940px) and layout bindings (`heroCols`, `navCols`, `ctaCols`, …)

## 16. Asset Relationships

One physical file per service serves every appearance of that service (deliberate reuse — do not create duplicates):

```
assets/service-NN.webp  (one file, four roles)
├── Homepage: card image on index.html#disciplines
├── Service page: hero image on its own page
├── Neighbour (previous side): thumbnail on the service that follows it
└── Neighbour (next side): thumbnail on the service that precedes it
```

Pillar heroes, about hero, contact hero and the homepage tablet mockup are single-use images. `assets/logo.webp` is site-wide.

## 17. Design Status / Locked Rules

### Design Status

**The current WebsiteDesignArt website visual design is approved and locked.**

The following must not be changed without explicit authorization:

- Background and background effects (`backdrop.js`)
- Existing color treatment (cream `#f7f3ee` ground, ink `#14121f`, accent `#c2412a`)
- Global visual style and design language (sharp corners, hairline borders, flat surfaces)
- Typography system (Archivo for headings/UI, Newsreader for body)
- Overall visual hierarchy
- Existing section styling

Future development must adapt new functionality/content to the existing design. This document is not authorization to redesign anything.

## 18. Verified Implementation Rules

All confirmed true in the current source:

- Service pages use existing service images; nothing is duplicated per role.
- Previous/Next navigation reuses the neighbouring service's canonical image (verified 36/36).
- No separate navigation image files exist; thumbnails are CSS-sized renditions of existing files.
- The Neighbours section must not become taller when thumbnails are displayed (measured and locked; thumbnails hide below 380px to protect this).
- Temporary image-upload/testing functionality has been removed (commit `2d3466d`).
- `image-slot.js` has been removed.
- `.image-slots.state.json` has been removed.
- The homepage is `index.html` (renamed from `Website DesignART.dc.html` in commit `f03bdfc`; all internal links updated).
- Header logo is `assets/logo.webp` inside the existing home-link anchor on all pages (commit `12a182e`).

## 19. Development / Temporary Items

No confirmed temporary site-structure items found.

(Non-structure repo files that are not part of the served website: `.mcp.json` — tooling config for Claude Code; `README.md`, `LICENSE` — repo metadata.)

## 20. Unknown / Requires Verification

- **Deployment to resultnaukari.com:** mechanism unknown — no CI/deploy config exists in the repo; the live copy is updated by an external/manual process. As of 2026-08-09 the live site serves an older pre-cleanup version. CANNOT BE VERIFIED WITH AVAILABLE INFORMATION.
- **Card numbering gap (18/19/20):** IT & Business Consultancy is numbered 20 on the homepage; there is no card 18, and 19 is the CTA card. Whether this is intentional branding or a leftover is not established. CANNOT BE VERIFIED WITH AVAILABLE INFORMATION.
- **`assets/hero-tablet.png`:** unreferenced by any page/script; presumed source file for `hero-tablet-crop.png`. Intent unknown — left untouched.
- **`<title>` tags:** absent on all 27 pages. Page titles listed in this document are H1s, not `<title>` values.

## 21. Maintenance Notes

- **Adding a service:** create the page from the common service template (§9), add its card to `index.html#disciplines`, add one `assets/service-NN.webp`, insert it into the Previous/Next chain by updating the two neighbouring pages (their Neighbours panels: href, name, image), and add it to its pillar's "Services in this group" section. Keep the §5 rule: one image, all roles.
- **Editing shared components** (header, CTA, Neighbours markup): the change must be replicated across all pages that contain the component — there is no include system.
- **Logo replacement:** overwrite `assets/logo.webp` in place (same filename); no markup change needed. The current file has a typo ("Desing") awaiting a corrected version.
- **Known pre-existing issues** (documented, not fixed): mobile header does not collapse (horizontal overflow on phones); no `<title>`/meta tags (SEO gap); live site out of date with repo.
- **Verification harness:** Neighbours section heights were verified with a headless-browser measurement (baseline table in commit `b5a60c0` message). Re-measure before/after any change to that section.
