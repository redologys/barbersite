import Image from "next/image"
import { MapPin, Clock, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/storefront.png"
          alt="Showtime Cuts Barbershop Storefront"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Queens&apos; Premier Barbershop</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">It&apos;s</span>{" "}
            <span className="text-primary">Showtime</span>
            <br />
            <span className="text-foreground">Every Cut.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Expert precision cuts, fresh fades, beard trims, and custom hair designs. 
            Where skill meets style in Queens, NY.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:347-622-5047"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
            >
              Call to Book: 347-622-5047
            </a>
            <a
              href="#gallery"
              className="border-2 border-foreground hover:border-primary hover:text-primary text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
            >
              View Our Work
            </a>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">108-01, Queens NY</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hours</p>
                <p className="font-semibold">Open 7 Days a Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
