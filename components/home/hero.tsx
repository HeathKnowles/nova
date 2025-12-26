import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="w-full bg-linear-to-b from-[#F9EDE7] to-[#FEFBF8] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-[48px] sm:text-[36] font-light text-[#6D4C71] mb-6 leading-tight">
          Communication.
          <br className="hidden md:block" />
          Finally done right.
        </h1>

        {/* Subheadline */}
        <p className="text-[16px] text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nova helps people talk to each other in a kinder, clearer, safer way.
          <br className="hidden md:block" />
          Most misunderstandings aren't intentional.
          <br className="hidden md:block" />
          Nova guides conversations so people understand — and feel understood.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            className="px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            EXPLORE NOVA
          </Link>

          <Link
            href="/signup"
            className="px-8 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            TRY NOVA FREE
          </Link>

          <Link
            href="/business"
            className="px-8 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            FOR BUSINESS
          </Link>

          <Link
            href="/download"
            className="px-8 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            DOWNLOAD ON IOS
          </Link>
        </div>

        {/* Demo / Placeholder UI */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            <span className="text-sm text-gray-500">Hi</span>
          </div>

          <div className="flex justify-end">
            <div className="bg-green-500 w-8 h-8 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
