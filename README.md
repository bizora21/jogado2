# Loja Online Moçambique - Projeto Completo

## 🚀 Visão Geral

Este projeto é uma loja online moderna e otimizada especificamente para o mercado moçambicano, desenvolvida com foco em alta conversão, SEO avançado e experiência de usuário excepcional.

## ✨ Características Principais

### 🎯 Otimização para Conversão
- **Popup de desconto** para novos visitantes (10% off)
- **Contador de urgência** com ofertas limitadas
- **Indicadores de popularidade** (visualizações e vendas)
- **Escassez de estoque** para criar urgência
- **Prova social** com notificações de compras recentes
- **Garantia de satisfação** em todos os produtos
- **Botões CTA otimizados** com efeitos visuais

### 🔍 SEO Avançado
- **Meta tags completas** (Open Graph, Twitter Cards)
- **Dados estruturados JSON-LD** (Organization, Product, WebSite, Breadcrumb)
- **Sitemap XML** e robots.txt otimizados
- **URLs amigáveis** e estrutura semântica
- **Performance otimizada** com lazy loading
- **Responsivo** para todos os dispositivos

### 📱 Experiência do Usuário
- **Design responsivo** para desktop e mobile
- **Integração WhatsApp** para vendas diretas
- **Banner de entrega grátis** em destaque
- **Sistema de cookies** com opção de aceitar/rejeitar
- **Navegação intuitiva** com breadcrumbs
- **Carregamento rápido** com otimizações Vite

### 📝 Blog Otimizado
- **Artigos SEO-friendly** focados no mercado moçambicano
- **Conteúdo relevante** sobre produtos e bem-estar
- **Otimização para Google Discover**
- **CTAs para WhatsApp** integrados

## 🛍️ Produtos

1. **Cortador de Legumes Profissional** - 1.200 MT
2. **Escova de Limpeza Facial Elétrica** - 2.500 MT
3. **Mini Massageador Portátil** - 3.500 MT
4. **Cinta Modeladora Feminina** - 1.800 MT
5. **Amassador de Alho Inox** - 800 MT

## 🏗️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Componentes UI
- **Lucide React** - Ícones
- **React Router** - Navegação

## 📦 Estrutura do Projeto

```
loja-mocambique/
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── cortador_legumes.png
│   │   ├── escova_facial.png
│   │   ├── mini_massageador.png
│   │   ├── cinta_modeladora.png
│   │   └── amassador_alho.png
│   ├── components/
│   │   ├── ui/ (Shadcn components)
│   │   ├── StructuredData.jsx
│   │   └── ConversionFeatures.jsx
│   ├── blog-posts.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── dist/ (build output)
├── package.json
└── README.md
```

## 🚀 Como Executar

### Desenvolvimento
```bash
cd loja-mocambique
pnpm install
pnpm run dev --host
```

### Build para Produção
```bash
pnpm run build
```

### Preview da Build
```bash
pnpm run preview
```

## 🌍 Deploy

### GitHub Pages + Cloudflare Pages
1. Faça push do código para um repositório GitHub
2. Conecte o repositório ao Cloudflare Pages
3. Configure o build command: `pnpm run build`
4. Configure o output directory: `dist`
5. Deploy automático a cada push

### Configurações Recomendadas
- **Build command**: `pnpm run build`
- **Output directory**: `dist`
- **Node version**: 18+
- **Environment variables**: Nenhuma necessária

## 📊 Funcionalidades de Conversão

### 1. Popup de Desconto
- Aparece após 10 segundos para novos visitantes
- Código: BEMVINDO10 (10% desconto)
- Redireciona para WhatsApp

### 2. Contador de Urgência
- Timer de 24 horas para ofertas limitadas
- Atualização em tempo real
- Design chamativo em vermelho

### 3. Prova Social
- Notificações de compras recentes
- Rotação automática a cada 4 segundos
- Nomes e localizações realistas

### 4. Indicadores de Escassez
- Barra de progresso do estoque
- Alertas para "últimas unidades"
- Cores dinâmicas (verde/vermelho)

## 🎨 Design System

### Cores Principais
- **Primary**: #ff6b35 (Laranja vibrante)
- **Secondary**: #f7931e (Dourado)
- **Success**: #4CAF50 (Verde)
- **Danger**: #ef4444 (Vermelho)

### Tipografia
- **Headings**: Inter, system fonts
- **Body**: Inter, system fonts
- **Sizes**: Responsivos com Tailwind

### Componentes
- Cards com hover effects
- Botões com gradientes e animações
- Badges para categorias e descontos
- Inputs com validação visual

## 📱 Responsividade

- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botões e links com tamanho adequado
- **Performance**: Imagens otimizadas para diferentes telas

## 🔧 Otimizações Técnicas

### Performance
- **Code Splitting**: Componentes carregados sob demanda
- **Image Optimization**: Formatos modernos (WebP)
- **CSS Purging**: Remoção de CSS não utilizado
- **Minification**: JavaScript e CSS minificados

### SEO
- **Meta Tags**: Completas para todas as páginas
- **Structured Data**: Schema.org implementado
- **Sitemap**: Gerado automaticamente
- **Robots.txt**: Configurado para indexação

### Acessibilidade
- **ARIA Labels**: Implementados onde necessário
- **Keyboard Navigation**: Suporte completo
- **Color Contrast**: Ratios adequados
- **Screen Readers**: Compatibilidade garantida

## 📞 Integração WhatsApp

- **Número**: +258123456789 (configurável)
- **Mensagens personalizadas** para cada produto
- **CTAs estratégicos** em toda a aplicação
- **Botão flutuante** sempre visível

## 🍪 Política de Cookies

- **Banner informativo** na parte inferior
- **Opções**: Aceitar ou Rejeitar
- **Armazenamento local** para preferências
- **Compliance** com regulamentações

## 📈 Analytics e Tracking

### Preparado para:
- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Hotjar/Clarity

### Eventos Trackáveis:
- Cliques em produtos
- Conversões WhatsApp
- Tempo na página
- Scroll depth

## 🛡️ Segurança

- **HTTPS Ready**: Configurado para SSL
- **XSS Protection**: Headers de segurança
- **Content Security Policy**: Implementável
- **Input Sanitization**: Validação de formulários

## 🌟 Próximos Passos

### Melhorias Futuras
1. **Sistema de pagamento** integrado (M-Pesa)
2. **Carrinho de compras** persistente
3. **Sistema de reviews** dos clientes
4. **Chat ao vivo** integrado
5. **Programa de fidelidade**
6. **Multi-idioma** (Português/Inglês)

### Integrações Possíveis
- **M-Pesa API** para pagamentos
- **Correios de Moçambique** para tracking
- **SMS Gateway** para notificações
- **Email Marketing** (Mailchimp)

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **WhatsApp**: +258123456789
- **Email**: suporte@lojaonline.mz

## 📄 Licença

Este projeto foi desenvolvido especificamente para o mercado moçambicano e está otimizado para as necessidades locais.

---

**Desenvolvido com ❤️ para Moçambique**

