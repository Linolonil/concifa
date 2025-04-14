import Image from "next/image"
import {  BookOpen, Download, ExternalLink, Filter, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SelectVButon from "./component/searchButton"

export default function PublicacoesPage() {
 
  
  
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Publicações</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Publicações Acadêmicas</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Acesse os anais e publicações das edições anteriores do CONCIFA e explore os trabalhos apresentados.
            </p>
          </div>
        </div>
      </section>

      <SelectVButon/>

      {/* Publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Filtros</h3>
                  <Filter className="h-5 w-5 text-gray-500" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Ano</h4>
                    <div className="space-y-2">
                      {[2024, 2023, 2022, 2021, 2020].map((year) => (
                        <div key={year} className="flex items-center">
                          <input type="checkbox" id={`year-${year}`} className="mr-2" />
                          <label htmlFor={`year-${year}`} className="text-gray-700">
                            {year}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Tipo de Publicação</h4>
                    <div className="space-y-2">
                      {[
                        { id: "article", label: "Artigo Completo" },
                        { id: "short", label: "Artigo Curto" },
                        { id: "poster", label: "Pôster" },
                      ].map((type) => (
                        <div key={type.id} className="flex items-center">
                          <input type="checkbox" id={type.id} className="mr-2" />
                          <label htmlFor={type.id} className="text-gray-700">
                            {type.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Área Temática</h4>
                    <div className="space-y-2">
                      {[
                        "Inteligência Artificial",
                        "Interfaces Homem-Máquina",
                        "Processamento de Linguagem Natural",
                        "Visão Computacional",
                        "Ética em IA",
                      ].map((area, i) => (
                        <div key={i} className="flex items-center">
                          <input type="checkbox" id={`area-${i}`} className="mr-2" />
                          <label htmlFor={`area-${i}`} className="text-gray-700">
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>

            {/* Publications List */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Resultados</h2>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Ordenar por:</span>
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Mais Recentes</SelectItem>
                      <SelectItem value="oldest">Mais Antigos</SelectItem>
                      <SelectItem value="title">Título (A-Z)</SelectItem>
                      <SelectItem value="citations">Mais Citados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="md:col-span-1 bg-gray-100 p-4 flex items-center justify-center">
                        <div className="aspect-[3/4] relative w-full max-w-[120px]">
                          <Image
                            src={`/placeholder.svg?height=160&width=120&text=Paper+${i}`}
                            alt={`Publicação ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <CardContent className="p-6 md:col-span-3">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                            {i % 3 === 0 ? "Artigo Completo" : i % 3 === 1 ? "Artigo Curto" : "Pôster"}
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                            {i % 2 === 0 ? "VIII CONCIFA (2024)" : "VII CONCIFA (2023)"}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold mb-2">
                          {i % 4 === 0
                            ? "Análise Comparativa de Algoritmos de Aprendizado Profundo para Processamento de Linguagem Natural"
                            : i % 4 === 1
                              ? "Interfaces Conversacionais Baseadas em IA: Um Estudo de Caso"
                              : i % 4 === 2
                                ? "Ética e Viés em Sistemas de Recomendação: Desafios e Soluções"
                                : "Visão Computacional Aplicada à Detecção de Emoções em Ambientes Educacionais"}
                        </h3>

                        <p className="text-gray-600 mb-3">
                          <span className="font-medium">Autores:</span> Silva, J.; Oliveira, M.; Santos, A.
                        </p>

                        <p className="text-gray-700 mb-4 line-clamp-2">
                          Este trabalho apresenta uma análise detalhada sobre{" "}
                          {i % 4 === 0
                            ? "algoritmos de aprendizado profundo para processamento de linguagem natural"
                            : i % 4 === 1
                              ? "interfaces conversacionais baseadas em inteligência artificial"
                              : i % 4 === 2
                                ? "questões éticas e viés em sistemas de recomendação"
                                : "aplicações de visão computacional para detecção de emoções"}
                          , destacando os principais desafios e oportunidades nesta área.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className="bg-gray-50">
                            IA
                          </Badge>
                          <Badge variant="outline" className="bg-gray-50">
                            {i % 4 === 0
                              ? "NLP"
                              : i % 4 === 1
                                ? "Interfaces"
                                : i % 4 === 2
                                  ? "Ética"
                                  : "Visão Computacional"}
                          </Badge>
                          <Badge variant="outline" className="bg-gray-50">
                            {i % 3 === 0 ? "Deep Learning" : i % 3 === 1 ? "Interação" : "Algoritmos"}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{i % 2 === 0 ? "Abril 2024" : "Abril 2023"}</span>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <ExternalLink className="h-4 w-4" />
                              Ver Online
                            </Button>
                            <Button size="sm" className="gap-1">
                              <Download className="h-4 w-4" />
                              PDF
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceedings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Anais</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Anais Completos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Acesse os anais completos das edições anteriores do CONCIFA.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[8, 7, 6, 5].map((edition) => (
              <Card key={edition} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Anais+${edition}ª+Edição`}
                    alt={`Anais ${edition}ª Edição`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Anais do {edition}º CONCIFA</h3>
                  <p className="text-gray-600 mb-4">{2025 - (9 - edition)}</p>
                  <p className="text-gray-700 mb-4">ISSN: 2966-425X</p>
                  <div className="flex gap-2">
                    <Button className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Issues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">
              Edições Especiais
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Edições Especiais em Periódicos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Trabalhos selecionados do CONCIFA são publicados em edições especiais de periódicos científicos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center p-6">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {i === 1
                      ? "Journal of Artificial Intelligence Research"
                      : i === 2
                        ? "Human-Computer Interaction"
                        : "IEEE Transactions on Neural Networks and Learning Systems"}
                  </h3>
                  <p className="text-purple-700 mb-3">Edição Especial: {2024 - i + 1}</p>
                  <p className="text-gray-700 mb-4">
                    Edição especial com os melhores trabalhos selecionados do {9 - i}º CONCIFA.
                  </p>
                  <Button variant="outline" className="w-full gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Acessar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
