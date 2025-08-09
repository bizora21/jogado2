import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Star, ShoppingCart, MessageCircle, Truck, Shield, Phone, Mail, MapPin, Menu, X, Heart, Search } from 'lucide-react';
import { OrganizationStructuredData, WebSiteStructuredData, ProductStructuredData, BreadcrumbStructuredData } from './components/StructuredData';
import { DiscountPopup, UrgencyTimer, PopularityIndicator, SatisfactionGuarantee, RecentPurchases, UrgentBuyButton, StockScarcity } from './components/ConversionFeatures';
import blogPosts from './blog-posts';
import './App.css';

// Importar imagens dos produtos
import cortadorLegumes from './assets/cortador_legumes.png';
import escovaFacial from './assets/escova_facial.png';
import miniMassageador from './assets/mini_massageador.png';
import cintaModeladora from './assets/cinta_modeladora.png';
import amassadorAlho from './assets/amassador_alho.png';

// Dados dos produtos
const products = [
  {
    id: 1,
    name: 'Cortador de Legumes Profissional',
    price: 1200,
    originalPrice: 1800,
    image: cortadorLegumes,
    rating: 4.8,
    reviews: 127,
    description: 'Cortador de legumes moderno e ergonômico para facilitar o preparo dos seus alimentos.',
    category: 'Cozinha',
    viewCount: 89,
    soldCount: 23,
    stockRemaining: 7
  },
  {
    id: 2,
    name: 'Escova de Limpeza Facial Elétrica',
    price: 2500,
    originalPrice: 3200,
    image: escovaFacial,
    rating: 4.9,
    reviews: 89,
    description: 'Escova facial elétrica com cerdas macias para uma limpeza profunda e suave.',
    category: 'Beleza',
    viewCount: 156,
    soldCount: 34,
    stockRemaining: 12
  },
  {
    id: 3,
    name: 'Mini Massageador Portátil',
    price: 3500,
    originalPrice: 4500,
    image: miniMassageador,
    rating: 4.7,
    reviews: 156,
    description: 'Massageador portátil para alívio de tensões musculares em qualquer lugar.',
    category: 'Saúde',
    viewCount: 203,
    soldCount: 45,
    stockRemaining: 5
  },
  {
    id: 4,
    name: 'Cinta Modeladora Feminina',
    price: 1800,
    originalPrice: 2400,
    image: cintaModeladora,
    rating: 4.6,
    reviews: 203,
    description: 'Cinta modeladora de alta qualidade para realçar sua silhueta com conforto.',
    category: 'Moda',
    viewCount: 134,
    soldCount: 28,
    stockRemaining: 15
  },
  {
    id: 5,
    name: 'Amassador de Alho Inox',
    price: 800,
    originalPrice: 1200,
    image: amassadorAlho,
    rating: 4.5,
    reviews: 78,
    description: 'Prensa de alho em aço inoxidável, prática e durável para sua cozinha.',
    category: 'Cozinha',
    viewCount: 67,
    soldCount: 18,
    stockRemaining: 9
  }
];

