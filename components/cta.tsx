import Link from "next/link"
import { Scissors, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-[var(--spacing-s)]">
      <div className="container">
        <div
          className="rounded-[10px] p-[120px] lg:p-[60px] md:p-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/cta-bg.webp')`,
          }}
        >
          <div className="flex flex-col items-center justify-center max-w-[610px] lg:max-w-[500px] mx-auto">
            {/* Section Tag */}
            <div className="section-tag mb-6 lg:mb-5">
              <div className="section-tag-title-wrap flex items-center gap-2">
                <span className="section-tag-title">Book Now</span>
                <div className="w-[30px] h-[30px]">
                  <Scissors className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="section-title-wrap mb-[50px] lg:mb-10">
              <h2 className="section-title text-white text-center">
                Ready for a Fresh Look? Book Your Appointment Today!
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex gap-2.5 flex-wrap justify-center mb-[30px]">
              <Link href="/contact" className="primary-btn">
                <span>Book Now</span>
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
              <Link href="tel:+1234567899" className="secondary-btn gap-2.5">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Link>
            </div>

            {/* Contact Text */}
            <p className="text-white/70 text-center">
              Contact us at{" "}
              <Link href="mailto:info@saloni.com" className="text-white hover:underline">
                info@saloni.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
