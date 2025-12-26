import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F8] border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-semibold text-gray-900">
              nova
            </Link>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <li><Link href="/how-nova-works" className="text-sm text-gray-600 hover:text-gray-900">How Nova works</Link></li>
              <li><Link href="/feature-overview" className="text-sm text-gray-600 hover:text-gray-900">Feature Overview</Link></li>
              <li><Link href="/for-dating" className="text-sm text-gray-600 hover:text-gray-900">For Dating</Link></li>
              <li><Link href="/for-friends-and-family" className="text-sm text-gray-600 hover:text-gray-900">For Friends and Family</Link></li>
              <li><Link href="/for-work-conversations" className="text-sm text-gray-600 hover:text-gray-900">For Work conversations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About Nova</Link></li>
              <li><Link href="/mission" className="text-sm text-gray-600 hover:text-gray-900">Our Mission</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link href="/team" className="text-sm text-gray-600 hover:text-gray-900">Team</Link></li>
              <li><Link href="/press" className="text-sm text-gray-600 hover:text-gray-900">Press</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li><Link href="/help-center" className="text-sm text-gray-600 hover:text-gray-900">Help center</Link></li>
              <li><Link href="/safety-center" className="text-sm text-gray-600 hover:text-gray-900">Safety Center</Link></li>
              <li><Link href="/research" className="text-sm text-gray-600 hover:text-gray-900">Research</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>
          </div>

          {/* Right Column: CTAs + Legal */}
        <div className="flex flex-col gap-6 md:items-end">
        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:justify-end">
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

        {/* Optional Divider */}
        <div className="border-t my-8" />

        {/* Social / App Row */}
        <div className="flex flex-wrap items-center gap-3">
          <Link href="#" aria-label="Download on the App Store">
            <Image src="/icons/appstore.svg" alt="App Store" width={80} height={40} />
          </Link>

          <SocialIcon label="Discord">
            <Image src="/icons/discord.svg" alt="Discord" width={20} height={20} />
          </SocialIcon>

          <SocialIcon label="X (Twitter)">
            <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} />
          </SocialIcon>

          <SocialIcon label="LinkedIn">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </SocialIcon>
            </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-gray-600 md:justify-end">
                <Link href="/terms" className="hover:text-gray-900">
                TERMS OF USE
                </Link>
                <Link href="/privacy" className="hover:text-gray-900">
                PRIVACY POLICY
                </Link>
                <Link
                href="/status"
                className="hover:text-gray-900 flex items-center gap-2"
                >
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                SYSTEM STATUS
                </Link>
                </div>
            </div>
    </footer>
  )
}

function SocialIcon({
  label,
  children,
}: {
  label: string
  children?: React.ReactNode
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
    >
      {children}
    </a>
  )
}
