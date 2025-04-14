import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ConCIFA - Congresso de Ciência e Inovação em Interfaces e Inteligência Artificial",
  description: "IX CONCIFA - As Interfaces das Inteligências: Tecnologias, Inovações e Habilidades Comportamentais",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        
          {children}
      </body>
    </html>
  )
}
