import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShoppingCart, Search, User, Menu, X, Star, Heart, Truck, Shield, CreditCard, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import './App.css'

// Importar imagens
import heroImage from './assets/hero-image.webp'
import cinta1 from './assets/cinta1.webp'
import tapete1 from './assets/tapete1.webp'
import cortador1 from './assets/cortador1.webp'
import cabelo1 from './assets/cabelo1.webp'

// Configurações do WhatsApp
const WHATSAPP_CONFIG = {
  number: '+258840000000', // SUBSTITUA pelo número real
  messages: {
    product: (name, price) => `Olá! 👋 Tenho interesse no produto: *${name}* por ${price} MZN. Gostaria de mais informações e fazer o pedido. Quando posso receber?`,
    general: 'Olá! 👋 Vim do site da lojarapidamz e gostaria de saber mais sobre os produtos disponíveis.',
    cart: (items) => `Olá! 💬 Quero fazer um pedido com os seguintes produtos:\n\n${items.map(item => `• ${item.name} - ${item.price} MZN (Qtd: ${item.quantity})`).join('\n')}\n\nTotal: ${items.reduce((sum, item) => sum + (item.price * item.quantity), 0)} MZN\n\nConfirmo que aceito entrega grátis e pagamento na entrega.`
  }
}

// Dados dos produtos
const PRODUCTS = [
  {
    id: 1,
    name: 'Cinta Modeladora Premium',
    price: 1200,
    originalPrice: 1800,
    discount: 33,
    image: cinta1,
    category: 'moda',
    rating: 4.9,
    reviews: 127,
    badge: 'Mais Vendido',
    badgeColor: 'bg-green-500',
    description: 'Modelagem perfeita e conforto excepcional para realçar suas curvas naturais.'
  },
  {
    id: 2,
    name: 'Tapete Decorativo Moderno',
    price: 800,
    originalPrice: 1200,
    discount: 33,
    image: tapete1,
    category: 'decoracao',
    rating: 4.8,
    reviews: 89,
    badge: 'Oferta',
    badgeColor: 'bg-orange-500',
    description: 'Transforme sua casa com elegância e sofisticação.'
  },
  {
    id: 3,
    name: 'Cortador Profissional',
    price: 450,
    originalPrice: 650,
    discount: 31,
    image: cortador1,
    category: 'cozinha',
    rating: 4.7,
    reviews: 156,
    badge: 'Prático',
    badgeColor: 'bg-blue-500',
    description: 'Facilite sua vida na cozinha com precisão e eficiência.'
  },
  {
    id: 4,
    name: 'Cabelo Feminino Premium',
    price: 2500,
    originalPrice: 3500,
    discount: 29,
    image: cabelo1,
    category: 'beleza',
    rating: 4.9,
    reviews: 203,
    badge: 'Premium',
    badgeColor: 'bg-purple-500',
    description: 'Visual deslumbrante garantido com qualidade superior.'
  }
]

// Componente Header
const Header = ({ cartItems, isMenuOpen, setIsMenuOpen, searchQuery, setSearchQuery }) => {
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Truck className="w-4 h-4 mr-1" />
                Entrega Grátis para Maputo e Matola
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Trocas e Devoluções em até 7 dias
              </span>
            </div>
            <span className="flex items-center">
              <CreditCard className="w-4 h-4 mr-1" />
              Satisfação Garantida ou Dinheiro de Volta
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              🛍️ <span className="text-blue-600">loja</span><span className="text-orange-500">rapidamz</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="O que está buscando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-12 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 rounded-full bg-blue-600 hover:bg-blue-700"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-5 h-5 mr-2" />
              Minha Conta
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span className="hidden md:inline">Carrinho</span>
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="O que está buscando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 rounded-full bg-blue-600 hover:bg-blue-700"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 py-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 md:py-0 font-medium">
                Início
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 md:py-0">
                Ver Todos os Produtos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 md:py-0 flex items-center">
                Mais Amados 💖
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 md:py-0">
                Perguntas Frequentes
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 md:py-0">
                Entregas & Prazos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 md:py-0">
                Fale Connosco
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

// Componente Hero Section
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-pink-400 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              MAIS FACILIDADE PARA NOSSOS CLIENTES!
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              PAGAMENTO<br />
              <span className="text-yellow-300">NA ENTREGA</span>
            </h3>
            <p className="text-xl mb-8 opacity-90">
              ACEITAMOS PAGAMENTO POR M-PESA, E-MOLA E DINHEIRO
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_CONFIG.messages.general)}`, '_blank')}
              >
                🛍️ Comprar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-full border-2"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_CONFIG.messages.general)}`, '_blank')}
              >
                💬 Atendimento Imediato
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={heroImage} 
              alt="Produtos Premium" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Product Card
const ProductCard = ({ product, onAddToCart }) => {
  const openWhatsApp = () => {
    const message = WHATSAPP_CONFIG.messages.product(product.name, product.price)
    window.open(`https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.badge && (
            <Badge className={`absolute top-2 left-2 ${product.badgeColor} text-white`}>
              {product.badge}
            </Badge>
          )}
          {product.discount && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white">
              {product.discount}% OFF
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-12 bg-white/80 hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 mb-3">
          {product.description}
        </CardDescription>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} avaliações)
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              {product.price} MZN
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {product.originalPrice} MZN
              </span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex space-x-2 w-full">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            onClick={openWhatsApp}
          >
            💬 Comprar Agora
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 rounded-full"
            onClick={() => onAddToCart(product)}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Componente Products Section
const ProductsSection = ({ products, onAddToCart, searchQuery }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolhidos por milhares de clientes satisfeitos em todo Moçambique
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum produto encontrado para "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

// Componente Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: 'Compra Segura',
      description: 'Apenas pague após receber'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Frete Grátis',
      description: 'Envio rápido e acompanhado'
    },
    {
      icon: <Phone className="w-12 h-12 text-orange-600" />,
      title: 'Suporte Profissional',
      description: 'Equipe de suporte de extrema qualidade a semana toda'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              🛍️ lojarapidamz
            </h3>
            <p className="text-gray-400 mb-4">
              Sua loja online de confiança em Moçambique. Produtos premium com entrega grátis.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                Facebook
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-pink-400">
                Instagram
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Cintas Modeladoras</a></li>
              <li><a href="#" className="hover:text-white">Tapetes Decorativos</a></li>
              <li><a href="#" className="hover:text-white">Cortadores</a></li>
              <li><a href="#" className="hover:text-white">Cabelos Femininos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Fale Connosco</a></li>
              <li><a href="#" className="hover:text-white">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-white">Entregas & Prazos</a></li>
              <li><a href="#" className="hover:text-white">Trocas e Devoluções</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📱 WhatsApp: {WHATSAPP_CONFIG.number}</li>
              <li>📧 Email: contato@lojarapidamz.com</li>
              <li>📍 Maputo, Moçambique</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 lojarapidamz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente WhatsApp Float
const WhatsAppFloat = () => {
  return (
    <Button
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg z-50"
      onClick={() => window.open(`https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_CONFIG.messages.general)}`, '_blank')}
    >
      <Phone className="w-6 h-6" />
    </Button>
  )
}

// Componente Principal App
function App() {
  const [cartItems, setCartItems] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          cartItems={cartItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProductsSection 
                  products={PRODUCTS} 
                  onAddToCart={addToCart}
                  searchQuery={searchQuery}
                />
                <FeaturesSection />
              </>
            } />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App

