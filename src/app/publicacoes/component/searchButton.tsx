import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"


export default function SelectVButon(){

    return(
      <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-6 -mt-20 relative z-20">
          <h2 className="text-2xl font-bold mb-6">Pesquisar Publicações</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Buscar por título, autor ou palavras-chave" className="pl-10" />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Edição" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as Edições</SelectItem>
                  <SelectItem value="8">VIII CONCIFA (2024)</SelectItem>
                  <SelectItem value="7">VII CONCIFA (2023)</SelectItem>
                  <SelectItem value="6">VI CONCIFA (2022)</SelectItem>
                  <SelectItem value="5">V CONCIFA (2021)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as Categorias</SelectItem>
                  <SelectItem value="article">Artigos Completos</SelectItem>
                  <SelectItem value="short">Artigos Curtos</SelectItem>
                  <SelectItem value="poster">Pôsteres</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button className="gap-2">
              <Search className="h-4 w-4" />
              Pesquisar
            </Button>
          </div>
        </div>
      </div>
    </section>
    )
} 