import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Showtime Cuts | Premium Barbershop in Queens, NY",
  description:
    "Cee Presents Showtime Cuts - Expert barbers, precision cuts, beard trims, designs, and more. Located at 108-01 in Queens. Call 347-622-5047 to book your appointment.",
  keywords: ["barbershop", "haircut", "Queens", "NYC", "fade", "beard trim", "hair design"],
  openGraph: {
    title: "Showtime Cuts | Premium Barbershop",
    description: "Expert barbers, precision cuts, beard trims, and custom designs.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
