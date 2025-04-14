import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PatrocinadoresPage() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Apoio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Patrocinadores e Apoiadores</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça as instituições e empresas que tornam possível a realização do IX CONCIFA.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Patrocinadores</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Patrocinadores</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Agradecemos às empresas e instituições que acreditam na importância da pesquisa e inovação em inteligência
              artificial e suas interfaces.
            </p>
          </div>

          <Tabs defaultValue="diamante" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="diamante">Diamante</TabsTrigger>
              <TabsTrigger value="ouro">Ouro</TabsTrigger>
              <TabsTrigger value="prata">Prata</TabsTrigger>
              <TabsTrigger value="bronze">Bronze</TabsTrigger>
            </TabsList>

            <TabsContent value="diamante">
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 flex justify-center">
                      <div className="relative h-32 w-64">
                        <Image
                          src={`/placeholder.svg?height=128&width=256&text=Patrocinador+Diamante+${i}`}
                          alt={`Patrocinador Diamante ${i}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {i === 1 ? "TechInnovate Solutions" : "AI Research Institute"}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {i === 1
                          ? "Empresa líder em soluções de inteligência artificial para o mercado corporativo, com foco em automação de processos e análise de dados."
                          : "Instituto de pesquisa dedicado ao avanço da inteligência artificial e suas aplicações em benefício da sociedade."}
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-blue-100 text-blue-700">Patrocinador Diamante</Badge>
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Visitar Site
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ouro">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 flex justify-center">
                      <div className="relative h-24 w-48">
                        <Image
                          src={`/placeholder.svg?height=96&width=192&text=Patrocinador+Ouro+${i}`}
                          alt={`Patrocinador Ouro ${i}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        {i === 1 ? "DataVision Analytics" : i === 2 ? "Neural Systems" : "CloudTech Solutions"}
                      </h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        {i === 1
                          ? "Especialista em análise de dados e visualização para tomada de decisões estratégicas."
                          : i === 2
                            ? "Desenvolvedora de sistemas de aprendizado profundo para aplicações industriais."
                            : "Provedora de infraestrutura em nuvem para processamento de grandes volumes de dados."}
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-yellow-100 text-yellow-700">Patrocinador Ouro</Badge>
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Visitar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="prata">
              <div className="grid md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-gray-50 to-slate-100 p-4 flex justify-center">
                      <div className="relative h-20 w-40">
                        <Image
                          src={`/placeholder.svg?height=80&width=160&text=Patrocinador+Prata+${i}`}
                          alt={`Patrocinador Prata ${i}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-base font-bold mb-1">
                        {["InterfaceLab", "AI Solutions", "SmartTech", "DataFlow"][i - 1]}
                      </h3>
                      <p className="text-gray-700 mb-3 text-xs">
                        {
                          [
                            "Especialista em design de interfaces inteligentes.",
                            "Consultoria em implementação de IA para negócios.",
                            "Desenvolvimento de dispositivos inteligentes.",
                            "Plataforma de processamento de dados em tempo real.",
                          ][i - 1]
                        }
                      </p>
                      <Badge className="bg-gray-100 text-gray-700">Patrocinador Prata</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bronze">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 flex justify-center">
                      <div className="relative h-16 w-32">
                        <Image
                          src={`/placeholder.svg?height=64&width=128&text=Bronze+${i + 1}`}
                          alt={`Patrocinador Bronze ${i + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="text-sm font-bold text-center">
                        {["Tech Startup", "AI Lab", "Data Co.", "ML Systems", "Interface Design", "Cloud Services"][i]}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Institutional Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Instituições</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apoio Institucional</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Instituições acadêmicas e organizações que apoiam a realização do IX CONCIFA.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Universidade Federal de Tecnologia",
              "Sociedade Brasileira de Computação",
              "Fundação de Amparo à Pesquisa",
              "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
              "Associação Brasileira de Inteligência Artificial",
              "Instituto de Pesquisas Tecnológicas",
              "Ministério da Ciência, Tecnologia e Inovações",
              "Associação de Pós-Graduação em Computação",
            ].map((institution, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-white p-4 flex justify-center">
                  <div className="relative h-24 w-48">
                    <Image
                      src={`/placeholder.svg?height=96&width=192&text=Instituição+${i + 1}`}
                      alt={institution}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium text-sm">{institution}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Mídia</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Parceiros de Mídia</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Veículos de comunicação e plataformas que divulgam e cobrem o IX CONCIFA.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-white p-3 flex justify-center">
                  <div className="relative h-16 w-32">
                    <Image
                      src={`/placeholder.svg?height=64&width=128&text=Mídia+${i + 1}`}
                      alt={`Parceiro de Mídia ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-3 text-center">
                  <h3 className="text-xs font-medium">
                    {["Tech News Portal", "AI Magazine", "Science Journal", "Innovation Channel", "Research Blog"][i]}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Oportunidade</Badge>
              <h2 className="text-3xl font-bold mb-4">Torne-se um Patrocinador</h2>
              <p className="text-xl mb-6">
                Sua empresa ou instituição pode fazer parte do IX CONCIFA e contribuir para o avanço da pesquisa e
                inovação em inteligência artificial.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                  <span>Visibilidade para sua marca em um evento de referência na área</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                  <span>Networking com pesquisadores, profissionais e estudantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                  <span>Acesso a talentos e novas tecnologias</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                  <span>Associação da sua marca à inovação e pesquisa científica</span>
                </li>
              </ul>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Solicitar Informações
              </Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Seja+um+Patrocinador"
                alt="Seja um Patrocinador"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
