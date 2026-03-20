import Image from "next/image"
import Link from "next/link"
import { Scissors, User } from "lucide-react"

const blogPosts = [
  {
    title: "Top 5 Trending Haircuts for Men in 2025",
    date: "Jan 15, 2025",
    author: "Cristian M. Durant",
    image: "/images/blog-1.webp",
    href: "/blog/trending-haircuts-2025",
  },
  {
    title: "How to Maintain Your Beard Between Visits",
    date: "Jan 10, 2025",
    author: "Almond D. Dow",
    image: "/images/blog-2.webp",
    href: "/blog/beard-maintenance-tips",
  },
  {
    title: "The Ultimate Guide to Hot Towel Shaves",
    date: "Jan 5, 2025",
    author: "Marcus J. Reid",
    image: "/images/blog-3.webp",
    href: "/blog/hot-towel-shave-guide",
  },
  {
    title: "Finding Your Perfect Hairstyle: A Complete Guide",
    date: "Dec 28, 2024",
    author: "Cristian M. Durant",
    image: "/images/blog-4.webp",
    href: "/blog/finding-perfect-hairstyle",
  },
]

export function Blog() {
  return (
    <section className="py-[var(--spacing-m)] pb-[var(--spacing-s)] overflow-x-clip">
      <div className="container">
        {/* Top */}
        <div className="flex flex-col items-center gap-6 lg:gap-5 mb-[60px] lg:mb-10">
          <div className="section-tag">
            <div className="section-tag-title-wrap flex items-center gap-2">
              <span className="section-tag-title">Latest Blogs</span>
              <div className="w-[30px] h-[30px]">
                <Scissors className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="section-title-wrap">
            <h2 className="section-title text-center">
              Grooming Tips & Trends
            </h2>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10">
          {blogPosts.map((post) => (
            <article key={post.title} className="flex flex-col md:flex-row gap-5 lg:gap-[30px]">
              <Link
                href={post.href}
                className="rounded-[10px] overflow-hidden w-full max-w-[280px] h-[180px] flex-shrink-0"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={280}
                  height={180}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-5 lg:gap-4 mb-5 lg:mb-2.5">
                  <span className="text-[#555] text-sm">{post.date}</span>
                  <div className="flex items-center gap-1.5 text-[#555] text-sm">
                    <User className="w-3.5 h-3.5" />
                    <span className="font-semibold">{post.author}</span>
                  </div>
                </div>
                <Link href={post.href} className="text-[#222] hover:text-[var(--primary)] transition-colors">
                  <h3 className="text-2xl lg:text-xl font-semibold leading-[110%] tracking-[-0.03em]">
                    {post.title}
                  </h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
