import Image from "next/image"
import { ExternalLink, FileText, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PalestrantesPage() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Palestrantes</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Palestrantes Convidados</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça os especialistas nacionais e internacionais que compartilharão seus conhecimentos no IX CONCIFA.
            </p>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Destaques</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Palestrantes Principais</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Nossos palestrantes principais são referências em suas áreas de atuação e trarão insights valiosos sobre
              os temas mais relevantes em inteligência artificial e suas interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Profa. Dra. Maria Silva",
                role: "Diretora do Centro de IA",
                institution: "Universidade de São Paulo",
                image: "/placeholder.svg?height=400&width=300&text=Dra.+Maria+Silva",
                bio: "Especialista em Inteligência Artificial Ética e suas aplicações em políticas públicas. Possui mais de 20 anos de experiência acadêmica e é autora de diversos livros na área.",
                topic: "IA Ética: Desafios e Oportunidades",
              },
              {
                name: "Prof. Dr. João Santos",
                role: "Pesquisador Sênior",
                institution: "Instituto de Tecnologia de Massachusetts (MIT)",
                image: "/placeholder.svg?height=400&width=300&text=Dr.+João+Santos",
                bio: "Pioneiro em sistemas de aprendizado profundo e processamento de linguagem natural. Seus trabalhos revolucionaram a forma como máquinas compreendem contextos linguísticos complexos.",
                topic: "O Futuro do Processamento de Linguagem Natural",
              },
              {
                name: "Profa. Dra. Ana Oliveira",
                role: "Coordenadora do Laboratório de Interfaces",
                institution: "Universidade Federal do Rio de Janeiro",
                image: "/placeholder.svg?height=400&width=300&text=Dra.+Ana+Oliveira",
                bio: "Pesquisadora premiada na área de interfaces cérebro-computador. Seu trabalho tem contribuído significativamente para avanços em tecnologias assistivas baseadas em IA.",
                topic: "Interfaces Cérebro-Computador: Presente e Futuro",
              },
            ].map((speaker, i) => (
              <Card key={i} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-[3/4] relative">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-purple-700 mb-1">{speaker.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{speaker.institution}</p>
                  <p className="text-gray-700 mb-4 text-sm">{speaker.bio}</p>
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <h4 className="font-medium text-blue-800">Palestra:</h4>
                    <p className="text-blue-700">{speaker.topic}</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Linkedin className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Mail className="h-4 w-4 text-gray-600" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <FileText className="h-4 w-4" />
                      Currículo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Speakers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Programação</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todos os Palestrantes</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Conheça todos os especialistas que participarão do IX CONCIFA, organizados por área temática.
            </p>
          </div>

          <Tabs defaultValue="ia" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="ia">Inteligência Artificial</TabsTrigger>
              <TabsTrigger value="interfaces">Interfaces</TabsTrigger>
              <TabsTrigger value="etica">Ética e Sociedade</TabsTrigger>
              <TabsTrigger value="aplicacoes">Aplicações</TabsTrigger>
            </TabsList>

            {["ia", "interfaces", "etica", "aplicacoes"].map((area) => (
              <TabsContent key={area} value={area} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex p-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-4">
                          <Image
                            src={`/placeholder.svg?height=96&width=96&text=P${i + 1}`}
                            alt={`Palestrante ${i + 1}`}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">
                            {area === "ia"
                              ? `Dr. Carlos Mendes ${i + 1}`
                              : area === "interfaces"
                                ? `Dra. Fernanda Lima ${i + 1}`
                                : area === "etica"
                                  ? `Dr. Ricardo Alves ${i + 1}`
                                  : `Dra. Patrícia Costa ${i + 1}`}
                          </h3>
                          <p className="text-purple-700 text-sm">
                            {area === "ia"
                              ? "Especialista em Aprendizado de Máquina"
                              : area === "interfaces"
                                ? "Pesquisadora em IHC"
                                : area === "etica"
                                  ? "Ética em IA"
                                  : "IA Aplicada à Educação"}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {area === "ia"
                              ? "Universidade Estadual de Campinas"
                              : area === "interfaces"
                                ? "Universidade Federal de Minas Gerais"
                                : area === "etica"
                                  ? "Universidade de Brasília"
                                  : "Instituto Tecnológico de Aeronáutica"}
                          </p>
                          <Button variant="link" size="sm" className="p-0 h-auto mt-1 gap-1">
                            Ver detalhes
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call for Speakers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Oportunidade</Badge>
                <h2 className="text-2xl font-bold mb-4">Chamada para Palestrantes</h2>
                <p className="text-gray-700 mb-6">
                  Você é especialista em inteligência artificial, interfaces ou áreas correlatas? Compartilhe seu
                  conhecimento e experiência no IX CONCIFA. Estamos aceitando propostas para palestras, workshops e
                  mesas redondas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button>Submeter Proposta</Button>
                  <Button variant="outline">Mais Informações</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Seja+um+Palestrante"
                  alt="Seja um Palestrante"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
