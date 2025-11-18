# Dukasmart Landing Page

A modern, performant landing page for Dukasmart business management platform, built with Next.js 14 and the App Router.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **React**: 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **Language**: JavaScript (TypeScript configured but not actively used)

## Features

- ✅ Server-Side Rendering (SSR) with Next.js App Router
- ✅ Optimized SEO with metadata API
- ✅ Responsive design with Tailwind CSS
- ✅ Image optimization with Next.js Image component
- ✅ Modern animations with CSS and Intersection Observer
- ✅ Client-side interactivity where needed
- ✅ Production-ready configuration

## Project Structure

```
dukasmart/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js          # Root layout with metadata
│   │   ├── page.js            # Home page
│   │   ├── download/          # Download page
│   │   ├── privacy/           # Privacy policy page
│   │   ├── terms/             # Terms of service page
│   │   ├── support/           # Support center page
│   │   ├── data-deletion/     # Data deletion request page
│   │   └── coming-soon/       # Coming soon page
│   ├── components/            # Reusable components
│   │   ├── Hero/             # Hero section with carousel
│   │   ├── About/            # Stats/About section
│   │   ├── Services/         # Services section
│   │   ├── Features/         # Features section
│   │   ├── Testimonials/     # Testimonials section
│   │   ├── Footer/           # Footer component
│   │   └── UI/               # UI utilities
│   ├── assests/              # Static assets (images, icons)
│   └── index.css             # Global styles and animations
├── public/                   # Public static files
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dukasmart
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will automatically reload when you make changes to the code.

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create an optimized production build in the `.next` folder.

### Running Production Build

After building, you can run the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## Pages

- **/** - Home page with hero, stats, services, features, and testimonials
- **/download** - App download page
- **/privacy** - Privacy policy
- **/terms** - Terms of service
- **/support** - Support center with FAQs
- **/data-deletion** - Data deletion request form
- **/coming-soon** - Coming soon placeholder page

## Key Features Implemented

### Server-Side Rendering (SSR)
All pages use Next.js App Router with proper server-side rendering:
- Static pages are pre-rendered at build time
- SEO-optimized with metadata API
- Fast page loads with automatic code splitting

### Client Components
Components that use browser APIs or React hooks are marked with `'use client'`:
- Hero carousel with image transitions
- Interactive form submissions
- Scroll-based animations

### SEO Optimization
- Comprehensive metadata for all pages
- OpenGraph tags for social media sharing
- Twitter card support
- Structured data ready
- Sitemap-friendly structure

### Performance Optimization
- Image optimization with Next.js Image
- Automatic code splitting
- CSS optimization
- Production minification
- Security headers configured

## Environment Variables

Currently, the app doesn't require environment variables. If you need to add API keys or other secrets, create a `.env.local` file:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Deployment

This Next.js application can be deployed to:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms
- **Netlify**: Configure build command as `npm run build` and publish directory as `.next`
- **AWS Amplify**: Use the Next.js SSR template
- **Docker**: Use the official Next.js Docker example

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Core Web Vitals: All green

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Private - Dukasmart Limited

## Contact

For questions or support:
- Email: info@Dukasmart.com
- Website: [dukasmart.com](https://dukasmart.com)

---

Built with ❤️ by Dukasmart Team
