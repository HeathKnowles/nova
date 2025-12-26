'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: '/icons/usecase1.svg',
    text: 'Communicate with honesty, clarity, and kindness — even when emotions are high.',
    bg: 'bg-[#AB9EFC99]/60',
  },
  {
    icon: '/icons/usecase2.svg',
    text: 'Express your intentions clearly. Avoid misunderstandings. Create a safer experience for both people.',
    bg: 'bg-[#FAE4E4]',
  },
  {
    icon: '/icons/usecase3.svg',
    text: 'Handle sensitive conversations with empathy and calmness.',
    bg: 'bg-[#F5F2F5]/60',
  },
  {
    icon: '/icons/usecase3.svg',
    text: 'Handle all work related communications with ease of mind.',
    bg: 'bg-[#F5F2F5]/40',
  },
]

const useCases = [
  { id: 0, label: 'For Modern Dating' },
  { id: 1, label: 'For Personal Conversations' },
  { id: 2, label: 'For Friendships and Family' },
  { id: 3, label: 'For Work and Communications' },
]

export default function UseCases() {
  const [active, setActive] = useState(1)

  const next = () => {
    setActive((a) => (a + 1) % cards.length)
  }

  return (
    <section className="w-full bg-linear-to-b from-[#FFF9F9] to-[#FFF5EE] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
          Nova&apos;s Real Life Usecases
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Tabs */}
          <div className="space-y-4">
            {useCases.map((u) => (
              <button
                key={u.id}
                onClick={() => setActive(u.id)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                  active === u.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>

          {/* RIGHT: PINK CONTAINER */}
          <div className="bg-[#DFD2E0] rounded-2xl p-10 relative overflow-hidden h-105 flex items-center justify-center">

            {/* CIRCULAR + OVERLAPPING STACK */}
            <div className="relative w-full h-90 flex items-center justify-center">

              {cards.map((card, i) => {
                const total = cards.length
                const diff = (i - active + total) % total

                let style = ''
                if (diff === 0) {
                  style =
                    'z-30 scale-100 translate-x-0 rotate-0 opacity-100'
                } else if (diff === 1) {
                  style =
                    'z-20 scale-95 translate-x-20 rotate-6 opacity-90'
                } else if (diff === total - 1) {
                  style =
                    'z-20 scale-95 -translate-x-20 rotate--6 opacity-90'
                } else {
                  style = 'opacity-0 pointer-events-none'
                }

                return (
                  <div
                    key={i}
                    className={`absolute transition-all duration-500 ease-out ${style}`}
                  >
                    {/* CARD */}
                    <div
                      className={`${card.bg} backdrop-blur rounded-xl p-6 w-60 shadow-xl relative`}
                    >
                      {/* Icon */}
                      <div className="mb-4">
                        <Image
                          src={card.icon}
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>

                      {/* Text */}
                      <p className="text-sm text-gray-700 leading-relaxed mb-6">
                        {card.text}
                      </p>

                      {/* NEXT BUTTON */}
                      <div className="flex justify-end">
                        <button
                          onClick={next}
                          className="p-4 rounded-lg bg-white text-black opacity-80 hover:opacity-35 shadow-md"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
