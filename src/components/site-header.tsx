"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Clock, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "/sobre" },
    { name: "PROGRAMAÇÃO", href: "/programacao" },
    { name: "SUBMISSÃO", href: "/submissao" },
    { name: "PUBLICAÇÕES", href: "/publicacoes" },
    { name: "EDIÇÕES", href: "/edicoes" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 py-2 px-4 text-white flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>11 abril 2025</span>
          <Clock className="h-4 w-4 ml-2" />
          <span>(09:55 am)</span>
        </div>
        <div>
          <span className="font-medium">ISSN: 2966-425X</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo width={200} height={60} />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-purple-600",
                  pathname === item.href ? "text-blue-700" : "text-gray-700",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="outline"
                className="hidden md:inline-flex border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
            </Link>
            <Link href="/inscricao">
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
                Inscreva-se
              </Button>
            </Link>
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-purple-600 py-2 border-b border-gray-100",
                  pathname === item.href ? "text-blue-700" : "text-gray-700",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
