import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo-white.svg" alt="ConCIFA Logo" width={200} height={60} className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mt-4">
              Congresso de Ciência e Inovação em Interfaces e Inteligência Artificial
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre o Evento
                </Link>
              </li>
              <li>
                <Link href="/programacao" className="text-gray-400 hover:text-white transition-colors">
                  Programação Completa
                </Link>
              </li>
              <li>
                <Link href="/submissao" className="text-gray-400 hover:text-white transition-colors">
                  Submissão de Trabalhos
                </Link>
              </li>
              <li>
                <Link href="/publicacoes" className="text-gray-400 hover:text-white transition-colors">
                  Publicações Anteriores
                </Link>
              </li>
              <li>
                <Link href="/edicoes" className="text-gray-400 hover:text-white transition-colors">
                  Edições Anteriores
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">Email: contato@concifa.com.br</p>
            <p className="text-gray-400 mb-6">Telefone: (00) 0000-0000</p>

            <h3 className="text-lg font-semibold mb-4">Localização</h3>
            <p className="text-gray-400 mb-2">Universidade Federal de Tecnologia</p>
            <p className="text-gray-400">Av. Principal, 1000 - Centro</p>
            <p className="text-gray-400">São Paulo - SP, 00000-000</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© 2025 ConCIFA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
