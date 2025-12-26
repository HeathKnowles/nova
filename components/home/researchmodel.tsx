import Image from "next/image"

const features = [
  {
    icon: '/icons/tonemodel.svg',
    title: 'Tone Clarity Model',
    alt: 'tone clarity',
    description: 'Detects emotional tone and suggests healthier phrasing.',
  },
  {
    icon: '/icons/respectmodel.svg',
    title: 'Respect and Boundary Model',
    alt: 'Repect and Boundaries',
    description: 'Identifies risky patterns and guides safer responses',
  },
  {
    icon: '/icons/intentmodel.svg',
    title: 'Intent Understanding Model',
    alt: 'Intent Understanding',
    description: 'Helps communicate what you truly mean, not what gets  typed in the moment',
  },
  {
    icon: '/icons/safetyengine.svg',
    title: 'Conversation Safety Engine',
    alt: 'Conversations',
    description: 'Reduces conflicts, misunderstandings and emotional harm.',
  },
]

export default function ResearchModel() {
  return (
    <section className="w-full bg-linear-to-b from-[#FFF9F9] to-[#FFFAFA] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
          Research Model
        </h2>

        <p className="text-base text-gray-600 mb-12 text-center">
          We&apos;re building the foundation models for emotionally intelligent
          communication.
        </p>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
             <Image
             src={feature.icon}
             alt={feature.alt}
             width={64}
             height={64}
             />

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>

              <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
