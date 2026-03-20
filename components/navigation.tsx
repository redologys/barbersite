"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPagesOpen, setIsPagesOpen] = useState(false)
  const [isUtilityOpen, setIsUtilityOpen] = useState(false)

  const pagesLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/career", label: "Career" },
    { href: "/blog", label: "Blog" },
  ]

  const utilityLinks = [
    { href: "/style-guide", label: "Style Guide" },
    { href: "/licensing", label: "Licensing" },
    { href: "/changelog", label: "Changelog" },
    { href: "/instructions", label: "Instructions" },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center w-[60px] h-[60px] border-r border-white/10">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14.4C4.47 14.4 1.6 11.53 1.6 8C1.6 4.47 4.47 1.6 8 1.6C11.53 1.6 14.4 4.47 14.4 8C14.4 11.53 11.53 14.4 8 14.4Z"
                fill="white"
              />
              <circle cx="8" cy="8" r="3" fill="white" />
            </svg>
          </div>
          <Link href="/" className="outline-none">
            <svg
              width="90"
              height="24"
              viewBox="0 0 90 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="0"
                y="18"
                fill="white"
                fontFamily="Geist, sans-serif"
                fontSize="18"
                fontWeight="600"
              >
                Stylish
              </text>
            </svg>
          </Link>
        </div>

        {/* Center Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          <Link href="/" className="nav-link">
            Home<span className="nav-link-dot ml-1">.</span>
          </Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 nav-link"
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              Pages<span className="nav-link-dot ml-1">.</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isPagesOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg min-w-[140px] overflow-hidden"
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                <div className="p-2 flex flex-col gap-0.5">
                  {pagesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm text-[#222] hover:bg-[var(--primary)] rounded-md transition-colors uppercase font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Utility Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 nav-link"
              onClick={() => setIsUtilityOpen(!isUtilityOpen)}
              onMouseEnter={() => setIsUtilityOpen(true)}
              onMouseLeave={() => setIsUtilityOpen(false)}
            >
              Utility<span className="nav-link-dot ml-1">.</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isUtilityOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg min-w-[140px] overflow-hidden"
                onMouseEnter={() => setIsUtilityOpen(true)}
                onMouseLeave={() => setIsUtilityOpen(false)}
              >
                <div className="p-2 flex flex-col gap-0.5">
                  {utilityLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm text-[#222] hover:bg-[var(--primary)] rounded-md transition-colors uppercase font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="nav-link">
            Contact<span className="nav-link-dot ml-1">.</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="hidden lg:inline-flex secondary-btn nav-backdrop bg-white/[0.01] border-l border-white/20 rounded-none py-[22px] px-[30px]"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-[#0c0407] rounded mr-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black p-5 z-50">
          <div className="flex flex-col gap-4 mb-5">
            <Link
              href="/"
              className="nav-link justify-start w-full text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Pages Accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full nav-link text-base"
                onClick={() => setIsPagesOpen(!isPagesOpen)}
              >
                Pages
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isPagesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isPagesOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2 bg-white rounded-lg p-2.5">
                  {pagesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm text-[#222] hover:bg-[var(--primary)] rounded-md transition-colors uppercase font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Utility Accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full nav-link text-base"
                onClick={() => setIsUtilityOpen(!isUtilityOpen)}
              >
                Utility
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isUtilityOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isUtilityOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2 bg-white rounded-lg p-2.5">
                  {utilityLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm text-[#222] hover:bg-[var(--primary)] rounded-md transition-colors uppercase font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="nav-link justify-start w-full text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <Link
            href="/contact"
            className="secondary-btn w-full justify-center bg-white text-black border-none rounded-[30px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
