"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"

// Definição do esquema de validação
const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  senha: z.string().min(1, { message: "Senha é obrigatória" }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const registered = searchParams.get("registered")

  // Valores padrão do formulário
  const defaultValues: Partial<LoginFormValues> = {
    email: "",
    senha: "",
  }

  // Configuração do formulário com React Hook Form e Zod
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  // Função para lidar com o envio do formulário
  async function onSubmit(data: LoginFormValues) {
    setIsSubmitting(true)

    try {
      // Simulação de autenticação
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Dados de teste para simular diferentes tipos de usuário
      const testUsers = {
        "aluno@exemplo.com": { tipo: "aluno", nome: "João Silva" },
        "coordenador@exemplo.com": { tipo: "coordenador", nome: "Maria Oliveira" },
      }

      const user = testUsers[data.email as keyof typeof testUsers]

      if (user) {
        // Simular armazenamento de sessão
        localStorage.setItem("concifa_user", JSON.stringify(user))

        // Redirecionar para o dashboard apropriado
        if (user.tipo === "aluno") {
          router.push("/dashboard/aluno")
        } else {
          router.push("/dashboard/coordenador")
        }

        toast({
          title: "Login realizado com sucesso!",
          description: `Bem-vindo(a), ${user.nome}!`,
        })
      } else {
        toast({
          title: "Credenciais inválidas",
          description: "Email ou senha incorretos. Tente novamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Erro ao realizar login",
        description: "Ocorreu um erro ao processar seu login. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Acesso ao Sistema</h1>
            <p className="text-xl text-gray-200">Entre com suas credenciais para acessar sua área restrita</p>
          </div>
        </div>
      </section>

      {/* Formulário de Login */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {registered && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <Alert variant="default" className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Inscrição realizada com sucesso!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Sua conta foi criada. Agora você pode fazer login com suas credenciais.
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>Digite seu email e senha para acessar o sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu.email@exemplo.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-right">
                        <Link href="/recuperar-senha" className="text-sm text-blue-600 hover:underline">
                          Esqueceu sua senha?
                        </Link>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Autenticando...
                          </>
                        ) : (
                          "Entrar"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="text-sm text-gray-500 text-center w-full">
                    Ainda não possui uma conta?{" "}
                    <Link href="/inscricao" className="text-blue-600 hover:underline">
                      Inscreva-se
                    </Link>
                  </div>

                  <Alert variant="outline" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Usuários de teste</AlertTitle>
                    <AlertDescription>
                      <p className="text-sm">Para fins de demonstração, você pode usar:</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>
                          <strong>Aluno:</strong> aluno@exemplo.com / senha123
                        </li>
                        <li>
                          <strong>Coordenador:</strong> coordenador@exemplo.com / senha123
                        </li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
