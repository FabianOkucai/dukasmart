# Dukasmart Landing Page

Marketing site for Dukasmart, a Kenyan company that builds custom business systems — payments, invoicing, bookkeeping, tax compliance, inventory, and support.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Sharp (image optimization)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.js             # Homepage
│   ├── layout.js           # Root layout, metadata, fonts
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── data-deletion/      # Data deletion request
│   ├── support/            # Support page
│   ├── download/           # Download page
│   └── coming-soon/        # Placeholder page
├── components/
│   ├── Hero/               # Hero section with nav
│   ├── Problems/           # Auto-advancing challenges carousel
│   ├── WhyUs/              # Value props strip (custom, support, mobile)
│   ├── Features/           # Services bento grid
│   ├── About/              # Stats with count-up animation
│   ├── Testimonials/       # Client testimonials carousel (dark bg)
│   ├── FAQ/                # Accordion FAQ
│   ├── Footer/             # Footer with contact links
│   ├── Services/           # Extended services page (unused on homepage)
│   └── UI/                 # Shared components (ScrollAnimationWrapper, Section)
├── assests/                # Images, icons, logos
└── index.css               # Global styles, animations, scroll effects
```

## Design

- **Font:** Inter (400-800)
- **Colors:** Purple-950 (#2e1065) primary, Orange-500 (#f97316) accent, Cream (#faf8f5) background
- **Dark sections:** Hero, stats, testimonials use a deep purple gradient with grain texture overlay
- **Light sections:** Problems, why us, services, FAQ use cream/white backgrounds
- **Animations:** Scroll-triggered fade/slide via IntersectionObserver, count-up numbers on stats, auto-advancing carousel on challenges section
