const principles = [
  {
    icon: '/icons/clarity.svg',
    title: 'Clarity',
    description:
      'Communication should reduce confusion, not create it. We help users simplify complexity.',
  },
  {
    icon: '/icons/respect.svg',
    title: 'Respect',
    description:
      'Every conversation involves real humans. We design for mutual respect and dignity.',
  },
  {
    icon: '/icons/kindness.svg',
    title: 'Kindness',
    description:
      'Small shifts in tone prevent big misunderstandings. Technology should foster empathy.',
  },
  {
    icon: '/icons/safety.svg',
    title: 'Safety',
    description:
      'Conversations should never cause emotional harm. We build guardrails for safety.',
  },
  {
    icon: '/icons/autonomy.svg',
    title: 'Autonomy',
    description:
      'People should control their words. Nova suggests, never forces.',
  },
  {
    icon: '/icons/transparency.svg',
    title: 'Transparency',
    description:
      'Users always know when our tool is helping. No hidden magic.',
  },
  {
    icon: '/icons/responsibility.svg',
    title: 'Responsibility',
    description:
      'We take responsibility for how our technology influences human behavior.',
  },
  {
    icon: '/icons/inclusivity.svg',
    title: 'Inclusivity',
    description:
      'Good communication works for everyone. We build for diverse voices and contexts.',
  },
]


import Image from 'next/image'

export default function PrinciplesGrid() {
  return (
    <section className="bg-[#1F2937] py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 border-gray-700 pb-4 inline-block">
          Our Principles
        </h2>

        <div className="grid grid-cols-1 border-t border-[#808080] pt-12 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-colors"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={principle.icon}
                  alt={principle.title}
                  width={32}
                  height={32}
                  className="opacity-80"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {principle.title}
              </h3>

              <ul className="text-sm text-gray-400 leading-relaxed space-y-2 list-disc list-inside">
                {principle.description
                  .split('.')
                  .map(sentence => sentence.trim())
                  .filter(Boolean)
                  .map((sentence, index) => (
                    <li key={`${principle.title}-${index}`}>{sentence}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
