import Image from "next/image"

const galleryImages = [
  {
    src: "/images/haircut-1.png",
    alt: "Clean beard trim and fade",
    category: "Beard & Fade",
  },
  {
    src: "/images/barber-at-work.png",
    alt: "Barber at work",
    category: "In Action",
  },
  {
    src: "/images/haircut-design.png",
    alt: "Creative hair design",
    category: "Hair Art",
  },
  {
    src: "/images/waves-haircut.png",
    alt: "Perfect waves cut",
    category: "Waves",
  },
  {
    src: "/images/braids.png",
    alt: "Box braids style",
    category: "Braids",
  },
  {
    src: "/images/fade-cut.png",
    alt: "Fresh fade with texture",
    category: "Fade",
  },
  {
    src: "/images/hair-design.png",
    alt: "Intricate hair design pattern",
    category: "Hair Art",
  },
  {
    src: "/images/celebrity-cut.png",
    alt: "Celebrity style cut",
    category: "Fresh Cut",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Check out some of our best work. Every cut tells a story.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-primary text-sm font-semibold">{image.category}</span>
                  <p className="text-foreground font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Follow us for more fresh cuts!</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Follow @ShowtimeCuts
          </a>
        </div>
      </div>
    </section>
  )
}
