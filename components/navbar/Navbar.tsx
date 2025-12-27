'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useNavbar } from './context'

const NAV_LINKS = [
  { href: '/product', label: 'Products', hasDrop: true },
  { href: '/dev', label: 'Developers', hasDrop: true },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { buttons } = useNavbar()

  const safeButtons = buttons.slice(0, 2)

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#F9EDE7] backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              nova
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-purple-600 transition"
                >
                  <span>{l.label}</span>
                  {l.hasDrop && (
                    <ChevronDown 
                    className="h-4 w-4 text-gray-500" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {safeButtons.map((b) => (
                <NavbarButton key={b.href} {...b} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-md hover:bg-gray-200"
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
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9EDE7] md:hidden">
          <nav className="px-6 pt-24 space-y-6">

            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-lg font-medium text-gray-800"
              >
                {l.label}
                {l.hasDrop && (
                  <ChevronRight 
                    className="ml-1 text-gray-500" />
                )}
              </Link>
            ))}

            <div className="pt-6 space-y-3">
              {safeButtons.map((b) => (
                <NavbarButton key={b.href} {...b} />
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

/* ---------------------------------- */
/* Button Component                   */
/* ---------------------------------- */

function NavbarButton({
  href,
  label,
  variant,
}: {
  href: string
  label: string
  variant: 'dark' | 'glass' | 'link'
}) {
  if (variant === 'link') {
    return (
      <Link
        href={href}
        className="text-sm text-gray-600 hover:text-gray-900 transition"
      >
        {label}
      </Link>
    )
  }

  const base =
    'inline-flex items-center justify-center text-sm px-4 py-2 rounded-full border transition'

  if (variant === 'glass') {
    return (
      <Link
        href={href}
        className={`${base} bg-white/40 border-gray-300 text-gray-800 hover:bg-white/60`}
      >
        {label}
      </Link>
    )
  }

  // dark
  return (
    <Link
      href={href}
      className={`${base} bg-[#171717] border-[#171717] text-white hover:bg-black`}
    >
      {label}
    </Link>
  )
}
