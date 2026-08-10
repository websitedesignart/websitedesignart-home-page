---
name: WebsiteDesignArt
description: Plan-first web studio — drawn-before-built, cream ground over a living gradient, sharp hairline modernism
colors:
  ground: "#f7f3ee"
  surface-cream: "#f5f3ee"
  ink: "#14121f"
  accent: "#c2412a"
  accent-hover: "#e2704f"
  accent-alt-green: "#1f5c4c"
  accent-alt-blue: "#2b4a7d"
  accent-alt-ochre: "#8a5a2b"
  ink-body: "rgba(20,18,32,0.86)"
  ink-muted: "rgba(20,18,32,0.82)"
  ink-soft: "rgba(20,18,32,0.6)"
  hairline-strong: "#14121f"
  hairline: "rgba(20,18,32,0.3)"
  hairline-soft: "rgba(20,18,32,0.18)"
  hairline-faint: "rgba(20,18,32,0.16)"
  hover-wash: "rgba(255,255,255,0.42)"
  dark-section-bg: "#14121f"
  dark-section-text: "#f5f3ee"
  dark-section-muted: "rgba(245,243,238,0.76)"
  footer-text: "rgba(245,243,238,0.7)"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(36px, 5vw, 84px)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  section-heading:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 54px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  card-heading:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(21px, 2.1vw, 27px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  item-title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.14em"
  nav:
    fontFamily: "Archivo, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    letterSpacing: "-0.005em"
rounded:
  none: "0px"
spacing:
  page-side: "36px"
  section-top: "76px"
  section-bottom: "84px"
  card-pad: "26px 24px 28px"
  content-gap: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-cream}"
    rounded: "{rounded.none}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
  button-inverse:
    backgroundColor: "{colors.surface-cream}"
    textColor: "{colors.ink}"
    padding: "15px 26px"
  button-inverse-hover:
    backgroundColor: "{colors.accent-hover}"
  text-link:
    textColor: "{colors.ink}"
  number-label:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
---

# WebsiteDesignArt — DESIGN.md

Extracted 2026-08-10 from the live implementation (homepage, service pages, `support.js`, `backdrop.js`, assets). Evidence classes used throughout: **VERIFIED** (observed in source), **INFERRED** (repeated pattern), **RECOMMENDATION** (future principle), **UNKNOWN**.

## Overview

The identity is "a studio that draws before it builds": editorial, print-like restraint laid over a soft living background. Flat cream surfaces, ink text, one warm accent, hairline rules instead of boxes, sharp corners everywhere, serif body against a grotesque display face. Nothing is decorated; hierarchy comes from scale, weight, hairlines, and numbered labels. The one deliberate flourish is the animated gradient backdrop that glows through transparent sections.

**Core philosophy for future pages:** *WebsiteDesignArt should have one recognizable visual identity, but its internal pages do not need to share one rigid layout.* Consistency comes from the visual language documented here — not from copying the same section structure onto every page.

## Colors

All VERIFIED from source:

- Ground `#f7f3ee` (html/body); cream surfaces `#f5f3ee`; ink `#14121f`.
- Accent `#c2412a` with hover `#e2704f`. The page prop system defines three alternate accents (`#1f5c4c`, `#2b4a7d`, `#8a5a2b`) but every page currently uses the default red — VERIFIED. Alternate accents are an unexploited, sanctioned variation axis for future pages (RECOMMENDATION: consider per-pillar accents only with owner approval).
- Text tints: body `rgba(20,18,32,0.86)`, secondary `0.82`, soft `0.6`, faint labels `0.5`.
- Hairlines: strong `#14121f` (section rules), `rgba(20,18,32,0.3)` (component borders), `0.28` (card outlines via 0.5px box-shadow), `0.18`/`0.16` (row dividers).
- Hover wash `rgba(255,255,255,0.4–0.42)` — surfaces lighten on hover rather than darken.
- Dark bands: `#14121f` background, `#f5f3ee` text, muted `rgba(245,243,238,0.76)`, labels `0.45–0.5`.

### Background system (VERIFIED)

