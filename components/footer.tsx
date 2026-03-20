import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-sm text-muted-foreground tracking-wider">Cee Presents</span>
            <h3 className="text-2xl font-bold text-primary">Showtime Cuts</h3>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone */}
          <a
            href="tel:347-622-5047"
            className="text-primary font-bold text-lg hover:text-accent transition-colors"
          >
            347-622-5047
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Showtime Cuts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
