# JSJ INFOTECH × SGN Software — Website
## Software Requirements Specification, Design Document, and Implementation Plan

Version: 1.0 (handoff draft)
Status: Approved scope pending owner sign-off on §3 open decisions
Audience: any engineer or AI agent continuing this work, with no prior chat context
Supersedes: `docs/website-build-plan.md` (earlier draft, same folder)

Source inputs (read-only, in `~/Downloads`):
- `JSJ_INFOTECH_SGN_Website_Structure_and_Master_Prompt.docx` (structure, copy, carousel, rules)
- `JSJ_INFOTECH_Corporate_Profile_SGN_SAP_Gold.docx` (facts, figures, partnership wording)
- `JSJ INFOTECH × SGN Software.md` and `… — Website.md` (earlier HTML-era copy, section names)
- `JSJ LOGO.svg` (logo, 242.14 × 177.48 viewBox, no text nodes)

Out of scope: WordSell product and any non-website work. Do not touch.

---

## 0. How to use this document

- Section 1 is the product goal. Read first.
- Sections 2–3 are requirements (SRS) and open decisions. Owner must resolve §3 before build phase 2.
- Sections 4–7 are the design: brand, layout, motion, components.
- Section 8 is the technical architecture.
- Section 9 is the implementation plan with acceptance tests.
- Section 10 is the content and legal checklist (what a serious enterprise site ships with).
- Section 11 is the asset plan (images, logos, video).
- Section 12 is the handoff protocol for another AI or engineer.

Requirement IDs use prefix: `FR-` functional, `NFR-` non-functional, `CR-` content, `LR-` legal, `AR-` asset, `DR-` design. Every requirement has an acceptance test in §9.

---

## 1. Product goal

Replace the existing site with a new, serious, professional corporate website for JSJ INFOTECH. It presents JSJ as one technology and engineering partner across enterprise IT, SAP (through its joint venture partner SGN Software), AI, drone technology, software development, government HVAC maintenance, and new-technology R&D.

Primary audience: government departments and public-sector buyers, enterprise CIOs/CTOs, SAP decision-makers, procurement teams, strategic partners.

Primary goal: a qualified project enquiry via "Discuss a Project" or "Request a Consultation".

Secondary goals:
- Establish trust fast: real company facts, verified partner wording, legal pages, real contact details.
- Explain the JSJ × SGN partnership clearly (who brings what).
- Make the seven verticals findable and credible.

Tone: serious, precise, confident. Enterprise-grade. Not playful. Not "startup hype". Motion supports the story; it never performs.

Success metrics (define in analytics, cookie-free):
- Enquiry form completions per month (baseline: set in week 1 after launch).
- Share of visits reaching /contact or a service page.
- Lighthouse scores ≥ 95 on all four categories for home and one service page.
- Zero critical axe violations on all routes.

---

## 2. Software requirements specification (SRS)

### 2.1 Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Site has the routes in §8.2 (home, about, partnership, services ×7, SAP, industries, roadmap, insights, careers, contact, privacy, terms, cookie policy, 404, 500). | Must |
| FR-02 | Global header: logo (left), primary nav, "Discuss a Project" CTA (right). Sticky on scroll. Collapses to a menu under 1024px. | Must |
| FR-03 | Global footer: logo, nav groups, contact block (address, phones, emails, web), legal links, copyright line with SGN attribution and SAP Gold Partner badge. | Must |
| FR-04 | Partnership announcement strip at top of home, dismissible, not dismissed by default for first visit. | Should |
| FR-05 | Home hero: four-slide carousel per §6.3 content. Autoplay 6–8s, pause on hover and focus, arrows, dots, keyboard control. | Must |
| FR-06 | Home sections in the order of §6.2 (16 sections including Client Proof & Partner Solutions). | Must |
| FR-07 | Seven service cards link to seven service pages (§8.2). Each service page uses the same template with service-specific content. | Must |
| FR-08 | "Who brings what" comparison table on /partnership and in home spotlight. Same data source for both. Includes SAP Gold Partner credentials. | Must |
| FR-09 | Industries page lists 14 sectors as cards. Each card has a one-line use case (copy to be written from source; do not invent metrics). | Must |
| FR-10 | Roadmap page presents JSJ INFOTECH 2030 in three phases (Foundation, Integration, Autonomy) with a visible disclaimer that it is a strategic ambition. | Must |
| FR-11 | Insights section: MDX-based article index and article template. Launches with 0 articles and a "coming soon" empty state, OR with approved articles only. | Must |
| FR-12 | Careers page: static "approved vacancies" block. If none approved, show general enquiry copy and email. | Should |
| FR-13 | Contact page: enquiry form (name, company, role, email, phone optional, country, service interest, message, consent checkbox, submit). Office address, phones, emails, map link (no tracking embed by default). | Must |
| FR-14 | Form validation client and server side. Field-level messages. Success state with reference ID. Error state keeps input. | Must |
| FR-15 | Form anti-spam: honeypot field + Cloudflare Turnstile. No CAPTCHA puzzle. | Must |
| FR-16 | Form delivery: server action sends email to the enquiry inbox (see §3, OD-06) and stores nothing else. No third-party CRM in v1. | Must |
| FR-17 | Click-to-call and mailto links on mobile. | Must |
| FR-18 | Cookie consent banner only if non-essential cookies or trackers are used. v1 target: essential-only, so banner is informational with a "Cookie policy" link. Owner decides in OD-07. | Must |
| FR-19 | Legal pages: privacy policy, terms of use, cookie policy (§10). | Must |
| FR-20 | 404 and 500 pages branded, with nav and contact link. | Must |
| FR-21 | SEO: unique title and meta description per route, canonical URL, Open Graph and Twitter card images, JSON-LD (Organization, WebSite, Service, BreadcrumbList, ContactPoint), sitemap.xml, robots.txt. | Must |
| FR-22 | Site search: not in v1. | Won't (v1) |
| FR-23 | Multi-language: English only in v1. Architecture must allow i18n later (route prefix ready, strings in content layer). | Should |
| FR-24 | Reduced-motion mode: all autoplay and parallax off, static fallbacks shown. | Must |
| FR-25 | Print-friendly style for partnership and service pages (optional). | Could |
| FR-26 | Software Licensing & Resale: dedicated showcase of authorized licensing solutions via SGN SAP PartnerEdge Sell & Cloud Choice (GROW with SAP, RISE with SAP, S/4HANA, Ariba Spend Management, SuccessFactors, CRM, Open Cloud). | Must |
| FR-27 | Partner Solutions & Engineering Ecosystem: dedicated showcase for authorized partner solutions including Solworks (CAD/CAM/PLM engineering software), IoT platforms, and digital twin toolchains. | Must |

### 2.2 Non-functional requirements

