"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Facebook, Twitter, Instagram, Youtube, Scissors } from "lucide-react"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
]

const essentialLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Pricing", href: "/pricing" },
]

const otherLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Career", href: "/career" },
  { label: "Testimonials", href: "/testimonials" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <footer className="mt-[var(--spacing-s)] pt-[var(--spacing-s)] bg-[var(--body-1)] relative overflow-x-clip">
      {/* Top */}
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 border-b border-[#222]/10 mb-[150px] lg:mb-20 pb-[60px] lg:pb-10">
          {/* Logo */}
          <div className="w-full max-w-[400px] lg:max-w-[220px]">
            <div className="w-full max-w-[400px] h-[98px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="70"
                  fill="#222"
                  fontFamily="Geist, sans-serif"
                  fontSize="72"
                  fontWeight="600"
                >
                  Stylish
                </text>
              </svg>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-[550px] lg:max-w-[400px]">
            <div className="mb-6 lg:mb-5">
              <h4 className="text-xl font-medium">Subscribe To Our Newsletter</h4>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2.5 h-14 bg-white rounded-full pl-[22px] pr-1.5 py-1.5"
            >
              <Mail className="w-5 h-5 text-[#555] flex-shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border-none outline-none text-sm bg-transparent"
                required
              />
              <button
                type="submit"
                className="bg-[var(--primary)] text-black text-sm font-semibold rounded-[30px] px-[26px] py-4 hover:bg-[var(--primary)]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 mb-[100px] lg:mb-[60px]">
          {/* Left */}
          <div className="w-full max-w-[550px] lg:max-w-[280px]">
            <div className="mb-10 lg:mb-5">
              <p className="text-[#555] text-sm">Get In Touch</p>
            </div>
            <div className="mb-[60px] lg:mb-10">
              <h3 className="text-[#222] text-[48px] lg:text-[30px] font-semibold leading-[120%] tracking-[-0.03em]">
                {`Let's`} Create Your Signature Look
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="footer-social-widget"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" />
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-wrap justify-between items-start gap-5 w-full max-w-[580px] lg:max-w-[420px]">
            {/* Contact Info */}
            <div className="w-full max-w-[200px] lg:max-w-[180px]">
              <div className="mb-10 lg:mb-5">
                <p className="text-[#555] text-sm">Contact Info</p>
              </div>
              <div className="flex flex-col gap-5 lg:gap-2.5">
                <Link
                  href="tel:+1234567899"
                  className="text-[#222] text-sm font-medium hover:text-[var(--primary)] transition-colors"
                >
                  +123 45 678 99 -8
                </Link>
                <Link
                  href="mailto:info@saloni.com"
                  className="text-[#222] text-sm font-medium hover:text-[var(--primary)] transition-colors"
                >
                  info@saloni.com
                </Link>
                <p className="text-[#222] text-sm font-medium">
                  12/a, new bustin tower, NYC
                </p>
              </div>
            </div>

            {/* Essential Links */}
            <div>
              <div className="mb-10 lg:mb-5">
                <p className="text-[#555] text-sm">Essential Links</p>
              </div>
              <div className="flex flex-col gap-5 lg:gap-2.5">
                {essentialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#222] text-base font-medium hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            <div>
              <div className="mb-10 lg:mb-5">
                <p className="text-[#555] text-sm">Other Links</p>
              </div>
              <div className="flex flex-col gap-5 lg:gap-2.5">
                {otherLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#222] text-base font-medium hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Icon */}
      <div className="absolute bottom-20 right-5 w-[300px] h-[300px] lg:w-[200px] lg:h-[200px] pointer-events-none opacity-10">
        <Scissors className="w-full h-full text-[#222]" />
      </div>

      {/* Divider */}
      <div className="absolute top-[222px] bottom-0 left-1/2 w-[1px] bg-[#222]/10 hidden lg:block" />

      {/* Bottom */}
      <div className="bg-white border-t border-[#222]/10 py-[25px] lg:py-5">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <p className="text-[#555] text-sm">
              Copyright {new Date().getFullYear()}{" "}
              <span className="text-[#222] font-semibold">Stylish</span>. All
              Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="text-[#222] text-base font-semibold hover:text-[var(--primary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#222] text-base font-semibold hover:text-[var(--primary)] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
