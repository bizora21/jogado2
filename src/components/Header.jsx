import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Scroll to products section and highlight search
      document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
      console.log('Searching for:', searchQuery);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCategoryClick = (category) => {
    // Scroll to products and trigger category filter
    scrollToSection('produtos');
    // Trigger category filter after scroll
    setTimeout(() => {
      const categoryButtons = document.querySelectorAll('button');
      const targetButton = Array.from(categoryButtons).find(btn => 
        btn.textContent && btn.textContent.includes(getCategoryName(category))
      );
      if (targetButton) {
        targetButton.click();
      }
    }, 500);
  };

  const getCategoryName = (category) => {
    const names = {
      'cozinha': 'Cozinha Inteligente',
      'beleza': 'Beleza & Bem-Estar',
      'moda': 'Moda & Corpo'
    };
    return names[category] || '';
  };

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
            <form onSubmit={handleSearch} className="flex w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Pesquisar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-l-lg focus:border-red-500 focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <button type="submit" className="cta-primary px-6 rounded-l-none rounded-r-lg">
                Buscar
              </button>
            </form>
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
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </form>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4`}>
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('hero')}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors w-full text-left md:text-center"
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('cozinha')}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors w-full text-left md:text-center"
              >
                Cozinha Inteligente
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('beleza')}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors w-full text-left md:text-center"
              >
                Beleza & Bem-Estar
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('moda')}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors w-full text-left md:text-center"
              >
                Moda & Corpo
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors w-full text-left md:text-center"
              >
                Blog
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('footer')}
                className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors w-full text-left md:text-center"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

