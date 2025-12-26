import Link from 'next/link'

export default function ValueProposition() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-[#6D4C71] mb-6">
          Nova&apos;s Core Value
        </h2>

        <div className="text-2xl sm:text-xl font-light text-[#6D4C71] mb-6 leading-tight">
            Nova is the world&apos;s first communication guidance system.
        </div>

        <p className="text-small text-[#704B74] mb-8 max-w-2xl mx-auto leading-relaxed">
            It helps humans express themselves clearly, understand each other better, and create emotionally safe conversations.
            <br className="hidden md:block" />
            Nova doesn&apos;t fix your relationships. Nova fixes how you communicate — so your relationships can thrive.
        </p>

        <Link
          href="/model"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#6D4C71] text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-colors"
        >
          Learn How Nova Works
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