`backdrop.js` renders a fixed full-viewport WebGL fbm-noise shader (custom element `wda-backdrop`, `position: fixed; inset: 0; z-index: 0`), blending: ivory `vec3(0.975,0.950,0.920)` ≈ `#F9F2EB`, lavender `(0.800,0.660,0.960)` ≈ `#CCA8F5`, periwinkle `(0.560,0.580,0.930)` ≈ `#8F94ED`, pink `(0.950,0.500,0.720)` ≈ `#F280B8`, peach `(0.970,0.780,0.420)` ≈ `#F7C76B`, white highlights, plus a subtle mouse-proximity glow. No-WebGL fallback: `radial-gradient(120% 90% at 50% 0%, #ffffff, #f5f3ee 70%)`. Page content sits above it in a `z-index: 1` transparent wrapper; sections choose transparency (backdrop glows through) or solid fills (dark bands). **This system is the established visual foundation and must be preserved — never replaced with a different visual theme.**

## Typography

VERIFIED: two families from Google Fonts — **Archivo** (400/500/600/700) for display, headings, UI, labels, buttons; **Newsreader** (optical-size axis, 300/400 + 300 italic) for body prose. Body default is set on the page wrapper (`font-family: Newsreader, Georgia, serif`).

Verified scale (desktop → via clamp):

| Role | Spec |
|---|---|
| Page H1 (hero) | Archivo 700, `clamp(36px, 5vw, 84px)` home / `clamp(38px, 5.4vw, 84–86px)` service, line-height 0.94–0.95, `-0.035em`, `text-wrap: balance` |
| Section H2 | Archivo 700, `clamp(30px, 3.6vw, 54px)` (home) / `clamp(24px, 2.6vw, 38px)` (service "What this covers"), line-height 1, `-0.03em` |
| CTA H2 | Archivo 700, `clamp(32px, 4.4vw, 68px)`, 0.98 |
| Card H2 / process H3 | Archivo 600–700, `clamp(21px, 2.1vw, 27px)` cards, `clamp(28px, 3.2vw, 48px)` process |
| Item titles | Archivo 600 17px, `-0.02em` |
| Body | Newsreader 16.5–18px, line-height 1.5–1.6; card bodies 17px capped at `max-width: 42ch`; ledes 20px/1.55 capped ~56ch |
| Labels / numbers | Archivo 600 11–13px, letter-spacing `0.12–0.18em`, uppercase, accent color |
| Nav | Archivo 500 15px; dropdown items 13px |
| Marquee | Archivo 600 `clamp(20px, 2.2vw, 30px)`, `-0.025em` |

Tightness is identity: negative tracking on everything display (`-0.02` to `-0.035em`), wide tracking (`0.12–0.18em`) only on tiny uppercase labels. INFERRED rule: **big = tight, small = wide, nothing in between.**

## Layout

VERIFIED principles:

- One container: `max-width: 1420px; margin: 0 auto; padding-inline: 36px`. Every section uses it.
- Section rhythm: top padding ~76–84px, bottom ~76–84px; hero 44px top. Sections divided by 1px `#14121f` rules (border-top on content or border-bottom on section).
- Grids: 2-col content splits with `gap: 0 56px`; card grids `repeat(3, 1fr)` (home cards); bordered grids use `gap: 1px` with per-cell 0.5px outline box-shadows (the "graph paper" look of Neighbours).
- Numbered structure: content units carry a small accent number label (`01`, `02`…) — the strongest recurring identity device across hero breadcrumbs, cards, list rows, and process steps.
- One breakpoint: `window.innerWidth < 940` (VERIFIED, set per-page in the component script; bindings like `heroCols`, `listCols`, `cardCols` switch to `1fr`). No CSS media queries for layout except the ≤379px `nav-thumb` rule.
- Rendering: pages are `<x-dc>` documents; `{{ }}` bindings resolve at runtime via `support.js`; `style-hover` attributes produce hover styles. All styling is inline — **there is no shared stylesheet**; a change to a shared component must be replicated across pages.

## Elevation & Depth

VERIFIED: the system is deliberately flat. No drop shadows on cards or sections; depth comes from the glowing backdrop behind transparent surfaces and from hairline layering. The only true shadows: dropdown menu (`0 18px 40px rgba(20,18,32,0.14)`) and 0.5px outline box-shadows standing in for borders. RECOMMENDATION: keep new components shadow-free; if a future component genuinely needs lift, the dropdown's shadow is the only precedent.

## Shapes

