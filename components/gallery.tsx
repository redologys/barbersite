import Image from "next/image"
import { Scissors, Star } from "lucide-react"

const galleryImages = {
  col1: ["/images/gallery-1.webp", "/images/gallery-2.webp"],
  col2: ["/images/gallery-3.webp", "/images/gallery-4.webp"],
  col3: ["/images/gallery-5.webp", "/images/gallery-6.webp"],
}

export function Gallery() {
  return (
    <section className="py-[var(--spacing-m)] pb-[var(--spacing-s)] overflow-x-clip">
      <div className="container">
        {/* Top */}
        <div className="flex flex-col items-center justify-center max-w-[700px] lg:max-w-[450px] mx-auto mb-10 lg:mb-5">
          {/* Rating */}
          <div className="inline-flex border border-[#222]/10 rounded-[30px] px-2.5 py-1 mb-6 lg:mb-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-[var(--primary)] fill-[var(--primary)]"
                />
              ))}
              <span className="ml-2 text-sm text-[#222]">4.9/5 Based On 10,000+ Reviews</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3.5 bg-[var(--body-1)] rounded-full p-2.5 lg:p-1.5 lg:gap-2.5 mb-6">
            <div className="w-[50px] h-[50px] lg:w-10 lg:h-10 rounded-full overflow-hidden">
              <Image
                src="/images/author-1.webp"
                alt="Cristian M. Durant"
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mr-2">
              <div className="mb-2.5 lg:mb-1.5">
                <h4 className="text-xl lg:text-base font-semibold">Cristian M. Durant</h4>
              </div>
              <p className="text-[var(--primary)] text-sm leading-[100%]">Hair Stylist</p>
            </div>
          </div>

          {/* Section Tag & Title */}
          <div className="section-tag mb-6">
            <div className="section-tag-title-wrap flex items-center gap-2">
              <span className="section-tag-title">Gallery</span>
              <div className="w-[30px] h-[30px]">
                <Scissors className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="section-title-wrap mb-10 lg:mb-5">
            <h2 className="section-title text-center">Our Work Gallery</h2>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex justify-between items-start gap-5">
          {/* Column 1 */}
          <div className="gallery-col-1 hidden lg:flex">
            {galleryImages.col1.map((src, index) => (
              <div key={index} className="rounded-[10px] overflow-hidden w-full max-w-[350px]">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={350}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="gallery-col-2 flex-1 lg:flex-none">
            {galleryImages.col2.map((src, index) => (
              <div key={index} className="rounded-[10px] overflow-hidden w-full max-w-[350px] mx-auto lg:mx-0">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 3}`}
                  width={350}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="gallery-col-3 hidden lg:flex">
            {galleryImages.col3.map((src, index) => (
              <div key={index} className="rounded-[10px] overflow-hidden w-full max-w-[350px]">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 5}`}
                  width={350}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
