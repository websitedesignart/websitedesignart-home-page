# WebsiteDesignArt — 25-Page Content Ownership Map

Approved content architecture for the final 25-page site. Companion to `structure.md`
(current-state reference) and `.claude/skills/local-seo-content/SKILL.md` (writing process).
Status: APPROVED 2026-08-10. The two merges below are approved architecture; implementation
is a separate authorized step.

Architecture: 27 current pages → 25 final pages.
- MERGE: `cloud-digital-solutions.dc.html` → `domain-hosting-business-email.dc.html`
- MERGE: `it-business-consultancy.dc.html` → `software-development.dc.html`

The homepage keeps ALL 18 business-service cards; merged services' cards link to their
surviving owner. Business service ≠ URL.

The visual design is LOCKED (see structure.md §17): content slots into existing section
patterns; no styling, layout, color, or background changes — and none may be suggested.

---

## Core rule

**One topic, one owner.** If a topic belongs to another page: one sentence + link, never a
section. Topic relationship ≠ search-intent duplication.

## Homepage

Owns: business proposition (plan-first positioning), full service catalog at card level
(one sentence per service), 3-step process, studio trust, navigation. Does NOT own any
service's detail, FAQs, or technical content.

## Pillars (all 6)

A pillar owns the group-level decision ("which of these services do I need?"), summarizes
each child in ≤2 sentences with a link, and never reproduces a child's sub-services, FAQs,
or process. Pillar names are not search phrases; their job is orientation + link structure.

| Pillar | Owns the question |
|---|---|
| Web Architecture & Build | How should my website be built? (platform, custom vs CMS, rebuild vs redesign) |
| Custom Software & Automation | Build or buy software; what should I automate? |
| E-Commerce Operations | What does running a store involve? (build → operate lifecycle) |
| Growth & Visibility | Which growth channel fits? (search vs paid vs social) |
| Brand & Creative Assets | What brand/creative assets do I need? (identity / production / words) |
| Hosting & Site Management | What keeps a site running well? (host, fast, safe, movable) |

## Merged-content redistribution (every topic has an owner)

Cloud & Digital Solutions → Cloud Solutions + Cloud Website Hosting + Business Email
Solutions → **Hosting**; Cloud Migration → **Migration & Recovery**; Online Backup →
**Security**; SaaS App Development + Cloud-Based Business Applications → **Software
Development**; Digital File Management + Remote Business Tools → **Business Automation**.

IT & Business Consultancy → Project Planning + Solution Architecture + System Integration +
Software/Technology/IT Consultancy → **Software Development** (its consulting-planning
aspect); Website Consultancy → **Website Design & Development**; Digital Transformation
Consultancy → **Business Automation**; E-Commerce Consultancy → **E-Com Development**;
SEO Consultancy → **SEO Services**; Digital Marketing Consultancy → **Digital Marketing**.

Rule: consultancy is an aspect of each owning service (the first conversation), never a
standalone service block recreating the old page.

## Master ownership matrix (16 service pages)

