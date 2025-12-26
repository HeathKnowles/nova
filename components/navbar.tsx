'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 tracking-tight"
          >
            nova
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/security">Security</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/roadmap">Roadmap</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <Image
              src={isMenuOpen ? '/icons/close.svg' : '/icons/menu.svg'}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileLink href="/">Home</MobileLink>
            <MobileLink href="/security">Security</MobileLink>
            <MobileLink href="/pricing">Pricing</MobileLink>
            <MobileLink href="/roadmap">Roadmap</MobileLink>

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-2 px-3">
              <Link
                href="/login"
                className="block text-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="w-full text-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ---------- Helpers ---------- */

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
    >
      {children}
    </Link>
  )
}
