import '../index.css'

export const metadata = {
  metadataBase: new URL('https://dukasmart.com'),
  title: {
    default: 'Dukasmart - Customized Business Solutions for Payments, Tax & Bookkeeping',
    template: '%s | Dukasmart'
  },
  description: 'Dukasmart provides tailored business solutions for Kenyan businesses — payments, invoicing, bookkeeping, tax compliance, and more. Built around how you operate.',
  keywords: ['business solutions Kenya', 'payment processing', 'invoicing', 'bookkeeping', 'tax compliance', 'KRA iTax', 'M-Pesa payments', 'Dukasmart'],
  authors: [{ name: 'Dukasmart Limited' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dukasmart.com',
    siteName: 'Dukasmart',
    title: 'Dukasmart - Customized Business Solutions for Payments, Tax & Bookkeeping',
    description: 'Tailored business solutions for Kenyan businesses — payments, invoicing, bookkeeping, tax compliance, and dedicated support.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dukasmart Business Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dukasmart - Customized Business Solutions',
    description: 'Tailored business solutions for Kenyan businesses — payments, invoicing, bookkeeping, and tax compliance.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden font-body">{children}</body>
    </html>
  )
}
