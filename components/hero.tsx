import Link from "next/link"
import Image from "next/image"
import { Play, Star } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-end pt-[150px] overflow-x-clip"
      style={{
        backgroundImage: `url('/images/hero-bg.webp')`,
      }}
    >
      <div className="container">
        <div className="flex flex-col justify-between items-start w-full">
          {/* Hero Top */}
          <div className="w-full max-w-[565px] mb-[100px] lg:mb-[60px]">
            {/* Tag */}
            <div className="inline-flex flex-wrap items-center gap-2.5 border border-white/10 bg-white/10 backdrop-blur-sm rounded-[30px] px-5 py-1.5 pr-5 mb-6 lg:mb-5">
              <span className="bg-[var(--primary)] rounded-full px-3.5 py-1 text-sm text-black">
                Flat 20% Off
              </span>
              <span className="text-white text-sm">On All Services</span>
            </div>

            {/* Title */}
            <div className="mb-[60px] lg:mb-10 max-w-[450px] lg:max-w-[450px]">
              <h1 className="hero-title">
                Where <span className="hero-title-span">Style</span> Meets
                Precision.
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex gap-2.5 flex-wrap">
              <Link href="/contact" className="primary-btn">
                <span className="flex flex-col h-3.5 overflow-hidden">
                  <span className="transition-transform duration-300 hover:-translate-y-full">
                    Book Now
                  </span>
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1M13 1H1M13 1V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="secondary-btn gap-2.5 hover:bg-white/10 hover:text-white hover:border-white/20"
              >
                <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                  <Play className="w-3 h-3 text-black fill-black" />
                </span>
                <span>Watch Video</span>
              </Link>
            </div>
          </div>

          {/* Hero Bottom */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 border-t border-white/10 py-[34px] lg:py-5">
            {/* Author Info */}
            <div className="flex items-center gap-3">
              <div className="w-[150px] h-[60px] relative">
                <Image
                  src="/images/author-thumbs.png"
                  alt="Happy Customers"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-2.5 lg:mb-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[var(--primary)] fill-[var(--primary)]"
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm">4.9/5</span>
                </div>
                <p className="text-white/70 text-sm">
                  <span className="text-white font-medium">10k+</span> Happy
                  Customers
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="w-full max-w-[530px] lg:max-w-[320px]">
              <p className="text-white/70">
                Master barbers crafting confidence, one cut at a time. We blend
                timeless technique with modern style to create looks that
                define.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
