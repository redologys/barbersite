"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-sm text-muted-foreground tracking-wider">Cee Presents</span>
            <span className="text-2xl font-bold text-primary tracking-tight">Showtime Cuts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:347-622-5047"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold">347-622-5047</span>
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:347-622-5047"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-semibold">347-622-5047</span>
              </a>
              <a
                href="#contact"
                className="bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
