# JSJ INFOTECH × SGN Software — Website Build Plan (2027 Rebuild)

Status: plan only. Old site to be replaced from scratch. No code written yet.
Sources of truth: `~/Downloads/JSJ_INFOTECH_SGN_Website_Structure_and_Master_Prompt.docx`, `~/Downloads/JSJ_INFOTECH_Corporate_Profile_SGN_SAP_Gold.docx`, `~/Downloads/JSJ INFOTECH × SGN Software.md`, `~/Downloads/JSJ LOGO.svg`.

## 1. Decisions (locked unless you override)

| Area | Decision | Why |
|---|---|---|
| Framework | Next.js (App Router, TypeScript, React Server Components) | Your pick. Static-first pages, good SEO. |
| Hosting | **Cloudflare Pages (static export)** — not Vercel Hobby | Vercel Hobby = personal non-commercial only. Company site needs Pro (paid). Cloudflare Pages free tier allows commercial use. Netlify free also allows it, but is credit-metered. |
| Styling | Tailwind CSS v4 + shadcn/ui (copy-in components) | Free, MIT, standard in Next.js 2026. |
| Motion | `motion` (Motion for React, formerly Framer Motion), MIT, import from `motion/react` | Layout/UI motion. |
| Scroll / timeline | GSAP (free, incl. ex-Club plugins) + ScrollTrigger | Hero storyboards, pinned sequences. Check Standard License "Permitted Uses" (no visual-builder competitor). |
| Smooth scroll | Lenis (`lenis` 1.3.x) | Dependency-free. Sync with ScrollTrigger on each scroll tick. |
| 3D / data viz | React Three Fiber + drei (MIT), used on 1–2 hero moments only | Drone / digital-twin visuals. Mobile fallback = static image. |
| Animated components | React Bits (MIT + Commons Clause) — use only as reference, or write own | Commons Clause restricts selling the software, not using it on your own site. Confirm with counsel if you want to be strict. |
| Forms | Server Action → Resend (free 3k emails/mo) or Cloudflare Email Routing | Validation with Zod, honeypot + Cloudflare Turnstile (free) for spam. |
| CMS | MDX files in git for v1. Move to Sanity free tier or Decap CMS only when non-dev edits needed | Brief asks CMS-editable. Git MDX = free, versioned. |
| Analytics | Cloudflare Web Analytics (free, no cookies) | Privacy-friendly, fits brief. |
| Search / SEO | Next.js Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD Organization + Service | Brief asks for it. |
| Fonts | Self-host via `next/font` (Google Fonts: Inter Tight / Space Grotesk for display, Inter for body) | No runtime font CDN. |
| Repo | GitHub, branch `main`, PR-based, Vercel-free CI via GitHub Actions (free for public; 2,000 min/mo private) | Free. |
| Tests | Playwright (a11y via `@axe-core/playwright`), Lighthouse CI | Free. |

## 2. Brand (from supplied files)

### 2.1 Logo
- `JSJ LOGO.svg`: viewBox 242.14 × 177.48. Gradients. No text nodes (wordmark is outlined).
- Logo palette (extracted from SVG stops):
  - Purple `#604b9f`, `#7761aa`, `#8751a0`, `#a353a0`
  - Green `#6ebe44`, `#73c276`, `#689774`
  - Yellow `#fdc70c`
  - Orange `#f3903f`
  - Brown `#3c2415`
- **Conflict:** brief says navy / charcoal / cyan. Logo says purple / green / yellow. Must pick one. Recommendation below.

### 2.2 Recommended color system (proposal)
Keep logo as anchor. Use navy base for enterprise trust (brief). Accent from logo.

| Token | Hex | Use |
|---|---|---|
| `--ink-900` | `#0B0D1F` | page bg dark (deep navy with purple cast) |
| `--ink-800` | `#14172E` | cards dark |
| `--ink-100` | `#E9EAF3` | text on dark |
| `--paper` | `#FFFFFF` | page bg light |
| `--grey-500` | `#6B7088` | secondary text |
| `--brand-violet` | `#604B9F` | primary (logo) |
| `--brand-violet-hi` | `#8B78D6` | primary on dark (contrast ≥ 4.5:1 vs `--ink-900`; verify) |
| `--brand-green` | `#6EBE44` | secondary / "live" / success |
| `--brand-amber` | `#FDC70C` | highlight, sparingly (≤ 5% of pixels) |
| `--brand-orange` | `#F3903F` | warm CTA hover only |

