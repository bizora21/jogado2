import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import TestimonialCard from './components/TestimonialCard';
import CategoryFilter from './components/CategoryFilter';
import { Truck, Shield, Clock, Star, Award, Users, CheckCircle } from 'lucide-react';
import './App.css';

// Dados dos produtos
const products = [
  {
    id: 1,
    name: "Amassador de Alho Premium",
    description: "Transforme a sua cozinha com este amassador de alho em aço inoxidável premium. Perfeito para quem adora cozinhar com temperos frescos e quer economizar tempo na preparação dos pratos favoritos da família.",
    price: "850",
    originalPrice: "1200",
    discount: 29,
    image: "/images/amassador-alho.png",
    rating: 5,
    reviews: 47,
    features: [
      "Aço inoxidável premium resistente",
      "Fácil limpeza e manutenção",
      "Design ergonómico confortável"
    ]
  },
  {
    id: 2,
    name: "Cortador de Legumes Multifuncional",
    description: "Revolucione a preparação das suas refeições com este cortador multifuncional. Ideal para preparar rapidamente o matapa, saladas frescas e todos os seus pratos moçambicanos favoritos.",
    price: "1250",
    originalPrice: "1800",
    discount: 31,
    image: "/images/cortador-legumes.png",
    rating: 5,
    reviews: 89,
    features: [
      "Múltiplas funções de corte precisas",
      "Recipiente coletor incluído",
      "Lâminas ultra afiadas e duráveis"
    ]
  },
  {
    id: 3,
    name: "Escova de Limpeza Facial Sônica",
    description: "Cuide da sua pele com tecnologia avançada. Esta escova facial sônica proporciona uma limpeza profunda e suave, deixando a sua pele radiante e saudável todos os dias.",
    price: "2100",
    originalPrice: "2800",
    discount: 25,
    image: "/images/escova-facial.png",
    rating: 5,
    reviews: 156,
    features: [
      "Limpeza sônica profunda e eficaz",
      "Totalmente resistente à água",
      "Bateria recarregável de longa duração"
    ]
  },
  {
    id: 4,
    name: "Mini Massageador Portátil",
    description: "Relaxe e alivie as tensões do dia a dia com este massageador portátil. Perfeito para usar em casa, no escritório ou em viagem, proporcionando bem-estar onde quer que esteja.",
    price: "1650",
    originalPrice: "2200",
    discount: 25,
    image: "/images/mini-massageador.png",
    rating: 4,
    reviews: 73,
    features: [
      "Design compacto e portátil",
      "Múltiplas velocidades de massagem",
      "Bateria de longa duração"
    ]
  },
  {
    id: 5,
    name: "Cinta Modeladora Feminina",
    description: "Sinta-se confiante e elegante com esta cinta modeladora de alta qualidade. Feita com tecidos respiráveis e confortáveis, oferece resultados imediatos e todo o conforto que merece.",
    price: "950",
    originalPrice: "1400",
    discount: 32,
    image: "/images/cinta-modeladora.png",
    rating: 4,
    reviews: 124,
    features: [
      "Tecido respirável e confortável",
      "Ajuste perfeito ao corpo",
      "Resultados visíveis imediatamente"
    ]
  }
];

// Dados dos depoimentos
const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Maputo",
    avatar: "/images/avatar-maria.png",
    rating: 5,
    comment: "O cortador de legumes revolucionou a minha cozinha! Agora preparo o matapa em metade do tempo. A entrega foi super rápida e o produto chegou em perfeitas condições. Recomendo vivamente!",
    product: "Cortador de Legumes Multifuncional",
    date: "15 de Janeiro, 2025"
  },
  {
    id: 2,
    name: "Ana Joaquim",
    location: "Matola",
    avatar: "/images/avatar-maria.png",
    rating: 5,
    comment: "A escova facial mudou completamente a minha rotina de beleza. A minha pele nunca esteve tão limpa e radiante. É um investimento que vale cada metical. Recomendo a todas as mulheres!",
    product: "Escova de Limpeza Facial Sônica",
    date: "12 de Janeiro, 2025"
  },
  {
    id: 3,
    name: "Carla Mondlane",
    location: "Beira",
    avatar: "/images/avatar-maria.png",
    rating: 5,
    comment: "Excelente atendimento e produtos de qualidade superior. A cinta modeladora é muito confortável e os resultados são imediatos. Sinto-me mais confiante e elegante. Muito satisfeita com a compra!",
    product: "Cinta Modeladora Feminina",
    date: "10 de Janeiro, 2025"
  }
];

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Banners Promocionais */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="banner-mz">
              <Truck className="w-6 h-6 mx-auto mb-2" />
              ENTREGA GRÁTIS EM MAPUTO, MATOLA E BEIRA
            </div>
            <div className="banner-mz">
              <Shield className="w-6 h-6 mx-auto mb-2" />
              PAGAMENTO NA ENTREGA - TOTAL SEGURANÇA
            </div>
            <div className="banner-mz">
              <CheckCircle className="w-6 h-6 mx-auto mb-2" />
              PRODUTOS TESTADOS EM MOÇAMBIQUE
            </div>
            <div className="banner-mz">
              <Users className="w-6 h-6 mx-auto mb-2" />
              SUPORTE EM PORTUGUÊS E CHANGANA
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section id="produtos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra a nossa seleção premium de produtos domésticos e de bem-estar, 
              cuidadosamente testados e aprovados por clientes em todo Moçambique.
            </p>
          </div>

          <CategoryFilter 
            products={products} 
            onFilteredProducts={handleFilteredProducts} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="cta-primary text-lg px-8 py-4">
              Ver Todos os Produtos
            </button>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossas Categorias
            </h2>
            <p className="text-xl text-gray-600">
              Explore nossas categorias especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center transform transition-transform group-hover:scale-105">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18,2A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H18M18,4H6V20H18V4Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Cozinha Inteligente</h3>
                <p className="text-red-100">Utensílios modernos para sua cozinha</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-yellow-500 to-green-500 rounded-2xl p-8 text-white text-center transform transition-transform group-hover:scale-105">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Beleza & Bem-Estar</h3>
                <p className="text-yellow-100">Cuidados pessoais premium</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center transform transition-transform group-hover:scale-105">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Moda & Corpo</h3>
                <p className="text-green-100">Produtos para seu bem-estar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 500 clientes satisfeitos em todo Moçambique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-red-100">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-red-100">Produtos Premium</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">3</div>
              <div className="text-red-100">Cidades Atendidas</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">4.9★</div>
              <div className="text-red-100">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pronto para Transformar Sua Casa?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de clientes satisfeitos em Moçambique. 
            Entrega grátis e pagamento na entrega para sua total segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/25863181415?text=Olá! Gostaria de fazer um pedido na Loja Rapida MZ', '_blank')}
              className="cta-primary text-lg px-8 py-4"
            >
              Fazer Pedido via WhatsApp
            </button>
            <button 
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-secondary text-lg px-8 py-4"
            >
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
