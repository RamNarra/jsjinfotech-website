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
│   │   │   ├── contact/             # Contact hub & DPDP 2025 compliant form
│   │   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   │   └── robots.ts            # Robots.txt directives
│   │   ├── components/  # Modular UI & SVG Autonomous Core
│   │   ├── lib/content/ # Content adapter (Local mock <-> Sanity ready)
│   │   ├── shared/      # Shared TypeScript models, contracts, and datasets
│   │   └── styles/      # tokens.css (Centralized design tokens) & globals.css
│   └── package.json
├── sanity/              # Decoupled Sanity Studio & Schemas
│   ├── schemas/         # Solution, industry, siteSettings, roadmap, insight
│   └── sanity.config.ts # Studio configuration
└── shared/              # Framework-agnostic TypeScript contracts
```

---

## 2. Key Capabilities & Design Invariants

- **The Autonomous Core**: High-performance SVG composition with orbital geometry, pulsing luminous core, keyboard-focusable interactive nodes, and `prefers-reduced-motion` compliance.
- **3-Layer Convergence Model**: Translates physical IoT telemetry (HVAC/drones) into enterprise business logic (SAP S/4HANA) and cognitive neural prediction (AI).
- **2030 Roadmap**: Interactive 4-phase progression (Foundation → Integration → Intelligence → Autonomy).
- **DPDP Rules 2025 Compliance**: Transparent statutory consent notice and server-side encrypted handling of corporate inquiries.
- **Production Security**: Strict HSTS (`max-age=63072000`), X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options (`nosniff`), Referrer-Policy, and Permissions-Policy.

---

## 3. Environment Configuration

Copy `.env.example` to `.env.local` inside `web/`:

```bash
# Cloudflare Turnstile (Security Verification)
CLOUDFLARE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
CLOUDFLARE_TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA

# Resend Email Service (Inquiry Dispatch)
# When unset in local development, inquiries are recorded cleanly in the server dev logger.
RESEND_API_KEY=

# Contact Dispatch Recipient
CONTACT_NOTIFICATION_EMAIL=support@jsjinfotech.co.in
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
