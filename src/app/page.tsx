import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, Clock, Users, MapPin, BookOpen, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader/> 
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            </svg>
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </div>

          {/* Abstract shapes */}
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
          <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-10 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-80">
                <Image
                  src="/brain-network.svg"
                  alt="Brain Network"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">IX</span>{" "}
                CONCIFA
              </h1>
            </div>

            <h2 className="text-xl md:text-3xl font-light text-white mb-4 max-w-3xl">
              As Interfaces das Inteligências:
            </h2>
            <h3 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-8 max-w-3xl">
              Tecnologias, Inovações e Habilidades Comportamentais
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button  size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
                Inscreva-se Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-blue-700">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">11-13 Abril, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-purple-700">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">São Paulo, Brasil</span>
            </div>
            <div className="flex items-center gap-2 text-red-700">
              <Users className="h-5 w-5" />
              <span className="font-medium">+1000 Participantes</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">+200 Trabalhos</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1 text-sm">Sobre o Evento</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IX CONCIFA 2025</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                O <strong>IX CONCIFA</strong> é um evento acadêmico que reúne pesquisadores, profissionais e estudantes
                interessados nas interfaces entre tecnologia, inovação e comportamento humano.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Com foco nas mais recentes descobertas e aplicações da inteligência artificial e suas implicações para a
                sociedade, o evento proporciona um espaço de diálogo e troca de experiências entre diferentes áreas do
                conhecimento.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nesta nona edição, abordaremos temas como ética na IA, interfaces homem-máquina, processamento de
                linguagem natural, visão computacional, e o impacto dessas tecnologias no comportamento humano e na
                sociedade.
              </p>
              <Link href="/programacao">
                <Button size="lg" className="mt-4">
                  Ver Programação Completa
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Datas Importantes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium block">Submissão de Trabalhos</span>
                    <span className="text-gray-600">15 de Janeiro a 15 de Março de 2025</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 p-2 rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium block">Notificação de Aceitação</span>
                    <span className="text-gray-600">01 de Abril de 2025</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-700 p-2 rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium block">Realização do Evento</span>
                    <span className="text-gray-600">11 a 13 de Abril de 2025</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium block">Publicação dos Anais</span>
                    <span className="text-gray-600">30 de Maio de 2025</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1 text-sm">
              Palestrantes
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Palestrantes Principais</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Palestrante+${i}`}
                    alt={`Palestrante ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Nome do Palestrante {i}</h3>
                  <p className="text-purple-700 mb-3">Universidade de Tecnologia</p>
                  <p className="text-gray-600 mb-4">
                    Especialista em Inteligência Artificial e suas aplicações em interfaces humano-computador.
                  </p>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Ver perfil completo
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Ver Todos os Palestrantes
            </Button>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1 text-sm">Tópicos</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principais Temas</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              O IX CONCIFA abordará uma ampla gama de tópicos relacionados às interfaces entre inteligência artificial,
              tecnologia e comportamento humano.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Ética na IA", icon: Award },
              { title: "Interfaces Homem-Máquina", icon: Users },
              { title: "Processamento de Linguagem Natural", icon: BookOpen },
              { title: "Visão Computacional", icon: Calendar },
              { title: "IA Generativa", icon: Clock },
              { title: "Impacto Social da IA", icon: MapPin },
            ].map((topic, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <topic.icon className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                  <p className="text-gray-600">
                    Explorando os avanços e desafios mais recentes em {topic.title.toLowerCase()} e suas aplicações.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Participe do IX CONCIFA</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se a pesquisadores, profissionais e estudantes para discutir o futuro das interfaces entre
            inteligência artificial e comportamento humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Inscreva-se Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Submeta seu Trabalho
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
