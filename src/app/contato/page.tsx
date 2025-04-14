"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Check, Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">Contato</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Entre em Contato</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estamos à disposição para esclarecer suas dúvidas e receber suas sugestões sobre o IX CONCIFA.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-4">
                  Para dúvidas gerais e informações sobre o evento, entre em contato por email.
                </p>
                <Link href="mailto:contato@concifa.com.br" className="text-blue-600 font-medium">
                  contato@concifa.com.br
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">
                  Nossa equipe está disponível para atendimento telefônico em horário comercial.
                </p>
                <Link href="tel:+551100000000" className="text-purple-600 font-medium">
                  +55 (11) 0000-0000
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">Endereço</h3>
                <p className="text-gray-600 mb-4">
                  Universidade Federal de Tecnologia, Departamento de Ciência da Computação.
                </p>
                <span className="text-green-600 font-medium">
                  Av. Principal, 1000 - Centro
                  <br />
                  São Paulo - SP, 00000-000
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Fale Conosco</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Envie sua Mensagem</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <p className="text-gray-700 mb-8">
                Preencha o formulário abaixo para entrar em contato com a equipe organizadora do IX CONCIFA. Teremos
                prazer em responder suas dúvidas e receber suas sugestões.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-3">Departamentos</h3>
                  <Tabs defaultValue="geral" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="geral">Geral</TabsTrigger>
                      <TabsTrigger value="inscricoes">Inscrições</TabsTrigger>
                      <TabsTrigger value="trabalhos">Trabalhos</TabsTrigger>
                    </TabsList>

                    <TabsContent value="geral">
                      <p className="text-gray-700">
                        Para dúvidas gerais sobre o evento, programação, palestrantes e informações institucionais.
                      </p>
                    </TabsContent>
                    <TabsContent value="inscricoes">
                      <p className="text-gray-700">
                        Para questões relacionadas a inscrições, pagamentos, comprovantes e certificados.
                      </p>
                    </TabsContent>
                    <TabsContent value="trabalhos">
                      <p className="text-gray-700">
                        Para informações sobre submissão de trabalhos, prazos, formatos e processo de avaliação.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Horário de Atendimento</h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-600">Segunda a Sexta:</div>
                      <div className="font-medium">09:00 - 18:00</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-600">Sábado:</div>
                      <div className="font-medium">09:00 - 12:00</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-600">Domingo e Feriados:</div>
                      <div className="font-medium">Fechado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                      <p className="text-gray-600 text-center mb-6">
                        Agradecemos seu contato. Nossa equipe responderá o mais breve possível.
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)} className="gap-2">
                        <Send className="h-4 w-4" />
                        Enviar Nova Mensagem
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input id="name" placeholder="Seu nome" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="seu@email.com" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input id="subject" placeholder="Assunto da mensagem" required />
                      </div>

                      <div className="space-y-2">
                        <Label>Departamento</Label>
                        <RadioGroup defaultValue="geral" className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="geral" id="geral" />
                            <Label htmlFor="geral" className="font-normal">
                              Informações Gerais
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="inscricoes" id="inscricoes" />
                            <Label htmlFor="inscricoes" className="font-normal">
                              Inscrições e Pagamentos
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="trabalhos" id="trabalhos" />
                            <Label htmlFor="trabalhos" className="font-normal">
                              Submissão de Trabalhos
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="outro" id="outro" />
                            <Label htmlFor="outro" className="font-normal">
                              Outro Assunto
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          id="message"
                          placeholder="Digite sua mensagem aqui..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Input type="checkbox" id="privacy" className="rounded" required />
                        <Label htmlFor="privacy" className="text-sm font-normal">
                          Concordo com a{" "}
                          <Link href="/privacidade" className="text-blue-600 hover:text-blue-800">
                            política de privacidade
                          </Link>
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">Localização</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Chegar</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Mapa interativo será exibido aqui. Por favor, habilite JavaScript para visualizar o mapa.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Endereço</h3>
              <p className="text-gray-700">
                Universidade Federal de Tecnologia
                <br />
                Departamento de Ciência da Computação
                <br />
                Av. Principal, 1000 - Centro
                <br />
                São Paulo - SP, 00000-000
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Transporte Público</h3>
              <p className="text-gray-700">
                <strong>Metrô:</strong> Estação Universidade (Linha Azul), saída norte.
                <br />
                <strong>Ônibus:</strong> Linhas 701, 702 e 703 - parada Universidade Federal.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Estacionamento</h3>
              <p className="text-gray-700">
                Estacionamento disponível no campus com vagas limitadas.
                <br />
                Valor: R$ 15,00 (diária)
                <br />
                Horário: 07:00 às 22:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">Dúvidas</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            Confira nossa seção de perguntas frequentes para encontrar respostas rápidas para suas dúvidas.
          </p>
          <Link href="/faq">
            <Button size="lg">Ver Perguntas Frequentes</Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
