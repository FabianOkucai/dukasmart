import '../index.css'

export const metadata = {
  metadataBase: new URL('https://dukasmart.com'),
  title: {
    default: 'Dukasmart - Smart Business Management Solutions',
    template: '%s | Dukasmart'
  },
  description: 'Dukasmart helps businesses in Kenya and beyond manage inventory, track sales, and grow efficiently with powerful business management tools.',
  keywords: ['business management', 'inventory management', 'POS system', 'sales tracking', 'Kenya business software', 'Dukasmart'],
  authors: [{ name: 'Dukasmart Limited' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dukasmart.com',
    siteName: 'Dukasmart',
    title: 'Dukasmart - Smart Business Management Solutions',
    description: 'Manage your business efficiently with Dukasmart. Inventory tracking, sales management, and business analytics in one powerful platform.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dukasmart Business Management',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dukasmart - Smart Business Management Solutions',
    description: 'Manage your business efficiently with Dukasmart',
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
