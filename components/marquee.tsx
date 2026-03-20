"use client"

export function Marquee() {
  const text = "Stylish Barbershop * Premium Cuts * Expert Grooming * "
  
  return (
    <section className="my-[var(--spacing-s)] overflow-hidden">
      <div className="flex gap-[50px]">
        <div className="flex gap-[50px] marquee-track">
          {[...Array(4)].map((_, i) => (
            <h2 key={i} className="marquee-title">{text}</h2>
          ))}
        </div>
        <div className="flex gap-[50px] marquee-track">
          {[...Array(4)].map((_, i) => (
            <h2 key={i} className="marquee-title">{text}</h2>
          ))}
        </div>
      </div>
    </section>
  )
}
