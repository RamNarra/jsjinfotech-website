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

### Go-live checklist (production)

1. **Vercel project** `jsjinfotech` (team `thecampushelper`): Root Directory `web`, connected to this repo; pushes to `main` deploy to production.
2. **Domain cutover** (needs DNS access at the domain's DNS host): point `www.jsjinfotech.co.in` (CNAME `cname.vercel-dns.com`) and `jsjinfotech.co.in` (A `76.76.21.21`) at Vercel, attach both to the `jsjinfotech` project (they are currently attached to a different project), make `www` primary and redirect the apex to it. Then set `NEXT_PUBLIC_SITE_URL=https://www.jsjinfotech.co.in` and redeploy so canonicals, sitemap and robots follow.
3. **Turnstile**: create a widget allowing exactly `jsjinfotech.vercel.app`, `www.jsjinfotech.co.in`, `jsjinfotech.co.in` (no localhost). Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `CLOUDFLARE_TURNSTILE_SECRET_KEY`. The server checks `success`, `hostname` and `action=contact` on every submission. Override the hostname list with `TURNSTILE_ALLOWED_HOSTNAMES` if needed.
4. **Resend**: verify the sending domain in Resend (DKIM TXT, SPF/return-path records and ideally DMARC at the DNS host), then set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (an address on that verified domain; consumer mailboxes are rejected) and `CONTACT_NOTIFICATION_EMAIL` (comma-separated).
5. Redeploy (the Turnstile site key is baked in at build time).

Until steps 3 and 4 are done the form is disabled and shows the phone and email instead. Rate limiting is per server instance (3 per client per 10 minutes, 40 per hour overall); add a Vercel WAF rate-limit rule for a hard global cap.

### Hosting on Hostinger (Node.js Web App)

The app needs a Node.js runtime (Server Action + Turnstile + Resend), so it cannot run as PHP/static files in `public_html`. In hPanel create a **Node.js Web App** (Business plan or higher) and import this private GitHub repo, `main` branch:

- Root/app directory: `web`
- Node.js: 22.x (any >= 20.9)
- Install: `npm ci` · Build: `npm run build` · Start: `npm run start` (Next reads the `PORT` Hostinger supplies)
- Environment variables (hPanel, never in Git): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `CLOUDFLARE_TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`, `CONTACT_NOTIFICATION_EMAIL`, `CONTACT_FROM_EMAIL`
- Attach `jsjinfotech.co.in` / `www` to the app. Do **not** edit or remove the existing MX/SPF/DMARC records: company email depends on them.

Keep the Vercel deployment as a rollback until the Hostinger site is verified.

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
