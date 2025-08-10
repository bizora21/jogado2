import React, { useState } from 'react'
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

const ProductFilters = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFiltersChange, 
  products,
  onApplyFilters 
}) => {
  const [localFilters, setLocalFilters] = useState(filters)
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: true,
    features: true
  })

  // Categorias disponíveis
  const categories = [
    { id: 'moda', name: 'Moda & Beleza', count: products.filter(p => p.category === 'moda').length },
    { id: 'decoracao', name: 'Decoração', count: products.filter(p => p.category === 'decoracao').length },
    { id: 'cozinha', name: 'Cozinha', count: products.filter(p => p.category === 'cozinha').length },
    { id: 'beleza', name: 'Beleza', count: products.filter(p => p.category === 'beleza').length }
  ]

  // Faixas de preço
  const priceRanges = [
    { id: '0-500', name: 'Até 500 MZN', min: 0, max: 500 },
    { id: '500-1000', name: '500 - 1000 MZN', min: 500, max: 1000 },
    { id: '1000-2000', name: '1000 - 2000 MZN', min: 1000, max: 2000 },
    { id: '2000+', name: 'Acima de 2000 MZN', min: 2000, max: 10000 }
  ]

  // Características especiais
  const features = [
    { id: 'discount', name: 'Em Promoção', count: products.filter(p => p.discount > 0).length },
    { id: 'bestseller', name: 'Mais Vendidos', count: products.filter(p => p.badge === 'Mais Vendido').length },
    { id: 'premium', name: 'Premium', count: products.filter(p => p.badge === 'Premium').length },
    { id: 'highRating', name: 'Bem Avaliados (4.5+)', count: products.filter(p => p.rating >= 4.5).length }
  ]

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (categoryId, checked) => {
    const newCategories = checked 
      ? [...localFilters.categories, categoryId]
      : localFilters.categories.filter(id => id !== categoryId)
    
    setLocalFilters(prev => ({
      ...prev,
      categories: newCategories
    }))
  }

  const handlePriceRangeChange = (rangeId, checked) => {
    const newPriceRanges = checked 
      ? [...localFilters.priceRanges, rangeId]
      : localFilters.priceRanges.filter(id => id !== rangeId)
    
    setLocalFilters(prev => ({
      ...prev,
      priceRanges: newPriceRanges
    }))
  }

  const handleFeatureChange = (featureId, checked) => {
    const newFeatures = checked 
      ? [...localFilters.features, featureId]
      : localFilters.features.filter(id => id !== featureId)
    
    setLocalFilters(prev => ({
      ...prev,
      features: newFeatures
    }))
  }

  const handleMinRatingChange = (value) => {
    setLocalFilters(prev => ({
      ...prev,
      minRating: value[0]
    }))
  }

  const applyFilters = () => {
    onFiltersChange(localFilters)
    onApplyFilters()
    onClose()
  }

  const clearFilters = () => {
    const emptyFilters = {
      categories: [],
      priceRanges: [],
      features: [],
      minRating: 0
    }
    setLocalFilters(emptyFilters)
    onFiltersChange(emptyFilters)
    onApplyFilters()
  }

  const getActiveFiltersCount = () => {
    return localFilters.categories.length + 
           localFilters.priceRanges.length + 
           localFilters.features.length + 
           (localFilters.minRating > 0 ? 1 : 0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filtros
            {getActiveFiltersCount() > 0 && (
              <Badge className="ml-2 bg-blue-600">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6 space-y-6">
          {/* Categorias */}
          <Card>
            <CardHeader 
              className="cursor-pointer pb-3"
              onClick={() => toggleSection('category')}
            >
              <CardTitle className="flex items-center justify-between text-lg">
                Categorias
                {expandedSections.category ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.category && (
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={localFilters.categories.includes(category.id)}
                        onCheckedChange={(checked) => handleCategoryChange(category.id, checked)}
                      />
                      <Label 
                        htmlFor={`category-${category.id}`}
                        className="flex-1 cursor-pointer"
                      >
                        {category.name}
                        <span className="text-gray-500 ml-1">({category.count})</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>

          {/* Faixa de Preço */}
          <Card>
            <CardHeader 
              className="cursor-pointer pb-3"
              onClick={() => toggleSection('price')}
            >
              <CardTitle className="flex items-center justify-between text-lg">
                Faixa de Preço
                {expandedSections.price ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.price && (
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <div key={range.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`price-${range.id}`}
                        checked={localFilters.priceRanges.includes(range.id)}
                        onCheckedChange={(checked) => handlePriceRangeChange(range.id, checked)}
                      />
                      <Label 
                        htmlFor={`price-${range.id}`}
                        className="flex-1 cursor-pointer"
                      >
                        {range.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>

          {/* Avaliação Mínima */}
          <Card>
            <CardHeader 
              className="cursor-pointer pb-3"
              onClick={() => toggleSection('rating')}
            >
              <CardTitle className="flex items-center justify-between text-lg">
                Avaliação Mínima
                {expandedSections.rating ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.rating && (
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="px-2">
                    <Slider
                      value={[localFilters.minRating]}
                      onValueChange={handleMinRatingChange}
                      max={5}
                      min={0}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0 ⭐</span>
                    <span className="font-semibold">
                      {localFilters.minRating} ⭐ ou mais
                    </span>
                    <span>5 ⭐</span>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Características Especiais */}
          <Card>
            <CardHeader 
              className="cursor-pointer pb-3"
              onClick={() => toggleSection('features')}
            >
              <CardTitle className="flex items-center justify-between text-lg">
                Características
                {expandedSections.features ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.features && (
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {features.map(feature => (
                    <div key={feature.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`feature-${feature.id}`}
                        checked={localFilters.features.includes(feature.id)}
                        onCheckedChange={(checked) => handleFeatureChange(feature.id, checked)}
                      />
                      <Label 
                        htmlFor={`feature-${feature.id}`}
                        className="flex-1 cursor-pointer"
                      >
                        {feature.name}
                        <span className="text-gray-500 ml-1">({feature.count})</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Botões de Ação */}
        <div className="border-t p-6">
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="flex-1"
            >
              Limpar Filtros
            </Button>
            <Button 
              onClick={applyFilters}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Aplicar Filtros
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFilters

