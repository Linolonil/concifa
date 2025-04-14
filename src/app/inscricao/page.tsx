"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, ChevronsUpDown, Eye, EyeOff, Info, Lock, Mail, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const institutions = [
  { label: "Universidade de São Paulo", value: "usp" },
  { label: "Universidade Estadual de Campinas", value: "unicamp" },
  { label: "Universidade Federal do Rio de Janeiro", value: "ufrj" },
  { label: "Universidade de Brasília", value: "unb" },
  { label: "Pontifícia Universidade Católica", value: "puc" },
  { label: "Universidade Federal de Minas Gerais", value: "ufmg" },
  { label: "Instituto Tecnológico de Aeronáutica", value: "ita" },
  { label: "Universidade Estadual Paulista", value: "unesp" },
  { label: "Universidade Federal do Rio Grande do Sul", value: "ufrgs" },
  { label: "Outra instituição", value: "other" },
]

export default function InscricaoPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [open, setOpen] = useState(false)
  const [institution, setInstitution] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de cadastro
    setTimeout(() => {
      setIsLoading(false)
      router.push("/inscricao/confirmacao")
    }, 1500)
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Inscrição no IX CONCIFA</h1>
            <p className="text-gray-600">Preencha o formulário abaixo para se inscrever no evento</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center relative">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 z-0"></div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium relative z-10",
                    step === i
                      ? "bg-blue-600 text-white"
                      : step > i
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-400 border border-gray-300",
                  )}
                >
                  {step > i ? <Check className="h-5 w-5" /> : i}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className={step >= 1 ? "text-blue-600 font-medium" : "text-gray-500"}>Dados Pessoais</span>
              <span className={step >= 2 ? "text-blue-600 font-medium" : "text-gray-500"}>Tipo de Inscrição</span>
              <span className={step >= 3 ? "text-blue-600 font-medium" : "text-gray-500"}>Pagamento</span>
            </div>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold">Dados Pessoais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input id="name" placeholder="Seu nome completo" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input id="email" type="email" placeholder="seu@email.com" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10"
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10"
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" placeholder="(00) 00000-0000" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="document">CPF ou Passaporte</Label>
                        <Input id="document" placeholder="000.000.000-00" required />
                      </div>
                      <div className="space-y-2">
                        <Label>Instituição</Label>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-full justify-between"
                            >
                              {institution
                                ? institutions.find((inst) => inst.value === institution)?.label
                                : "Selecione sua instituição..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Buscar instituição..." />
                              <CommandList>
                                <CommandEmpty>Nenhuma instituição encontrada.</CommandEmpty>
                                <CommandGroup>
                                  {institutions.map((inst) => (
                                    <CommandItem
                                      key={inst.value}
                                      value={inst.value}
                                      onSelect={(currentValue) => {
                                        setInstitution(currentValue === institution ? "" : currentValue)
                                        setOpen(false)
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          institution === inst.value ? "opacity-100" : "opacity-0",
                                        )}
                                      />
                                      {inst.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Cargo/Função</Label>
                        <Input id="position" placeholder="Ex: Professor, Estudante, Pesquisador" required />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        Concordo com os{" "}
                        <Link href="/termos" className="text-blue-600 hover:text-blue-800">
                          termos de uso
                        </Link>{" "}
                        e{" "}
                        <Link href="/privacidade" className="text-blue-600 hover:text-blue-800">
                          política de privacidade
                        </Link>
                      </Label>
                    </div>

                    <div className="flex justify-end">
                      <Button type="button" onClick={nextStep}>
                        Próximo
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold">Tipo de Inscrição</h2>

                    <Tabs defaultValue="presencial" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="presencial">Presencial</TabsTrigger>
                        <TabsTrigger value="online">Online</TabsTrigger>
                      </TabsList>
                      <TabsContent value="presencial" className="space-y-6 pt-4">
                        <div className="space-y-4">
                          <RadioGroup defaultValue="estudante">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                                <div className="flex items-start space-x-3">
                                  <RadioGroupItem value="estudante" id="estudante" className="mt-1" />
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <Label htmlFor="estudante" className="font-medium text-lg cursor-pointer">
                                        Estudante
                                      </Label>
                                      <Badge>R$ 150,00</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                      Para estudantes de graduação e pós-graduação. Necessário comprovante de matrícula.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                                <div className="flex items-start space-x-3">
                                  <RadioGroupItem value="professor" id="professor" className="mt-1" />
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <Label htmlFor="professor" className="font-medium text-lg cursor-pointer">
                                        Professor
                                      </Label>
                                      <Badge>R$ 250,00</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                      Para professores e pesquisadores vinculados a instituições de ensino.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                                <div className="flex items-start space-x-3">
                                  <RadioGroupItem value="profissional" id="profissional" className="mt-1" />
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <Label htmlFor="profissional" className="font-medium text-lg cursor-pointer">
                                        Profissional
                                      </Label>
                                      <Badge>R$ 350,00</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                      Para profissionais da indústria e demais interessados.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                                <div className="flex items-start space-x-3">
                                  <RadioGroupItem value="autor" id="autor" className="mt-1" />
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <Label htmlFor="autor" className="font-medium text-lg cursor-pointer">
                                        Autor de Trabalho
                                      </Label>
                                      <Badge>R$ 200,00</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                      Para autores com trabalhos aceitos no evento.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </RadioGroup>

                          <Alert className="bg-blue-50 border-blue-200">
                            <Info className="h-4 w-4 text-blue-600" />
                            <AlertTitle className="text-blue-800">Informação</AlertTitle>
                            <AlertDescription className="text-blue-700">
                              A inscrição presencial inclui acesso a todas as atividades do evento, material do
                              participante, certificado e coffee breaks.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </TabsContent>
                      <TabsContent value="online" className="space-y-6 pt-4">
                        <div className="space-y-4">
                          <RadioGroup defaultValue="online-basico">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                                <div className="flex items-start space-x-3">
                                  <RadioGroupItem value="online-basico" id="online-basico" className="mt-1" />
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <Label htmlFor="online-basico" className="font-medium text-lg cursor-pointer">
                                        Acesso Básico
                                      </Label>
                                      <Badge>R$ 80,00</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                      Acesso às palestras principais e certificado digital.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                                <div className="flex items-start space-x-3">
                                  <RadioGroupItem value="online-completo" id="online-completo" className="mt-1" />
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <Label htmlFor="online-completo" className="font-medium text-lg cursor-pointer">
                                        Acesso Completo
                                      </Label>
                                      <Badge>R$ 120,00</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                      Acesso a todas as atividades, incluindo workshops, e material digital.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </RadioGroup>

                          <Alert className="bg-blue-50 border-blue-200">
                            <Info className="h-4 w-4 text-blue-600" />
                            <AlertTitle className="text-blue-800">Informação</AlertTitle>
                            <AlertDescription className="text-blue-700">
                              A inscrição online dá acesso à transmissão ao vivo do evento e às gravações por 30 dias
                              após o término.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="space-y-4">
                      <h3 className="font-medium">Atividades Adicionais</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Checkbox id="workshop1" />
                          <div>
                            <Label htmlFor="workshop1" className="font-medium cursor-pointer">
                              Workshop: Introdução ao Processamento de Linguagem Natural com Python
                            </Label>
                            <p className="text-sm text-gray-600">
                              12 de Abril, 14:00 - 15:30 | <span className="text-blue-600">+ R$ 50,00</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox id="workshop2" />
                          <div>
                            <Label htmlFor="workshop2" className="font-medium cursor-pointer">
                              Workshop: Desenvolvimento de Interfaces Conversacionais
                            </Label>
                            <p className="text-sm text-gray-600">
                              12 de Abril, 14:00 - 15:30 | <span className="text-blue-600">+ R$ 50,00</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox id="jantar" />
                          <div>
                            <Label htmlFor="jantar" className="font-medium cursor-pointer">
                              Jantar de Confraternização
                            </Label>
                            <p className="text-sm text-gray-600">
                              12 de Abril, 20:00 | <span className="text-blue-600">+ R$ 120,00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Voltar
                      </Button>
                      <Button type="button" onClick={nextStep}>
                        Próximo
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold">Pagamento</h2>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium mb-2">Resumo da Inscrição</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Inscrição (Estudante - Presencial)</span>
                          <span>R$ 150,00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Workshop: Introdução ao PLN</span>
                          <span>R$ 50,00</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span>R$ 200,00</span>
                        </div>
                      </div>
                    </div>

                    <Tabs defaultValue="cartao" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="cartao">Cartão de Crédito</TabsTrigger>
                        <TabsTrigger value="boleto">Boleto</TabsTrigger>
                        <TabsTrigger value="pix">PIX</TabsTrigger>
                      </TabsList>
                      <TabsContent value="cartao" className="space-y-6 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Nome no Cartão</Label>
                            <Input id="cardName" placeholder="Nome como aparece no cartão" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Número do Cartão</Label>
                            <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Data de Validade</Label>
                            <Input id="expiry" placeholder="MM/AA" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="installments">Parcelamento</Label>
                          <select
                            title="valores"
                            id="installments"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="1">À vista - R$ 200,00</option>
                            <option value="2">2x sem juros - R$ 100,00</option>
                            <option value="3">3x sem juros - R$ 66,67</option>
                            <option value="4">4x sem juros - R$ 50,00</option>
                            <option value="5">5x sem juros - R$ 40,00</option>
                            <option value="6">6x sem juros - R$ 33,33</option>
                            oab 
                          </select>
                        </div>
                      </TabsContent>
                      <TabsContent value="boleto" className="space-y-6 pt-4">
                        <Alert className="bg-yellow-50 border-yellow-200">
                          <Info className="h-4 w-4 text-yellow-600" />
                          <AlertTitle className="text-yellow-800">Atenção</AlertTitle>
                          <AlertDescription className="text-yellow-700">
                            O boleto será gerado após a conclusão da inscrição e terá vencimento em 3 dias úteis. A
                            inscrição só será confirmada após o pagamento.
                          </AlertDescription>
                        </Alert>
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF do Pagador</Label>
                          <Input id="cpf" placeholder="000.000.000-00" required />
                        </div>
                      </TabsContent>
                      <TabsContent value="pix" className="space-y-6 pt-4">
                        <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                          <div className="w-48 h-48 bg-white p-2 rounded-lg mb-4">
                            <Image
                              src="/placeholder.svg?height=180&width=180&text=QR+Code+PIX"
                              alt="QR Code PIX"
                              width={180}
                              height={180}
                              className="w-full h-full"
                            />
                          </div>
                          <p className="text-center text-sm text-gray-600 mb-4">
                            Escaneie o QR Code acima com o aplicativo do seu banco ou copie o código PIX abaixo.
                          </p>
                          <div className="flex w-full max-w-md">
                            <Input
                              value="00020126580014br.gov.bcb.pix0136a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0123456789012345678901234567890123"
                              readOnly
                              className="rounded-r-none"
                            />
                            <Button className="rounded-l-none">Copiar</Button>
                          </div>
                        </div>
                        <Alert className="bg-blue-50 border-blue-200">
                          <Info className="h-4 w-4 text-blue-600" />
                          <AlertTitle className="text-blue-800">Informação</AlertTitle>
                          <AlertDescription className="text-blue-700">
                            Após o pagamento via PIX, sua inscrição será confirmada automaticamente em até 5 minutos.
                          </AlertDescription>
                        </Alert>
                      </TabsContent>
                    </Tabs>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Voltar
                      </Button>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Processando..." : "Finalizar Inscrição"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
