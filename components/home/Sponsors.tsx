"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Sponsors() {
  const sponsors = [
    { name: "Universidade Federal", logo: "/images/sponsor-1.png" },
    { name: "Instituto de Pesquisa", logo: "/images/sponsor-2.png" },
    { name: "Laboratório Forense", logo: "/images/sponsor-3.png" },
    { name: "Associação Científica", logo: "/images/sponsor-4.png" },
    { name: "Empresa de Tecnologia", logo: "/images/sponsor-5.png" },
    { name: "Fundação de Apoio", logo: "/images/sponsor-6.png" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Patrocinadores e Apoiadores</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Agradecemos às instituições e empresas que tornam possível a realização do CONCIFA 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex items-center justify-center">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={120}
                    height={80}
                    className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
