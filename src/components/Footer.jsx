import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Loja Rapida MZ</h3>
                <p className="text-sm text-gray-400">Moçambique</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              A sua loja online de confiança em Moçambique. Produtos domésticos e de bem-estar com entrega grátis em Maputo, Matola e Beira.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-gray-300 hover:text-red-500 transition-colors">Produtos</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-red-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-red-500 transition-colors">Blog</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-red-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#cozinha" className="text-gray-300 hover:text-red-500 transition-colors">Cozinha Inteligente</a></li>
              <li><a href="#beleza" className="text-gray-300 hover:text-red-500 transition-colors">Beleza & Bem-Estar</a></li>
              <li><a href="#moda" className="text-gray-300 hover:text-red-500 transition-colors">Moda & Corpo</a></li>
              <li><a href="#acessorios" className="text-gray-300 hover:text-red-500 transition-colors">Acessórios</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">+258 63 181 415</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">info@lojarapidamz.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <div className="text-gray-300">
                  <p>Maputo, Moçambique</p>
                  <p className="text-sm">Entrega em Maputo, Matola e Beira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Loja Rapida MZ. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#termos" className="text-gray-400 hover:text-red-500 transition-colors">Termos de Serviço</a>
              <a href="#privacidade" className="text-gray-400 hover:text-red-500 transition-colors">Política de Privacidade</a>
              <a href="#cookies" className="text-gray-400 hover:text-red-500 transition-colors">Política de Cookies</a>
              <a href="#entrega" className="text-gray-400 hover:text-red-500 transition-colors">Entrega e Devolução</a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div 
        className="whatsapp-float"
        onClick={() => window.open('https://wa.me/25863181415?text=Olá! Tenho interesse nos produtos da Loja Rapida MZ', '_blank')}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        <span>Chat Directo</span>
      </div>
    </footer>
  );
};

export default Footer;

