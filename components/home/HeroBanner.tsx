"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image src="/images/brain-network.svg" alt="Rede Neural" width={200} height={200} className="mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Image
              src="/images/concifa-logo-white.png"
              alt="CONCIFA"
              width={600}
              height={150}
              className="mx-auto max-w-full h-auto"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-4xl"
          >
            As Interfaces das Inteligências:
            <br />
            <span className="font-normal">Tecnologias, Inovações e Habilidades Comportamentais</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/inscricao">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Inscreva-se
              </motion.button>
            </Link>
            <Link href="/programacao">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Ver Programação
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
