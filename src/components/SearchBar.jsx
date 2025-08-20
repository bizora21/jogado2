import React, { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

const SearchBar = ({ products = [], onProductSelect, className = '' }) => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const searchRef = useRef(null)

  useEffect(() => {
    if (query.length >= 2) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5) // Limitar a 5 resultados
      
      setFilteredProducts(filtered)
      setIsOpen(filtered.length > 0)
    } else {
      setFilteredProducts([])
      setIsOpen(false)
    }
  }, [query, products])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleProductClick = (product) => {
    setQuery('')
    setIsOpen(false)
    onProductSelect(product)
  }

  const clearSearch = () => {
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Input
          type="text"
          placeholder="O que está buscando?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-4 pr-20 py-2 w-full border-2 border-primary/20 focus:border-primary"
        />
        <div className="absolute right-1 top-1 bottom-1 flex items-center gap-1">
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
          <Button
            size="sm"
            className="h-8 px-3 btn-primary"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Resultados da Busca */}
      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg">
          <CardContent className="p-0">
            <div className="max-h-80 overflow-y-auto">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <p className="text-xs text-gray-600 line-clamp-1">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-primary">
                        {product.price} MZN
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {product.originalPrice} MZN
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {query.length >= 2 && filteredProducts.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p>Nenhum produto encontrado para "{query}"</p>
                  <p className="text-sm mt-1">Tente usar palavras-chave diferentes</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default SearchBar

