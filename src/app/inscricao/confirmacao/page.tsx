import Link from "next/link"
import { CheckCircle, Calendar, Download, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ConfirmacaoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Inscrição Confirmada!</h1>
                <p className="text-gray-600 max-w-md">
                  Sua inscrição no IX CONCIFA foi realizada com sucesso. Enviamos um email com os detalhes da sua
                  inscrição.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4">Detalhes da Inscrição</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Número da Inscrição:</div>
                    <div className="font-medium">CONCIFA-2025-12345</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Nome:</div>
                    <div className="font-medium">João da Silva</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Email:</div>
                    <div className="font-medium">joao.silva@email.com</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Tipo de Inscrição:</div>
                    <div className="font-medium">Estudante - Presencial</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Atividades Adicionais:</div>
                    <div className="font-medium">Workshop: Introdução ao PLN</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Valor Total:</div>
                    <div className="font-medium">R$ 200,00</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Status do Pagamento:</div>
                    <div className="font-medium text-green-600">Confirmado</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Marque em sua agenda</h3>
                    <p className="text-gray-600 mb-2">
                      O IX CONCIFA acontecerá nos dias 11 a 13 de Abril de 2025, no Centro de Convenções de São Paulo.
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Adicionar ao Calendário
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Download className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Comprovante de Inscrição</h3>
                    <p className="text-gray-600 mb-2">
                      Você pode baixar o comprovante de inscrição a qualquer momento.
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Baixar Comprovante
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link href="/dashboard">
                  <Button className="gap-2 w-full">
                    Acessar Área do Participante
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Voltar para a Página Inicial
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
