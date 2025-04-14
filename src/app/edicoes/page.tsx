import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, ChevronRight, ExternalLink, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EdicoesPage() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Edições</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Edições Anteriores</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça a história do CONCIFA através de suas edições anteriores, temas, destaques e impactos.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">História</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Linha do Tempo</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">Acompanhe a evolução do CONCIFA ao longo dos anos.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

            <div className="space-y-12">
              {[8, 7, 6, 5, 4, 3, 2, 1].map((edition) => (
                <div
                  key={edition}
                  className={`flex flex-col md:flex-row gap-4 md:gap-8 ${edition % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end items-center">
                    <div className="relative z-10 bg-white p-6 rounded-lg shadow-md border-l-4 border-l-blue-600 max-w-lg">
                      <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100">{edition}ª Edição</Badge>
                      <h3 className="text-xl font-bold mb-2">
                        {edition === 8
                          ? "Inteligência Artificial e Sociedade: Desafios e Oportunidades"
                          : edition === 7
                            ? "Fronteiras da IA: Cognição, Emoção e Criatividade"
                            : edition === 6
                              ? "IA Responsável: Ética, Transparência e Confiabilidade"
                              : edition === 5
                                ? "Interfaces Inteligentes para um Mundo em Transformação"
                                : edition === 4
                                  ? "IA e o Futuro do Trabalho"
                                  : edition === 3
                                    ? "Aprendizado de Máquina e Aplicações"
                                    : edition === 2
                                      ? "Interfaces Naturais e Multimodais"
                                      : "Fundamentos e Aplicações de IA"}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{2025 - (9 - edition)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>São Paulo, Brasil</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{700 + edition * 50} participantes</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {edition === 8
                          ? "Focou nos impactos sociais da IA, discutindo questões éticas, regulatórias e de inclusão."
                          : edition === 7
                            ? "Explorou as fronteiras da IA em áreas como criatividade, arte e emoção."
                            : edition === 6
                              ? "Abordou a importância da ética, transparência e confiabilidade no desenvolvimento de sistemas de IA."
                              : edition === 5
                                ? "Discutiu o papel das interfaces inteligentes na transformação digital da sociedade."
                                : edition === 4
                                  ? "Analisou os impactos da IA no mercado de trabalho e nas profissões do futuro."
                                  : edition === 3
                                    ? "Focou em técnicas de aprendizado de máquina e suas aplicações práticas."
                                    : edition === 2
                                      ? "Explorou interfaces naturais e multimodais para interação humano-computador."
                                      : "Primeira edição do evento, focada nos fundamentos e aplicações básicas de IA."}
                      </p>
                      <Link href={`/edicoes/${edition}`}>
                        <Button variant="outline" size="sm" className="gap-1">
                          Ver Detalhes
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="hidden md:flex w-0 md:w-0 items-center justify-center relative z-20">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      {edition}
                    </div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Editions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Destaques</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Edições em Destaque</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Conheça mais detalhes sobre as edições mais recentes do CONCIFA.
            </p>
          </div>

          <Tabs defaultValue="edition8" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="edition8">VIII Edição (2024)</TabsTrigger>
              <TabsTrigger value="edition7">VII Edição (2023)</TabsTrigger>
              <TabsTrigger value="edition6">VI Edição (2022)</TabsTrigger>
              <TabsTrigger value="edition5">V Edição (2021)</TabsTrigger>
            </TabsList>

            {[8, 7, 6, 5].map((edition) => (
              <TabsContent key={edition} value={`edition${edition}`}>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-md mb-6">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=${edition}ª+Edição`}
                        alt={`${edition}ª Edição`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 text-center">
                          <h4 className="text-sm text-gray-500 mb-1">Participantes</h4>
                          <p className="text-2xl font-bold text-blue-700">{700 + edition * 50}+</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <h4 className="text-sm text-gray-500 mb-1">Trabalhos</h4>
                          <p className="text-2xl font-bold text-purple-700">{50 + edition * 20}+</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <h4 className="text-sm text-gray-500 mb-1">Palestrantes</h4>
                          <p className="text-2xl font-bold text-green-700">{10 + edition}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <h4 className="text-sm text-gray-500 mb-1">Países</h4>
                          <p className="text-2xl font-bold text-orange-700">{5 + edition / 2}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {edition === 8
                        ? "Inteligência Artificial e Sociedade: Desafios e Oportunidades"
                        : edition === 7
                          ? "Fronteiras da IA: Cognição, Emoção e Criatividade"
                          : edition === 6
                            ? "IA Responsável: Ética, Transparência e Confiabilidade"
                            : "Interfaces Inteligentes para um Mundo em Transformação"}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{edition}ª Edição</Badge>
                      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">{2025 - (9 - edition)}</Badge>
                      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">São Paulo, Brasil</Badge>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {edition === 8
                        ? "A oitava edição do CONCIFA focou nos impactos sociais da inteligência artificial, discutindo questões éticas, regulatórias e de inclusão. O evento contou com palestrantes de renome internacional e abordou temas como viés algorítmico, privacidade de dados, IA generativa e seus impactos na sociedade."
                        : edition === 7
                          ? "A sétima edição explorou as fronteiras da IA em áreas como criatividade, arte e emoção. Foram discutidos temas como IA generativa, computação afetiva, interfaces cérebro-computador e o papel da IA na criação artística e cultural."
                          : edition === 6
                            ? "A sexta edição abordou a importância da ética, transparência e confiabilidade no desenvolvimento de sistemas de IA. Foram discutidos temas como explicabilidade, governança de dados, viés algorítmico e regulação da IA."
                            : "A quinta edição discutiu o papel das interfaces inteligentes na transformação digital da sociedade. Foram abordados temas como interfaces conversacionais, realidade aumentada e virtual, e o futuro da interação humano-computador."}
                    </p>

                    <h4 className="font-bold text-lg mb-3">Destaques</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                        <span className="text-gray-700">
                          {edition === 8
                            ? "Palestra magna sobre 'O Futuro da IA e seus Impactos Sociais' com o Dr. Especialista Internacional"
                            : edition === 7
                              ? "Workshop sobre 'IA Generativa e Criatividade Computacional'"
                              : edition === 6
                                ? "Mesa redonda sobre 'Ética e Regulação da IA'"
                                : "Demonstração de novas interfaces de realidade mista"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                        <span className="text-gray-700">
                          {edition === 8
                            ? "Lançamento do livro 'IA e Sociedade: Perspectivas Multidisciplinares'"
                            : edition === 7
                              ? "Exposição de arte gerada por IA"
                              : edition === 6
                                ? "Lançamento do 'Guia de Boas Práticas para IA Responsável'"
                                : "Competição de desenvolvimento de interfaces inteligentes"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                        <span className="text-gray-700">
                          {edition === 8
                            ? "Hackathon de IA para Impacto Social"
                            : edition === 7
                              ? "Concerto com música composta por IA"
                              : edition === 6
                                ? "Premiação de melhores práticas em IA responsável"
                                : "Demonstração de interfaces cérebro-computador"}
                        </span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Button className="gap-2">
                        <Download className="h-4 w-4" />
                        Anais
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Galeria de Fotos
                      </Button>
                      <Link href={`/edicoes/${edition}`}>
                        <Button variant="outline" className="gap-2">
                          Ver Detalhes Completos
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Estatísticas</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CONCIFA em Números</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Veja o crescimento e impacto do CONCIFA ao longo dos anos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Participantes", value: "5,000+", description: "Ao longo de todas as edições" },
              { title: "Trabalhos", value: "1,200+", description: "Publicados nos anais do evento" },
              { title: "Palestrantes", value: "120+", description: "Nacionais e internacionais" },
              { title: "Países", value: "25+", description: "Representados no evento" },
            ].map((stat, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-blue-700">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-lg font-medium text-gray-900 mb-1">{stat.title}</p>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Crescimento ao Longo dos Anos</h3>
                <p className="text-gray-700 mb-4">
                  Desde sua primeira edição em 2017, o CONCIFA tem crescido consistentemente em número de participantes,
                  trabalhos submetidos e impacto acadêmico. O evento se consolidou como um dos principais fóruns de
                  discussão sobre inteligência artificial e suas interfaces no Brasil.
                </p>
                <p className="text-gray-700">
                  A cada edição, buscamos expandir nosso alcance e relevância, trazendo palestrantes de renome
                  internacional e abordando temas de fronteira na área de IA e interfaces.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Gráfico+de+Crescimento"
                    alt="Gráfico de Crescimento"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Faça Parte da História do CONCIFA</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Participe da próxima edição do CONCIFA e contribua para o avanço da pesquisa em inteligência artificial e
            interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Inscreva-se no IX CONCIFA
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
