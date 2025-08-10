import React, { useState } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const Cart = ({ isOpen, onClose, cartItems, updateCartItem, removeFromCart, clearCart }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Maputo',
    notes: ''
  })

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 1000 ? 0 : 150 // Frete grátis acima de 1000 MZN
  const total = subtotal + shipping

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
    } else {
      updateCartItem(itemId, newQuantity)
    }
  }

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    const orderDetails = `*🛍️ NOVO PEDIDO - lojarapidamz*

*👤 Dados do Cliente:*
Nome: ${customerInfo.name}
Telefone: ${customerInfo.phone}
Endereço: ${customerInfo.address}
Cidade: ${customerInfo.city}

*📦 Produtos:*
${cartItems.map(item => 
  `• ${item.name}\n  Preço: ${item.price} MZN\n  Quantidade: ${item.quantity}\n  Subtotal: ${item.price * item.quantity} MZN`
).join('\n\n')}

*💰 Resumo do Pedido:*
Subtotal: ${subtotal} MZN
Frete: ${shipping === 0 ? 'GRÁTIS' : `${shipping} MZN`}
*Total: ${total} MZN*

${customerInfo.notes ? `*📝 Observações:*\n${customerInfo.notes}` : ''}

---
✅ Confirmo que aceito:
• Pagamento na entrega (M-Pesa, E-Mola ou Dinheiro)
• Entrega em até 2 dias úteis
• Política de trocas em até 7 dias

Quando posso receber meu pedido?`

    const whatsappUrl = `https://wa.me/258840000000?text=${encodeURIComponent(orderDetails)}`
    window.open(whatsappUrl, '_blank')
    
    // Limpar carrinho após envio
    clearCart()
    setCustomerInfo({
      name: '',
      phone: '',
      address: '',
      city: 'Maputo',
      notes: ''
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold flex items-center">
            <ShoppingBag className="w-6 h-6 mr-2" />
            Carrinho de Compras
            {cartItems.length > 0 && (
              <Badge className="ml-2 bg-blue-600">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} itens
              </Badge>
            )}
          </h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Lista de Produtos */}
          <div className="flex-1 p-6 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Seu carrinho está vazio
                </h3>
                <p className="text-gray-500 mb-6">
                  Adicione alguns produtos para continuar
                </p>
                <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
                  Continuar Comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-blue-600">
                              {item.price} MZN
                            </span>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-12 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Limpar Carrinho
                  </Button>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      Subtotal: {subtotal} MZN
                    </p>
                    {shipping > 0 && (
                      <p className="text-sm text-gray-600">
                        Frete: {shipping} MZN
                      </p>
                    )}
                    {shipping === 0 && (
                      <p className="text-sm text-green-600 font-semibold">
                        🚚 Frete Grátis!
                      </p>
                    )}
                    <p className="text-xl font-bold text-blue-600">
                      Total: {total} MZN
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Formulário de Checkout */}
          {cartItems.length > 0 && (
            <div className="lg:w-96 bg-gray-50 p-6 border-l">
              <h3 className="text-xl font-semibold mb-6">Finalizar Pedido</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    placeholder="+258 84 000 0000"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Endereço Completo *</Label>
                  <Textarea
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    placeholder="Rua, número, bairro, ponto de referência"
                    required
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <select
                    id="city"
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="Maputo">Maputo</option>
                    <option value="Matola">Matola</option>
                    <option value="Beira">Beira</option>
                    <option value="Nampula">Nampula</option>
                    <option value="Outras">Outras Cidades</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="notes">Observações (Opcional)</Label>
                  <Textarea
                    id="notes"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                    placeholder="Instruções especiais para entrega"
                    rows={2}
                  />
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">💳 Formas de Pagamento</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✅ M-Pesa (Pagamento na entrega)</li>
                    <li>✅ E-Mola (Pagamento na entrega)</li>
                    <li>✅ Dinheiro (Pagamento na entrega)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">🚚 Informações de Entrega</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Entrega em 1-2 dias úteis</li>
                    <li>• Frete grátis acima de 1000 MZN</li>
                    <li>• Trocas em até 7 dias</li>
                    <li>• Garantia de qualidade</li>
                  </ul>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address}
                >
                  💬 Finalizar via WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao finalizar, você será redirecionado para o WhatsApp para confirmar seu pedido.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart

