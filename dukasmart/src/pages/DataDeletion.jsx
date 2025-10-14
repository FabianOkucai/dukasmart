import React from 'react'
import Footer from '../components/Footer/Footer'

const DataDeletion = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <section className="py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-purple-900 mb-4">Request Data Deletion</h1>
            <p className="text-purple-800/80 mb-6 leading-relaxed">
              You can request deletion of your personal data associated with your Dukasmart account. Once we verify your identity, we will permanently delete your personal data except where we are legally required to retain certain information.
            </p>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-purple-100 p-6 md:p-8">
              <form
                className="space-y-5"
                method="POST"
                action="https://formspree.io/f/mwkgyqga"
              >
                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full rounded-lg border border-purple-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 bg-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-purple-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 bg-white"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Account identifier (optional)</label>
                  <input
                    type="text"
                    name="accountId"
                    className="w-full rounded-lg border border-purple-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 bg-white"
                    placeholder="User ID, phone number, or organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Additional details (optional)</label>
                  <textarea
                    name="details"
                    rows="4"
                    className="w-full rounded-lg border border-purple-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 bg-white"
                    placeholder="Any additional information to help us locate your data"
                  />
                </div>

                <p className="text-xs text-purple-700/70">
                  By submitting this request, you confirm that the information provided is accurate and that you are authorized to make this request for the associated account.
                </p>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 transition-colors"
                >
                  Submit request
                </button>
              </form>
            </div>

            <p className="mt-6 text-sm text-purple-800/80">
              Alternatively, you can contact us at <a className="text-sky-600 hover:underline" href="mailto:info@Dukasmart.com">info@Dukasmart.com</a> to submit your request.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DataDeletion


