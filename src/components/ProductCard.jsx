import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleWhatsAppOrder = () => {
    const message = `Olá! Tenho interesse no produto: ${product.name} - Preço: ${product.price} MZN. Podem me dar mais informações?`;
    window.open(`https://wa.me/25863181415?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
            -{product.discount}%
          </div>
        )}
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews} avaliações)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {product.originalPrice} MZN
              </span>
            )}
            <span className="text-2xl font-bold text-red-600">
              {product.price} MZN
            </span>
          </div>
        </div>

        {/* Features */}
        {product.features && (
          <div className="mb-4">
            <ul className="text-sm text-gray-600 space-y-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          <button 
            onClick={handleWhatsAppOrder}
            className="cta-primary w-full justify-center"
          >
            <ShoppingCart className="w-5 h-5" />
            Encomendar via WhatsApp
          </button>
          
          <button className="w-full py-2 px-4 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors font-medium">
            Ver Detalhes
          </button>
        </div>

        {/* Delivery Info */}
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700 font-medium">
            ✅ Entrega grátis em Maputo, Matola e Beira
          </p>
          <p className="text-xs text-green-600 mt-1">
            Pagamento na entrega - Total segurança
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

