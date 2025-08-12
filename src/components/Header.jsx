import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 text-sm font-medium">
        🚚 ENTREGA GRÁTIS EM MAPUTO, MATOLA E BEIRA | 📞 +258 63 181 415
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LR</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Loja Rapida</h1>
              <p className="text-sm text-gray-600">Moçambique</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button className="cta-primary ml-2 px-6">
              Buscar
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors">
              <User className="w-6 h-6" />
              <span className="text-sm">Conta</span>
            </button>

            {/* Cart Icon */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden md:block text-sm">Carrinho</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4`}>
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8">
            <li><a href="#home" className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors">Início</a></li>
            <li><a href="#cozinha" className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors">Cozinha Inteligente</a></li>
            <li><a href="#beleza" className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors">Beleza & Bem-Estar</a></li>
            <li><a href="#moda" className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors">Moda & Corpo</a></li>
            <li><a href="#blog" className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors">Blog</a></li>
            <li><a href="#contacto" className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