VERIFIED: **sharp corners everywhere, with exactly one exception.** Rectangles, hairline strokes, square images; buttons are sharp blocks. The single rounded element in the entire site: the homepage hero showcase's circular prev/next arrow buttons (42px, `border-radius: 50%`, hairline-bordered) — a deliberate pagination-control idiom, not a card/surface precedent. The only other "soft" element is the organic gradient backdrop — the contrast between hard geometry and the soft backdrop is the visual signature. New components inherit `border-radius: 0`; fully-circular controls in the hero-arrows idiom are the sanctioned exception.

## Components

All VERIFIED from source:

- **Header:** 84px `logo.webp` home-link + right nav (Home, Services▾, Process, About, Contact), vertically centered, 18/16px vertical padding. Services dropdown: cream panel `rgba(250,248,244,0.97)`, hairline border, pillar entries with 2-line label+description, "ALL 18 SERVICES →" uppercase footer row.
- **Breadcrumb strip:** uppercase 12px accent trail with 14px hairline dashes between items + "NN of 18" counter.
- **Hero (service):** 2-col `1.15fr 0.85fr`, H1 + 20px lede (≤56ch) + button row; right column image `object-fit: contain; max-height: 46vh`. Entrance: `inkUp`/`fadeUp` staggered 0.05–0.4s.
- **Hero (home):** adds state-driven device-mockup showcase with prev/next arrows, `01 / 04` counter, caption.
- **Primary button:** ink block, cream Archivo 600 14px text, `15px 26px`, hover → accent (180ms). Inverse (on dark): cream block, ink text, hover → `#e2704f`.
- **Text links:** ink with hairline `border-bottom: 1px solid rgba(20,18,32,0.35)`; global hover color `#c2412a`.
- **Service card (home):** hairline-outlined cell, flush 3:2 image with bottom hairline, number, 21px title, one-line description; whole-card stretched link; hover = white wash.
- **List row (What this covers):** `46px 1fr` grid, number + 17px title, bottom hairline, hover wash + 10px left-pad slide (140ms).
- **Note card (pillar "What to decide" / service "Approach"):** number label, `clamp(21px,2.1vw,27px)` H2, 17px/1.6 body ≤42ch, 30px vertical padding, bottom hairline; 2-col grid.
- **Marquee:** hairline-bounded white-wash band, 34s linear loop, disabled under `prefers-reduced-motion`.
- **CTA band:** dark `#14121f` full-bleed, huge cream headline ("Bring us the brief. We'll draw the rest."), inverse button = email address.
- **Previous/Next (Neighbours):** bordered 2-cell grid; each cell one link: arrow (accent) + 60×40 3:2 thumbnail (`clamp(45px,4.2vw,60px)`, hidden ≤379px) + 19px name; whole-panel hover wash; stacks <940px. *Functionally required; visual treatment is flexible (see below).*
- **Footer:** dark band, 12.5px Archivo, © line + links + phone + domain.

## Do's and Don'ts

**Do (VERIFIED identity moves):** number everything structural; separate with hairlines, not boxes; let the backdrop glow through transparent sections; alternate cream and dark bands for rhythm; keep body text in the serif at ≤42–56ch measures; use the accent only for wayfinding (numbers, labels, hovers, arrows) — never for large fills except button hovers; cap images to strict geometric frames (3:2 cards); animate entrances subtly (inkUp/fadeUp ≤0.8s) and respect `prefers-reduced-motion`.

**Don't:** introduce border-radius, drop shadows, or gradient fills on surfaces; replace or restyle the backdrop; add new fonts; use the accent as body-text color; decorate without informational purpose; add emoji/icon noise; exceed the established motion vocabulary with parallax/scroll-jacking; create horizontal overflow (one pre-existing mobile-nav overflow exists — do not add more); copy competitor layouts wholesale.

---

## Established Design Elements

These should normally remain consistent (per owner direction, 2026-08-10):

1. **Background system** — the `backdrop.js` gradient + `#f7f3ee` ground is the core visual foundation. Never replaced with a different theme. (VERIFIED implementation documented above.)
2. **Core brand language** — ink/cream/accent palette, hairline-and-number aesthetic, sharp corners, flat surfaces, Archivo+Newsreader pairing, tight-display/wide-label tracking.
3. **Existing homepage sections** — the primary visual reference for tone, rhythm, quality, CTA and card treatment. Not automatically copied, but the benchmark any new design must sit comfortably beside.
4. **Logo and header identity**, dark CTA/footer band treatment.
5. **Established motion vocabulary** — inkUp/fadeUp entrances, 140–180ms hover transitions, reduced-motion respect.

## Flexible Design Elements

