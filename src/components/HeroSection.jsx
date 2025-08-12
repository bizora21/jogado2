import React from 'react';
import { ArrowRight, Truck, Shield, Clock, Star } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/25863181415?text=Olá! Gostaria de saber mais sobre os produtos da Loja Rapida MZ', '_blank');
  };

  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                #1 Loja Online em Moçambique
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Produtos
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  {' '}Domésticos{' '}
                </span>
                e de Bem-Estar
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra a nossa seleção premium de produtos cuidadosamente testados em Moçambique. 
                Oferecemos entrega grátis em Maputo, Matola e Beira, com a comodidade do pagamento na entrega para a sua total tranquilidade.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Entrega Grátis</h3>
                  <p className="text-sm text-gray-600">Maputo, Matola, Beira</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pagamento Seguro</h3>
                  <p className="text-sm text-gray-600">Na entrega</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Entrega Rápida</h3>
                  <p className="text-sm text-gray-600">24-48 horas</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProducts}
                className="cta-primary text-lg px-8 py-4"
              >
                Ver Produtos
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleWhatsAppContact}
                className="cta-secondary text-lg px-8 py-4"
              >
                Contactar via WhatsApp
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Produtos Premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Cidades Atendidas</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/cortador-legumes.png" 
                alt="Produtos Loja Rapida MZ"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Online agora</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">4.9★</div>
                <div className="text-sm text-gray-600">Avaliação média</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span className="font-medium">ENTREGA GRÁTIS EM MAPUTO, MATOLA E BEIRA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="font-medium">PAGAMENTO NA ENTREGA - TOTAL SEGURANÇA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

