---
name: local-seo-content
description: Write or rewrite SEO page content for WebsiteDesignArt pages (services, pillars, homepage sections) with local-intent targeting. Use whenever the user asks to write, expand, improve, or optimize content for any page of this site, or mentions SEO content, page copy, meta tags, titles, or local SEO. Produces people-first content that fits the locked design without changing any visual styling.
---

# Local SEO Content — WebsiteDesignArt

Write search-optimized, people-first content for pages of this static site while preserving the locked design. The full site map, page register, and rules live in `structure.md` at the project root — read it first if it isn't already in context.

## Non-negotiable constraints

1. **Design is LOCKED.** Never change: backdrop.js, colors (`#f7f3ee` ground, `#14121f` ink, `#c2412a` accent), typography (Archivo headings / Newsreader body), spacing, or existing section styling. New content goes INTO existing patterns: 1420px max-width container, 36px side padding, hairline borders, `{{ accent }}` labels, existing heading scales.
2. **There is no templating system.** A change to a shared component (header, CTA) must be replicated across all 27 pages. Page-specific content edits touch only that page.
3. **One topic = one page.** Per the 2026-08 SEO audit: never let the same sub-service/topic appear on two pages. If a topic belongs elsewhere, link to that page instead of repeating it. Known assignments: WordPress topics → wordpress-services; speed → website-performance; security/backup/recovery → website-security (recovery: website-migration-recovery); social ads/campaigns → digital-marketing; social management/organic → social-media-services; logo/brand identity → the branding/graphic-design page(s).
4. **Do not add pages, merge pages, or change URLs** without explicit user authorization — the audit's merge plan (branding+graphic-design, cloud→hosting, ecommerce-support→ecommerce-dev) is pending approval, not standing permission.

## Workflow

### 1. Establish the target
- Which page, which primary search intent, and who searches it. Check `structure.md` §5 for the page's group, neighbours, and canonical image.
- Primary keyword = the page's head term (e.g. "SEO services", "WordPress development services"). Secondary = its sub-service list, deduplicated per constraint 3.

### 2. Research before writing
- Use the firecrawl skills (`firecrawl-search`, `firecrawl-scrape`) to check 3–5 pages currently ranking for the target query: note their topics covered, depth, FAQs, and gaps. Do not copy phrasing.
- Evidence beats assumption: read the current page content in the source file before rewriting.

### 3. Local-intent targeting
- Business context: WebsiteDesignArt is an India-based web/digital studio (phone +91 63935 03938, email info@WebsiteDesignArt.com).
- Ask the user which cities/regions to target if not already specified — do not invent a service area.
- Weave locality naturally: in intro copy, one dedicated section or FAQ, and metadata. Never spam city lists or create near-duplicate city paragraphs (doorway-page risk).
- Local signals worth including when true: serving-area statement, local business types served, INR pricing context if the user approves, response-time/support expectations.

### 4. Content requirements per service page
Target **600–1,000 words** of genuinely useful content (current pages are 150–200 words — thin). Structure within the existing page sections:
- **Hero intro**: 2–3 sentences, primary keyword naturally in the first ~50 words, plain claims only.
- **Sub-services**: keep the existing visual list pattern; each item may gain a one-line description. Dedup per constraint 3.
- **New content blocks** (reuse existing section markup patterns): what's included / process (3–5 steps), who it's for, why this studio, and 4–6 FAQs answering real queries ("how much does X cost", "how long does X take").
- **CTA**: keep the existing "Bring us the brief" CTA untouched.
- Tone: plain, confident, specific — match the site's existing voice ("for businesses that need the thing to work, not just to look finished on launch day"). No filler, no "in today's digital world" openers, no keyword stuffing.

### 5. Metadata (currently absent site-wide)
When authorized to add head tags, every page gets:
- `<title>`: ≤60 chars, `Primary Keyword | Website Design Art` pattern.
- `<meta name="description">`: 140–160 chars, intent-matching, with a reason to click.
- Heading hierarchy: exactly one H1 (exists), H2s for major sections, H3s for items/FAQs.
- Note: pages are `<x-dc>` documents — head tags go inside `<helmet>`.

### 6. Verify
- Word count and keyword presence (title/H1/intro) via grep, not eyeballing.
- No topic duplicated on another page: grep the new phrases across `*.dc.html`.
- Render check: serve locally (`python -m http.server 8080`) and screenshot with headless Edge to confirm the new content sits correctly in the locked design.
- Git diff review before commit; commit message describes the page and intent targeted.

## Success criteria
The page reads as a complete, honest answer for its search intent; locality is present but natural; nothing visual changed; no topic collides with another page; metadata (if authorized) is unique and within limits.
