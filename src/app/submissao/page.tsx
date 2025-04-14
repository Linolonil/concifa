import { Calendar, FileText, CheckCircle, AlertCircle, Download, Upload, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SubmissaoPage() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Submissão</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Submissão de Trabalhos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Submeta seu trabalho para o IX CONCIFA e compartilhe suas pesquisas e descobertas com a comunidade
              acadêmica.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Datas</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Datas Importantes</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { date: "15 de Janeiro, 2025", title: "Início das Submissões", icon: Calendar, color: "blue" },
              { date: "15 de Março, 2025", title: "Encerramento das Submissões", icon: Calendar, color: "red" },
              { date: "01 de Abril, 2025", title: "Notificação de Aceitação", icon: CheckCircle, color: "green" },
              { date: "10 de Abril, 2025", title: "Versão Final", icon: FileText, color: "purple" },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}>
                    <item.icon className={`h-8 w-8 text-${item.color}-700`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className={`text-${item.color}-700`}>{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="mt-8 bg-yellow-50 border-yellow-200">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <AlertTitle className="text-yellow-800">Atenção</AlertTitle>
            <AlertDescription className="text-yellow-700">
              Não serão aceitas submissões após o prazo final. Recomendamos que os autores não deixem para o último dia.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Diretrizes</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diretrizes para Submissão</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Antes de submeter seu trabalho, leia atentamente as diretrizes abaixo para garantir que sua submissão
              esteja de acordo com os requisitos do evento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Tipos de Trabalho</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <h4 className="font-semibold">Artigo Completo</h4>
                  </div>
                  <p className="text-gray-700">
                    Trabalhos originais com resultados completos de pesquisa. Devem ter entre 10 e 12 páginas, incluindo
                    figuras e referências.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    <h4 className="font-semibold">Artigo Curto</h4>
                  </div>
                  <p className="text-gray-700">
                    Trabalhos com resultados preliminares ou em andamento. Devem ter entre 4 e 6 páginas, incluindo
                    figuras e referências.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <h4 className="font-semibold">Pôster</h4>
                  </div>
                  <p className="text-gray-700">
                    Apresentação visual de trabalhos em andamento ou ideias inovadoras. Resumo de até 2 páginas.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Tópicos de Interesse</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Inteligência Artificial",
                  "Interfaces Homem-Máquina",
                  "Processamento de Linguagem Natural",
                  "Visão Computacional",
                  "Aprendizado de Máquina",
                  "Ética em IA",
                  "IA Generativa",
                  "Robótica",
                  "Computação Afetiva",
                  "Sistemas Inteligentes",
                  "Realidade Virtual e Aumentada",
                  "Impacto Social da IA",
                ].map((topic, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Formato e Requisitos</h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium block">Formato do Arquivo</span>
                        <span className="text-gray-600">Os trabalhos devem ser submetidos em formato PDF.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium block">Template</span>
                        <span className="text-gray-600">
                          Utilize o template oficial do evento para formatar seu trabalho.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium block">Idioma</span>
                        <span className="text-gray-600">
                          Os trabalhos podem ser submetidos em Português, Inglês ou Espanhol.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium block">Anonimato</span>
                        <span className="text-gray-600">
                          Os trabalhos devem ser submetidos em formato anônimo para avaliação cega pelos revisores.
                        </span>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      Template LaTeX
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Template Word
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mt-8 mb-4">Perguntas Frequentes</h3>
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-4">Posso submeter mais de um trabalho?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Sim, cada autor pode submeter até 3 trabalhos como autor principal, e participar como coautor em
                    outros trabalhos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-4">Como funciona o processo de revisão?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Todos os trabalhos passam por um processo de revisão duplo-cega por pelo menos dois revisores
                    especialistas na área.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-4">
                    É necessário que o autor apresente o trabalho no evento?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Sim, pelo menos um dos autores deve se inscrever no evento e apresentar o trabalho para que ele seja
                    incluído nos anais.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-4">Onde serão publicados os trabalhos aceitos?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Os trabalhos aceitos serão publicados nos Anais do IX CONCIFA, que possui ISSN e será indexado em
                    bases de dados acadêmicas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Processo</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Submeter seu Trabalho</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Siga os passos abaixo para submeter seu trabalho para o IX CONCIFA.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Prepare seu Trabalho",
                  description: "Prepare seu trabalho seguindo o template e as diretrizes do evento.",
                  icon: FileText,
                },
                {
                  title: "Crie uma Conta",
                  description: "Acesse o sistema de submissão e crie uma conta ou faça login se já tiver uma.",
                  icon: CheckCircle,
                },
                {
                  title: "Preencha o Formulário",
                  description: "Preencha o formulário de submissão com as informações do trabalho e dos autores.",
                  icon: FileText,
                },
                {
                  title: "Faça o Upload",
                  description: "Faça o upload do arquivo PDF do seu trabalho no sistema.",
                  icon: Upload,
                },
                {
                  title: "Confirme a Submissão",
                  description: "Revise todas as informações e confirme a submissão do seu trabalho.",
                  icon: CheckCircle,
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end items-center">
                    <div
                      className={`relative z-10 bg-white p-6 rounded-lg shadow-md border-l-4 ${i % 2 === 0 ? "border-l-blue-600" : "border-l-purple-600"}`}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-0 md:w-0 items-center justify-center relative z-20">
                    <div
                      className={`w-10 h-10 rounded-full ${i % 2 === 0 ? "bg-blue-600" : "bg-purple-600"} flex items-center justify-center text-white`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2">
              <Upload className="h-5 w-5" />
              Acessar Sistema de Submissão
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Dúvidas sobre o processo de submissão?</h2>
          <p className="text-gray-700 mb-6">
            Entre em contato com a comissão organizadora através do e-mail{" "}
            <span className="text-blue-700 font-medium">submissao@concifa.com.br</span>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
