import { Scissors, Sparkles, Brush, Star } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Precision Cuts",
    description: "Fresh fades, tapers, and classic cuts tailored to your style. Every cut is a masterpiece.",
    price: "From $25",
  },
  {
    icon: Brush,
    title: "Beard Grooming",
    description: "Expert beard trims, lineups, and hot towel treatments for the perfect look.",
    price: "From $15",
  },
  {
    icon: Sparkles,
    title: "Hair Designs",
    description: "Custom hair art and intricate designs. Express yourself with our creative designs.",
    price: "From $35",
  },
  {
    icon: Star,
    title: "Kids Cuts",
    description: "Patient, friendly service for the little ones. Making haircuts fun!",
    price: "From $20",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What We Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From classic cuts to creative designs, we bring skill and passion to every service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-8 hover:border-primary transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <p className="text-primary font-bold text-lg">{service.price}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:347-622-5047"
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
