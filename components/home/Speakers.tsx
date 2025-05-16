"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type Speaker = {
  name: string
  role: string
  institution: string
  image: string
}

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      name: "Dra. Ana Silva",
      role: "Especialista em Ciências Forenses",
      institution: "Universidade Federal de São Paulo",
      image: "/images/speaker-1.jpg",
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Pesquisador em IA Forense",
      institution: "Instituto de Tecnologia",
      image: "/images/speaker-2.jpg",
    },
    {
      name: "Profa. Juliana Costa",
      role: "Perita Criminal",
      institution: "Polícia Federal",
      image: "/images/speaker-3.jpg",
    },
    {
      name: "Dr. Roberto Almeida",
      role: "Especialista em Comportamento Criminal",
      institution: "Universidade de Brasília",
      image: "/images/speaker-4.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Palestrantes Confirmados</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos especialistas que compartilharão seus conhecimentos e experiências durante o CONCIFA
            2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-64">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-blue-900">{speaker.name}</h3>
                  <p className="text-gray-700 mb-1">{speaker.role}</p>
                  <p className="text-gray-500 text-sm">{speaker.institution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
