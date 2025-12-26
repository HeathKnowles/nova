"use client";

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
export function Foundations() {
  const ITEMS_PER_VIEW = 3;
  const TOTAL_ITEMS = 5;
  
  const [idx, setidx] = useState(0);

  const slideLeft = () => {
    setidx((prev) => Math.max(prev - 1, 0))
  }
  
  const slideRight = () => {
    setidx((prev) =>
      Math.min(prev + 1, TOTAL_ITEMS - ITEMS_PER_VIEW)
    )
  }

  return (
    <section className="bg-[#353535] py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Card with Pink Border */}
        <div className="md:p-12 relative">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Our Foundations
            </h2>
            <p className="text-gray-400 text-sm tracking-wider">
              A history of communication science: linguistics, and human
              interaction
            </p>
          </div>
          <div className="grid grid-cols-1 border-t border-[#808080] pt-8 lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
                <div className="text-center p-6">
                    <Image 
                      src="/images/comms.jpg"
                      alt="Two People communicating happily"
                      width={400}
                      height={400}
                    />
                </div>

            {/* Content */}
            <div className="text-gray-300 space-y-6">
              <h3 className="text-2xl font-bold text-white leading-tight">
                Language shapes relationships.
                <br />
                Clarity shapes connection.
              </h3>

              <p className="text-sm leading-relaxed">
                Researchers across communication theory, pragmatics,
                linguistics, and behavioral psychology have shown one truth:
                most conflict comes from miscommunication — not intention.
              </p>

              <div className="space-y-2 text-sm text-gray-400">
                <p>The roots of Nova draw from:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Speech Act Theory</li>
                  <li>Interpersonal Communication Research</li>
                  <li>Conflict De-escalation</li>
                  <li>Sociolinguistics Analysis</li>
                  <li>Digital Communication Behavior</li>
                </ul>
              </div>

              <p className="font-medium text-white pt-4">
                Better conversations create better lives.
              </p>
            </div>
          </div>

          {/* Bottom Scroller */}
                  <div className="mt-16 pt-12 border-t border-[#808080] flex items-center gap-6">

          {/* Left Arrow */}
          <button
            onClick={slideLeft}
            disabled={idx === 0}
            className="shrink-0 p-2 rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors disabled:opacity-40"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden flex-1">
            <div
              className="flex transition-transform duration-500 ease-out uppercase text-gray-500 tracking-widest text-center text-[14px] md:text-[10px]"
              style={{
                transform: `translateX(-${(idx * 100) / ITEMS_PER_VIEW}%)`,
              }}
            >
              {[
                "Grice's Cooperative Principle (Clarity & intent)",
                "Deborah Tannen (conversational style)",
                "Gottman (relationship communication patterns)",
                "Linguistic pragmatics (tone, implication, context)",
                "Modern digital communication behavior studies",
              ].map((text, i) => (
                <div
                  key={i}
                  className="w-1/3 px-4 shrink-0"
                >
                  {text.split(" ").map((word, idx) => (
                    <span key={idx}>
                      {word}
                      {idx % 3 === 2 && <br />}
                      {" "}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={slideRight}
            disabled={idx >= TOTAL_ITEMS - ITEMS_PER_VIEW}
            className="shrink-0 p-2 rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors disabled:opacity-40"
          >
            <ArrowRight size={20} />
          </button>

        </div>
        </div>
      </div>
    </section>
  )
}
