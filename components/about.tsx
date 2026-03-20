import Image from "next/image"
import { Award, Users, Heart, ThumbsUp } from "lucide-react"

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Heart, value: "100%", label: "Satisfaction" },
  { icon: ThumbsUp, value: "4.9", label: "Rating" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/community.png"
                alt="Showtime Cuts community"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Serving Queens</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              More Than Just a Barbershop
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Cee Presents Showtime Cuts has been a cornerstone of the Queens community for over a decade. 
              We&apos;re not just cutting hair — we&apos;re building confidence, creating connections, and 
              making every client feel like a star.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team of expert barbers combines classic techniques with modern styles to deliver 
              the perfect cut every time. From fresh fades to intricate designs, we take pride in 
              our craft and our community.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
