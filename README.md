# JSJ INFOTECH — Corporate Web Application
**Autonomous by Design**  
*Next-Generation IT · Artificial Intelligence · Robotics · Smart Infrastructure*

Production-grade Next.js 16 App Router application for JSJ INFOTECH, delivering unified convergence across Physical Infrastructure, Enterprise Systems, and Cognitive Intelligence.

---

## 1. Project Architecture

```text
jsj-infotech/
├── web/                 # Next.js 16.3.7 App Router frontend
│   ├── src/
│   │   ├── app/         # App Router pages & server actions
│   │   │   ├── solutions/[slug]/    # Dynamic SSG for 9 solutions
│   │   │   ├── industries/[slug]/   # Dynamic SSG for Government & Enterprise
│   │   │   ├── technology/          # 5-tier architecture & Autonomous Core
│   │   │   ├── vision-2030/         # Official Vision 2030 & 4-phase roadmap
│   │   │   ├── company/             # Corporate profile & founding purpose
│   │   │   ├── insights/            # Engineering papers & LinkedIn feed
│   │   │   ├── contact/             # Contact page & secure enquiry form
│   │   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   │   └── robots.ts            # Robots.txt directives
│   │   ├── components/  # Modular UI & SVG Autonomous Core
│   │   ├── lib/content/ # Content adapter (local typed content <-> Sanity ready)
│   │   └── styles/      # tokens.css (Centralized design tokens) & globals.css
│   └── package.json
├── sanity/              # Decoupled Sanity Studio & Schemas
│   ├── schemas/         # Solution, industry, siteSettings, roadmap, insight
│   └── sanity.config.ts # Studio configuration

```

---

**Single content contract:** `web/src/shared/` is the only source of truth (types + content). Vercel deploys `web/` alone, so it must live there. The Sanity schemas in `sanity/schemas/` mirror those types field-for-field, and `web/src/__tests__/schema-parity.test.ts` fails if they drift. There is no second copy.

## 2. Key Capabilities & Design Invariants

- **The Autonomous Core**: A light, precise SVG diagram of three concentric layers converging on the JSJ mark. Strokes draw once, hover or keyboard focus on a layer chip traces the path to the core, and the diagram is labelled by an HTML legend. Honors `prefers-reduced-motion`.
- **Design system**: White-first, `#0070F2` reserved for action and diagram emphasis. All tokens live in `web/src/styles/tokens.css` (Tailwind v4 `@theme`); Geist Sans/Mono via `next/font`. Small blue text uses `--color-brand-text` for WCAG AA contrast.
- **Content integrity**: All copy in `web/src/shared/` traces to `JSJ.docx` and the corporate profile PDF, keeping their "can / seek / intend" certainty. No invented clients, partners, statistics or articles. Partner logos appear only once verified assets exist.
- **3-Layer Convergence Model**: Translates physical IoT telemetry (HVAC/drones) into enterprise business logic (SAP S/4HANA) and cognitive neural prediction (AI).
- **2030 Roadmap**: 4 phases (Foundation → Integration → Intelligence → Autonomy) built from the per-vertical table in the corporate profile.
- **Contact form**: Turnstile (server-verified, hostname + action checked), Zod, honeypot, per-client rate limit, escaped Resend email. In production it refuses to submit unless all five settings are present, and never reports success without delivery.
- **Production Security**: Strict HSTS (`max-age=63072000`), X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options (`nosniff`), Referrer-Policy, and Permissions-Policy.

---

## 3. Environment Configuration

Copy `.env.example` to `.env.local` inside `web/`:

```bash
# Cloudflare Turnstile. Unset in development = Cloudflare's always-pass test keys. REQUIRED in production.
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
CLOUDFLARE_TURNSTILE_SECRET_KEY=

# Resend. Unset in development = submissions are validated and logged, NOT emailed.
# REQUIRED in production: without it the form reports failure instead of pretending to send.
RESEND_API_KEY=
CONTACT_NOTIFICATION_EMAIL=support@jsjinfotech.co.in
CONTACT_FROM_EMAIL=JSJ Website <inquiries@jsjinfotech.co.in>
```

---

## 4. Local Development & Production Build

```bash
# In web/ directory
cd web

# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Run full TypeScript and SSG production build
npm run build

# Start production server
npm run start
```
