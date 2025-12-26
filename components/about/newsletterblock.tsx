import React from 'react'
export function NewsletterBlock() {
  return (
    <section className="bg-[#2D2D2D] py-20 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Newsletter Block</h2>
        <p className="text-gray-400 mb-8 text-sm">
          Sign up to receive updates on Nova's research, product releases, and
          insights on the future of human communication.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Please provide your Email ID here"
            className="flex-1 px-4 py-3 rounded bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#6D4C7D] text-white font-medium rounded hover:bg-[#5a3e68] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
