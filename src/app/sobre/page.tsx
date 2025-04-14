import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Target, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 py-16 md:py-24">
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
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
          <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Sobre o Evento</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre o IX CONCIFA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça mais sobre o Congresso de Ciência e Inovação em Interfaces e Inteligência Artificial
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Nossa História</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Uma Década de Inovação e Conhecimento</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  O <strong>Congresso de Ciência e Inovação em Interfaces e Inteligência Artificial (CONCIFA)</strong>{" "}
                  teve sua primeira edição em 2017, com o objetivo de criar um espaço para discussão e compartilhamento
                  de conhecimentos sobre as interfaces entre tecnologia, inovação e comportamento humano.
                </p>
                <p>
                  Ao longo dos anos, o CONCIFA se consolidou como um dos principais eventos acadêmicos na área de
                  inteligência artificial e suas interfaces no Brasil, reunindo pesquisadores, profissionais e
                  estudantes de diversas instituições nacionais e internacionais.
                </p>
                <p>
                  Em sua nona edição, o CONCIFA traz o tema{" "}
                  <strong>
                  &quot;As Interfaces das Inteligências: Tecnologias, Inovações e Habilidades Comportamentais&quot;
                  </strong>
                  , buscando explorar as múltiplas dimensões da interação entre humanos e sistemas inteligentes, bem
                  como os impactos dessas tecnologias na sociedade contemporânea.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=800&text=CONCIFA+História"
                alt="História do CONCIFA"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Nossa Missão</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Missão, Visão e Valores</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <Target className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Missão</h3>
                <p className="text-gray-700">
                  Promover o avanço científico e tecnológico nas áreas de inteligência artificial e interfaces
                  homem-máquina, fomentando o diálogo interdisciplinar e a disseminação de conhecimentos que contribuam
                  para o desenvolvimento de soluções inovadoras e éticas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecido como o principal evento acadêmico brasileiro na área de inteligência artificial e suas
                  interfaces, contribuindo para a formação de profissionais e pesquisadores capacitados para enfrentar
                  os desafios tecnológicos e sociais do século XXI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                    <span>Excelência acadêmica e científica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                    <span>Inovação e criatividade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                    <span>Ética e responsabilidade social</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                    <span>Interdisciplinaridade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                    <span>Inclusão e diversidade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Organização</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comitê Organizador</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              O IX CONCIFA é organizado por uma equipe multidisciplinar de pesquisadores e profissionais comprometidos
              com a excelência acadêmica e científica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=64&width=64&text=P${i}`}
                    alt={`Membro do Comitê ${i}`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Prof. Dr. Nome Completo</h3>
                  <p className="text-purple-700 text-sm">
                    Coordenador{i % 2 === 0 ? "a" : ""}{" "}
                    {i % 3 === 0 ? "Geral" : i % 3 === 1 ? "Científico" : "de Programação"}
                  </p>
                  <p className="text-gray-600 text-sm">Universidade Federal de Tecnologia</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline">Ver Comitê Científico Completo</Button>
          </div>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Histórico</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Edições Anteriores</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Conheça os temas e destaques das edições anteriores do CONCIFA.
            </p>
          </div>

          <div className="space-y-6">
            {[8, 7, 6, 5].map((edition) => (
              <Card key={edition} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-5 items-center">
                  <div className="bg-gradient-to-br from-blue-700 to-purple-700 text-white p-6 md:p-8 flex flex-col items-center justify-center md:h-full md:col-span-1">
                    <span className="text-4xl font-bold">{edition}ª</span>
                    <span className="text-xl">Edição</span>
                    <span className="mt-2 text-blue-200">{2025 - (9 - edition)}</span>
                  </div>
                  <CardContent className="p-6 md:col-span-4">
                    <h3 className="text-xl font-bold mb-2">
                      {edition === 8
                        ? "Inteligência Artificial e Sociedade: Desafios e Oportunidades"
                        : edition === 7
                          ? "Fronteiras da IA: Cognição, Emoção e Criatividade"
                          : edition === 6
                            ? "IA Responsável: Ética, Transparência e Confiabilidade"
                            : "Interfaces Inteligentes para um Mundo em Transformação"}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      O CONCIFA {edition} reuniu mais de {700 + edition * 50} participantes de {10 + edition} países,
                      com {50 + edition * 20} trabalhos apresentados em {edition + 2} trilhas temáticas.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">IA Ética</Badge>
                      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Interfaces</Badge>
                      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Aprendizado de Máquina</Badge>
                      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Processamento de Linguagem</Badge>
                    </div>
                    <Link href={`/edicoes/${edition}`}>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/edicoes">
              <Button>Ver Todas as Edições</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Faça Parte do IX CONCIFA</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se a nós para discutir e moldar o futuro das interfaces entre inteligência artificial e comportamento
            humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Inscreva-se Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
