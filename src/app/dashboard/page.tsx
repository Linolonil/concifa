import Link from "next/link"
import { Calendar, Clock, Download, FileText, User, Users, BookOpen, Settings, LogOut, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80&text=JS" alt="João Silva" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">João Silva</h2>
                  <p className="text-gray-600">joao.silva@email.com</p>
                  <Badge className="mt-2">Participante</Badge>
                </div>

                <nav className="space-y-1">
                  <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-700">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Meu Perfil</span>
                  </Link>
                  <Link
                    href="/dashboard/inscricoes"
                    className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <FileText className="h-5 w-5" />
                    <span className="font-medium">Minhas Inscrições</span>
                  </Link>
                  <Link
                    href="/dashboard/programacao"
                    className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">Minha Programação</span>
                  </Link>
                  <Link
                    href="/dashboard/certificados"
                    className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">Certificados</span>
                  </Link>
                  <Link
                    href="/dashboard/configuracoes"
                    className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="font-medium">Configurações</span>
                  </Link>
                  <Link href="/logout" className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50">
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Sair</span>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Área do Participante</h1>
                <Button variant="outline" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </div>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Bem-vindo ao IX CONCIFA!</CardTitle>
                  <CardDescription>Acompanhe suas inscrições, programação e certificados.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">O evento começa em 30 dias!</h3>
                      <p className="text-sm text-gray-600">11 a 13 de Abril de 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Inscrição</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-1">Confirmada</div>
                    <p className="text-sm text-gray-600">Estudante - Presencial</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Comprovante
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Atividades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-1">2</div>
                    <p className="text-sm text-gray-600">Atividades confirmadas</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Programação
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Certificados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-400 mb-1">Pendente</div>
                    <p className="text-sm text-gray-600">Disponível após o evento</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Acessar
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Minha Programação</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="dia1">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="dia1">Dia 1 (11/04)</TabsTrigger>
                      <TabsTrigger value="dia2">Dia 2 (12/04)</TabsTrigger>
                      <TabsTrigger value="dia3">Dia 3 (13/04)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="dia1" className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Clock className="h-5 w-5 text-blue-700" />
                          </div>
                          <div>
                            <div className="font-medium">09:00 - 10:30</div>
                            <div className="text-sm text-gray-600">Cerimônia de Abertura</div>
                          </div>
                        </div>
                        <div className="pl-11 text-sm text-gray-600">
                          <div className="flex items-center gap-1 mb-1">
                            <Users className="h-4 w-4" />
                            <span>Auditório Principal</span>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Confirmado
                          </Badge>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <Clock className="h-5 w-5 text-purple-700" />
                          </div>
                          <div>
                            <div className="font-medium">11:00 - 12:30</div>
                            <div className="text-sm text-gray-600">Palestra Principal 1</div>
                          </div>
                        </div>
                        <div className="pl-11 text-sm text-gray-600">
                          <div className="flex items-center gap-1 mb-1">
                            <Users className="h-4 w-4" />
                            <span>Auditório Principal</span>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Confirmado
                          </Badge>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="dia2" className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <Clock className="h-5 w-5 text-green-700" />
                          </div>
                          <div>
                            <div className="font-medium">14:00 - 15:30</div>
                            <div className="text-sm text-gray-600">Workshop: Introdução ao PLN</div>
                          </div>
                        </div>
                        <div className="pl-11 text-sm text-gray-600">
                          <div className="flex items-center gap-1 mb-1">
                            <Users className="h-4 w-4" />
                            <span>Sala 1</span>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Confirmado
                          </Badge>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="dia3">
                      <div className="text-center py-8 text-gray-500">
                        <p>Nenhuma atividade selecionada para este dia.</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Explorar Programação
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver Programação Completa
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