| ID | Requirement | Target |
|---|---|---|
| NFR-01 | Performance (mobile, 4G throttled, Lighthouse) | Performance ≥ 90 on home; LCP ≤ 2.5s; INP ≤ 200ms; CLS ≤ 0.05 |
| NFR-02 | JS budget, home route, gzipped | ≤ 180 KB initial; motion and 3D lazy-loaded |
| NFR-03 | Accessibility | WCAG 2.2 AA. axe zero critical/serious on all routes. Keyboard-only operable. Visible focus. |
| NFR-04 | Responsive | 320px to 2560px. No horizontal scroll at 320px. Touch targets ≥ 44×44 CSS px. |
| NFR-05 | Browser support | Last two versions of Chrome, Edge, Firefox, Safari (macOS and iOS); Android Chrome last two. |
| NFR-06 | SEO | Lighthouse SEO ≥ 95. All routes indexable except /404, /500. |
| NFR-07 | Security headers | CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors none. Set in `next.config` headers or Cloudflare rules. |
| NFR-08 | Availability | Static site: follows host SLA. No single-server dependency. |
| NFR-09 | Maintainability | Content editable without touching components (typed content files). TypeScript strict. ESLint, Prettier, typecheck in CI. |
| NFR-10 | Privacy | No third-party trackers in v1 except Cloudflare Web Analytics (cookieless) and Turnstile (declare in policy). No Google Fonts CDN runtime calls (self-host fonts). |
| NFR-11 | Observability | Cloudflare analytics + error log for forms (no PII in logs). |
| NFR-12 | Backup and recovery | Git is source of truth. Content in git. Restore = redeploy from `main`. |
| NFR-13 | Cost | v1 runs on free tiers (see §8.4). Any paid service must be flagged in §3 first. |

### 2.3 Content requirements

| ID | Requirement |
|---|---|
| CR-01 | All facts come from the supplied source files (corporate profile docx/pdf, SAP Gold partnership certificate, TSECB deck). No invented numbers, clients, awards, offices, or certifications. |
| CR-02 | SGN figures (15+ years, 250+ SAP experts, 100+ engagements, 75+ go-lives, 25+ Ariba implementations, 16+ industries) are labelled "SGN Software" in the same sentence or caption. |
| CR-03 | SAP Gold Partner status is attributed to SGN Software as JSJ's Joint Venture Partner for SAP projects. Official SAP Gold Partner Logo/Badge is displayed in the partnership lock-up. JSJ is described as "joint venture partner" for SAP projects, and "strategic partner" across the wider portfolio. |
| CR-04 | Partner ID 0001635021 and SAP competencies/authorizations are verified via official SAP Certificate (issued Nov 02, 2026). Display authorized solutions: SAP PartnerEdge Sell & Cloud Choice. |
| CR-05 | Client base: Approved 36+ enterprise clients served by SGN are displayed across four categorized sectors (Public Cloud, RISE with SAP, S/4HANA, Ariba Spend Management) with proper attribution. |
| CR-06 | Roadmap, R&D, and "autonomous drone fleets / swarm", "robotics", "edge AI" are labelled future or research, never as current service. |
| CR-07 | Every unverified item is marked in source as `// VERIFY:` in content files and listed in §10.3. |
| CR-08 | Copy style: short sentences, active voice, no superlatives ("best", "leading", "world-class") unless sourced. |
| CR-09 | Partner Ecosystem: Solworks (SolidWorks / CAD / PLM engineering solutions) and authorized engineering tools highlighted as technology partner solutions. |

### 2.4 Legal requirements

| ID | Requirement |
|---|---|
| LR-01 | Privacy policy covers: controller identity (JSJ INFOTECH, Hyderabad address), categories of personal data collected (enquiry form fields, server logs, analytics aggregates), purposes, legal basis / consent, retention, recipients (Resend or chosen email provider, Cloudflare), international transfer note, data principal rights, grievance contact, change process. |
| LR-02 | Privacy policy written to India DPDP Act 2023 and DPDP Rules 2025 notice requirements: standalone, plain language, itemised data list, purposes, how to withdraw consent, how to complain. Core duties commence about May 2027 per research; write to the stricter standard now. Lawyer review required (OD-08). |
| LR-03 | Consent: enquiry form has an unticked consent checkbox linked to the privacy policy. Consent text is specific to the enquiry purpose. |
| LR-04 | Children: site not directed at children. Privacy policy states this. Enquiry form requires age confirmation of 18+ or business use. (Owner to confirm wording.) |
| LR-05 | Cookie policy: lists each cookie or storage item. v1 expects none beyond essential. Must match real network behaviour (verify with browser DevTools before publish). |
| LR-06 | Terms of use: website use, IP ownership, disclaimer of warranties for information, third-party links, limitation of liability, governing law (India, Telangana courts, OD-08 confirm), changes. |
| LR-07 | Accessibility statement page (recommended for public-sector buyers). States conformance target WCAG 2.2 AA, known gaps, feedback contact. |
| LR-08 | Imprint / company details: legal name, address, CIN/GST if owner provides (OD-09). Do not invent. |
| LR-09 | Trademark: logo use per §4.4. Note "SAP", "SAP Gold Partner", "PartnerEdge", "RISE with SAP", "GROW with SAP", "SAP Business AI" are SAP trademarks. Use only as SGN describes them, with SAP trademark notice in footer. |
| LR-10 | Third-party images: only licensed or owner-created assets with records kept (§11). |

### 2.5 Asset requirements

| ID | Requirement |
|---|---|
| AR-01 | Logo: use `JSJ LOGO.svg` unmodified (no recolour, no skew, no effects). Clear space = height of the "J" glyph area on all sides. Minimum height 32px digital. |
| AR-02 | Favicon, apple-touch-icon, maskable icon generated from logo mark (crop to mark only, check legibility at 16px). |
| AR-03 | SGN & SAP Gold Partner logo: Use official SAP Gold Partner logo and SGN Software branding in the partnership lock-up: `[JSJ logo] × [SGN Software] [SAP Gold Partner Logo]`. Follow SAP Partner logo guidelines (clear space, no alteration). |
| AR-04 | Hero imagery: 4 images (one per slide) + 4 poster fallbacks. Sizes: 2400 px wide AVIF/WebP, plus 1200 px mobile. Max 250 KB per hero image. |
| AR-05 | Service card images: 7 images, 800×600, WebP, ≤ 120 KB each. |
| AR-06 | Open Graph image: 1200×630, one per route group (home, services, default). |
| AR-07 | All images have alt text in content file. Decorative images use empty alt. |
| AR-08 | Video: none required in v1. Optional 1 hero WebM/MP4 ≤ 3 MB muted loop with poster, behind reduced-motion check. |
| AR-09 | Asset provenance log: every image listed in `docs/asset-log.csv` with source, licence, date, prompt (if AI), reviewer. |

---

## 3. Open decisions (owner must answer; default in brackets)

