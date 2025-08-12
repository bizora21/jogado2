import React, { useState } from 'react';

const CategoryFilter = ({ products, onFilteredProducts }) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Produtos', icon: '🏠' },
    { id: 'cozinha', name: 'Cozinha Inteligente', icon: '🍽️' },
    { id: 'beleza', name: 'Beleza & Bem-Estar', icon: '💄' },
    { id: 'moda', name: 'Moda & Corpo', icon: '👗' }
  ];

  const filterProducts = (categoryId) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'todos') {
      onFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product => {
      switch (categoryId) {
        case 'cozinha':
          return product.id === 1 || product.id === 2; // Amassador e Cortador
        case 'beleza':
          return product.id === 3 || product.id === 4; // Escova e Massageador
        case 'moda':
          return product.id === 5; // Cinta
        default:
          return true;
      }
    });

    onFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => filterProducts(category.id)}
          data-category={category.id}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-red-300'
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

