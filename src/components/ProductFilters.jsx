import React, { useState } from 'react'
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'

const ProductFilters = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFiltersChange, 
  products = [],
  onApplyFilters 
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: true,
    features: true
  })

  // Extrair categorias únicas dos produtos
  const categories = [...new Set(products.map(p => p.category))].filter(Boolean)
  
  // Extrair faixa de preços
  const prices = products.map(p => p.price).filter(Boolean)
  const minPrice = Math.min(...prices) || 0
  const maxPrice = Math.max(...prices) || 5000

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (category, checked) => {
    const newCategories = checked 
      ? [...(filters.categories || []), category]
      : (filters.categories || []).filter(c => c !== category)
    
    onFiltersChange({
      ...filters,
      categories: newCategories
    })
  }

  const handlePriceChange = (values) => {
    onFiltersChange({
      ...filters,
      priceRange: values
    })
  }

  const handleRatingChange = (rating) => {
    onFiltersChange({
      ...filters,
      minRating: filters.minRating === rating ? 0 : rating
    })
  }

  const handleFeatureChange = (feature, checked) => {
    const newFeatures = checked 
      ? [...(filters.features || []), feature]
      : (filters.features || []).filter(f => f !== feature)
    
    onFiltersChange({
      ...filters,
      features: newFeatures
    })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [minPrice, maxPrice],
      minRating: 0,
      features: []
    })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (filters.categories?.length > 0) count += filters.categories.length
    if (filters.priceRange && (filters.priceRange[0] > minPrice || filters.priceRange[1] < maxPrice)) count += 1
    if (filters.minRating > 0) count += 1
    if (filters.features?.length > 0) count += filters.features.length
    return count
  }

  const activeFiltersCount = getActiveFiltersCount()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-end p-4">
      <Card className="w-full max-w-md h-full max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros
            {activeFiltersCount > 0 && (
              <Badge variant="secondary">{activeFiltersCount}</Badge>
            )}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="overflow-y-auto max-h-[calc(90vh-120px)] space-y-6">
          {/* Categorias */}
          {categories.length > 0 && (
            <div className="space-y-3">
              <Button
                variant="ghost"
                onClick={() => toggleSection('category')}
                className="w-full justify-between p-0 h-auto font-semibold"
              >
                Categorias
                {expandedSections.category ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </Button>
              
              {expandedSections.category && (
                <div className="space-y-2 pl-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={filters.categories?.includes(category) || false}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                      />
                      <label 
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <Separator />

          {/* Faixa de Preço */}
          <div className="space-y-3">
            <Button
              variant="ghost"
              onClick={() => toggleSection('price')}
              className="w-full justify-between p-0 h-auto font-semibold"
            >
              Faixa de Preço
              {expandedSections.price ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </Button>
            
            {expandedSections.price && (
              <div className="space-y-4 pl-2">
                <div className="px-2">
                  <Slider
                    value={filters.priceRange || [minPrice, maxPrice]}
                    onValueChange={handlePriceChange}
                    max={maxPrice}
                    min={minPrice}
                    step={50}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{filters.priceRange?.[0] || minPrice} MZN</span>
                  <span>{filters.priceRange?.[1] || maxPrice} MZN</span>
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Avaliação Mínima */}
          <div className="space-y-3">
            <Button
              variant="ghost"
              onClick={() => toggleSection('rating')}
              className="w-full justify-between p-0 h-auto font-semibold"
            >
              Avaliação Mínima
              {expandedSections.rating ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </Button>
            
            {expandedSections.rating && (
              <div className="space-y-2 pl-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox
                      id={`rating-${rating}`}
                      checked={filters.minRating === rating}
                      onCheckedChange={() => handleRatingChange(rating)}
                    />
                    <label 
                      htmlFor={`rating-${rating}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex items-center gap-1"
                    >
                      <span>{rating}</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-500">ou mais</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Características Especiais */}
          <div className="space-y-3">
            <Button
              variant="ghost"
              onClick={() => toggleSection('features')}
              className="w-full justify-between p-0 h-auto font-semibold"
            >
              Características
              {expandedSections.features ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </Button>
            
            {expandedSections.features && (
              <div className="space-y-2 pl-2">
                {[
                  { id: 'promotion', label: 'Em Promoção' },
                  { id: 'bestseller', label: 'Mais Vendidos' },
                  { id: 'premium', label: 'Premium' },
                  { id: 'freeShipping', label: 'Frete Grátis' },
                  { id: 'newArrival', label: 'Lançamentos' }
                ].map(feature => (
                  <div key={feature.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`feature-${feature.id}`}
                      checked={filters.features?.includes(feature.id) || false}
                      onCheckedChange={(checked) => handleFeatureChange(feature.id, checked)}
                    />
                    <label 
                      htmlFor={`feature-${feature.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {feature.label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col gap-3 pt-4 border-t">
            <Button
              onClick={() => {
                onApplyFilters(filters)
                onClose()
              }}
              className="w-full"
            >
              Aplicar Filtros
              {activeFiltersCount > 0 && ` (${activeFiltersCount})`}
            </Button>
            
            {activeFiltersCount > 0 && (
              <Button
                variant="outline"
                onClick={clearAllFilters}
                className="w-full"
              >
                Limpar Filtros
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductFilters

