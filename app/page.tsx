import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { CTA } from "@/components/cta"
import { Team } from "@/components/team"
import { VideoSection } from "@/components/video-section"
import { Marquee } from "@/components/marquee"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <CTA />
      <Team />
      <VideoSection />
      <Marquee />
      <Blog />
      <Footer />
    </main>
  )
}
