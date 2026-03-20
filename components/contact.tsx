import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Visit Us Today</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready for your next fresh cut? Stop by or give us a call!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <a
              href="tel:347-622-5047"
              className="text-2xl font-bold text-primary hover:text-accent transition-colors"
            >
              347-622-5047
            </a>
            <p className="text-muted-foreground mt-2">Walk-ins welcome!</p>
          </div>

          {/* Location Card */}
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-lg font-semibold">108-01</p>
            <p className="text-muted-foreground">Queens, NY</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:text-accent transition-colors font-medium"
            >
              Get Directions →
            </a>
          </div>

          {/* Hours Card */}
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-colors md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="text-foreground font-medium">Mon - Fri:</span> 9:00 AM - 8:00 PM</p>
              <p><span className="text-foreground font-medium">Saturday:</span> 8:00 AM - 9:00 PM</p>
              <p><span className="text-foreground font-medium">Sunday:</span> 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
