"use client"

import Image from "next/image"
import Link from "next/link"
import { Scissors, ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Classic Haircuts",
    description: "Precision cuts that bring out your best style.",
    price: "$25",
  },
  {
    title: "Beard Trimming",
    description: "Precision cuts that bring out your best style.",
    price: "$15",
  },
  {
    title: "Hot Towel Shaves",
    description: "Precision cuts that bring out your best style.",
    price: "$20",
  },
  {
    title: "Modern Styling",
    description: "Precision cuts that bring out your best style.",
    price: "$30",
  },
  {
    title: "Hair Wash & Treatment",
    description: "Precision cuts that bring out your best style.",
    price: "$18",
  },
]

export function Services() {
  return (
    <section className="py-[var(--spacing-m)] bg-[var(--body-1)] overflow-x-clip">
      <div className="container">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 max-w-[950px] lg:max-w-full mb-[60px]">
          <div>
            <div className="section-tag mb-6">
              <div className="section-tag-title-wrap flex items-center gap-2">
                <span className="section-tag-title">Our Services</span>
                <div className="w-[30px] h-[30px]">
                  <Scissors className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="section-title-wrap">
              <h2 className="section-title">
                Grooming Services <br className="hidden lg:block" />
                We Offer
              </h2>
            </div>
          </div>
          <div className="w-full max-w-[500px]">
            <p className="text-[#555] text-base leading-[150%]">
              From sharp cuts to relaxing shaves, our expert barbers deliver
              tailored grooming experiences designed to keep you looking your
              best.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          {/* Left - Image */}
          <div className="w-full max-w-[300px] lg:max-w-[300px]">
            <div className="rounded-[10px] overflow-hidden w-full h-full lg:h-[550px]">
              <Image
                src="/images/service-thumb.webp"
                alt="Barber Service"
                width={300}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Services List */}
          <div className="w-full max-w-[850px]">
            {services.map((service, index) => (
              <Link
                href="/services"
                key={service.title}
                className={`service-item group cursor-pointer ${index === 0 ? "border-t border-[#222]/10" : ""}`}
              >
                <div className="service-item-btn">
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </div>
                <div className="service-item-shape" />
                <div className="absolute bottom-[1px] left-0 right-0 h-[1px] bg-[#222]/10 z-[1]" />

                <div className="service-item-title-wrap flex-shrink-0">
                  <h3 className="text-[36px] lg:text-[26px] font-semibold text-[#222] transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-1 hidden lg:block">
                  <p className="text-[#555] text-base">{service.description}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[36px] lg:text-[26px] font-semibold text-[var(--primary)]">
                    {service.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