| ID | Decision | Status / Decision Taken |
|---|---|---|
| OD-01 | Brand palette: logo-serious (recommended, per owner direction) vs navy/cyan brief | Resolved: Logo-serious (§4.1) |
| OD-02 | Hosting: Cloudflare Pages static (free) vs Vercel Pro (paid, monthly fee) | Resolved: Cloudflare Pages |
| OD-03 | SAP Partner ID, competencies, PartnerEdge wording: verification status | Resolved: Verified via official SAP Certificate (Nov 02, 2026, ID 0001635021). Display official SAP Gold Partner Logo & PartnerEdge Sell/Cloud Choice credentials. |
| OD-04 | Permission to show SGN client logos & names | Resolved: Approved by owner. Show 36+ enterprise clients in dedicated categorized proof matrix. |
| OD-05 | Dubai phone: correct full number (source is malformed: `+97 1585 266 730`) | Omit Dubai number |
| OD-06 | Enquiry inbox address for form delivery (suggest `subhash@jsjinfotech.co.in` or a generic `enquiry@` alias) | `subhash@jsjinfotech.co.in` |
| OD-07 | Analytics and cookies: cookieless (Cloudflare Web Analytics only) vs add GA4 | Cloudflare cookieless only |
| OD-08 | Legal review: who reviews privacy, terms, accessibility text; governing-law city | Owner's lawyer; Telangana courts |
| OD-09 | Company registration numbers (CIN, GSTIN) for imprint | Omit |
| OD-10 | Careers: approved vacancies to show, or general page only | General page only |
| OD-11 | Insights: launch with approved articles, or empty state | Empty state |
| OD-12 | Real photography: owner supplies drone, HVAC, SAP, office, team shots, or AI-generated set is acceptable for v1 | AI-generated plus licensed stock per §11 |
| OD-13 | Domain and DNS host for `www.jsjinfotech.co.in` | Owner provides access |
| OD-14 | Tagline "Autonomous by Design — IT · SAP · AI · Robotics · Smart Infrastructure" (in corporate profile only): use on site or not | Approved: Use as corporate sub-tagline |
| OD-15 | Vertical label: "HVAC Government Projects" (profile, master prompt) vs "HVAC Govt Projects" (announcement copy) | "HVAC Government Projects" |
| OD-16 | Other Partner Solutions: Solworks (CAD/CAM/PLM engineering software) & ecosystem partners | Approved: Include dedicated Partner Solutions section and showcase. |

Source inconsistencies to fix in content files and record here:
- India phone: `+91 8943032965` (master prompt, profile) vs `+91 89430 32965` (footer). Same number. Display format: `+91 89430 32965`.
- Profile section "Engagement model: SAP PartnerEdge Sell — Solution Sales" is an SAP designation for SGN. Keep attribution to SGN.

---

## 4. Brand and visual design

### 4.1 Palette (logo-serious, final proposal)

Owner direction: the logo says "serious", so the site follows the logo. Violet is the identity. Neutrals are deep, cool, quiet. Green, amber, orange are small signals only.

Logo colours (extracted from SVG gradient stops, to be confirmed by eye on render):
- Violet family: `#604B9F`, `#7761AA`, `#8751A0`, `#A353A0`
- Green family: `#6EBE44`, `#73C276`, `#689774`
- Amber: `#FDC70C`
- Orange: `#F3903F`
- Brown: `#3C2415`

Tokens (dark-first, light-second, both must pass WCAG AA):

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#16132A` | Dark surface (hero, footer). Violet-black. |
| `--color-ink-2` | `#1F1B37` | Card on dark |
| `--color-ink-3` | `#2B2648` | Borders on dark |
| `--color-paper` | `#FFFFFF` | Light surface |
| `--color-mist` | `#F4F3F8` | Section alternate background |
| `--color-line` | `#DAD8E6` | Borders on light |
| `--color-text` | `#16132A` | Body text on light |
| `--color-text-muted` | `#5A5673` | Secondary text (4.5:1+ on paper) |
| `--color-text-on-ink` | `#EDEBF5` | Body on dark |
| `--color-violet` | `#604B9F` | Primary brand, links, primary button bg (white text: verify ≥ 4.5:1) |
| `--color-violet-hi` | `#8B7BC8` | Primary on dark surfaces (verify ≥ 4.5:1 on `--color-ink`) |
| `--color-violet-deep` | `#3F2F78` | Hover/pressed primary |
| `--color-green` | `#6EBE44` | Positive status, "live" dot, small icon accent. Never text on paper. |
| `--color-amber` | `#FDC70C` | Single highlight per screen max. Never body text. |
| `--color-orange` | `#F3903F` | Error-adjacent warm accent only. Not for errors (use `--color-danger`). |
| `--color-brown` | `#3C2415` | Reserved: logo-only dark. Not a UI token. |
| `--color-danger` | `#B3261E` | Form errors |
| `--color-focus` | `#8B7BC8` on dark / `#3F2F78` on light | Focus ring, 2px, offset 2px |

Rules:
- Violet and ink carry the page. Green and amber appear < 5% of pixels.
- No gradients except logo-derived violet-to-ink subtle wash in hero (≤ 15% contrast shift).
- No neon glow, no rainbow, no chrome.

Verification task: run contrast check (axe or `wcag-contrast` script) on every text/background pair before tokens lock. Record results in `docs/design-tokens.md`.

### 4.2 Typography

| Role | Font | Weight | Use |
|---|---|---|---|
| Display | Inter Tight (default; Space Grotesk is the alternative) | 600–700 | H1, H2, hero numbers |
| Body / UI | Inter | 400, 500, 600 | Body, nav, buttons, forms |
| Mono | JetBrains Mono (optional) | 400 | Data labels, IDs, code-like tags |

Self-hosted via `next/font`. Subset to Latin + Latin-ext. Preload display font only.

Scale (desktop / mobile):
- Display XL (hero H1): 72/80 · 40/46
- H1: 56/62 · 36/42
- H2: 40/46 · 30/36
- H3: 24/30 · 20/26
- Body L: 20/30 · 18/28
- Body: 16/26 · 16/26
- Small: 14/22 · 14/22
- Label caps: 12/16, letter-spacing 0.08em

Max line length 68ch for body. Headings sentence case, not all caps (except labels).

### 4.3 Layout grid

- Container max 1280px, side padding 24px (tablet), 16px (mobile, per user standard).
- 12-column grid, 24px gutter desktop, 16px mobile.
- Section vertical rhythm: 120px desktop, 80px tablet, 64px mobile.
- Breakpoints: 360, 640, 768, 1024, 1280, 1536.

### 4.4 Logo use

- Header: logo height 40px desktop, 32px mobile. Placed left.
- Footer: logo on ink background. Use the supplied SVG as-is. If contrast fails on ink, use a white reversal exported from the same SVG geometry (owner approval needed for any reversal).
- Partnership lock-up: `[JSJ logo] × [SGN Software Logo] [Official SAP Gold Partner Logo]`. Equal optical weight. `×` in `--color-text-muted`. Caption: "Joint Venture Partner for SAP Projects". Badge / Stamp: "SGN Software — SAP Gold Partner (Partner ID: 0001635021)". Partner logos (including Solworks) displayed in secondary partner matrix.
- Never place logo on busy photos without a solid or scrim panel.

### 4.5 Iconography

- One icon set only: Lucide (ISC licence). 1.5px stroke. Sizes 20/24.
- Icons decorate; they never carry meaning alone. Labels always present.

### 4.6 Imagery style

- Photography and renders: calm, natural light or controlled studio. Subjects: drones over industrial land, HVAC plant rooms, enterprise operations rooms, data dashboards. Desaturated, violet-tinted grading.
- Avoid: handshake stock, cartoon robots, glowing brains, neon circuit boards, people pointing at screens, fake team photos.
- Data visuals: thin 1px lines, violet and green, labelled axes, no 3D bar charts.

---

## 5. Information architecture

### 5.1 Navigation

Primary nav (desktop): About · Partnership · Services · SAP · Industries · Roadmap · Insights · Careers · Contact
CTA: "Discuss a Project" → /contact

Mobile: full-screen menu, same order, CTA at bottom, contact phone and email under CTA.

