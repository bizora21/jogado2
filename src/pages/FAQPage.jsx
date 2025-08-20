import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Phone, Mail, MessageCircle, Search, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const WHATSAPP_NUMBER = '+258863181415'
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`

const FAQ_DATA = [
  {
    id: 1,
    category: 'Pedidos e Compras',
    question: 'Como faço um pedido?',
    answer: 'É muito simples! Você pode fazer seu pedido de 3 formas: 1) Clicando no botão "Comprar Agora" de qualquer produto e sendo direcionado para o WhatsApp, 2) Adicionando produtos ao carrinho e finalizando pelo WhatsApp, ou 3) Entrando em contato diretamente pelo nosso WhatsApp +258863181415. Nossa equipe está sempre pronta para ajudar!'
  },
  {
    id: 2,
    category: 'Pedidos e Compras',
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Aceitamos pagamento na entrega em dinheiro, M-Pesa e E-Mola. Você só paga quando receber o produto em suas mãos, garantindo total segurança na sua compra. Para pagamentos via M-Pesa ou E-Mola, você pode fazer a transferência no momento da entrega ou antecipadamente se preferir.'
  },
  {
    id: 3,
    category: 'Entrega e Frete',
    question: 'Vocês entregam em todo Moçambique?',
    answer: 'Sim! Entregamos em todo território moçambicano. Para Maputo e Matola, a entrega é GRATUITA em compras acima de 1000 MZN. Para outras cidades como Beira, Nampula, Tete e demais localidades, calculamos o frete de acordo com a distância. Entre em contato para saber o valor exato para sua região.'
  },
  {
    id: 4,
    category: 'Entrega e Frete',
    question: 'Qual o prazo de entrega?',
    answer: 'Para Maputo e Matola: 24 a 48 horas úteis. Para Beira e Nampula: 2 a 4 dias úteis. Para outras cidades: 3 a 7 dias úteis, dependendo da localização. Todos os prazos são contados a partir da confirmação do pedido. Você receberá atualizações sobre o status da entrega via WhatsApp.'
  },
  {
    id: 5,
    category: 'Produtos',
    question: 'Como escolher o tamanho certo da cinta modeladora?',
    answer: 'Para escolher o tamanho ideal da cinta modeladora, você precisa medir: 1) Cintura na parte mais estreita, 2) Quadril na parte mais larga, 3) Busto (se a cinta incluir suporte). NUNCA escolha um tamanho menor pensando em "apertar mais" - o tamanho correto oferece a modelagem ideal. Nossa equipe pode ajudar você a escolher o tamanho perfeito pelo WhatsApp!'
  },
  {
    id: 6,
    category: 'Produtos',
    question: 'Os produtos têm garantia?',
    answer: 'Sim! Todos os nossos produtos têm garantia de qualidade. Se você receber um produto com defeito de fabricação, trocamos imediatamente sem custo adicional. Para cintas modeladoras, oferecemos 30 dias para troca de tamanho (produto deve estar sem uso e com etiquetas). Sua satisfação é nossa prioridade!'
  },
  {
    id: 7,
    category: 'Trocas e Devoluções',
    question: 'Posso trocar se não gostar do produto?',
    answer: 'Claro! Você tem até 7 dias após receber o produto para solicitar troca ou devolução, desde que o item esteja em perfeitas condições, sem uso e com embalagem original. Para cintas modeladoras, oferecemos 30 dias para troca de tamanho. O frete da devolução fica por nossa conta se o problema for nosso.'
  },
  {
    id: 8,
    category: 'Trocas e Devoluções',
    question: 'Como funciona o processo de troca?',
    answer: 'É simples: 1) Entre em contato pelo WhatsApp informando o motivo da troca, 2) Nossa equipe agenda a coleta do produto, 3) Analisamos o item, 4) Enviamos o produto novo ou processamos o reembolso. Todo o processo é acompanhado via WhatsApp para sua tranquilidade.'
  },
  {
    id: 9,
    category: 'Atendimento',
    question: 'Qual o horário de atendimento?',
    answer: 'Nosso atendimento via WhatsApp funciona de Segunda a Sábado, das 8h às 18h. Aos domingos, atendemos das 9h às 15h. Fora desses horários, você pode deixar sua mensagem que responderemos assim que possível. Para urgências, temos plantão 24h para clientes que já fizeram pedidos.'
  },
  {
    id: 10,
    category: 'Atendimento',
    question: 'Posso visitar uma loja física?',
    answer: 'Atualmente operamos 100% online para oferecer os melhores preços e conveniência. Isso nos permite ter produtos de qualidade com preços mais acessíveis. Todo atendimento é feito via WhatsApp com nossa equipe especializada, que pode tirar todas suas dúvidas e ajudar na escolha dos produtos ideais.'
  },
  {
    id: 11,
    category: 'Segurança',
    question: 'É seguro comprar online com vocês?',
    answer: 'Absolutamente! Trabalhamos com pagamento na entrega, então você só paga quando receber o produto. Além disso, somos uma empresa estabelecida em Moçambique, com milhares de clientes satisfeitos. Você pode conferir nossos depoimentos e avaliações. Sua segurança e satisfação são nossas prioridades máximas.'
  },
  {
    id: 12,
    category: 'Segurança',
    question: 'Meus dados pessoais estão protegidos?',
    answer: 'Sim! Seguimos rigorosamente a Lei de Proteção de Dados. Suas informações pessoais são usadas apenas para processar seu pedido e entrega. Não compartilhamos seus dados com terceiros e mantemos tudo em segurança. Você pode solicitar a exclusão dos seus dados a qualquer momento.'
  }
]

const FAQ_CATEGORIES = ['Todos', ...new Set(FAQ_DATA.map(faq => faq.category))]

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [expandedItems, setExpandedItems] = useState(new Set())

  const filteredFAQs = FAQ_DATA.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const sendWhatsAppMessage = (question = '') => {
    let message = ''
    if (question) {
      message = `Olá! Vi a pergunta "${question}" no FAQ, mas gostaria de mais informações sobre este assunto.`
    } else {
      message = 'Olá! Visitei a página de FAQ da lojarapida e gostaria de tirar algumas dúvidas. Podem me ajudar?'
    }
    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
            Perguntas Frequentes
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Encontre respostas rápidas para suas dúvidas
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar pergunta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-12 py-3 text-black"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {FAQ_CATEGORIES.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhuma pergunta encontrada</h3>
              <p className="text-gray-600 mb-6">
                Tente buscar por outros termos ou entre em contato conosco
              </p>
              <Button
                className="btn-whatsapp"
                onClick={() => sendWhatsAppMessage()}
              >
                💬 Fazer Pergunta
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="border-l-4 border-l-primary">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleExpanded(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {faq.category}
                          </span>
                        </div>
                        <CardTitle className="text-lg font-semibold text-left">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <div className="ml-4">
                        {expandedItems.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {expandedItems.has(faq.id) && (
                    <CardContent className="pt-0">
                      <div className="border-t pt-4">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => sendWhatsAppMessage(faq.question)}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Mais Informações
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Não Encontrou Sua Resposta?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe especializada está pronta para ajudar você com qualquer dúvida
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6">
                <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Atendimento rápido e personalizado
                </p>
                <Button
                  className="btn-whatsapp w-full"
                  onClick={() => sendWhatsAppMessage()}
                >
                  {WHATSAPP_NUMBER}
                </Button>
              </Card>
              
              <Card className="text-center p-6">
                <Mail className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Para dúvidas mais detalhadas
                </p>
                <Button variant="outline" className="w-full">
                  contato@lojarapidamz.com
                </Button>
              </Card>
              
              <Card className="text-center p-6">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Horário</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Segunda a Sábado: 8h às 18h<br />
                  Domingo: 9h às 15h
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Sempre Disponível
                </Button>
              </Card>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Dica Importante</h3>
              <p className="text-gray-600">
                Para um atendimento mais rápido, tenha em mãos: nome completo, endereço de entrega 
                e detalhes específicos sobre o produto que deseja. Nossa equipe poderá ajudar você 
                de forma mais eficiente!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage

