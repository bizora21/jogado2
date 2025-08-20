import React, { useState } from 'react'
import { Search, Calendar, Clock, User, ArrowRight, Tag, Heart, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const WHATSAPP_NUMBER = '+258863181415'
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`

const BLOG_ARTICLES = [
  {
    id: 1,
    title: 'Cintas Modeladoras 2024: Guia Completo para Escolher a Ideal',
    slug: 'cintas-modeladoras-guia-completo-2024',
    excerpt: 'Tudo que você precisa saber sobre cintas modeladoras: tipos, benefícios, como escolher o tamanho certo e dicas de uso para realçar suas curvas naturalmente.',
    content: `
# Cintas Modeladoras 2024: Guia Completo para Escolher a Ideal

As cintas modeladoras revolucionaram a forma como as mulheres se sentem em relação ao próprio corpo. Em 2024, estes produtos evoluíram significativamente, oferecendo mais conforto, tecnologia e resultados impressionantes.

## O Que São Cintas Modeladoras?

As cintas modeladoras são peças íntimas desenvolvidas com tecnologia avançada para realçar as curvas naturais do corpo feminino. Diferente do que muitos pensam, elas não "criam" curvas, mas sim destacam e definem aquelas que já existem naturalmente.

### Benefícios Comprovados:

**1. Melhora da Postura**
A compressão adequada ajuda a manter a coluna alinhada, reduzindo dores nas costas e melhorando a postura geral.

**2. Confiança Instantânea**
O efeito modelador imediato proporciona maior autoestima e confiança para usar qualquer tipo de roupa.

**3. Suporte Durante Exercícios**
Muitas mulheres usam cintas durante atividades físicas para maior suporte e conforto.

## Como Escolher o Tamanho Certo

A escolha do tamanho é fundamental para o sucesso do uso da cinta modeladora:

### Medidas Essenciais:
- **Cintura**: Meça na parte mais estreita do tronco
- **Quadril**: Meça na parte mais larga dos quadris
- **Busto**: Para cintas que incluem suporte para seios

### Dica Profissional:
Nunca escolha um tamanho menor pensando em "apertar mais". O tamanho correto oferece a compressão ideal sem comprometer a circulação ou o conforto.

## Tipos de Cintas Modeladoras

### 1. Cinta Tradicional
Ideal para uso diário, oferece modelagem suave e conforto prolongado.

### 2. Cinta Cirúrgica
Desenvolvida para pós-operatório, com compressão específica para recuperação.

### 3. Cinta Esportiva
Perfeita para exercícios, com tecido respirável e suporte extra.

### 4. Body Modelador
Peça completa que modela desde o busto até os quadris.

## Cuidados e Manutenção

Para garantir a durabilidade da sua cinta modeladora:

- Lave sempre à mão com água fria
- Use sabão neutro
- Não torça ou esfregue com força
- Seque à sombra
- Evite amaciantes que podem danificar as fibras

## Quando Usar

As cintas modeladoras são versáteis e podem ser usadas em diversas ocasiões:

- **Trabalho**: Para maior confiança no ambiente profissional
- **Eventos Especiais**: Casamentos, formaturas, festas
- **Exercícios**: Como suporte durante atividades físicas
- **Uso Diário**: Para quem busca conforto e modelagem constante

## Mitos e Verdades

### ❌ MITO: Cintas fazem emagrecer
**✅ VERDADE**: Cintas modelam e definem, mas não promovem perda de peso.

### ❌ MITO: Quanto mais apertada, melhor
**✅ VERDADE**: A compressão adequada é mais eficaz que o aperto excessivo.

### ❌ MITO: Podem ser usadas 24 horas
**✅ VERDADE**: É importante dar descanso ao corpo, especialmente durante o sono.

## Tendências 2024

Este ano, as principais tendências incluem:

- **Tecidos Inteligentes**: Materiais que se adaptam à temperatura corporal
- **Design Invisível**: Costuras imperceptíveis sob qualquer roupa
- **Sustentabilidade**: Materiais eco-friendly e processos sustentáveis
- **Personalização**: Opções customizadas para diferentes tipos de corpo

## Conclusão

A cinta modeladora ideal é aquela que oferece o equilíbrio perfeito entre modelagem, conforto e qualidade. Investir em uma peça de qualidade significa investir na sua autoestima e bem-estar.

**Lembre-se**: O mais importante é se sentir bem consigo mesma. A cinta modeladora é apenas uma ferramenta para realçar a beleza que já existe em você.

---

*Tem dúvidas sobre qual cinta escolher? Nossa equipe especializada está pronta para ajudar! Entre em contato conosco pelo WhatsApp.*
    `,
    image: '/src/assets/cinta-modeladora.webp',
    category: 'Moda',
    tags: ['cintas', 'moda feminina', 'autoestima', 'bem-estar'],
    author: 'Equipe lojarapida',
    publishDate: '2024-08-15',
    readTime: 8,
    featured: true
  },
  {
    id: 2,
    title: 'Decoração de Casa: 10 Tendências que Vão Transformar Seu Lar em 2024',
    slug: 'decoracao-casa-tendencias-2024',
    excerpt: 'Descubra as principais tendências de decoração para 2024 e aprenda como transformar sua casa em um ambiente acolhedor e moderno com dicas práticas e acessíveis.',
    content: `
# Decoração de Casa: 10 Tendências que Vão Transformar Seu Lar em 2024

A decoração de interiores está em constante evolução, e 2024 trouxe tendências incríveis que combinam funcionalidade, sustentabilidade e muito estilo. Prepare-se para transformar sua casa em um verdadeiro refúgio de bem-estar.

## 1. Cores Terrosas e Naturais

As cores da terra estão dominando os ambientes em 2024. Tons como terracota, ocre, bege e marrom criam atmosferas acolhedoras e conectadas com a natureza.

### Como Aplicar:
- Paredes em tons neutros como base
- Almofadas e tapetes em cores terrosas
- Vasos e objetos decorativos em cerâmica natural

## 2. Sustentabilidade em Primeiro Lugar

A decoração sustentável não é apenas uma tendência, é uma necessidade. Móveis de madeira de reflorestamento, objetos reciclados e plantas naturais estão em alta.

### Dicas Sustentáveis:
- Reutilize móveis antigos com nova pintura
- Invista em plantas que purificam o ar
- Escolha tecidos orgânicos e naturais

## 3. Maximalismo Controlado

Depois de anos de minimalismo, o maximalismo volta com força, mas de forma controlada e harmoniosa.

### Elementos Chave:
- Mistura de estampas e texturas
- Cores vibrantes em pontos estratégicos
- Objetos com história e personalidade

## 4. Iluminação Inteligente

A iluminação vai além da funcionalidade, criando ambientes e influenciando o humor.

### Tendências de Iluminação:
- Luminárias pendentes em materiais naturais
- Iluminação LED regulável
- Velas e lanternas para ambiente aconchegante

## 5. Espaços Multifuncionais

Com o home office consolidado, os espaços precisam ser versáteis e funcionais.

### Soluções Inteligentes:
- Móveis com múltiplas funções
- Divisórias móveis para criar ambientes
- Organização vertical para otimizar espaço

## 6. Texturas Naturais

Materiais como rattan, juta, linho e madeira crua trazem aconchego e conexão com a natureza.

### Onde Usar:
- Tapetes de fibras naturais
- Cestas de palha para organização
- Cortinas de linho para suavidade

## 7. Arte e Personalidade

Paredes brancas estão dando lugar a galerias pessoais que contam histórias.

### Ideias Criativas:
- Quadros de diferentes tamanhos e estilos
- Fotografias familiares em molduras variadas
- Arte local e artesanato regional

## 8. Jardins Internos

As plantas não são mais apenas decoração, são elementos essenciais para o bem-estar.

### Plantas em Alta:
- Costela-de-adão para ambientes amplos
- Suculentas para espaços pequenos
- Jardins verticais para paredes vazias

## 9. Móveis Curvos

Linhas retas dão lugar a formas orgânicas e curvas suaves que humanizam os ambientes.

### Peças Curvas:
- Sofás com braços arredondados
- Mesas de centro orgânicas
- Espelhos com molduras curvas

## 10. Tecnologia Integrada

A tecnologia se torna invisível, integrada naturalmente ao design.

### Integração Inteligente:
- Carregadores sem fio embutidos
- Sistemas de som invisíveis
- Automação residencial discreta

## Como Implementar as Tendências

### Comece Pequeno:
1. **Escolha 2-3 tendências** que mais combinam com seu estilo
2. **Invista em peças-chave** como tapetes, almofadas e plantas
3. **Faça mudanças graduais** para não sobrecarregar o orçamento

### Orçamento Inteligente:
- **DIY (Faça Você Mesmo)**: Muitas tendências podem ser aplicadas com criatividade
- **Peças de Investimento**: Foque em itens duráveis e versáteis
- **Decoração Sazonal**: Mude pequenos detalhes conforme as estações

## Erros Comuns a Evitar

1. **Seguir todas as tendências**: Escolha aquelas que fazem sentido para seu estilo de vida
2. **Ignorar a funcionalidade**: Beleza sem função não funciona no dia a dia
3. **Não considerar a iluminação natural**: Cada ambiente tem suas particularidades

## Conclusão

A decoração de 2024 é sobre criar espaços que reflitam personalidade, promovam bem-estar e respeitem o meio ambiente. O mais importante é que sua casa seja um reflexo de quem você é.

**Lembre-se**: Não existe decoração certa ou errada, existe a decoração que faz você se sentir em casa.

---

*Precisa de ajuda para escolher os itens perfeitos para sua decoração? Nossa equipe tem produtos incríveis que vão transformar sua casa!*
    `,
    image: '/src/assets/tapete-decorativo.webp',
    category: 'Decoração',
    tags: ['decoração', 'casa', 'tendências', 'design'],
    author: 'Equipe lojarapida',
    publishDate: '2024-08-14',
    readTime: 10,
    featured: true
  },
  {
    id: 3,
    title: 'Utensílios de Cozinha Essenciais: O Que Não Pode Faltar na Sua Cozinha',
    slug: 'utensilios-cozinha-essenciais-2024',
    excerpt: 'Descubra quais são os utensílios de cozinha realmente essenciais para preparar refeições deliciosas e práticas no dia a dia, com dicas de como escolher e usar cada um.',
    content: `
# Utensílios de Cozinha Essenciais: O Que Não Pode Faltar na Sua Cozinha

Uma cozinha bem equipada é o segredo para refeições deliciosas e momentos especiais em família. Mas com tantas opções disponíveis, como saber quais utensílios são realmente essenciais?

## A Base de Uma Cozinha Funcional

### Facas de Qualidade

A faca é, sem dúvida, o utensílio mais importante da cozinha. Um bom conjunto de facas pode durar décadas se bem cuidado.

**Facas Essenciais:**
- **Faca do Chef (20-25cm)**: Para cortes gerais, picar vegetais e carnes
- **Faca de Legumes (8-10cm)**: Para trabalhos delicados e pequenos
- **Faca Serrilhada**: Para pães e tomates
- **Faca de Desossa**: Para preparar carnes e peixes

### Tábuas de Corte

Invista em pelo menos duas tábuas: uma para carnes e outra para vegetais, evitando contaminação cruzada.

**Materiais Recomendados:**
- **Madeira**: Antibacteriana natural, mas requer mais cuidado
- **Plástico**: Fácil higienização, ideal para carnes
- **Bambu**: Sustentável e resistente

## Panelas e Frigideiras Indispensáveis

### Conjunto Básico de Panelas

**Panelas Essenciais:**
1. **Panela Grande (4-5L)**: Para massas, sopas e cozidos
2. **Panela Média (2-3L)**: Para arroz, feijão e refogados
3. **Panela Pequena (1L)**: Para molhos e aquecimentos
4. **Frigideira Antiaderente (24-26cm)**: Para ovos, carnes e vegetais
5. **Frigideira de Ferro ou Inox**: Para selagem e douramento

### Materiais e Suas Vantagens

**Aço Inoxidável:**
- Durável e resistente
- Não altera o sabor dos alimentos
- Pode ir ao forno

**Antiaderente:**
- Facilita a limpeza
- Requer menos óleo
- Ideal para iniciantes

**Ferro Fundido:**
- Excelente retenção de calor
- Melhora com o uso
- Versátil (fogão e forno)

## Utensílios de Preparação

### Básicos para o Dia a Dia

**Lista Essencial:**
- **Colheres de Pau**: Não arranham panelas antiaderentes
- **Espátulas de Silicone**: Resistentes ao calor
- **Concha**: Para servir sopas e molhos
- **Escumadeira**: Para fritar e escorrer
- **Pegador**: Para virar carnes e vegetais

### Utensílios de Medição

**Precisão na Cozinha:**
- **Xícaras Medidoras**: Para ingredientes secos
- **Medidores Líquidos**: Com bico para facilitar
- **Colheres Medidoras**: Para temperos e especiarias
- **Balança Digital**: Para receitas precisas

## Equipamentos Elétricos Essenciais

### Básicos que Fazem a Diferença

**Liquidificador:**
- Vitaminas e sucos
- Molhos e cremes
- Sopas cremosas

**Batedeira:**
- Massas de bolo
- Chantilly e merengues
- Pães caseiros

**Processador de Alimentos:**
- Picar vegetais rapidamente
- Fazer patês e molhos
- Ralar queijos

## Organização e Armazenamento

### Potes e Recipientes

**Tipos Recomendados:**
- **Vidro com Tampa**: Para geladeira e micro-ondas
- **Plástico BPA-Free**: Para freezer e transporte
- **Hermético**: Para manter alimentos frescos

### Organização Inteligente

**Dicas de Organização:**
1. **Gavetas com Divisórias**: Para utensílios pequenos
2. **Ganchos na Parede**: Para colheres e pegadores
3. **Suporte Magnético**: Para facas
4. **Prateleiras Giratórias**: Para temperos

## Utensílios Especializados Que Valem o Investimento

### Para Quem Gosta de Cozinhar

**Itens que Facilitam a Vida:**
- **Mandoline**: Para fatias uniformes
- **Descascador de Qualidade**: Mais eficiente que facas
- **Ralador Microplane**: Para temperos frescos
- **Termômetro Culinário**: Para carnes no ponto certo

## Cuidados e Manutenção

### Prolongando a Vida Útil

**Facas:**
- Afie regularmente
- Lave à mão
- Seque imediatamente
- Guarde em suporte adequado

**Panelas Antiaderentes:**
- Use utensílios de madeira ou silicone
- Evite temperaturas muito altas
- Não use esponjas abrasivas

**Utensílios de Madeira:**
- Lave à mão com água morna
- Seque completamente
- Aplique óleo mineral ocasionalmente

## Montando Sua Cozinha com Orçamento Limitado

### Prioridades de Investimento

**1ª Prioridade (Essencial):**
- 1 faca boa do chef
- 1 tábua de corte
- 1 frigideira antiaderente
- 1 panela média

**2ª Prioridade (Importante):**
- Conjunto básico de utensílios
- Medidores
- Mais panelas

**3ª Prioridade (Conveniência):**
- Equipamentos elétricos
- Utensílios especializados

### Dicas de Economia

1. **Compre Gradualmente**: Monte sua cozinha aos poucos
2. **Invista em Qualidade**: Itens baratos podem sair mais caro
3. **Multifuncionais**: Prefira utensílios versáteis
4. **Promoções**: Aproveite ofertas em itens de qualidade

## Erros Comuns ao Equipar a Cozinha

### O Que Evitar

1. **Comprar Conjuntos Completos**: Nem sempre todos os itens são úteis
2. **Focar Apenas no Preço**: Qualidade é investimento
3. **Ignorar o Espaço**: Compre conforme seu espaço disponível
4. **Não Testar**: Se possível, teste antes de comprar

## Conclusão

Uma cozinha bem equipada não precisa ter todos os utensílios do mundo, mas sim os certos para suas necessidades. Comece com o básico e vá expandindo conforme sua experiência e necessidades crescem.

**Lembre-se**: O melhor utensílio é aquele que você usa regularmente e que facilita sua vida na cozinha.

---

*Procurando utensílios de cozinha de qualidade? Temos uma seleção especial de produtos que vão transformar sua experiência culinária!*
    `,
    image: '/src/assets/cortador-profissional.webp',
    category: 'Cozinha',
    tags: ['cozinha', 'utensílios', 'culinária', 'casa'],
    author: 'Equipe lojarapida',
    publishDate: '2024-08-13',
    readTime: 12,
    featured: false
  }
]

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const categories = ['all', ...new Set(BLOG_ARTICLES.map(article => article.category))]
  
  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const sendWhatsAppMessage = (articleTitle = '') => {
    let message = ''
    if (articleTitle) {
      message = `Olá! Li o artigo "${articleTitle}" no blog da lojarapida e gostaria de saber mais sobre os produtos relacionados.`
    } else {
      message = 'Olá! Visitei o blog da lojarapida e gostaria de conhecer mais sobre os produtos. Podem me ajudar?'
    }
    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, '_blank')
  }

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        {/* Article Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => setSelectedArticle(null)}
              className="text-white hover:bg-white/20 mb-6"
            >
              ← Voltar ao Blog
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {selectedArticle.category}
                </Badge>
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedArticle.publishDate).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span>{selectedArticle.readTime} min de leitura</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
                {selectedArticle.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                {selectedArticle.excerpt}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{selectedArticle.author}</span>
                </div>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => sendWhatsAppMessage(selectedArticle.title)}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: selectedArticle.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, match => {
                  const level = match.trim().length
                  return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4">`
                }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Gostou do Artigo?</h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco para conhecer produtos relacionados a este tema
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="btn-whatsapp"
                    onClick={() => sendWhatsAppMessage(selectedArticle.title)}
                  >
                    💬 Falar com Especialista
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedArticle(null)}
                  >
                    Ver Mais Artigos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
            Blog lojarapida
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Dicas, tendências e guias para uma vida melhor
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar artigos..."
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
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === 'all' ? 'Todos' : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      {selectedCategory === 'all' && (
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BLOG_ARTICLES.filter(article => article.featured).map(article => (
              <Card key={article.id} className="card-hover cursor-pointer" onClick={() => setSelectedArticle(article)}>
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    Destaque
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.publishDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Ler Mais <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {selectedCategory === 'all' ? 'Todos os Artigos' : `Artigos de ${selectedCategory}`}
        </h2>
        
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
            <p className="text-gray-600">Tente buscar por outros termos ou categorias</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <Card key={article.id} className="card-hover cursor-pointer" onClick={() => setSelectedArticle(article)}>
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {article.featured && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      Destaque
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}min</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.publishDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Ler <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para ajudar você a escolher os melhores produtos
            para suas necessidades
          </p>
          <Button
            size="lg"
            className="btn-whatsapp"
            onClick={() => sendWhatsAppMessage()}
          >
            💬 Falar com Especialista
          </Button>
        </div>
      </section>
    </div>
  )
}

export default BlogPage

