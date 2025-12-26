'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useNavbar } from './context'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/security', label: 'Security' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/roadmap', label: 'Roadmap' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { buttons } = useNavbar()

  // enforce max 2
  const safeButtons = buttons.slice(0, 2)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="text-2xl font-bold text-gray-900">
            nova
          </Link>

          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-purple-600 text-sm"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {safeButtons.map((b) => (
              <NavbarButton key={b.href} {...b} />
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2"
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
  )
}

function NavbarButton({
  href,
  label,
  variant,
}: {
  href: string
  label: string
  variant: 'link' | 'primary'
}) {
  if (variant === 'link') {
    return (
      <Link href={href} className="text-sm text-gray-600 hover:text-gray-900">
        {label}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm"
    >
      {label}
    </Link>
  )
}
