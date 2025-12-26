'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useNavbar } from './context'
import { ChevronDown } from 'lucide-react'
const NAV_LINKS = [
  { href: '/product', label: 'Products', hasDrop: true },
  { href: '/dev', label: 'Developers', hasDrop: true },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { buttons } = useNavbar()

  // enforce max 2
  const safeButtons = buttons.slice(0, 2)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9EDE7] backdrop-blur border-b border-gray-100">
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
                {l.hasDrop && 
                <ChevronDown size={16} 
                className="inline ml-1" />}
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

function NavbarButton({
  href,
  label,
  variant,
}: {
  href: string
  label: string
  variant: 'dark' | 'glass' | 'link'
}) {
  const base =
    'text-sm px-4 py-2 rounded-full border border-gray-300 transition'
  if (variant === 'link') 
    { 
        return ( 
        <Link href={href} className="text-sm text-gray-600 hover:text-gray-900"> 
            {label} 
        </Link> 
        ) 
    }
  if (variant === 'glass') {
    return (
      <Link
        href={href}
        className={`${base} bg-[#10101054] text-gray-700
                    hover:border-gray-900 hover:text-gray-900`}
      >
        {label}
      </Link>
    )
  }

  // dark
  return (
    <Link
      href={href}
      className={`${base} bg-[#171717] text-white
                  hover:border-gray-900 hover:text-gray-100`}
    >
      {label}
    </Link>
  )
}

}
