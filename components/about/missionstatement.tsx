import React from 'react'
import { Check } from 'lucide-react'
export function MissionStatement() {
  return (
    <section className="bg-[#FFFBF8] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-3xl font-bold text-[#9F76A4] mb-12 leading-tight">
          We are solving the communication problem{' '}
          <br className="hidden md:block" />
          <span className="text-[#9F76A4]">AI has ignored.</span>
        </h2>

        <div className="text-left p-8 md:p-12 rounded-2xl mb-12">
          <p className="text-2xl md:text-xl mb-8 text-[#6D4C71] font-medium">
            AI has helped humans write faster, search faster, work faster — but
            not communicate better. Human relationships break because of
            miscommunication, not lack of information.
          </p>

          <p className="text-[#6D4C71] text-2xl md:text-xl mb-6">Nova builds AI systems that:</p>

          <ul className="space-y-4 mb-8">
            {[
              'understand tone and intention',
              'detect risky conversation patterns',
              'guide expression without removing agency',
              'prevent emotional accidents',
              'make conversations safer and clearer',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="shrink-0 w-1 h-1 rounded-full bg-purple-200 flex items-center justify-center mt-3 mr-3">
                </div>
                <ul className="text-[#6D4C71] text-2xl md:text-xl">{item}</ul>
              </li>
            ))}
          </ul>

          <p className="text-[#6D4C71] text-2xl md:text-xl italic pl-4">
            We are building the foundation models for healthy human
            communication, not for productivity
            <br className="hidden md:block" />
            — but for connection.
          </p>
        </div>

        <button className="bg-[#59375D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b1676] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
          Explore our research
        </button>
      </div>
    </section>
  )
}
