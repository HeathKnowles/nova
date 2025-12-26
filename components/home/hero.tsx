import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full bg-linear-to-b from-[#F9EDE7] to-[#FEFBF8] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Headline */}
        <h1 className="text-[48px] sm:text-[36px] font-light text-[#6D4C71] mb-6 leading-tight">
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

          {/* Modern Dating */}
          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-sm font-medium uppercase rounded-full hover:bg-gray-800 transition-colors"
          >
            <Image
              src="/icons/dating.svg"
              alt="Modern Dating"
              width={16}
              height={16}
            />
            Modern Dating
          </Link>

          {/* Personal Conversations */}
          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 text-sm font-medium uppercase rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <Image
              src="/icons/personal.svg"
              alt="Personal Conversations"
              width={16}
              height={16}
            />
            Personal Conversations
          </Link>

          {/* Friends & Family */}
          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 text-sm font-medium uppercase rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <Image
              src="/icons/family.svg"
              alt="Friends and Family"
              width={16}
              height={16}
            />
            Friends & Family
          </Link>

          {/* Work & Communication */}
          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 text-sm font-medium uppercase rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <Image
              src="/icons/work.svg"
              alt="Work Communication"
              width={16}
              height={16}
            />
            Work & Communication
          </Link>

        </div>

        {/* Demo */}
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl border border-gray-200 shadow-lg p-8 bg-linear-to-b from-[#F9EDE7] to-[#E5E3E3]">
            <div className="rounded-md bg-white p-10">
              <Image
                src="/images/chatscript.gif"
                alt="ChatScript"
                width={450}
                height={450}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
