import Image from "next/image"
import { Scissors } from "lucide-react"

export function About() {
  return (
    <section className="py-[var(--spacing-m)] overflow-x-clip">
      <div className="container">
        {/* Top */}
        <div className="flex flex-col items-center justify-center gap-6 max-w-[660px] mx-auto mb-20 lg:mb-[60px] lg:max-w-[400px]">
          <div className="section-tag">
            <div className="section-tag-title-wrap flex items-center gap-2">
              <span className="section-tag-title">About Us</span>
              <div className="w-[30px] h-[30px]">
                <Scissors className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="section-title-wrap">
            <h2 className="section-title text-center">
              Quality Cuts, Timeless Style
            </h2>
          </div>
        </div>

        {/* Item Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-20">
          {/* Item 1 */}
          <div className="relative w-full max-w-[320px] lg:max-w-full">
            <div className="rounded-[10px] overflow-hidden">
              <Image
                src="/images/about-1.webp"
                alt="Barber at work"
                width={320}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Shape */}
            <div className="absolute bottom-[32%] left-[37%] lg:bottom-[12%] z-10 flex items-center justify-center w-20 h-20 lg:w-[60px] lg:h-[60px] bg-white rounded-[10px] shadow-lg">
              <Scissors className="w-11 h-11 lg:w-[30px] lg:h-[30px] text-[var(--primary)]" />
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative w-full max-w-[450px] lg:max-w-full mt-10 lg:mt-0">
            <div className="rounded-[10px] overflow-hidden h-full">
              <Image
                src="/images/about-2.webp"
                alt="Professional grooming"
                width={450}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Overlay */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur border border-white/20 rounded-[10px] p-5">
              <div className="mb-6 lg:mb-5">
                <h4 className="text-white text-xl font-semibold">
                  Master Grooming Experience
                </h4>
              </div>
              <p className="text-white/70 text-sm leading-[150%]">
                We blend traditional techniques with modern style to deliver
                precision cuts and personalized grooming that leaves you looking
                sharp and feeling confident.
              </p>
            </div>
            {/* Shape 2 */}
            <div className="absolute -top-[8%] left-[60%] lg:left-[65%] z-10 flex items-center justify-center w-20 h-20 lg:w-[60px] lg:h-[60px] bg-[var(--primary)] rounded-[10px]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[30px] lg:h-[30px]"
              >
                <path
                  d="M22 6V38M6 22H38"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
