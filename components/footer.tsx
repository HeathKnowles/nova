import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F8] border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              nova
            </Link>
          </div>

          {/* Products */}
          <FooterColumn title="Products">
            <FooterLink href="/how-nova-works">How Nova works</FooterLink>
            <FooterLink href="/feature-overview">Feature Overview</FooterLink>
            <FooterLink href="/for-dating">For Dating</FooterLink>
            <FooterLink href="/for-friends-and-family">Friends & Family</FooterLink>
            <FooterLink href="/for-work-conversations">Work Conversations</FooterLink>
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company">
            <FooterLink href="/about">About Nova</FooterLink>
            <FooterLink href="/mission">Our Mission</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
            <FooterLink href="/press">Press</FooterLink>
          </FooterColumn>

          {/* Resources */}
          <FooterColumn title="Resources">
            <FooterLink href="/help-center">Help Center</FooterLink>
            <FooterLink href="/safety-center">Safety Center</FooterLink>
            <FooterLink href="/research">Research</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </FooterColumn>

          {/* CTAs */}
          <div className="flex flex-col gap-4 md:items-end md:col-span-2">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-end">
              <Link
                href="/signup"
                className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 text-center"
              >
                SIGN UP
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 border border-gray-300 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">

          {/* Social / App */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="#" aria-label="App Store">
              <Image
                src="/icons/appstore.svg"
                alt="App Store"
                width={90}
                height={40}
              />
            </Link>

            <SocialIcon label="Discord" icon="/icons/discord.svg" />
            <SocialIcon label="Twitter" icon="/icons/twitter.svg" />
            <SocialIcon label="LinkedIn" icon="/icons/linkedin.svg" />
          </div>

          {/* Legal */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <Link href="/terms" className="hover:text-gray-900">
              TERMS OF USE
            </Link>
            <Link href="/privacy" className="hover:text-gray-900">
              PRIVACY POLICY
            </Link>
            <Link href="/status" className="flex items-center gap-2 hover:text-gray-900">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              SYSTEM STATUS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Helpers ---------- */

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link href={href} className="text-sm text-gray-600 hover:text-gray-900">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({
  label,
  icon,
}: {
  label: string
  icon: string
}) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
    >
      <Image src={icon} alt={label} width={20} height={20} />
    </Link>
  )
}
