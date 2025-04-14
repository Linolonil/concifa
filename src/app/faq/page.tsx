import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1">FAQ</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Perguntas Frequentes</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o IX CONCIFA.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Buscar perguntas frequentes..." className="pl-10" />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Tabs defaultValue="geral" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="inscricoes">Inscrições</TabsTrigger>
              <TabsTrigger value="trabalhos">Trabalhos</TabsTrigger>
              <TabsTrigger value="evento">Evento</TabsTrigger>
            </TabsList>

            <TabsContent value="geral">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Informações Gerais</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>O que é o CONCIFA?</AccordionTrigger>
                    <AccordionContent>
                      O CONCIFA (Congresso de Ciência e Inovação em Interfaces e Inteligência Artificial) é um evento
                      acadêmico que reúne pesquisadores, profissionais e estudantes interessados nas interfaces entre
                      tecnologia, inovação e comportamento humano. O evento proporciona um espaço de diálogo e troca de
                      experiências entre diferentes áreas do conhecimento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Quando e onde será realizado o IX CONCIFA?</AccordionTrigger>
                    <AccordionContent>
                      O IX CONCIFA será realizado nos dias 11 a 13 de abril de 2025, na Universidade Federal de
                      Tecnologia, localizada em São Paulo - SP. O evento ocorrerá no Centro de Convenções da
                      universidade, com atividades distribuídas em diversos auditórios e salas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Quem pode participar do CONCIFA?</AccordionTrigger>
                    <AccordionContent>
                      O CONCIFA é aberto a todos os interessados em inteligência artificial, interfaces homem-computador
                      e áreas correlatas. O evento é voltado para estudantes de graduação e pós-graduação, professores,
                      pesquisadores e profissionais da indústria. Não há pré-requisitos para participação, apenas o
                      interesse pelos temas abordados.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Haverá emissão de certificados?</AccordionTrigger>
                    <AccordionContent>
                      Sim, todos os participantes inscritos receberão certificado de participação, desde que tenham
                      frequência mínima nas atividades do evento. Os autores de trabalhos apresentados receberão
                      certificado específico de apresentação. Os certificados serão disponibilizados em formato digital
                      após o término do evento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>O evento terá transmissão online?</AccordionTrigger>
                    <AccordionContent>
                      Sim, o IX CONCIFA contará com transmissão online das principais atividades, como palestras magnas,
                      mesas redondas e cerimônias de abertura e encerramento. Para ter acesso à transmissão, é
                      necessário realizar a inscrição na modalidade online. As gravações ficarão disponíveis por 30 dias
                      após o término do evento.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="inscricoes">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Inscrições</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Como faço minha inscrição no evento?</AccordionTrigger>
                    <AccordionContent>
                      As inscrições podem ser realizadas diretamente pelo site do evento, na seção &quot;Inscreva-se&quot;. Basta
                      preencher o formulário com seus dados pessoais, escolher a modalidade de participação (presencial
                      ou online) e a categoria (estudante, professor, profissional ou autor de trabalho), e efetuar o
                      pagamento da taxa de inscrição.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Quais são as formas de pagamento aceitas?</AccordionTrigger>
                    <AccordionContent>
                      Aceitamos pagamento por cartão de crédito (parcelado em até 6x sem juros), boleto bancário e PIX.
                      Para inscrições institucionais, também é possível o pagamento por empenho ou transferência
                      bancária, mediante contato prévio com a organização do evento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Há desconto para grupos ou instituições?</AccordionTrigger>
                    <AccordionContent>
                      Sim, oferecemos desconto de 10% para grupos a partir de 5 pessoas da mesma instituição e 15% para
                      grupos a partir de 10 pessoas. Para solicitar o desconto, entre em contato com a organização pelo
                      email inscricoes@concifa.com.br informando os nomes e emails de todos os participantes do grupo.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Posso cancelar minha inscrição? Como solicitar reembolso?</AccordionTrigger>
                    <AccordionContent>
                      O cancelamento da inscrição pode ser solicitado até 30 dias antes do início do evento, com
                      reembolso de 70% do valor pago. Para cancelamentos entre 30 e 15 dias antes do evento, o reembolso
                      será de 50%. Após esse prazo, não haverá reembolso. A solicitação deve ser feita pelo email
                      inscricoes@concifa.com.br, informando o motivo do cancelamento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Preciso me inscrever para submeter um trabalho?</AccordionTrigger>
                    <AccordionContent>
                      Não é necessário estar inscrito para submeter um trabalho, mas pelo menos um dos autores deverá se
                      inscrever até a data limite informada após a aceitação do trabalho para que ele seja incluído nos
                      anais do evento. Autores de trabalhos aceitos têm direito à tarifa especial de inscrição.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="trabalhos">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Submissão de Trabalhos</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Quais são os tipos de trabalhos aceitos?</AccordionTrigger>
                    <AccordionContent>
                      O IX CONCIFA aceita três tipos de trabalhos: Artigos Completos (10-12 páginas), Artigos Curtos
                      (4-6 páginas) e Pôsteres (resumo de até 2 páginas). Os artigos completos devem apresentar
                      resultados de pesquisa concluída ou em estágio avançado, enquanto os artigos curtos podem
                      apresentar resultados preliminares ou trabalhos em andamento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Qual é o formato exigido para os trabalhos?</AccordionTrigger>
                    <AccordionContent>
                      Todos os trabalhos devem seguir o template oficial do evento, disponível para download na se��ão
                      &quot;Submissão&quot;. Os arquivos devem ser enviados em formato PDF, sem identificação dos autores para
                      garantir a avaliação cega pelos revisores. Os trabalhos podem ser escritos em português, inglês ou
                      espanhol.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Como é feito o processo de avaliação dos trabalhos?</AccordionTrigger>
                    <AccordionContent>
                      Todos os trabalhos passam por um processo de revisão duplo-cega, onde pelo menos dois revisores
                      especialistas na área avaliam o trabalho sem conhecer a identidade dos autores. Os critérios de
                      avaliação incluem originalidade, relevância, metodologia, resultados e qualidade da escrita. O
                      resultado da avaliação pode ser: aceito, aceito com revisões ou rejeitado.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Quais são os tópicos de interesse do evento?</AccordionTrigger>
                    <AccordionContent>
                      Os principais tópicos de interesse incluem: Inteligência Artificial, Interfaces Homem-Máquina,
                      Processamento de Linguagem Natural, Visão Computacional, Aprendizado de Máquina, Ética em IA, IA
                      Generativa, Robótica, Computação Afetiva, Sistemas Inteligentes, Realidade Virtual e Aumentada, e
                      Impacto Social da IA. Trabalhos que abordem a intersecção entre esses temas são especialmente
                      bem-vindos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Onde serão publicados os trabalhos aceitos?</AccordionTrigger>
                    <AccordionContent>
                      Os trabalhos aceitos serão publicados nos Anais do IX CONCIFA, que possui ISSN e será indexado em
                      bases de dados acadêmicas. Os melhores trabalhos serão convidados para submissão estendida em
                      edições especiais de periódicos parceiros do evento, como o Journal of Artificial Intelligence
                      Research e IEEE Transactions on Neural Networks and Learning Systems.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="evento">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Durante o Evento</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Como será a programação do evento?</AccordionTrigger>
                    <AccordionContent>
                      A programação do IX CONCIFA inclui palestras principais, sessões técnicas para apresentação de
                      trabalhos, workshops temáticos, mesas redondas e sessões de pôsteres. O evento ocorrerá ao longo
                      de três dias, com atividades das 8h às 18h. A programação detalhada está disponível na seção
                      &quot;Programação&quot; do site e será atualizada regularmente. 
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Haverá tradução simultânea para palestras internacionais?</AccordionTrigger>
                    <AccordionContent>
                      Sim, todas as palestras internacionais contarão com tradução simultânea para português. Os
                      participantes presenciais receberão receptores para acompanhar a tradução, e na transmissão online
                      haverá um canal específico com o áudio traduzido. Os slides das apresentações internacionais
                      também serão disponibilizados em português quando possível.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>O que está incluído na inscrição presencial?</AccordionTrigger>
                    <AccordionContent>
                      A inscrição presencial inclui acesso a todas as atividades do evento (palestras, sessões técnicas,
                      mesas redondas), material do participante (bolsa, crachá, programa impresso, bloco de notas e
                      caneta), coffee breaks nos três dias do evento, certificado de participação e acesso aos anais
                      digitais. Workshops específicos e o jantar de confraternização são opcionais e têm custo
                      adicional.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Haverá wi-fi disponível no local do evento?</AccordionTrigger>
                    <AccordionContent>
                      Sim, o local do evento contará com rede wi-fi gratuita para todos os participantes. As credenciais
                      de acesso serão fornecidas no momento do credenciamento. Além disso, haverá pontos de recarga para
                      dispositivos eletrônicos em áreas estratégicas do evento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Como funcionam as apresentações de trabalhos?</AccordionTrigger>
                    <AccordionContent>
                      As apresentações de artigos completos terão duração de 15 minutos, seguidos de 5 minutos para
                      perguntas. Artigos curtos terão 10 minutos de apresentação e 5 de perguntas. As sessões de
                      pôsteres ocorrerão em horários específicos, com 1 hora de duração, onde os autores devem
                      permanecer junto aos seus pôsteres para discussão com os interessados. Todas as salas de
                      apresentação contarão com projetor, computador e ponteiro laser.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que procurava?</h2>
          <p className="text-gray-600 mb-6">
            Entre em contato com nossa equipe para esclarecer suas dúvidas específicas.
          </p>
          <Link href="/contato">
            <Button size="lg">Entrar em Contato</Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
