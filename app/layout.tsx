import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Stylish Barbershop - Premium Grooming Experience",
  description:
    "Stylish Barbershop is a sophisticated grooming studio tailored for professionals dedicated to crafting a distinguished client experience. Designed for master barbers, stylists, and modern grooming studios.",
  openGraph: {
    title: "Stylish Barbershop - Premium Grooming Experience",
    description:
      "Stylish Barbershop is a sophisticated grooming studio tailored for professionals dedicated to crafting a distinguished client experience.",
    images: ["/images/preview.webp"],
  },
  twitter: {
    title: "Stylish Barbershop - Premium Grooming Experience",
    description:
      "Stylish Barbershop is a sophisticated grooming studio tailored for professionals dedicated to crafting a distinguished client experience.",
    images: ["/images/preview.webp"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
