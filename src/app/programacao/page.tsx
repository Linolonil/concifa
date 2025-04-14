import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, BookOpen, Coffee, Mic, PanelRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramacaoPage() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Programação</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Programação Completa</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Confira a programação completa do IX CONCIFA, com palestras, workshops, mesas redondas e apresentações de
              trabalhos.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { day: "Dia 1", date: "11 de Abril, 2025", focus: "Abertura e Palestras Principais" },
              { day: "Dia 2", date: "12 de Abril, 2025", focus: "Workshops e Apresentações" },
              { day: "Dia 3", date: "13 de Abril, 2025", focus: "Mesas Redondas e Encerramento" },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{item.day}</h3>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{item.focus}</p>
                  <Link href={`#dia-${i + 1}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Programação
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Agenda Detalhada</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Programação por Dia</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Explore a programação detalhada do IX CONCIFA, organizada por dia e horário.
            </p>
          </div>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1">Dia 1 (11/04)</TabsTrigger>
              <TabsTrigger value="day2">Dia 2 (12/04)</TabsTrigger>
              <TabsTrigger value="day3">Dia 3 (13/04)</TabsTrigger>
            </TabsList>

            {["day1", "day2", "day3"].map((day, dayIndex) => (
              <TabsContent key={day} value={day} id={`dia-${dayIndex + 1}`}>
                <div className="space-y-8">
                  {[
                    { time: "08:00 - 09:00", title: "Credenciamento e Welcome Coffee", type: "coffee" },
                    {
                      time: "09:00 - 10:30",
                      title: dayIndex === 0 ? "Cerimônia de Abertura" : `Palestra Principal ${dayIndex + 1}`,
                      type: "keynote",
                    },
                    { time: "10:30 - 11:00", title: "Coffee Break", type: "coffee" },
                    {
                      time: "11:00 - 12:30",
                      title:
                        dayIndex === 0
                          ? "Palestra Principal 1"
                          : dayIndex === 1
                            ? "Sessões Paralelas de Apresentação"
                            : "Mesa Redonda: Futuro da IA",
                      type: dayIndex === 1 ? "session" : "keynote",
                    },
                    { time: "12:30 - 14:00", title: "Almoço", type: "coffee" },
                    {
                      time: "14:00 - 15:30",
                      title:
                        dayIndex === 0
                          ? "Sessões Paralelas de Apresentação"
                          : dayIndex === 1
                            ? "Workshops Temáticos"
                            : "Apresentação dos Melhores Trabalhos",
                      type: dayIndex === 0 ? "session" : dayIndex === 1 ? "workshop" : "session",
                    },
                    { time: "15:30 - 16:00", title: "Coffee Break", type: "coffee" },
                    {
                      time: "16:00 - 17:30",
                      title:
                        dayIndex === 0
                          ? "Mesa Redonda: Ética na IA"
                          : dayIndex === 1
                            ? "Sessões Paralelas de Apresentação"
                            : "Cerimônia de Encerramento e Premiação",
                      type: dayIndex === 0 ? "panel" : dayIndex === 1 ? "session" : "keynote",
                    },
                  ].map((session, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="md:w-1/4 lg:w-1/5">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">{session.time}</span>
                        </div>
                      </div>
                      <div className="md:w-3/4 lg:w-4/5">
                        <Card
                          className={`border-l-4 ${
                            session.type === "keynote"
                              ? "border-l-blue-600"
                              : session.type === "session"
                                ? "border-l-purple-600"
                                : session.type === "workshop"
                                  ? "border-l-green-600"
                                  : session.type === "panel"
                                    ? "border-l-orange-600"
                                    : "border-l-gray-400"
                          }`}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div
                                className={`p-3 rounded-full ${
                                  session.type === "keynote"
                                    ? "bg-blue-100 text-blue-700"
                                    : session.type === "session"
                                      ? "bg-purple-100 text-purple-700"
                                      : session.type === "workshop"
                                        ? "bg-green-100 text-green-700"
                                        : session.type === "panel"
                                          ? "bg-orange-100 text-orange-700"
                                          : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {session.type === "keynote" ? (
                                  <Mic className="h-6 w-6" />
                                ) : session.type === "session" ? (
                                  <Users className="h-6 w-6" />
                                ) : session.type === "workshop" ? (
                                  <BookOpen className="h-6 w-6" />
                                ) : session.type === "panel" ? (
                                  <PanelRight className="h-6 w-6" />
                                ) : (
                                  <Coffee className="h-6 w-6" />
                                )}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                                {session.type !== "coffee" && (
                                  <>
                                    <div className="flex flex-wrap gap-4 mb-3">
                                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                                        <MapPin className="h-4 w-4" />
                                        <span>Auditório {i % 3 === 0 ? "Principal" : `${i}`}</span>
                                      </div>
                                      {session.type === "keynote" && (
                                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                                          <Users className="h-4 w-4" />
                                          <span>Dr. Nome do Palestrante</span>
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-gray-700">
                                      {session.type === "keynote"
                                        ? "Uma visão abrangente sobre os avanços recentes em inteligência artificial e suas implicações para a sociedade."
                                        : session.type === "session"
                                          ? "Apresentações de trabalhos científicos selecionados nas áreas de IA, interfaces e comportamento humano."
                                          : session.type === "workshop"
                                            ? "Atividades práticas e hands-on para aprofundar conhecimentos em ferramentas e metodologias específicas."
                                            : session.type === "panel"
                                              ? "Discussão entre especialistas sobre os desafios éticos e sociais da inteligência artificial."
                                              : "Momento para networking e troca de experiências entre os participantes."}
                                    </p>
                                    {(session.type === "session" || session.type === "workshop") && (
                                      <Button variant="link" className="p-0 h-auto mt-2">
                                        Ver detalhes
                                      </Button>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Palestrantes</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Palestrantes Principais</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Conheça os especialistas que compartilharão seus conhecimentos e experiências no IX CONCIFA.
            </p>
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
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Dia {i}, {10 + i}:00
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver perfil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100 px-4 py-1">Workshops</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshops Temáticos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Participe de workshops práticos e aprofunde seus conhecimentos em áreas específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Introdução ao Processamento de Linguagem Natural com Python",
              "Desenvolvimento de Interfaces Conversacionais",
              "Ética e Viés em Algoritmos de IA",
              "Visão Computacional Aplicada",
            ].map((workshop, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{workshop}</h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>Dia 2, 14:00 - 15:30</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>Sala {i + 1}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <Users className="h-4 w-4" />
                          <span>Vagas: 30</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Workshop prático com foco em {workshop.toLowerCase()}. Os participantes terão a oportunidade de
                        aplicar os conceitos apresentados em exercícios práticos.
                      </p>
                      <Button>Inscrever-se</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Baixe a Programação Completa</h2>
          <div className="flex justify-center gap-4">
            <Button className="gap-2">
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
                className="h-5 w-5"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              PDF
            </Button>
            <Button variant="outline" className="gap-2">
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
                className="h-5 w-5"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              iCalendar
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Garanta sua Participação</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Não perca a oportunidade de participar do IX CONCIFA e conhecer as últimas tendências e inovações em
            inteligência artificial e interfaces.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Inscreva-se Agora
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
