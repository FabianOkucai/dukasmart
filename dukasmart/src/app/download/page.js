import Image from 'next/image'
import Link from 'next/link'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo.png'

export const metadata = {
  title: 'Download Dukasmart - Business Management App',
  description: 'Get the most powerful business management app for your mobile device. Download Dukasmart and start growing your business today.',
  openGraph: {
    title: 'Download Dukasmart - Business Management App',
    description: 'Get the most powerful business management app and start growing your business today.',
  }
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="p-6">
        <div className="container-max flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={AppIcon}
              alt="Dukasmart logo"
              className="w-32 md:w-40 lg:w-42 object-contain"
            />
          </Link>
        </div>
      </div>

      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6">
              Download Dukasmart
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Get the most powerful business management app and start growing your business today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center py-20">
              <h2 className="text-2xl text-gray-600 mb-4">Download options will be available soon</h2>
              <p className="text-gray-500">Stay tuned for updates!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
