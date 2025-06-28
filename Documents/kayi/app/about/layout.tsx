import type React from "react"
export const metadata = {
  title: "About Us - Kayi Grill",
  description: "Each member of our experienced, professional team works to ensure you enjoy an experience to savour at KAYI. Order online or book a table.",
        icons: {
    icon: "/favicon.webp",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
