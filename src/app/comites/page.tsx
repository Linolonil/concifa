import Image from "next/image"
import { ExternalLink, Mail, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComitesPage() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Organização</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Comitês</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça os comitês responsáveis pela organização e avaliação científica do IX CONCIFA.
            </p>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="organizador" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="organizador">Comitê Organizador</TabsTrigger>
              <TabsTrigger value="cientifico">Comitê Científico</TabsTrigger>
              <TabsTrigger value="estudantil">Comitê Estudantil</TabsTrigger>
            </TabsList>

            <TabsContent value="organizador">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Organização</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Comitê Organizador</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-gray-600">
                  O Comitê Organizador é responsável pelo planejamento, coordenação e execução de todas as atividades
                  relacionadas ao IX CONCIFA.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Coordenador"
                        alt="Coordenador Geral"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100">Coordenador Geral</Badge>
                      <h3 className="font-bold text-xl mb-1">Prof. Dr. Roberto Almeida</h3>
                      <p className="text-gray-600 mb-2">Universidade Federal de Tecnologia</p>
                      <p className="text-gray-700 text-sm mb-3">
                        Professor Titular do Departamento de Ciência da Computação e Diretor do Centro de Pesquisa em
                        Inteligência Artificial.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Mail className="h-4 w-4" />
                          Contato
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Currículo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Vice"
                        alt="Vice-Coordenadora"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100">
                        Vice-Coordenadora
                      </Badge>
                      <h3 className="font-bold text-xl mb-1">Profa. Dra. Carla Mendes</h3>
                      <p className="text-gray-600 mb-2">Universidade Estadual de Pesquisa</p>
                      <p className="text-gray-700 text-sm mb-3">
                        Professora Associada do Departamento de Engenharia de Software e Coordenadora do Laboratório de
                        Interfaces Inteligentes.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Mail className="h-4 w-4" />
                          Contato
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Currículo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Prof. Dr. Carlos Santos",
                    role: "Coordenador de Programação",
                    institution: "Universidade Federal do Rio de Janeiro",
                  },
                  {
                    name: "Profa. Dra. Ana Oliveira",
                    role: "Coordenadora de Finanças",
                    institution: "Universidade de São Paulo",
                  },
                  {
                    name: "Prof. Dr. Marcos Silva",
                    role: "Coordenador de Logística",
                    institution: "Universidade Federal de Minas Gerais",
                  },
                  {
                    name: "Profa. Dra. Juliana Costa",
                    role: "Coordenadora de Comunicação",
                    institution: "Universidade de Brasília",
                  },
                  {
                    name: "Prof. Dr. Ricardo Pereira",
                    role: "Coordenador de Publicações",
                    institution: "Universidade Estadual de Campinas",
                  },
                  {
                    name: "Profa. Dra. Fernanda Lima",
                    role: "Coordenadora de Parcerias",
                    institution: "Instituto Tecnológico de Aeronáutica",
                  },
                ].map((member, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <Image
                            src={`/placeholder.svg?height=80&width=80&text=M${i + 1}`}
                            alt={member.name}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                        <p className="text-purple-700 text-sm mb-1">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-3">{member.institution}</p>
                        <Button variant="outline" size="sm" className="w-full gap-1">
                          <Mail className="h-4 w-4" />
                          Contato
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cientifico">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Científico</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Comitê Científico</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-gray-600">
                  O Comitê Científico é responsável pela avaliação e seleção dos trabalhos submetidos ao IX CONCIFA,
                  garantindo a qualidade e relevância científica do evento.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Presidente"
                        alt="Presidente do Comitê Científico"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100">
                        Presidente do Comitê Científico
                      </Badge>
                      <h3 className="font-bold text-xl mb-1">Prof. Dr. Eduardo Martins</h3>
                      <p className="text-gray-600 mb-2">Universidade de São Paulo</p>
                      <p className="text-gray-700 text-sm mb-3">
                        Professor Titular e Pesquisador Nível 1A do CNPq, com mais de 200 artigos publicados em
                        periódicos internacionais na área de Inteligência Artificial.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Mail className="h-4 w-4" />
                          Contato
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Currículo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Vice"
                        alt="Vice-Presidente do Comitê Científico"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100">
                        Vice-Presidente do Comitê Científico
                      </Badge>
                      <h3 className="font-bold text-xl mb-1">Profa. Dra. Luciana Ferreira</h3>
                      <p className="text-gray-600 mb-2">Universidade Federal do Rio Grande do Sul</p>
                      <p className="text-gray-700 text-sm mb-3">
                        Professora Titular com extensa experiência em avaliação de trabalhos científicos e editora
                        associada de periódicos internacionais na área de Computação.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Mail className="h-4 w-4" />
                          Contato
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Currículo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 text-center">Membros do Comitê Científico por Área</h3>

                <Tabs defaultValue="ia" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="ia">Inteligência Artificial</TabsTrigger>
                    <TabsTrigger value="interfaces">Interfaces</TabsTrigger>
                    <TabsTrigger value="etica">Ética e Sociedade</TabsTrigger>
                    <TabsTrigger value="aplicacoes">Aplicações</TabsTrigger>
                  </TabsList>

                  {["ia", "interfaces", "etica", "aplicacoes"].map((area) => (
                    <TabsContent key={area} value={area}>
                      <div className="grid md:grid-cols-3 gap-4">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={`/placeholder.svg?height=48&width=48&text=${i + 1}`}
                                alt={`Membro ${i + 1}`}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                {area === "ia"
                                  ? `Prof. Dr. Antônio ${i + 1}`
                                  : area === "interfaces"
                                    ? `Profa. Dra. Beatriz ${i + 1}`
                                    : area === "etica"
                                      ? `Prof. Dr. Carlos ${i + 1}`
                                      : `Profa. Dra. Daniela ${i + 1}`}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {area === "ia"
                                  ? "Universidade Federal"
                                  : area === "interfaces"
                                    ? "Universidade Estadual"
                                    : area === "etica"
                                      ? "Instituto Tecnológico"
                                      : "Centro de Pesquisa"}{" "}
                                {i % 3 === 0 ? "de São Paulo" : i % 3 === 1 ? "do Rio de Janeiro" : "de Minas Gerais"}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  O Comitê Científico conta com mais de 50 pesquisadores de instituições nacionais e internacionais.
                </p>
                <Button variant="outline">Ver Lista Completa</Button>
              </div>
            </TabsContent>

            <TabsContent value="estudantil">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100 px-4 py-1">Estudantil</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Comitê Estudantil</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-gray-600">
                  O Comitê Estudantil é formado por alunos de graduação e pós-graduação que auxiliam na organização e
                  execução do evento, proporcionando uma experiência prática de gestão acadêmica.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Coord"
                        alt="Coordenador Estudantil"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100">Coordenador Estudantil</Badge>
                      <h3 className="font-bold text-xl mb-1">Pedro Henrique Silva</h3>
                      <p className="text-gray-600 mb-2">
                        Doutorando em Ciência da Computação - Universidade Federal de Tecnologia
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        Pesquisador na área de Aprendizado de Máquina e Processamento de Linguagem Natural, com
                        experiência em organização de eventos científicos.
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Mail className="h-4 w-4" />
                        Contato
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Vice"
                        alt="Vice-Coordenadora Estudantil"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100">
                        Vice-Coordenadora Estudantil
                      </Badge>
                      <h3 className="font-bold text-xl mb-1">Marina Santos</h3>
                      <p className="text-gray-600 mb-2">
                        Mestranda em Engenharia de Software - Universidade Estadual de Pesquisa
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        Pesquisadora na área de Interfaces Inteligentes e Experiência do Usuário, com participação em
                        projetos de extensão universitária.
                      </p>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Mail className="h-4 w-4" />
                        Contato
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                          <Image
                            src={`/placeholder.svg?height=64&width=64&text=E${i + 1}`}
                            alt={`Estudante ${i + 1}`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h4 className="font-medium mb-1">{i % 2 === 0 ? `Lucas ${i + 1}` : `Amanda ${i + 1}`}</h4>
                        <p className="text-gray-600 text-xs mb-1">
                          {i % 3 === 0
                            ? "Graduando em Ciência da Computação"
                            : i % 3 === 1
                              ? "Mestrando em Inteligência Artificial"
                              : "Doutorando em Engenharia de Software"}
                        </p>
                        <p className="text-purple-700 text-xs">
                          {i % 4 === 0
                            ? "Equipe de Comunicação"
                            : i % 4 === 1
                              ? "Equipe de Logística"
                              : i % 4 === 2
                                ? "Equipe de Programação"
                                : "Equipe de Recepção"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join Committee */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Participe</Badge>
                <h2 className="text-2xl font-bold mb-4">Participe dos Comitês do CONCIFA</h2>
                <p className="text-gray-700 mb-6">
                  Você é professor, pesquisador ou estudante e gostaria de contribuir para a organização do CONCIFA?
                  Temos oportunidades para participação nos comitês organizador, científico e estudantil.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2">
                    <Users className="h-4 w-4" />
                    Manifestar Interesse
                  </Button>
                  <Button variant="outline">Mais Informações</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Junte-se+a+Nós"
                  alt="Junte-se a Nós"
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
