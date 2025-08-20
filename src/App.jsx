import React, { useState, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Search, ShoppingCart, User, Menu, X, Star, Heart, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Cart from './components/Cart'
import ProductFilters from './components/ProductFilters'
import SearchBar from './components/SearchBar'
import SEOHead from './components/SEOHead'
import { PerformanceOptimizer, OptimizedImage, FontOptimizer } from './components/PerformanceOptimizer'
import './App.css'

// Configuração do WhatsApp
const WHATSAPP_NUMBER = '+258863181415'
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`

// Dados dos produtos
const PRODUCTS = [
  {
    id: 1,
    name: 'Cinta Modeladora Premium',
    description: 'Modelagem perfeita e conforto excepcional para realçar suas curvas naturais.',
    price: 1200,
    originalPrice: 1800,
    discount: 33,
    image: '/src/assets/cinta-modeladora.webp',
    rating: 4.9,
    reviews: 127,
    badge: 'Mais Vendido',
    category: 'Moda'
  },
  {
    id: 2,
    name: 'Tapete Decorativo Moderno',
    description: 'Transforme sua casa com elegância e sofisticação.',
    price: 800,
    originalPrice: 1200,
    discount: 33,
    image: '/src/assets/tapete-decorativo.webp',
    rating: 4.8,
    reviews: 89,
    badge: 'Oferta',
    category: 'Decoração'
  },
  {
    id: 3,
    name: 'Cortador Profissional',
    description: 'Facilite sua vida na cozinha com precisão e eficiência.',
    price: 450,
    originalPrice: 650,
    discount: 31,
    image: '/src/assets/cortador-profissional.webp',
    rating: 4.7,
    reviews: 156,
    badge: 'Prático',
    category: 'Cozinha'
  },
  {
    id: 4,
    name: 'Cabelo Feminino Premium',
    description: 'Visual deslumbrante garantido com qualidade superior.',
    price: 2500,
    originalPrice: 3500,
    discount: 29,
    image: '/src/assets/cabelo-premium.webp',
    rating: 4.9,
    reviews: 203,
    badge: 'Premium',
    category: 'Beleza'
  }
]

// Banners do carrossel
const BANNERS = [
  {
    id: 1,
    title: 'MAIS FACILIDADE PARA NOSSOS CLIENTES!',
    subtitle: 'PAGAMENTO NA ENTREGA',
    description: 'ACEITAMOS PAGAMENTO POR M-PESA, E-MOLA E DINHEIRO',
    image: '/src/assets/hero-banner.webp',
    ctaPrimary: 'Comprar Agora',
    ctaSecondary: 'Atendimento Imediato'
  },
  {
    id: 2,
    title: 'ENTREGA GRÁTIS EM TODO MOÇAMBIQUE',
    subtitle: 'FRETE GRÁTIS',
    description: 'ENTREGA RÁPIDA E SEGURA EM MAPUTO, MATOLA E BEIRA',
    image: '/src/assets/hero-banner.webp',
    ctaPrimary: 'Ver Produtos',
    ctaSecondary: 'Saiba Mais'
  },
  {
    id: 3,
    title: 'QUALIDADE GARANTIDA',
    subtitle: 'SATISFAÇÃO 100%',
    description: 'PRODUTOS PREMIUM COM GARANTIA DE QUALIDADE',
    image: '/src/assets/hero-banner.webp',
    ctaPrimary: 'Explorar',
    ctaSecondary: 'Fale Conosco'
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 5000],
    minRating: 0,
    features: []
  })
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS)

  // Auto-rotação do banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Aplicar filtros aos produtos
  useEffect(() => {
    let filtered = [...PRODUCTS]

    // Filtro por categoria
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      )
    }

    // Filtro por preço
    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1]
      )
    }

    // Filtro por avaliação
    if (filters.minRating > 0) {
      filtered = filtered.filter(product => 
        product.rating >= filters.minRating
      )
    }

    // Filtro por características
    if (filters.features.length > 0) {
      filtered = filtered.filter(product => {
        return filters.features.some(feature => {
          switch (feature) {
            case 'promotion':
              return product.discount > 0
            case 'bestseller':
              return product.badge === 'Mais Vendido'
            case 'premium':
              return product.badge === 'Premium'
            case 'freeShipping':
              return product.price >= 1000
            case 'newArrival':
              return product.badge === 'Novo'
            default:
              return false
          }
        })
      })
    }

    setFilteredProducts(filtered)
  }, [filters])

  const sendWhatsAppMessage = (productName = '', action = 'interesse') => {
    let message = ''
    if (productName) {
      message = `Olá! Tenho interesse no produto: ${productName}. Gostaria de mais informações sobre preço, disponibilidade e entrega.`
    } else {
      message = 'Olá! Gostaria de conhecer os produtos da lojarapida. Podem me ajudar?'
    }
    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const updateCartQuantity = (productId, newQuantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const handleProductSelect = (product) => {
    // Scroll para o produto ou abrir modal
    const productElement = document.getElementById(`product-${product.id}`)
    if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % BANNERS.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)
  }

  return (
    <HelmetProvider>
      <PerformanceOptimizer>
        <FontOptimizer />
        <SEOHead
          title="lojarapida - E-commerce Premium em Moçambique | Entrega Grátis"
          description="Loja online premium em Moçambique com produtos de qualidade: cintas modeladoras, decoração, utensílios de cozinha e beleza. Entrega grátis, pagamento na entrega."
          keywords="loja online moçambique, e-commerce maputo, cintas modeladoras, decoração casa, utensílios cozinha, entrega grátis moçambique"
          url="https://lojarapidamz.com"
        />
        
        <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Entrega Grátis para Maputo e Matola
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Trocas e Devoluções em até 7 dias
              </span>
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Satisfação Garantida ou Dinheiro de Volta
              </span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold gradient-text">lojarapida</span>
            </div>

            {/* Search Bar */}
            <SearchBar
              products={PRODUCTS}
              onProductSelect={handleProductSelect}
              className="hidden md:flex flex-1 max-w-md mx-8"
            />

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                <User className="w-4 h-4" />
                Minha Conta
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden md:inline">Carrinho</span>
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>

              {/* Filters Button */}
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setIsFiltersOpen(true)}
              >
                <Filter className="w-4 h-4" />
                <span className="hidden md:inline">Filtros</span>
              </Button>

              {/* Mobile Menu Button */}
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

          {/* Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                Início
              </a>
              <a href="#produtos" className="text-foreground hover:text-primary transition-colors font-medium">
                Ver Todos os Produtos
              </a>
              <a href="#favoritos" className="text-foreground hover:text-primary transition-colors font-medium">
                Mais Amados 💖
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">
                Perguntas Frequentes
              </a>
              <a href="#entrega" className="text-foreground hover:text-primary transition-colors font-medium">
                Entregas & Prazos
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
                Fale Connosco
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Banner Rotativo */}
      <section className="relative overflow-hidden">
        <div className="relative h-[500px] md:h-[600px]">
          {BANNERS.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentBanner ? 'translate-x-0' : 
                index < currentBanner ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className="gradient-bg h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-white space-y-6">
                      <h1 className="text-4xl md:text-6xl font-bold text-shadow">
                        {banner.title}
                      </h1>
                      <div className="space-y-2">
                        <h2 className="text-2xl md:text-4xl font-bold text-yellow-300">
                          {banner.subtitle}
                        </h2>
                        <p className="text-lg md:text-xl opacity-90">
                          {banner.description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          size="lg"
                          className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
                          onClick={() => sendWhatsAppMessage()}
                        >
                          🛍️ {banner.ctaPrimary}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
                          onClick={() => sendWhatsAppMessage()}
                        >
                          💬 {banner.ctaSecondary}
                        </Button>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Navigation */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevBanner}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={nextBanner}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Banner Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {BANNERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBanner ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolhidos por milhares de clientes satisfeitos em todo Moçambique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} id={`product-${product.id}`} className="card-hover border-0 shadow-md">
                <div className="relative">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <Badge className="bg-red-500 text-white">
                      {product.badge}
                    </Badge>
                    <Badge variant="secondary">
                      {product.discount}% OFF
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} avaliações)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price} MZN
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {product.originalPrice} MZN
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button
                      className="w-full btn-whatsapp"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      💬 Comprar Agora
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => addToCart(product)}
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mensagem quando não há produtos */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600 mb-4">
                Tente ajustar os filtros ou buscar por outros termos
              </p>
              <Button
                variant="outline"
                onClick={() => setFilters({
                  categories: [],
                  priceRange: [0, 5000],
                  minRating: 0,
                  features: []
                })}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Compra Segura</h3>
              <p className="text-muted-foreground">Apenas pague após receber</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Frete Grátis</h3>
              <p className="text-muted-foreground">Envio rápido e acompanhado</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Suporte Profissional</h3>
              <p className="text-muted-foreground">Equipe de suporte de extrema qualidade a semana toda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <span className="text-xl font-bold">lojarapida</span>
              </div>
              <p className="text-gray-400">
                E-commerce premium em Moçambique com produtos de qualidade e entrega garantida.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="btn-whatsapp"
                  onClick={() => sendWhatsAppMessage()}
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categorias</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#moda" className="hover:text-white transition-colors">Moda</a></li>
                <li><a href="#decoracao" className="hover:text-white transition-colors">Decoração</a></li>
                <li><a href="#cozinha" className="hover:text-white transition-colors">Cozinha</a></li>
                <li><a href="#beleza" className="hover:text-white transition-colors">Beleza</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{WHATSAPP_NUMBER}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@lojarapidamz.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Maputo, Moçambique</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 lojarapida. Todos os direitos reservados.</p>
            <p className="mt-2">
              <a href="#privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
              {' | '}
              <a href="#termos" className="hover:text-white transition-colors">Termos de Uso</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="btn-whatsapp rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          onClick={() => sendWhatsAppMessage()}
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>

      {/* Cart Modal */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />

      {/* Product Filters Modal */}
      <ProductFilters
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
        products={PRODUCTS}
        onApplyFilters={(newFilters) => setFilters(newFilters)}
      />
        </div>
      </PerformanceOptimizer>
    </HelmetProvider>
  )
}

export default App

