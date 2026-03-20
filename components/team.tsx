import Image from "next/image"
import Link from "next/link"
import { Scissors, Instagram } from "lucide-react"

const teamMembers = [
  {
    name: "Cristian M. Durant",
    role: "Hair Stylist",
    image: "/images/team-1.webp",
    instagram: "#",
  },
  {
    name: "Almond D. Dow",
    role: "Master Barber",
    image: "/images/team-2.webp",
    instagram: "#",
  },
  {
    name: "Marcus J. Reid",
    role: "Senior Barber",
    image: "/images/team-3.webp",
    instagram: "#",
  },
]

export function Team() {
  return (
    <section className="py-[var(--spacing-m)] pb-[var(--spacing-s)] overflow-x-clip">
      <div className="container">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 max-w-[950px] lg:max-w-full mb-[60px] lg:mb-10">
          <div>
            <div className="section-tag mb-6">
              <div className="section-tag-title-wrap flex items-center gap-2">
                <span className="section-tag-title">Our Team</span>
                <div className="w-[30px] h-[30px]">
                  <Scissors className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="section-title-wrap">
              <h2 className="section-title">
                Meet Our Expert <br className="hidden lg:block" />
                Barbers
              </h2>
            </div>
          </div>
          <div className="w-full max-w-[510px]">
            <p className="text-[#555] text-base leading-[150%]">
              Our talented team blends classic technique with modern trends,
              delivering precision cuts and personalized styles to help you look
              and feel your best.
            </p>
            <div className="mt-6 flex items-center justify-center w-[100px] h-[100px] lg:w-[90px] lg:h-[90px] border border-[#222]/10 rounded-full p-1.5 relative">
              <Scissors className="w-9 h-9 lg:w-[30px] lg:h-[30px] text-[#222] absolute" />
              <svg
                className="w-[90px] h-[90px] lg:w-20 lg:h-20 animate-spin-slow absolute"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text className="text-[10px] lg:text-[8px] fill-[#222] uppercase tracking-[0.2em]">
                  <textPath href="#circlePath">
                    Stylish Barbershop * Premium Grooming *
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[50px]">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-[10px] overflow-hidden relative group">
              <div className="rounded-[10px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content Overlay */}
              <div className="team-item-content">
                <div className="flex flex-col gap-2.5 lg:gap-1.5">
                  <Link href="/team" className="text-white text-2xl lg:text-xl font-semibold">
                    {member.name}
                  </Link>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
                <Link
                  href={member.instagram}
                  className="w-4 h-4 text-white hover:text-[var(--primary)] transition-colors"
                >
                  <Instagram className="w-full h-full" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
