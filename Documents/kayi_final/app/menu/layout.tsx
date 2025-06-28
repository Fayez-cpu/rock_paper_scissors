import type React from "react"
export const metadata = {
  title: "Menu - Kayi Grill",
  description: "Take a look through our signature menu incorporating flavours from Turkish and Mediterranean cuisines. Book a table or order online now.",
        icons: {
    icon: "/favicon.webp",
  },
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