// Componente de produto
const ProductCard = ({ product }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const whatsappMessage = `Olá! Gostaria de comprar o ${product.name} por ${product.price} MT. Pode me ajudar?`;
  
  const handleBuyClick = () => {
    window.open(`https://wa.me/258123456789?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };
  
  return (
    <Card className="product-card h-full">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            -{discount}%
          </Badge>
          <Button 
            size="sm" 
            variant="outline" 
            className="absolute top-2 right-2 p-2"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">{product.category}</Badge>
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <CardDescription className="mb-3">{product.description}</CardDescription>
        
        {/* Indicadores de popularidade */}
        <PopularityIndicator viewCount={product.viewCount} soldCount={product.soldCount} />
        
        {/* Escassez de estoque */}
        <StockScarcity remaining={product.stockRemaining} />
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-primary">{product.price} MT</span>
            <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice} MT</span>
          </div>
        </div>
        
        {/* Garantia de satisfação */}
        <SatisfactionGuarantee />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <UrgentBuyButton product={product} onClick={handleBuyClick} />
      </CardFooter>
    </Card>
  );
};

// Componente principal
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const whatsappNumber = "+258123456789";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos da loja.";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  // Timer para oferta limitada (24 horas a partir de agora)
  const offerEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* Popup de desconto */}
        <DiscountPopup />
        
        {/* Notificações de compras recentes */}
        <RecentPurchases />

        {/* Banner de entrega */}
        <div className="banner-delivery">
          <p>🚚 ENTREGA GRÁTIS em Maputo, Matola e Beira | 💳 PAGAMENTO NA ENTREGA disponível</p>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-primary">LojaOnline.mz</h1>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-foreground hover:text-primary">Início</Link>
                <Link to="/produtos" className="text-foreground hover:text-primary">Produtos</Link>
                <Link to="/blog" className="text-foreground hover:text-primary">Blog</Link>
                <Link to="/contato" className="text-foreground hover:text-primary">Contato</Link>
              </nav>

              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Link to="/" className="block py-2 text-foreground hover:text-primary">Início</Link>
              <Link to="/produtos" className="block py-2 text-foreground hover:text-primary">Produtos</Link>
              <Link to="/blog" className="block py-2 text-foreground hover:text-primary">Blog</Link>
              <Link to="/contato" className="block py-2 text-foreground hover:text-primary">Contato</Link>
            </nav>
          </div>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>

        {/* Botão flutuante WhatsApp */}
        <Button 
          className="whatsapp-float bg-green-500 hover:bg-green-600 text-white rounded-full p-4"
          onClick={openWhatsApp}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* Banner de cookies */}
        {showCookieBanner && (
          <div className="cookie-banner">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
              <p className="mb-4 md:mb-0">
                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
              </p>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-white border-white hover:bg-white hover:text-black"
                  onClick={() => setShowCookieBanner(false)}
                >
                  Rejeitar
                </Button>
                <Button 
                  size="sm" 
                  className="bg-white text-black hover:bg-gray-200"
                  onClick={() => setShowCookieBanner(false)}
                >
                  Aceitar
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">LojaOnline.mz</h3>
                <p className="text-gray-400">
                  A melhor loja online de Moçambique com produtos de qualidade e entrega rápida.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-white">Início</Link></li>
                  <li><Link to="/produtos" className="hover:text-white">Produtos</Link></li>
                  <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Políticas</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Termos de Serviço</a></li>
                  <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-white">Política de Cookies</a></li>
                  <li><a href="#" className="hover:text-white">Política de Devolução</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +258 123 456 789</li>
                  <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@lojaonline.mz</li>
                  <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Maputo, Moçambique</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 LojaOnline.mz. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Página inicial
const HomePage = () => {
  // Timer para oferta limitada (24 horas a partir de agora)
  const offerEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);
  
  return (
    <main>
      {/* Dados estruturados */}
      <OrganizationStructuredData />
      <WebSiteStructuredData />
      <BreadcrumbStructuredData items={[
        { name: "Início", url: "https://lojaonline.mz/" }
      ]} />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Produtos de Qualidade para Moçambique
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Descubra nossa seleção exclusiva de produtos com entrega grátis em Maputo, Matola e Beira
          </p>
          
          {/* Contador de urgência */}
          <div className="max-w-md mx-auto mb-8">
            <UrgencyTimer endTime={offerEndTime} />
          </div>
          
          <Button size="lg" className="cta-button text-white text-lg px-8 py-3">
            Ver Produtos
          </Button>
        </div>
      </section>

      {/* Produtos em destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map(product => (
              <div key={product.id}>
                <ProductStructuredData product={product} />
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher-nos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrega Grátis</h3>
              <p className="text-gray-600">Entrega gratuita em Maputo, Matola e Beira</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pagamento Seguro</h3>
              <p className="text-gray-600">Pagamento na entrega ou via M-Pesa</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Atendimento via WhatsApp sempre disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                location: "Maputo",
                text: "Excelente qualidade dos produtos e entrega muito rápida. Recomendo!",
                rating: 5
              },
              {
                name: "João Santos",
                location: "Matola",
                text: "Atendimento excepcional via WhatsApp. Produtos chegaram em perfeito estado.",
                rating: 5
              },
              {
                name: "Ana Costa",
                location: "Beira",
                text: "Preços justos e produtos de qualidade. Já fiz várias compras e sempre satisfeita.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

// Página de produtos
const ProductsPage = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Todos os Produtos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

// Página do blog
const BlogPage = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <BreadcrumbStructuredData items={[
          { name: "Início", url: "https://lojaonline.mz/" },
          { name: "Blog", url: "https://lojaonline.mz/blog" }
        ]} />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog LojaOnline.mz</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dicas, guias e informações úteis sobre produtos, bem-estar e estilo de vida em Moçambique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Por {post.author} • {post.readTime} • {new Date(post.publishDate).toLocaleDateString('pt-PT')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ler Artigo Completo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA para WhatsApp */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Tem alguma dúvida sobre nossos produtos?</h2>
          <p className="text-gray-600 mb-6">
            Nossa equipa está sempre disponível para ajudar via WhatsApp
          </p>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white"
            onClick={() => window.open('https://wa.me/258123456789?text=Olá! Vi o blog e gostaria de saber mais sobre os produtos.', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </main>
  );
};

// Página de contato
const ContactPage = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Contato</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Entre em contato</h2>
            <form className="space-y-4">
              <Input placeholder="Seu nome" />
              <Input type="email" placeholder="Seu email" />
              <Input placeholder="Assunto" />
              <Textarea placeholder="Sua mensagem" rows={5} />
              <Button className="cta-button text-white">Enviar Mensagem</Button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Informações de contato</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>+258 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span>info@lojaonline.mz</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>Maputo, Moçambique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