| Page | Primary intent | Owns | Must NOT own (owner) | Depth |
|---|---|---|---|---|
| Website Design & Development | "website design & development company" | Business website creation: design, development, redesign, landing pages, portals, website consultancy | WordPress detail (WP), SEO strategy (SEO), store builds (E-Com Dev), content writing (Content) | High |
| WordPress Services | "wordpress development services" | WP dev, themes, plugins, WP redesign, WP maintenance | Speed (Performance), security/backup (Security), general design (Design&Dev) | High |
| Software Development | "custom software development company" | Custom software, CRM/ERP, web/mobile apps, APIs, SaaS & cloud apps, planning/architecture/integration consulting, modernization | Process automation (Automation), website builds (Design&Dev) | High |
| Business Automation | "business process automation services" | Workflow/office/document automation, approvals, reporting, internal + remote tools, digital-transformation advisory | Product/software builds (Software Dev) | Moderate |
| E-Commerce Website Development | "ecommerce website development company" | Store builds, WooCommerce/custom, B2B/B2C/marketplace, gateway INTEGRATION, cart, e-com consultancy | Store operation/maintenance (E-Com Support), general design (Design&Dev) | High |
| E-Commerce Support | "ecommerce support & maintenance services" | Running existing stores: product upload, catalog, gateway/shipping/tax CONFIGURATION, order setup, maintenance | New store builds (E-Com Dev) | Moderate |
| SEO Services | "seo services / seo company" | All SEO: technical/on-page/off-page/local, GBP, keyword research, audits, e-com & WP SEO, SEO consultancy | Paid ads (Digital Marketing), content production (Content), social (Social Media) | High |
| Digital Marketing | "digital marketing services" | Paid & campaigns: Google Ads, SEM, lead gen, online advertising, campaign management, reputation, marketing consultancy | SEO delivery (SEO), social page management (Social Media) | High |
| Social Media Services | "social media management services" | FB/IG/LinkedIn page management, social content, post/banner design for social, profile setup | Ad campaigns (Digital Marketing), brand identity (Branding) | Moderate |
| Branding | "branding services / agency" | Brand identity & strategy, LOGO DESIGN (sole owner), guidelines, corporate identity, stationery-as-identity | Production design catalog (Graphic Design), social execution (Social Media) | Moderate |
| Graphic Design | "graphic design services" | Design production: brochures, cards, letterheads, catalogues, flyers, posters, ad creatives, presentations, banners, infographics | Logo/identity (Branding), social management (Social Media) | Moderate |
| Website Content | "website content writing services" | Service-page/product/blog writing, SEO content, local content, FAQ content, optimization | SEO methodology (SEO), design (Graphic Design) | Moderate |
| Domain, Hosting & Business Email | "web hosting & business email" | Domains, hosting incl. cloud hosting, SSL, business email, hosting management | Speed tuning (Performance), backup (Security), migration acts (Migration) | Moderate |
| Website Performance | "website speed optimization" | Speed: audits, Core Web Vitals, WP speed, image/db/code optimization, caching | Hosting products (Hosting), security (Security) | Moderate |
| Website Security | "website security / malware removal" | Audits, hardening, malware cleanup, BACKUP incl. online backup (sole owner), login security, monitoring | Recovery/repair (Migration & Recovery), hosting (Hosting) | Moderate |
| Website Migration & Recovery | "website migration service / fix broken website" | Host/domain/WP/cloud migration, restoration, RECOVERY (sole owner), troubleshooting, error fixing | Backup service (Security), hosting products (Hosting) | Moderate |

About: studio trust (team, how we work). Contact: conversion only.

## Seven critical boundaries

1. Logo design → Branding owns; Graphic Design links.
2. Backup → Security owns; Hosting/WP/Migration link.
3. Recovery/repair → Migration & Recovery owns; Security links.
4. Social ads (Digital Marketing) vs social management (Social Media).
5. WP speed/security → Performance/Security own the disciplines; WP page mentions + links.
6. Gateway integration (E-Com Dev, build) vs configuration (E-Com Support, operate).
7. Consultancy → never standalone; each service owns its own advisory aspect.

## Internal linking

Keep the existing hierarchy (home → pillars → services; breadcrumbs; Previous/Next chain as
navigation). Approved contextual links ONLY: Design&Dev↔WordPress; E-Com Dev↔E-Com Support;
SEO↔Content; SEO↔Digital Marketing; DM↔Social Media; Branding↔Graphic Design;
Hosting→Performance/Security/Migration; Security↔Migration; WP→Performance/Security.
No cross-links between unrelated intents.

## Content writing rules (contract for the writing phase)

1. Load this file + the page's row/boundaries before writing; MUST-NOT-own items are hard failures.
2. Depth = decision-information completeness per the matrix, never a word-count target.
3. Only verified business facts (see local-seo-content skill); no invented capabilities,
   results, credentials, or service areas. Target cities come from the user.
4. Titles/metadata (when authorized): one intent per page — the primary intent is the subject.
5. After writing, grep-verify: no owned-elsewhere topic has a section on this page.
6. Design untouched: content fits existing section patterns.
