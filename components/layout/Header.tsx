"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  path: string
  submenu?: { name: string; path: string }[]
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Definição dos itens de navegação
  const navItems: NavItem[] = [
    { name: "HOME", path: "/" },
    { name: "SOBRE", path: "/sobre" },
    { name: "PROGRAMAÇÃO", path: "/programacao" },
    { name: "SUBMISSÃO", path: "/submissao" },
    { name: "PUBLICAÇÕES", path: "/publicacoes" },
    { name: "EDIÇÕES", path: "/edicoes" },
  ]

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Verificar se o link está ativo
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Top bar with date and ISSN */}
      <div className="bg-blue-600 text-white py-1 px-4">
        <div className="container mx-auto flex justify-between text-xs md:text-sm">
          <div>16 maio 2025 (08:35 am)</div>
          <div>ISSN: 2966-425X</div>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image src="/logo-concifa.png" alt="CONCIFA" width={150} height={50} className="h-10 md:h-12 w-auto" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(item.path)
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600",
                    )}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}

              {/* Login/Register Buttons */}
              <div className="ml-4 flex space-x-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="destructive" size="sm" asChild>
                    <Link href="/inscricao">Inscreva-se</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="destructive" size="sm" asChild>
                  <Link href="/inscricao">Inscreva-se</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </motion.div>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative z-10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  <div className="py-4 space-y-4">
                    {navItems.map((item) => (
                      <div key={item.path} className="mb-2">
                        <Link href={item.path} onClick={() => setIsOpen(false)}>
                          <div
                            className={`block px-4 py-3 rounded-md text-sm font-medium ${
                              isActive(item.path)
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            }`}
                          >
                            {item.name}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
