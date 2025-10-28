import '../index.css'

export const metadata = {
  title: 'Dukasmart',
  description: 'Business management solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
