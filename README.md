# Loja Rapida MZ - E-commerce Moçambicano Ultra Moderno

## 🇲🇿 Sobre o Projeto

A **Loja Rapida MZ** é uma loja online ultra moderna, responsiva e de alta conversão desenvolvida especificamente para o mercado moçambicano. Focada em produtos domésticos e de bem-estar, oferece uma experiência de compra premium com entrega grátis em Maputo, Matola e Beira.

## ✨ Características Principais

### 🎨 Design Premium
- **Paleta de Cores Moçambicana**: Vermelho (#E63946), Laranja (#F77F00), Amarelo (#FCBF49), Verde (#06FFA5)
- **Tipografia Moderna**: Inter + Poppins do Google Fonts
- **UI/UX Responsivo**: Design mobile-first com breakpoints otimizados
- **Microinterações**: Hover effects, animações suaves e transições premium

### 🛍️ Funcionalidades E-commerce
- **Catálogo de Produtos**: 5 produtos premium com imagens de alta qualidade
- **Sistema de Avaliações**: Estrelas e comentários de clientes
- **Integração WhatsApp**: Pedidos diretos via WhatsApp com mensagens pré-formatadas
- **Carrinho de Compras**: Interface intuitiva e responsiva
- **Filtros e Pesquisa**: Sistema de busca avançado

### 🚚 Características Locais
- **Entrega Grátis**: Maputo, Matola e Beira
- **Pagamento na Entrega**: Total segurança para o cliente
- **Suporte Multilíngue**: Português e Changana
- **Produtos Testados**: Validados especificamente para o mercado moçambicano

### 📱 Tecnologias Utilizadas
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + CSS customizado
- **Ícones**: Lucide React
- **Componentes**: shadcn/ui
- **Animações**: Framer Motion + CSS animations
- **Responsividade**: Mobile-first design

## 📂 Estrutura do Projeto

```
loja-rapida-mz/
├── public/
├── src/
│   ├── assets/          # Imagens e recursos
│   │   ├── amassador-alho.png
│   │   ├── cortador-legumes.png
│   │   ├── escova-facial.png
│   │   ├── mini-massageador.png
│   │   ├── cinta-modeladora.png
│   │   ├── avatar-maria.png
│   │   └── banners/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProductCard.jsx
│   │   └── TestimonialCard.jsx
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos customizados
│   └── main.jsx        # Ponto de entrada
├── package.json
└── README.md
```

## 🎯 Produtos em Destaque

### 🍽️ Cozinha Inteligente
1. **Amassador de Alho Premium** - 850 MZN (desconto 29%)
2. **Cortador de Legumes Multifuncional** - 1.250 MZN (desconto 31%)

### 💄 Beleza & Bem-Estar
3. **Escova de Limpeza Facial Sônica** - 2.100 MZN (desconto 25%)
4. **Mini Massageador Portátil** - 1.650 MZN (desconto 25%)

### 👗 Moda & Corpo
5. **Cinta Modeladora Feminina** - 950 MZN (desconto 32%)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Instalação
```bash
# Clonar o repositório
git clone [url-do-repositorio]

# Navegar para o diretório
cd loja-rapida-mz

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Acesso Local
- **Desenvolvimento**: http://localhost:5173
- **Produção**: Após build, servir a pasta `dist/`

## 📊 Métricas de Performance

### Core Web Vitals Esperados
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Componentes divididos para carregamento otimizado
- **CSS Minificado**: Estilos otimizados para produção
- **Imagens Otimizadas**: Formato WebP com fallbacks

## 🎨 Sistema de Design

### Cores Principais
```css
--mz-red: #E63946;        /* Vermelho Moçambique */
--mz-orange: #F77F00;     /* Laranja tropical */
--mz-yellow: #FCBF49;     /* Amarelo dourado */
--mz-green: #06FFA5;      /* Verde esmeralda */
--mz-cream: #FFFCF2;      /* Creme suave */
--mz-dark-green: #264653; /* Verde escuro elegante */
```

### Tipografia
- **Headings**: Poppins (600-800 weight)
- **Body**: Inter (300-700 weight)
- **Scale**: 1.25 (Major Third) para harmonia visual

### Componentes Customizados
- **CTA Buttons**: Gradientes premium com hover effects
- **Product Cards**: Hover animations e microinterações
- **Testimonial Cards**: Design com bordas coloridas
- **WhatsApp Float**: Botão flutuante com animação pulse

## 📱 Responsividade

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1439px
- **Large**: 1440px+

### Características Mobile
- **Touch-friendly**: Botões com tamanho mínimo de 44px
- **Swipe gestures**: Navegação otimizada para touch
- **Viewport optimization**: Meta tags configuradas
- **Performance mobile**: Imagens otimizadas para diferentes densidades

## 🔗 Integrações

### WhatsApp Business
- **Número**: +258 63 181 415
- **Mensagens automáticas**: Pré-formatadas por produto
- **Botão flutuante**: Sempre visível para contacto rápido

### SEO Otimizado
- **Meta tags**: Título, descrição e keywords localizados
- **Open Graph**: Partilha otimizada em redes sociais
- **Schema.org**: Dados estruturados para produtos
- **Sitemap**: Gerado automaticamente

## 🛡️ Segurança e Privacidade

### Políticas Implementadas
- **Termos de Serviço**: Adaptados à lei moçambicana
- **Política de Privacidade**: GDPR compliance
- **Política de Cookies**: Gestão de consentimento
- **Política de Entrega**: Condições claras

### Dados do Cliente
- **Não armazenamento**: Nenhum dado pessoal armazenado localmente
- **WhatsApp seguro**: Comunicação encriptada
- **Pagamento na entrega**: Sem dados financeiros online

## 📈 Analytics e Tracking

### Métricas Importantes
- **Taxa de Conversão**: Meta > 3%
- **Taxa de Rejeição**: Meta < 40%
- **Tempo na Página**: Meta > 2min
- **CTR WhatsApp**: Meta > 15%

### Eventos Trackados
- **Cliques em produtos**: Interesse por categoria
- **Botões WhatsApp**: Intenção de compra
- **Scroll depth**: Engajamento com conteúdo
- **Form submissions**: Contactos gerados

## 🌍 Localização Moçambicana

### Características Locais
- **Idioma**: Português moçambicano
- **Moeda**: Metical (MZN)
- **Cidades atendidas**: Maputo, Matola, Beira
- **Cultura local**: Referências a pratos como matapa
- **Suporte**: Português e Changana

### Depoimentos Autênticos
- **Maria Silva** (Maputo): Cortador de legumes
- **Ana Joaquim** (Matola): Escova facial
- **Carla Mondlane** (Beira): Cinta modeladora

## 🚀 Deployment

### Opções de Hospedagem
1. **Vercel**: Deploy automático via Git
2. **Netlify**: Integração contínua
3. **GitHub Pages**: Hospedagem gratuita
4. **Cloudflare Pages**: Performance global

### Configuração de Produção
```bash
# Build otimizado
npm run build

# Preview local do build
npm run preview

# Deploy (exemplo Vercel)
vercel --prod
```

## 📞 Contacto e Suporte

### Informações de Contacto
- **WhatsApp**: +258 63 181 415
- **Email**: info@lojarapidamz.com
- **Localização**: Maputo, Moçambique

### Suporte Técnico
- **Horário**: 8h às 18h (GMT+2)
- **Idiomas**: Português e Changana
- **Resposta**: Máximo 2 horas

## 📄 Licença

Este projeto foi desenvolvido especificamente para o mercado moçambicano. Todos os direitos reservados à Loja Rapida MZ.

---

**Desenvolvido com ❤️ para Moçambique**

*Transformando a experiência de compra online em Maputo, Matola e Beira*

