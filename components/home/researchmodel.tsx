const features = [
  {
    icon: '📊',
    color: 'bg-pink-200',
    title: 'How We Build Nova',
    description: 'Combining psychology, linguistics, and AI research',
  },
  {
    icon: '🔬',
    color: 'bg-blue-200',
    title: 'Rigorous Research Model',
    description: 'Evidence-based communication frameworks',
  },
  {
    icon: '🎯',
    color: 'bg-purple-200',
    title: 'World-Class Working At Scale',
    description: 'Tested across millions of conversations',
  },
  {
    icon: '🧠',
    color: 'bg-purple-300',
    title: 'Conversation Safety Engine',
    description: 'Protecting emotional wellbeing in every interaction',
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
              <div
                className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center shrink-0 text-2xl`}
              >
                {feature.icon}
              </div>

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
