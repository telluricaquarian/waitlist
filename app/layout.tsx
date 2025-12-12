import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

/**
 * Update this once your final domain is live
 */
const SITE_URL = "https://telluricaquarian-waitlist.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Areculateir — Mystery Box",
    template: "%s — Areculateir",
  },

  description:
    "Areculateir design services. Open the Mystery Box to see what’s inside — premium UI, conversion-first builds, and fast execution.",

  applicationName: "Areculateir",
  generator: "Areculateir",

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Areculateir",
    title: "Areculateir — Mystery Box",
    description:
      "Open the Areculateir Mystery Box — premium UI, conversion-first web design, and fast execution.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Areculateir — Mystery Box",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Areculateir — Mystery Box",
    description:
      "Open the Areculateir Mystery Box — premium UI, conversion-first web design, and fast execution.",
    images: ["/og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} ${geistMono.className} ${pressStart2P.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