Footer nav groups:
- Company: About, Partnership, Careers, Insights
- Services: seven links
- Solutions: SAP, Industries, Roadmap
- Contact: address, phones, emails, web
- Legal: Privacy, Terms, Cookie policy, Accessibility statement

### 5.2 Site map (routes)

| Route | Template | Purpose |
|---|---|---|
| `/` | Home (15 sections) | Overview, conversion |
| `/about` | Narrative page | Company, vision, integrated model, delivery approach |
| `/partnership` | Partnership template | JSJ × SGN, who brings what, SAP credentials, engagement model |
| `/services` | Index | Seven cards |
| `/services/it-consulting` | Service template | IT Projects & Consulting |
| `/services/sap` | Service template | SAP Solutions with SGN |
| `/services/ai` | Service template | AI Innovations |
| `/services/drones` | Service template | Drone Technology |
| `/services/software` | Service template | Software Development |
| `/services/hvac-government` | Service template | HVAC Government Projects |
| `/services/rnd` | Service template | New Technology R&D (labelled research) |
| `/industries` | Index | 14 sector cards |
| `/roadmap` | Roadmap | JSJ INFOTECH 2030 |
| `/insights` | Index | MDX list (empty state v1 if OD-11 default) |
| `/insights/[slug]` | Article | MDX article |
| `/careers` | Content | General or approved vacancies |
| `/contact` | Contact | Enquiry form, offices, direct details |
| `/privacy` | Legal | Privacy policy |
| `/terms` | Legal | Terms of use |
| `/cookies` | Legal | Cookie policy |
| `/accessibility` | Legal | Accessibility statement |
| `/404`, `/500` | Error | Branded |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Generated | SEO and AI-search readiness |

Service template sections (same for all seven):
1. Hero: service name, one-line promise, primary CTA, supporting visual
2. What we deliver: 4–6 capability cards (from profile text)
3. How we work: engagement steps (shared Engage → Design → Deliver → Run & Evolve pattern where relevant)
4. Relevant sectors: chips linking to /industries
5. Partnership note: where SGN is involved (SAP service only, plus any SGN contribution per profile)
6. Proof: approved case studies or "available on request" (no invented cases)
7. Closing CTA
8. Related services (2 cards)

---

## 6. Home page specification

### 6.1 Global chrome
- Announcement strip (top): "JSJ INFOTECH × SGN Software | Joint Venture Partner for SAP Projects | SGN Software — SAP Gold Partner". Height 40px. Violet-deep background, white text. Dismissible (session-scoped only, no cookie).
- Header: sticky, transparent on hero, solid ink or paper after scroll. Height 72px desktop, 64px mobile.

### 6.2 Section order (16)

| # | Section | Spec |
|---|---|---|
| 01 | Partnership strip | Covered in 6.1 (with official SAP Gold Partner badge) |
| 02 | Hero carousel | §6.3 |
| 03 | Capability ribbon | Seven vertical names as tiles + SGN figures row. Each figure has "SGN Software" label. Numbers: 15+, 250+, 100+, 75+, 25+, 16+. Count-up on enter (disabled under reduced motion). |
| 04 | About JSJ | H2 "Engineering the Connection Between Physical and Digital Operations." Body from master prompt §6. Sub-tagline: "Autonomous by Design — IT · SAP · AI · Robotics · Smart Infrastructure". Right column: 3 pillar cards (Enterprise IT and SAP, AI and autonomous data, Smart infrastructure). |
| 05 | Partnership spotlight | H2 "Two Companies. Complementary Strengths. One Coordinated Delivery Partnership." "Who brings what" 3-column table: JSJ INFOTECH / SGN Software — SAP Gold Partner / Combined outcome. Rows: Technology, Delivery, Commercial, Run & Support (from profile §03). Prominent lock-up above table with SAP Gold Partner Logo. |
| 06 | Seven vertical cards | 3 + 4 grid desktop, 1 column mobile. Each card: number, name, one-line description, arrow link to service page. Card image ≤ 120 KB. |
| 07 | SAP practice & Software Licensing | H2 "Enterprise SAP Delivery & Licensing, Backed by an SAP Gold Partner." Official SAP Gold Partner Logo & badge. Panel: SGN credential facts (SAP Gold Partner, Kolkata, Partner ID 0001635021, validated Nov 2026). Service lines (4 chips): Licensing & Cloud Choice, Implementation (GROW/RISE), Migration to RISE, Post-Implementation Support. Authorizations: Cloud ERP, Private Cloud ERP, Spend Management (Ariba), CRM, HCM (SuccessFactors), Open Cloud/On-Premise, CastingSoft. Track record figures labelled SGN. |
| 08 | AI and connected intelligence | H2 "From Enterprise Intelligence to Smart Infrastructure." Diagram: data sources (drones, HVAC sensors, enterprise systems) → models → digital twin → decisions. Static SVG in v1; animated data path optional (§7). |
| 09 | Industries | 14 sector tiles, text-only chips in grid. Link to /industries. |
| 10 | Partner Solutions Ecosystem | H2 "Engineered with World-Class Partner Solutions." Showcase featuring Solworks (SolidWorks / CAD / CAM / PLM engineering solutions), IoT Platforms, and Digital Twin Toolchains integrated into JSJ's physical-digital operations. |
| 11 | Engagement model | Four steps, pinned on desktop (GSAP ScrollTrigger), stacked on mobile. Engage · Design · Deliver · Run & Evolve. Copy from profile §03. |
| 12 | JSJ INFOTECH 2030 | Three-phase timeline: Foundation · Integration · Autonomy. Disclaimer line: "Strategic development ambition. Not a statement that every capability is deployed today." |
| 13 | Enterprise Client Proof | H2 "Proven Across Leading Enterprises & Public Infrastructure." Categorized logo/client grid (36+ Tier-1 brands): (1) SAP Public Cloud (The Man Company, Indian Oil LNG, Utkarsh, Webel Solar, Genus, Kiri Industries, Virgo Group, Museum of the Future), (2) RISE with SAP (DCM Shriram, Mamaearth, IOL Chemicals, Sportking, Safex, Sunsure, Briar Chemicals), (3) SAP S/4HANA (Shakambhari Group, Tarsons, Edible Group, LINC, Black Tiger Cement, Aludecor, Dollar), (4) Finance & Spend / Ariba (Relaxo, Exide, ReNew Power, Crompton Greaves, Valvoline, Century Ply, Nuvoco, Luminous, Shyam Steel). |
| 14 | Insights | Empty state or latest 3 articles (OD-11). |
| 15 | Closing CTA | H2 "Let's Build What's Next." Body from master prompt §6. Button "Start a Project Discussion" → /contact. Secondary: call and email. |
| 16 | Footer | §5.1 (includes SAP Gold Partner lockup, trademark notice, legal links). |

### 6.3 Hero carousel (four slides)

Container: full-viewport height, min 640px, max 920px. Background per slide: poster image (AVIF/WebP) with violet-ink scrim. Animated layer optional (§7.3).

Controls: prev/next buttons (44px), dot indicators (each 44px hit area), play/pause button (required for WCAG 2.2.2 "Pause, Stop, Hide"). Keyboard: ←/→ when carousel focused. Autoplay 7s. Pause on hover, focus within, or pause button.

