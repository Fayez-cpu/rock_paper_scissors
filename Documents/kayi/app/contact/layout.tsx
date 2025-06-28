import type React from "react"
export const metadata = {
  title: "Contact Us - Kayi Grill",
  description:
    "Get in touch with us today to book a table, or with any questions you may have regarding our restaurant, takeaway services or cuisine.",
      icons: {
    icon: "/favicon.webp",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
