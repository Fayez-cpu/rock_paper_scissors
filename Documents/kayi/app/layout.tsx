import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kayi Grill - Authentic Mediterranean Cuisine",
  description: "Our signature menu, incorporates authentic Turkish cuisine while at the same time introducing popular Mediterranean cuisine.",
  icons: {
    icon: "/favicon.webp",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