| Slide | Headline (exact) | Body (exact) | Buttons | Visual |
|---|---|---|---|---|
| 1 | Intelligent Technology. Connected Enterprise. | JSJ INFOTECH brings enterprise IT, AI, software engineering and smart infrastructure together to help organizations modernize the systems that power business and public services. | Explore Our Capabilities → /services · Talk to Our Team → /contact | City and industrial infrastructure, data paths in green and violet |
| 2 | Enterprise SAP Delivery. Powered by a Joint Partnership. | JSJ INFOTECH works with SGN Software Pvt. Ltd., its joint venture partner for SAP projects. SGN is an SAP Gold Partner, bringing SAP credentials and delivery expertise to the combined engagement. | Explore SAP Solutions → /services/sap · Meet the Partnership → /partnership | Data-flow diagram, lock-up panel, badge "SGN Software — SAP Gold Partner" |
| 3 | From Enterprise Intelligence to Smart Infrastructure. | Connect AI, computer vision, autonomous drone data, software and IoT-enabled infrastructure to create more informed, responsive operations. | Discover AI & Innovation → /services/ai · Discuss a Project → /contact | Drone scan → digital twin → dashboard |
| 4 | One Technology Partner. Seven Integrated Verticals. | IT Projects & Consulting · SAP Solutions with SGN · AI Innovations · Drone Technology · Software Development · HVAC Government Projects · New Technology R&D. | View All Services → /services · Request a Consultation → /contact | Seven nodes converging to one ecosystem graphic |

Note: slide 2 SGN attribution must stay in body copy, exact wording above.

Reduced motion: no autoplay, slides shown as a static stack or single slide with arrows. Poster images only.

### 6.4 Hero mobile
- Text and CTAs above visual. Visual scrim darker. Two CTAs stacked, full width, 48px tall.

---

## 7. Motion design system

### 7.1 Principles
1. Motion explains structure: what appears, what leads to what.
2. One motion idea per viewport.
3. Speed: UI 150–250ms, reveals 500–700ms, hero transitions 800–1000ms.
4. Easing: standard `cubic-bezier(0.2, 0.0, 0.0, 1)` for UI; `cubic-bezier(0.16, 1, 0.3, 1)` for reveals.
5. No flashing, no more than 3 flashes/sec (WCAG 2.3.1). No parallax above 1024px unless reduced-motion is off.

### 7.2 Motion tokens

| Token | Value |
|---|---|
| `--motion-fast` | 180ms |
| `--motion-base` | 360ms |
| `--motion-slow` | 700ms |
| `--motion-hero` | 900ms |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `--ease-reveal` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--reveal-distance` | 12px |

### 7.3 Motion inventory

| Where | Technique | Spec | Reduced-motion fallback |
|---|---|---|---|
| Page load | Fade-in of hero text | 700ms, 80ms stagger | Instant |
| Section reveal | Motion `whileInView` | opacity 0→1, y 12→0, once | Instant |
| Capability counters | Count-up | 1200ms, ends on exact figure | Final value shown |
| Hero slide change | Crossfade + 1.02→1 scale | 900ms | Crossfade off, instant swap |
| Hero data paths | SVG `stroke-dashoffset` loop | 6s loop, stroke 1px, green at 60% opacity | Static path |
| Engagement steps | GSAP ScrollTrigger pin, step highlight | Pin 300vh desktop | Stacked static list |
| Roadmap timeline | Line draw on scroll | scaleX 0→1 | Full line shown |
| Service cards | Hover lift 4px, border violet | 180ms | Border change only |
| Header | Background fade on scroll | 200ms | Same |
| 3D digital twin (optional, hero slide 3) | React Three Fiber, low poly | Desktop ≥ 1280px and GPU check only | Poster image |
| Lenis smooth scroll | Global | duration 1.1, wheel multiplier 1 | Native scroll |

Lazy-load GSAP and R3F only on routes that need them (`dynamic` import). Home initial JS must stay within NFR-02.

### 7.4 Motion do-nots
- No cursor followers, no magnetic buttons, no text scramble, no spinning logos, no full-page transitions longer than 400ms.
- No scroll-jacking except the one engagement-model pin.
- No motion on the partnership table.

---

## 8. Technical architecture

### 8.1 Stack (Updated to Latest Verified Production Versions)

| Layer | Choice & Latest Version | Licence | Note |
|---|---|---|---|
| Framework | **Next.js 16.4.6** (React 19.3.1), App Router, TypeScript strict, static export (`output: 'export'`) | MIT | Zero-cost edge delivery, zero server attack surface |
| Styling | **Tailwind CSS v4.3.5** (`@tailwindcss/postcss`) | MIT | High-performance CSS engine, CSS-first variables |
| Components | **shadcn/ui** (copy-in, Radix UI primitives) | MIT | Fully accessible, customizable, zero runtime weight |
| Icons | **Lucide React 1.73.0** | ISC | Consistent 1.5px stroke enterprise icon set |
| Motion | **Motion 14.14.0** (`motion/react`) | MIT | Modern, high-performance UI and layout animations |
| Scroll pin | **GSAP 3.15.1** + ScrollTrigger | GSAP Standard License (free) | Pinned storyboards, engagement model timeline |
| Smooth scroll | **Lenis 1.3.27** | MIT | Fluid 60/120fps scrolling synced with GSAP |
| 3D (optional) | **Three.js 0.187.0** + **@react-three/fiber 9.8.2** + **@react-three/drei 10.7.9** | MIT | Lazy-loaded low-poly digital twin / drone visual |
| Content | **MDX (`@next/mdx`)** + typed TypeScript content models | MIT | Git-versioned, zero-database, CMS-ready content layer |
| Forms & Validation | **React Hook Form 7.92.0** + **Zod 4.6.7 / 3.24.x** | MIT | Strict type-safe schema validation client & server |
| Spam Protection | **Cloudflare Turnstile** (`@marsidev/react-turnstile 1.1.0`) | Free | Non-intrusive CAPTCHA-less bot detection |
| Email Service | **Resend 6.38.1** API | Free tier | Transactional enquiry delivery to `subhash@jsjinfotech.co.in` |
| Edge Functions | **Cloudflare Pages Functions** (`@cloudflare/workers-types`) | Free tier | Serverless `/api/enquiry` endpoint with zero VPS |
| Hosting & CDN | **Cloudflare Pages** (global edge static export) | Free tier | Free unlimited bandwidth, SSL, commercial use permitted |
| Analytics | **Cloudflare Web Analytics** | Free | Cookieless, GDPR/DPDP compliant, zero banner required |
| Fonts | **`next/font`** self-hosted Inter, Inter Tight | OFL | Zero external runtime network requests |
| Testing | **Vitest 5.1.0** (unit), **Playwright 1.65.1** (e2e & a11y via `@axe-core/playwright`), Lighthouse CI | MIT/Apache | Automated CI gates for zero regressions |
| CI / Automation | **GitHub Actions** | Free tier | Automated build, test, lint, and edge preview pipeline |
| Code Quality | **ESLint 10.15.0 / 9.x**, **Prettier 3.x**, **TypeScript 5.8+ / 7.0+** (`tsc --noEmit`) | MIT | Zero-warning strict build pipeline |

Important: Next.js server features (route handlers, server actions) do not run on a pure static export. Contact form needs one of:
- (A) Cloudflare Pages Functions or Worker endpoint receiving POST, calling Resend. Recommended. Keeps static export for pages.
- (B) Form posts to external endpoint (Formspree-style). Adds third party; avoid.
Decision: (A). Architecture in §8.3.

### 8.2 Repository layout

```
jsj-website/
  app/                      routes, layout, metadata, not-found, error
  components/
    ui/                     shadcn generated (do not hand-edit beyond tokens)
    brand/                  Logo, PartnershipLockup, Badge, Wordmark
    layout/                 Header, Footer, AnnouncementStrip, Nav
    sections/               one file per home section (01–16)
    services/               ServiceTemplate, ServiceCard
    motion/                 Reveal, CountUp, HeroCarousel, SmoothScroll, PinnedSteps
    forms/                  EnquiryForm, FieldError
  content/
    site.ts                 company facts, contacts, legal names
    metrics.ts              SGN figures + attribution
    verticals.ts            seven verticals
    industries.ts           14 sectors
    hero.ts                 four slides
    partnership.ts          who-brings-what rows
    licensing.ts            SAP PartnerEdge Sell & Cloud Choice authorized products
    clients.ts              36+ categorized enterprise client references
    partners.ts             ecosystem partner solutions (Solworks, IoT, etc.)
    roadmap.ts              2030 phases
    legal/                  privacy.mdx, terms.mdx, cookies.mdx, accessibility.mdx
    insights/               article MDX
  functions/                Cloudflare Pages Function: /api/enquiry
  lib/
    seo.ts                  metadata helpers
    schema.ts               JSON-LD builders
    env.ts                  typed env (zod)
    constants.ts            tokens, breakpoints
  public/
    brand/                  JSJ-logo.svg, sgn-logo.svg, sap-gold-partner-badge.svg, partner-logos/
    images/                 AVIF/WebP, per §11 log
    og/                     1200×630 social images
    favicon, manifest, robots.txt generated
  styles/
    globals.css             tokens on :root, dark via data-theme and media query
  tests/
    e2e/                    Playwright specs
    a11y/                   axe per route
    unit/                   content validators
  docs/
    SRS-design-implementation-plan.md   (this file)
    design-tokens.md
    asset-log.csv
    legal-review.md
  .github/workflows/ci.yml
  CLAUDE.md                 project rules for AI agents (§12)
  wrangler.toml             (if Functions used)
