import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="bg-[#FFFBF8] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex mb-16 text-center justify-between items-center lg:text-left">
          <h1 className="text-[64px] md:text-[50px] lg:text-6xl font-bold text-[#6D4C71] mb-6">
            About Nova
          </h1>
          <p className="text-lg md:text-md text-center text-[#6D4C71] max-w-2xl mx-auto lg:mx-0">
            Nova is a communication intelligence company. 
            <br className="hidden md:block" />
            Our mission is to help people talk to each other in a clearer, kinder, safer way.
            <br className="hidden md:block" />
            We design AI that improves human connection — not by replacing it, but
            <br className="hidden md:block" />
            by guiding it toward clarity and understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustration / Video */}
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300 flex items-center justify-center group cursor-pointer">
                <Image 
                  src="/images/aboutvideo.png"
                  alt="Communication"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full w-[20%] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] rounded-full" />
                  </div>
              </div>
          </div>

          {/* Vision */}
          <div className="lg:pl-12">
            <h2 className="text-2xl font-bold text-[#6D4C71] mb-6">
              Our vision
            </h2>
            <div className="space-y-6 text-[#6D4C71] leading-relaxed">
              <p>
                We envision a world where misunderstandings no longer break
                relationships. Where conversations feel safe because intent is
                understood, and boundaries are respected — not guessed.
              </p>
              <p>
                We are building the systems that help humans communicate in the
                right way: with clarity, with kindness, with confidence. A world
                where people feel understood. That&apos;s the future we&apos;re
                creating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