Open for redesign on internal/service pages when content justifies it (owner direction, 2026-08-10):

- Section layouts and ordering; new section types (comparisons, process visualizations, decision frameworks, timelines, feature grids, split/editorial layouts, callouts, FAQ accordions, image-led and evidence blocks).
- Card structures beyond the current two patterns; interactive elements consistent with the motion vocabulary.
- **Previous/Next visual treatment** — required function (previous service, next service, clear related-page navigation; never removed without approval), flexible form.
- Image placement and composition; responsive-specific adaptations; per-page distinctive elements.

Flexible ≠ anything goes: every new pattern must be built from the established language (colors, type, hairlines, numbering, flatness, sharpness) and must earn its place through comprehension, credibility, scanning, storytelling, or conversion — not decoration.

## Rules for Designing New Service Pages

1. **Start from content and search intent, not the template.** The approved content (per `content-ownership.md` and the `local-seo-content` pipeline) defines what must be understood; design serves that understanding.
2. **Content-to-layout decisions** — for each content unit ask: first-viewport need? visual emphasis or prose? diagram-shaped (process/architecture)? comparison-shaped (platform choices, redesign-vs-rebuild)? card/grid-shaped (parallel items)? callout-shaped (single critical fact)? accordion-shaped (secondary FAQs)? Then: where does the page breathe, where does the CTA land, what happens on mobile?
3. **One memorable element per important page** (RECOMMENDATION): each major service page should be *evaluated* for one distinctive structural/visual element — a visual process, decision framework, comparison, diagram, evidence block, or strong image composition. Chosen by subject fit, never forced.
4. **Brand coherence check:** a new section placed next to an existing homepage section should look like the same designer on the same day — same ground, same hairlines, same type behavior — while presenting its content in its own shape.
5. **Mobile is designed, not shrunk:** decide stacking order, what stays above the fold, what collapses, what (deliberately, usably) scrolls horizontally; type steps down via the existing clamps; no accidental overflow.
6. **Approval chain:** visual changes to existing implemented surfaces still require explicit owner approval; new-page designs are proposed (shape/plan first), then approved, then built.

## Image & Visual-Evidence Rules

- Existing conventions (VERIFIED): one canonical image per service (`assets/service-NN.webp`, 3:2, reused card/hero/thumbnail — the one-file-four-roles rule in `content-ownership.md`); pillar/about/contact heroes as PNG; strict geometric crops; images always hairline-framed or flush, never floating with soft shadows.
- Future pages should use images where they carry evidence or comprehension: screenshots, wireframes, UI previews, before/after pairs, process diagrams, service-specific graphics.
- **Never invent portfolio projects, clients, results, or screenshots.** Every visual asset is classified as: `REQUIRED REAL ASSET` (owner must supply), `ILLUSTRATIVE GRAPHIC` (clearly non-evidentiary), `PLACEHOLDER` (`[Insert … here]` markers per the content skill), or `FUTURE ASSET`.
- Implemented assets go in `assets/` following existing naming; no external hotlinks as permanent assets without approval.

## Accessibility (currently present — VERIFIED)

Semantic heading hierarchy (one H1/page since the content phase); `aria-label`s on Previous/Next panels and the marquee; descriptive alt text being added page-by-page during the content phase (decorative images use `alt=""`); `prefers-reduced-motion` disables the marquee; text-on-ground contrast is high (ink on cream). UNKNOWN/gaps: no skip links, no focus-visible styling beyond browser default, mobile nav unusable at phone widths (known pre-existing issue, fix requires owner approval).

## Asset & Code Conventions

VERIFIED: pages are self-contained `.dc.html` files (inline styles, per-page component script; no shared CSS file); shared scripts `support.js` (runtime) and `backdrop.js` (background) only; assets flat in `assets/` (`service-NN.webp`, `pillar-*-hero.png`, `logo.webp`); links root-relative. Known asset notes: `logo.webp` is PNG-content ~1.9MB (optimization pending owner approval); `hero-tablet.png` is an unreferenced source file.

## Unknowns

- Intended favicon/brand mark treatment (none exists).
- Whether alternate accent colors are sanctioned for use (defined in props, never used).
- Print styles, dark-mode intent: none exist; presumed out of scope.
- Formal spacing scale: values cluster (8/12/14/16/22/24/26/30/36/44/56/68/76/84) but no named scale exists in code — the frontmatter records the dominant values; do not invent intermediate tokens.