```

### 8.3 Contact form data flow

1. User submits `/contact` form. Client validates with Zod (same schema as server).
2. Honeypot field empty check. Turnstile token attached.
3. POST to `/api/enquiry` (Cloudflare Pages Function).
4. Function verifies Turnstile secret server-side. Rejects on failure (400).
5. Function validates payload with same Zod schema. Rejects on failure (422 with field errors).
6. Function sends email via Resend to enquiry inbox (OD-06). Subject: `New enquiry: <service>`. Body: fields. Reply-to: sender email.
7. Function returns 200 + reference ID (random UUID short form). Logs ID only, no PII.
8. Client shows success state with reference ID. Form resets.

Failure: 502 from Resend → client shows "Could not send. Email us at subhash@…" fallback with mailto link. Never lose the message: show it again for copy.

Data retention: none stored in site. Email inbox retention is the owner's responsibility; privacy policy states this.

### 8.4 Hosting and free-tier notes
- Cloudflare Pages: static assets and Functions. Free tier limits per 3rd-party sources: 500 builds/month, 100 custom domains per project, Workers free 100k requests/day for Functions. Verify on Cloudflare pricing page before launch.
- Resend free: limits change; verify current plan.
- Do not use Vercel Hobby for this company site (non-commercial terms). OD-02.

### 8.5 Security
- CSP: default-src 'self'; script-src 'self' (+ Turnstile domain, + Cloudflare insights script if used); style-src 'self' 'unsafe-inline' only if required by motion libraries, otherwise hash; img-src 'self' data:; frame-src https://challenges.cloudflare.com; connect-src 'self' Turnstile + analytics hosts.
- HSTS max-age 31536000 includeSubDomains.
- Form: rate limit per IP via Cloudflare rules (free tier rule count permitting).
- No secrets in client bundle. Only `NEXT_PUBLIC_` values: site URL, Turnstile site key.
- Dependency audit in CI (`npm audit --omit=dev` must have no high/critical).

### 8.6 SEO and AI-search readiness
- `<title>` pattern: "[Page] | JSJ INFOTECH". Home: "JSJ INFOTECH | Enterprise IT, SAP with SGN, AI, Drones, Software, Smart Infrastructure".
- Meta description ≤ 160 chars, unique per route.
- JSON-LD on home: Organization (name, url, logo, address, contactPoint), WebSite, and a `member` or `partner` reference to SGN Software as a separate Organization with `sameAs` only if owner gives a URL.
- BreadcrumbList on all inner routes.
- Service pages: `Service` schema with provider JSJ.
- `llms.txt` at root: short description, route list, contact. Plain text.
- robots.txt: allow all; sitemap line.
- Canonical on every route.

### 8.7 Accessibility implementation rules
- Skip link first in DOM.
- One H1 per route. Logical H2–H3.
- Landmarks: header, nav, main, footer. Labelled navs when more than one.
- Carousel: region with aria-roledescription "carousel", live region polite when autoplay off, slide labelled "1 of 4".
- Forms: label per input, error text linked with aria-describedby, aria-invalid on error, focus first error on submit.
- Focus visible on all interactive elements (2px ring).
- Targets 44×44 minimum.
- Respect prefers-reduced-motion and prefers-contrast (more).
- Dark and light: both pass AA. Theme follows system unless user toggles (theme toggle: v1 optional, default system).

---

## 9. Implementation plan

### 9.1 Phases and deliverables

| Phase | Name | Deliverables | Exit criteria |
|---|---|---|---|
| P0 | Decisions | §3 resolved or defaults accepted; `docs/decisions.md` written | Owner sign-off |
| P1 | Foundation | Repo scaffold, TS strict, Tailwind v4, tokens, lint, CI, Cloudflare preview | `pnpm build` green, preview URL live |
| P2 | Brand system | Logo component (SVG unchanged), tokens, type scale, contrast report, `/_design` dev route (not deployed) | axe passes on `/_design`; contrast report all pass |
| P3 | Content layer | `content/*.ts` from source, `// VERIFY:` markers, validators in unit tests | Validators pass; §10.3 list complete |
| P4 | Chrome | Header, footer, announcement strip, nav, mobile menu | Keyboard-only navigation works; axe clean |
| P5 | Motion layer | Lenis, Reveal, CountUp, HeroCarousel, PinnedSteps, reduced-motion | Carousel e2e passes (pause on focus, arrows, keyboard); reduced-motion e2e passes |
| P6 | Home page | 15 sections | Visual review by owner; Lighthouse ≥ 90 perf on mobile |
| P7 | Service and inner pages | 7 service pages, /about, /partnership, /industries, /roadmap, /insights, /careers | Each route axe clean; links valid |
| P8 | Contact and forms | Form UI, Pages Function, Turnstile, Resend, success/error states | E2E: valid submit, invalid submit, spam submit rejected, Resend failure fallback |
| P9 | Legal | Privacy, terms, cookie, accessibility pages; legal-review.md | OD-08 review recorded |
| P10 | SEO and schema | Metadata, JSON-LD, sitemap, robots, llms.txt, OG images | Schema validator passes; Lighthouse SEO ≥ 95 |
| P11 | Assets | Hero and card images per §11; asset-log.csv complete | Every image has log row |
| P12 | QA and launch | Cross-browser, cross-device, perf budget, a11y, content sign-off, DNS | Launch checklist §10.4 all ticked |

Estimated effort (one engineer plus Claude): 3–4 weeks. Asset availability is the main schedule risk.

### 9.2 Work breakdown with acceptance tests

Each task maps to requirement IDs. A task is done only when its tests pass in CI.

| Task | Covers | Acceptance test |
|---|---|---|
| T-01 Scaffold | NFR-09 | `pnpm build && pnpm typecheck && pnpm lint` exit 0 |
| T-02 Tokens | DR palette §4.1 | Contrast script: all listed pairs ≥ 4.5:1 (body) and ≥ 3:1 (large, UI) |
| T-03 Logo component | AR-01 | Snapshot: SVG markup equals source file hash; no transform attributes added |
| T-04 Header/nav | FR-02 | e2e: tab order matches DOM; menu opens with Enter; Esc closes |
| T-05 Footer | FR-03, LR-08 | e2e: all footer links resolve 200 in build |
| T-06 Carousel | FR-05, FR-24, §6.3 | e2e: autoplay advances at 7s ±0.5s; pause on hover; pause button stops; ←/→ work; reduced-motion disables autoplay |
| T-07 Partnership table | FR-08, CR-02, CR-03 | Unit: content validator fails if "SAP Gold Partner" appears in JSJ-only row |
| T-08 Seven verticals | FR-07 | e2e: seven cards each link to matching route |
| T-09 Service template | FR-07, §5 | Build generates seven pages; each has H1 and CTA |
| T-10 Industries | FR-09 | Count = 14 chips and 14 cards |
| T-11 Roadmap | FR-10, CR-06 | Text check: disclaimer string present on /roadmap and home §11 |
| T-12 Enquiry form UI | FR-13, FR-14 | Unit + e2e: required fields; invalid email message; consent required |
| T-13 Enquiry function | FR-15, FR-16, §8.3 | Integration test with Turnstile test keys; Resend mocked; 200/400/422/502 paths |
| T-14 Click-to-call | FR-17 | Link href `tel:+918943032965` (display format separate) |
| T-15 Legal pages | LR-01–LR-07 | Each page present; required headings present (checklist in §10); link from footer |
| T-16 Metadata | FR-21, NFR-06 | Each route has unique title and description (script) |
| T-17 JSON-LD | FR-21 | Validator passes (schema.org validator, or Google Rich Results test manually) |
| T-18 Sitemap | FR-21 | sitemap.xml lists all indexable routes; excludes 404/500 |
| T-19 Headers | NFR-07 | Cloudflare headers config tested with curl -I against preview |
| T-20 Perf budget | NFR-01, NFR-02 | Lighthouse CI thresholds in `lighthouserc.json` |
| T-21 A11y | NFR-03 | `tests/a11y` axe run on all routes: zero serious/critical |
| T-22 Cross-browser | NFR-05 | Playwright projects: chromium, firefox, webkit, mobile chrome, mobile safari |
| T-23 Dead links | NFR-06 | Link checker on built output |
| T-24 Asset log | AR-09 | Script: every file in `public/images` has row in asset-log.csv |

### 9.3 Test commands (to add to package.json)

```
pnpm dev
pnpm build
pnpm typecheck
pnpm lint
pnpm test          # vitest unit
pnpm test:e2e      # playwright
pnpm test:a11y     # axe over built output
pnpm lhci          # lighthouse ci
pnpm check:content # validators (VERIFY markers, attribution rules)
```

CI order: lint → typecheck → unit → build → e2e → a11y → lhci → content check. Any failure blocks merge.

### 9.4 Branching and review
- `main` protected. Feature branches `feat/<area>-<short>`.
- One PR per task group (P1–P12). Max ~800 changed lines per PR where practical.
- Preview URL per PR via Cloudflare Pages.
- Owner reviews copy and visuals on preview before merge to main for P6, P7, P9.

---

## 10. Content and legal checklist (what a serious enterprise site ships with)

Research sources (summarised): legal-checklist and corporate-checklist vendor guides (2026), India DPDP Rules 2025 summaries (law-firm and blog commentary, verify against gazette), enterprise B2B trust-signal guides, WCAG 2.2 guidance. X and Reddit searches did not return primary threads; this list is compiled from the search results above and standard enterprise practice. Re-check with owner's preferences.

### 10.1 Pages every site must have
- [ ] Home
- [ ] About (company, mission, leadership if owner approves, offices)
- [ ] Services index and detail pages
- [ ] Contact page with form, address, phone, email, map link
- [ ] Privacy policy
- [ ] Terms of use
- [ ] Cookie policy (even if only essential cookies, state that)
- [ ] Accessibility statement (recommended for government buyers)
- [ ] 404 page
- [ ] Sitemap and robots

### 10.2 Trust elements (enterprise buyers)
- [ ] Verified legal name, address, phone, email on contact page and footer
- [ ] Corporate email domain (`@jsjinfotech.co.in`), not generic free mail
- [ ] Attribution on partner figures (SGN)
- [ ] Partner credentials with verification date (SGN SAP Gold: confirm)
- [ ] Case studies or "available on request" (no invented cases)
- [ ] Leadership block with real people, photos, roles (owner supplies; OD-12)
- [ ] Clear privacy and security statement (plain language)
- [ ] Response-time promise only if owner confirms
- [ ] Certifications (ISO, CERT-In, etc.) only if held and documented

### 10.3 Items needing verification before publish (VERIFY list)
- Dubai phone number (OD-05)
- SAP Partner ID and competencies (OD-03)
- SGN client names and logos (OD-04)
- Tagline usage (OD-14)
- HVAC label (OD-15)
- Company registration numbers (OD-09)
- Privacy and terms wording (OD-08)
- Turnstile, Resend, Cloudflare free-tier limits at build time
- SAP trademark notice wording (LR-09)

### 10.4 Launch checklist
- [ ] All §10.1 pages live with real content
- [ ] All VERIFY items closed or removed
- [ ] Footer links tested
- [ ] Form tested: valid, invalid, spam, failure fallback
- [ ] Email delivery tested to enquiry inbox, spam folder checked
- [ ] Analytics confirms no cookies set (browser devtools check)
- [ ] Privacy policy matches actual data flow (form → email; Turnstile; Cloudflare analytics)
- [ ] Lighthouse and axe reports saved to `docs/qa/`
- [ ] Cross-browser sign-off
- [ ] OG image preview checked on LinkedIn, WhatsApp, X
- [ ] Google Search Console property verified; sitemap submitted (owner account)
- [ ] DNS cutover plan and rollback recorded
- [ ] Old site content removed or redirected (owner decides redirects)

### 10.5 Social and external presence (owner decides, not built in v1)
- LinkedIn company page link in footer (owner provides URL)
- X / Instagram: links only if active
- No embedded social feeds in v1 (performance and privacy)

---

## 11. Asset plan (images, video, logos)

### 11.1 Sources, in preference order
1. Owner-supplied photos (drone, HVAC sites, SAP projects, office, team). Best. Record consent.
2. Owner-commissioned or owner-created graphics (diagrams, renders).
3. AI-generated imagery via tools the owner already has: Gemini CLI, Antigravity CLI, NotebookLM image generation, Claude-created SVG. Record tool, model, prompt, date in asset log.
4. Licensed stock or free-licence photos (Unsplash, Pexels; verify licence page per image). Record source URL and licence in asset log.

Note: Imagen 4 models were reported shut down on the Gemini API (Aug 2026) per third-party sources; use the current image model listed in Google's Gemini API docs. Verify commercial-use and SynthID terms on the day of generation. Do not rely on memory of old terms.

### 11.2 Image rules
- No real people's faces generated for "team" or "client" imagery. Use owner photos only.
- No generated images that depict real clients, government buildings with identifiable signage, or real logos.
- No text in generated images that must be accurate (names, numbers). Put text in HTML.
- Diagrams: prefer Claude-written inline SVG over raster AI images. Editable, sharp, accessible.
- Hero images: 16:9 and 9:16 variants for mobile crop. Keep focal point centred.

### 11.3 Generation prompt library (for Gemini / NotebookLM / Antigravity)
Style header (prepend to each prompt):
"Photorealistic or precise vector-clean corporate technology imagery. Muted violet and deep navy palette with subtle green data accents. Calm, serious, enterprise tone. Natural soft light. No people's faces, no text, no logos, no cartoon elements. 16:9."

Hero 1 (intelligent infrastructure):
"Aerial dusk view of an industrial and urban campus, thin glowing green data lines linking rooftops, cloud-like data nodes above, violet haze. Clean, large negative space on the left for text overlay."

Hero 2 (SAP data flow):
"Abstract enterprise architecture visual: layered horizontal planes representing an ERP core, thin violet connectors flowing into modules, minimal, precise, dark ink background with violet highlights. Negative space on the left."

Hero 3 (drone to digital twin):
"Top-down drone survey of a building complex transitioning into a wireframe digital twin in violet lines, subtle grid, analytics overlay bars in green, dark background."

Hero 4 (seven verticals ecosystem):
"Seven distinct nodes in a calm radial arrangement converging into one central hexagonal core, thin connecting lines, violet and green, dark navy background, minimal."

Service cards (one per vertical): describe the subject plainly (drone over site; HVAC unit in plant room, no faces; server racks; code on screen blurred; government building façade without signage; research lab bench abstract). Same style header.

Check every output: no faces, no logos, no invented text, correct palette. Reject and regenerate otherwise.

### 11.4 Asset log schema (`docs/asset-log.csv`)
Columns: `file,used_on,source_type,source_name_or_tool,source_url,licence,created_or_downloaded_on,prompt_or_query,reviewer,status`

### 11.5 Video (optional)
- One hero loop, muted, 1920×1080, H.264 MP4 and VP9 WebM, ≤ 3 MB each, 8–12 s, no audio, poster image.
- Only if owner approves OD-12 and reduced-motion check passes.

---

## 12. Handoff protocol (for another AI agent or engineer)

### 12.1 First hour
1. Read this document fully.
2. Read `~/Downloads` source docs listed at top (read-only).
3. Confirm §3 decisions with owner. Do not start P2 until OD-01, OD-02, OD-06 are answered (or defaults accepted in writing).
4. Create repo structure from §8.2. Add `CLAUDE.md` (template below).

### 12.2 CLAUDE.md template for the new repo
```
# JSJ INFOTECH website — agent rules
- Source of truth: docs/SRS-design-implementation-plan.md
- Brand: logo-serious palette, tokens in styles/globals.css. Do not add colours.
- Facts: only from content/*.ts. Never invent numbers or clients.
- SAP Gold Partner = SGN Software only.
- Logo SVG: never modify.
- Motion: follow §7; respect reduced motion on every new animation.
- Every new image: add row to docs/asset-log.csv.
- Every VERIFY marker: list in §10.3 and do not publish.
- Commits: no AI attribution lines. Author per global config.
- Verify before done: pnpm typecheck && pnpm lint && pnpm test && pnpm build. Show output.
```

### 12.3 Working rules
- One P-phase per session. Use `/clear` between phases.
- Each phase ends with a short status: done tasks (T-IDs), failing tests, open decisions.
- Never publish to production DNS without owner approval.
- Never send emails or post on social without owner approval.

### 12.4 Prompt sequence (copy and run in order)
1. "Read docs/SRS-design-implementation-plan.md. Execute P1. Stop after `pnpm build` is green and report T-01 result."
2. "Execute P2 tasks T-02 and T-03. Produce docs/design-tokens.md with contrast table. Show test output."
3. "Execute P3. Build content files from the two source docx files. Mark each unverified item VERIFY. Write validators."
4. "Execute P4. Build header, footer, announcement strip. Keyboard test all nav."
5. "Execute P5. Build motion layer per §7 with reduced-motion. Write carousel e2e tests T-06."
6. "Execute P6. Build the 15 home sections in §6.2 order. One file per section. Show Lighthouse mobile scores."
7. "Execute P7. Build service template and seven pages. Build industries, roadmap, insights empty state, careers, about, partnership."
8. "Execute P8. Build enquiry form and Pages Function per §8.3. Tests for all four response paths."
9. "Execute P9. Draft legal pages from §10.1 and LR-01–LR-07. Mark each VERIFY. Write docs/legal-review.md."
10. "Execute P10. Metadata, JSON-LD, sitemap, robots, llms.txt. Run validators."
11. "Execute P11. Generate images per §11.3 using the tools the owner names. Log each in asset-log.csv. Reject any image that breaks §11.2."
12. "Execute P12. Run full CI. Produce docs/qa/ reports. List every failing test verbatim. Do not claim done with failures."

---

## 13. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| SGN attributions or partner status wrong | Legal and reputational | OD-03, CR-02, CR-03, verify before launch |
| Privacy policy inaccurate for DPDP | Legal | LR-02, OD-08 lawyer review, network audit |
| AI image tool terms change | Rights | Asset log, owner approval, prefer owner photos |
| Hosting terms change (free tiers) | Cost or outage | Verify on day of launch; OD-02 |
| Motion heavy, slow mobile | Bounce, a11y fail | Budgets §2.2, lazy load, reduced motion |
| Content not ready | Schedule | Placeholders marked VERIFY; no invented copy |
| Scope creep (more pages, blog, CMS) | Schedule | v1 scope §2.1 only; log new asks as v2 |
| Commons Clause in React Bits | Licence | Use only as reference; write own components |

---

## 14. Out of scope for v1

- WordSell and any non-website product (owner says covered elsewhere).
- Client portal, login, CRM integration.
- Multi-language.
- Live chat, chatbot.
- Blog CMS with editorial workflow (MDX in git only).
- Social feed embeds.
- E-commerce.
- Newsletter (add in v2 with double opt-in).

---

## 15. Glossary

- JSJ: JSJ INFOTECH, technology and engineering company, Hyderabad.
- SGN: SGN Software Private Limited, Kolkata, SAP Gold Partner, JSJ's joint venture partner for SAP projects.
- AMC: Annual Maintenance Contract (HVAC).
- DPDP: Digital Personal Data Protection (India).
- SDF: Significant Data Fiduciary (DPDP).
- AA: WCAG level AA.
- OD: open decision (§3).
- VERIFY: unconfirmed content, must not publish until cleared.
