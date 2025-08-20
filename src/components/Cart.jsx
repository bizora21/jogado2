import React, { useState, useEffect } from 'react'
import { X, Plus, Minus, ShoppingCart, Trash2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const WHATSAPP_NUMBER = '+258863181415'
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Maputo',
    paymentMethod: 'cash'
  })
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  // Calcular totais
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const freeShippingThreshold = 1000
  const shippingCost = subtotal >= freeShippingThreshold ? 0 : 150
  const total = subtotal + shippingCost

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      onRemoveItem(itemId)
    } else {
      onUpdateQuantity(itemId, newQuantity)
    }
  }

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    setIsCheckingOut(true)

    // Gerar mensagem do pedido
    let message = `🛍️ *NOVO PEDIDO - lojarapida*\n\n`
    message += `👤 *Cliente:* ${customerInfo.name}\n`
    message += `📱 *Telefone:* ${customerInfo.phone}\n`
    message += `📍 *Endereço:* ${customerInfo.address}, ${customerInfo.city}\n`
    message += `💳 *Pagamento:* ${customerInfo.paymentMethod === 'cash' ? 'Dinheiro na entrega' : 
                                customerInfo.paymentMethod === 'mpesa' ? 'M-Pesa' : 'E-Mola'}\n\n`
    
    message += `📦 *PRODUTOS:*\n`
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Qtd: ${item.quantity}x | Preço: ${item.price} MZN\n`
      message += `   Subtotal: ${item.price * item.quantity} MZN\n\n`
    })

    message += `💰 *RESUMO FINANCEIRO:*\n`
    message += `Subtotal: ${subtotal} MZN\n`
    message += `Frete: ${shippingCost === 0 ? 'GRÁTIS' : `${shippingCost} MZN`}\n`
    message += `*TOTAL: ${total} MZN*\n\n`
    
    message += `✅ Confirme este pedido para prosseguirmos com a entrega!\n`
    message += `🚚 Entrega em 24-48h úteis`

    // Abrir WhatsApp
    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, '_blank')

    // Limpar carrinho após envio
    setTimeout(() => {
      onClearCart()
      setCustomerInfo({
        name: '',
        phone: '',
        address: '',
        city: 'Maputo',
        paymentMethod: 'cash'
      })
      setIsCheckingOut(false)
      onClose()
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Carrinho de Compras
            {items.length > 0 && (
              <Badge variant="secondary">{items.length} {items.length === 1 ? 'item' : 'itens'}</Badge>
            )}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Carrinho Vazio</h3>
              <p className="text-gray-600 mb-4">Adicione produtos ao seu carrinho para continuar</p>
              <Button onClick={onClose}>Continuar Comprando</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Lista de Produtos */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.price} MZN cada</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{item.price * item.quantity} MZN</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Resumo do Pedido */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{subtotal} MZN</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span className={shippingCost === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shippingCost === 0 ? 'GRÁTIS' : `${shippingCost} MZN`}
                  </span>
                </div>
                {subtotal < freeShippingThreshold && (
                  <p className="text-sm text-blue-600">
                    Adicione mais {freeShippingThreshold - subtotal} MZN para frete grátis!
                  </p>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>{total} MZN</span>
                </div>
              </div>

              <Separator />

              {/* Formulário de Checkout */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informações de Entrega</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+258 84 000 0000"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço Completo *</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Rua, número, bairro, referências"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <select
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Maputo">Maputo</option>
                      <option value="Matola">Matola</option>
                      <option value="Beira">Beira</option>
                      <option value="Nampula">Nampula</option>
                      <option value="Outras">Outras Cidades</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment">Forma de Pagamento</Label>
                    <select
                      id="payment"
                      value={customerInfo.paymentMethod}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, paymentMethod: e.target.value }))}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="cash">Dinheiro na Entrega</option>
                      <option value="mpesa">M-Pesa</option>
                      <option value="emola">E-Mola</option>
                    </select>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={onClearCart}
                    className="flex-1"
                  >
                    Limpar Carrinho
                  </Button>
                  <Button
                    onClick={handleCheckout}
                    disabled={isCheckingOut || !customerInfo.name || !customerInfo.phone || !customerInfo.address}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {isCheckingOut ? 'Enviando...' : 'Finalizar Pedido'}
                  </Button>
                </div>

                <p className="text-xs text-gray-600 text-center">
                  Ao finalizar, você será redirecionado para o WhatsApp para confirmar seu pedido.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Cart