Rules: violet = identity. Green = data / positive. Amber = attention. No neon. Verify all text pairs with WCAG checker before lock.

Do not invent a cyan accent unless you want one. Brief's "cyan data paths" can use `--brand-green` or a tint of violet.

### 2.3 Typography
- Display: Space Grotesk or Inter Tight (geometric sans, brief).
- Body: Inter. 16/1.6 min. Max line 68ch.
- Scale: 12 / 14 / 16 / 20 / 28 / 40 / 56 / 80 (desktop hero 80–96).

### 2.4 Logo placement
- Header: logo left, nav centre-right, "Discuss a Project" CTA right. Height 40px desktop, 32px mobile.
- Partnership lock-up: JSJ logo × SGN wordmark, equal height, separator "×". Show badge "SGN Software — SAP Gold Partner". Never distort. Use SVG only.
- Footer: logo mono (white) on dark.
- Clear space = height of "J" on all sides.

## 3. Site architecture

### 3.1 Routes (App Router)
```
/                       home (15 sections, see §4)
/about
/partnership            JSJ × SGN "who brings what"
/services               7-card index
/services/it-consulting
/services/sap           (SAP with SGN)
/services/ai
/services/drones
/services/software
/services/hvac-govt
/services/rnd
/industries             14 sector cards
/roadmap                JSJ INFOTECH 2030 (labelled future direction)
/insights               MDX index
/insights/[slug]
/careers
/contact                form + office + phones
/privacy
/terms
/sitemap.xml  /robots.txt  /llms.txt
```

### 3.2 Folder layout
```
app/                    routes, layout.tsx, metadata
components/ui/          shadcn (generated)
components/brand/       Logo, PartnershipLockup, Badge
components/motion/      Reveal, Carousel, SmoothScroll, Storyboard
components/sections/    one file per home section
content/                MDX + typed JSON (metrics, verticals, industries)
lib/                    seo, schema, form actions, constants
public/brand/           logo svg, sgn svg (only with permission)
tests/                  playwright, axe
```

Content as typed data (`content/verticals.ts`, `content/metrics.ts`) so copy edits never touch JSX.

## 4. Home page — 15 sections (from brief)
1. Partnership announcement strip
2. Hero carousel (4 slides, §6)
3. Capability ribbon (7 verticals + SGN metrics, SGN-attributed)
4. About JSJ
5. JSJ × SGN spotlight ("who brings what")
6. Seven vertical cards (clickable)
7. SAP practice + SGN credential panel
8. AI & connected intelligence
9. Industries (14)
10. Engage → Design → Deliver → Run & Evolve (scroll-pinned, GSAP)
11. JSJ INFOTECH 2030 roadmap (labelled "strategic ambition")
12. Client proof (empty state until approved)
13. Insights
14. Closing CTA: "Let's Build What's Next."
15. Footer

## 5. Motion system (2027 level, restrained)

Principle: motion explains structure. No motion without a job. Brief rules apply: no flashing, no fast zoom, reduced-motion fallback.

| Layer | Tech | Where |
|---|---|---|
| Page transitions | Motion `layout` + view transitions API (progressive) | Route change |
| Scroll reveal | Motion `whileInView`, 12px rise, 600ms, `ease-out` | Cards, headings |
| Smooth scroll | Lenis | Global. Disabled under reduced-motion |
| Pinned storyboard | GSAP ScrollTrigger | Engage→Run section, roadmap |
| Hero carousel | Motion, fade + 2% scale, 7s autoplay, pause on hover/focus | Hero |
| Data paths | SVG `stroke-dashoffset` animated, pure CSS | Hero slide 1, AI section |
| 3D digital twin | R3F on one hero (slide 3 "drone → twin") | Desktop ≥1024px only; WebM/poster fallback |
| Cursor / magnetic | none in v1 | avoid gimmick |

Perf budget: LCP < 2.0s on 4G, total JS on home < 180 KB gz, CLS < 0.05. Lazy-load R3F. Preload hero font only.

Reduced motion: `@media (prefers-reduced-motion: reduce)` disables Lenis, autoplay, parallax. Static poster image per slide.

## 6. Hero carousel (4 slides) — from master prompt

1. "Intelligent Technology. Connected Enterprise." — dark city/infra, cyan→green data paths. Buttons: Explore Our Capabilities / Talk to Our Team.
2. "Enterprise SAP Delivery. Powered by a Joint Partnership." — SAP data-flow animation, JSJ × SGN lock-up, badge "SGN Software — SAP Gold Partner". Buttons: Explore SAP Solutions / Meet the Partnership.
3. "From Enterprise Intelligence to Smart Infrastructure." — drone scan → digital twin → dashboard. Buttons: Discover AI & Innovation / Discuss a Project.
4. "One Technology Partner. Seven Integrated Verticals." — 7 nodes converge to one ecosystem graphic. Buttons: View All Services / Request a Consultation.

Autoplay 6–8s. Pause on hover + focus. Arrows + dots. Arrow keys. Static fallback image per slide.

**Imagery gap:** brief asks for real enterprise / drone / industrial photos. None supplied. Need photo set or licensed stock. Until then use generated abstract art only, not stock "handshake" photos.

## 7. Content rules (non-negotiable, from brief §10)
- SGN Software = SAP Gold Partner. JSJ is **not** described as SAP Gold Partner.
- SGN metrics (15+ yrs, 250+ experts, 100+ engagements, 75+ go-lives, 25+ Ariba, 16+ industries) attributed to SGN in visible text.
- SGN client logos: only with permission and SGN attribution. Do not imply JSJ clients. Hold the logo wall until permission is confirmed.
- "Joint venture partner" = approved public wording. No separate legal entity claim.
- Partner ID `0001635021`: show only after verification.
- Roadmap (2030, R&D) labelled as ambition. Never presented as live.
- Do not invent JSJ revenue, headcount, years, certifications, offices, testimonials.

### 7.1 Source conflicts to resolve before publishing
- **Dubai phone:** `+97 1585 266 730` is malformed (UAE country code is +971; digits after it unclear). Get correct number from owner. Do not guess.
- **India phone:** `+91 8943032965` vs `+91 89430 32965`. Same number, formatting only. Pick one.
- **Tagline variants:** "Autonomous by Design — IT · SAP · AI · Robotics · Smart Infrastructure" appears only in the Corporate Profile. Decide if it goes on the site.
- **Vertical name:** "HVAC Government Projects" vs "HVAC Govt Projects". Pick one.
- **Brand colors:** logo purple/green vs brief navy/cyan. See §2.2.

## 8. Skills and prompts (Claude-only workflow)

### 8.1 Skills to install (free, GitHub)
| Skill | Source | Use |
|---|---|---|
| `frontend-design` | anthropics/skills (Apache-2.0) | Design pass before UI code |
| `web-artifacts-builder` | anthropics/skills | React + Tailwind + shadcn scaffolds |
| `shadcn` | shadcn/ui (`npx skills add shadcn/ui`) | Component install from components.json |
| `shadcnblocks` (community) | github.com/masonjames/shadcnblocks-skill | Section blocks. Verify license before use |
| `react-bits` (community) | github.com/hwj23016021425/reactbits-claude-skill | Animated components reference. Check Commons Clause |
| `gsap-skills` | greensock/gsap-skills | GSAP plugin usage |
| `seo-*` (installed) | local | Metadata, schema, sitemap |
| `web-motion-auditor` (installed) | local | Motion review |
| `a11y-debugging` (installed) | local | Accessibility audit |
| `chrome-devtools` (installed) | local | Perf + visual checks |
| `taste-skill` (installed) | local | Anti-generic frontend guard |
| `modern-web-guidance` (installed) | local | Current web API checks |

### 8.2 Project CLAUDE.md (to create in repo)
Must contain: brand tokens (§2.2), content rules (§7), motion rules (§5), forbidden list (cartoon robots, handshake stock, neon, "AI-made" look), verification commands (`pnpm lint`, `pnpm typecheck`, `pnpm test:e2e`, `pnpm build`), commit rule (no AI attribution, per your global CLAUDE.md).

### 8.3 Prompt sequence (run in order, one per PR)
1. **Scaffold:** "Create Next.js (latest stable, verify version) App Router + TS + Tailwind v4 + shadcn project. Static export. Read CLAUDE.md. No pages yet. Run build."
2. **Design system:** "Implement tokens (§2.2), type scale (§2.3), Logo + PartnershipLockup from `public/brand/*.svg`. Storybook-free: one `/_design` route, dev only. Run axe."
3. **Content layer:** "Create `content/*.ts` from master prompt §6 and corporate profile §4–§7. Attribute SGN figures. Flag every unverified value with `// VERIFY:`."
4. **Motion layer:** "Build Lenis provider, Reveal, Carousel (§6 rules), storyboard pin. Respect reduced-motion. Add Playwright test for pause-on-focus."
5. **Home page:** "Build 15 sections (§4) in order. Mobile first. Each section its own file."
6. **Interior pages:** one PR per route group. Use same section components.
7. **Forms:** Zod schema, server action, Turnstile, Resend, confirmation state, honeypot. Test invalid + spam + success.
8. **SEO:** metadata per route, JSON-LD (Organization, Service, BreadcrumbList), sitemap, robots, llms.txt.
9. **QA gate:** "Run Playwright + axe + Lighthouse CI. Fix failures. Report numbers verbatim."

Each prompt ends with: "Show command output. Do not claim done without green build."

### 8.4 Working method
- One branch per step. PR per step. Auto-merge off.
- Claude writes code, you review in preview URL (Cloudflare Pages preview per PR).
- Keep context small: `/clear` between steps. CLAUDE.md carries rules.

## 9. Hosting and free-tier check
| Need | Cloudflare Pages (chosen) | Netlify free | GitHub Pages | Vercel Hobby |
|---|---|---|---|---|
| Commercial company site | Allowed (per 3rd-party sources — confirm Cloudflare terms) | Allowed | **Restricted** (GitHub terms: no business site) | **Not allowed** |
| Next.js static export | Yes | Yes | Yes | Yes |
| Contact form backend | Pages Functions (Workers free: 100k req/day) or external (Resend) | Netlify Functions (credit-metered) | No | — |
| Bandwidth | Unlimited static (per sources) | Credit-metered | 1 GB site cap | 100 GB, non-commercial |

Action: read Cloudflare Pages terms and Netlify plan page before commit. Sources were third-party blogs.

## 10. Research notes and gaps
- Searched web for: Vercel Hobby commercial rule, Cloudflare/Netlify/GitHub Pages terms, GSAP license, Motion license, Lenis, React Bits, shadcn skills, Claude frontend skills, 2026 web-design trends.
- **Not covered:** Reddit and X/Twitter threads. Search tool did not return them. Need a second pass with direct subreddit or X search if you want community signal.
- Third-party sources used for limits and pricing. Verify each before paying or committing.
- Trend claims in searches were vendor marketing. Used only where they match brief (restraint, scroll storytelling, WebGL selective).

## 11. Open decisions for you
1. Brand palette: keep logo violet/green (recommended) or switch to navy/cyan per brief?
2. Hosting: Cloudflare Pages (recommended, free + commercial) or pay Vercel Pro?
3. Real photos/video: supply drone, HVAC, SAP, office assets. Otherwise v1 uses generated art.
4. Dubai phone number correct value.
5. Client logos: permission status.
6. Confirm Partner ID and competencies still current (SAP account check).
7. Legal: privacy and terms text. Brief says "to follow".
8. Domain: `www.jsjinfotech.co.in` — DNS host?

## 12. Build order and rough timeline (solo + Claude)
| Phase | Output | Est. |
|---|---|---|
| 0 | Decisions §11 answered | 1 day |
| 1 | Scaffold + CI + Cloudflare preview | 1 day |
| 2 | Design system + logo + tokens | 2 days |
| 3 | Motion layer + hero carousel | 3 days |
| 4 | Home (15 sections) | 4 days |
| 5 | 13 interior routes | 5 days |
| 6 | Forms + SEO + legal | 2 days |
| 7 | QA: a11y, perf, cross-device | 2 days |
| 8 | Content sign-off, DNS, launch | 1 day |

Total ≈ 3 weeks focused work, depends on asset and content delivery.
