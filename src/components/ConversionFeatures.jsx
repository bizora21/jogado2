import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { X, Clock, Users, Zap, Gift } from 'lucide-react';

// Popup de desconto para novos visitantes
export const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 10000); // Mostra após 10 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenDiscountPopup', 'true');
  };

  const handleClaim = () => {
    // Redirecionar para WhatsApp com código de desconto
    window.open('https://wa.me/258123456789?text=Olá! Gostaria de usar o código BEMVINDO10 para ter 10% de desconto!', '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full relative animate-in zoom-in duration-300">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 p-1"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <Gift className="h-12 w-12 text-primary mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-primary">Oferta Especial!</h2>
          </div>
          <p className="text-lg mb-4">
            <strong>10% de desconto</strong> na sua primeira compra!
          </p>
          <p className="text-gray-600 mb-6">
            Use o código <Badge className="mx-1">BEMVINDO10</Badge> e economize na sua primeira compra.
          </p>
          <div className="space-y-2">
            <Button onClick={handleClaim} className="w-full cta-button text-white">
              Quero o Desconto!
            </Button>
            <Button variant="outline" onClick={handleClose} className="w-full">
              Talvez mais tarde
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Contador de urgência
export const UrgencyTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      } else {
        setTimeLeft('00:00:00');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="bg-red-500 text-white p-3 rounded-lg text-center mb-4">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Clock className="h-4 w-4" />
        <span className="font-semibold">Oferta Limitada!</span>
      </div>
      <div className="text-2xl font-bold">{timeLeft}</div>
      <div className="text-sm">Termina em breve</div>
    </div>
  );
};

// Indicador de popularidade
export const PopularityIndicator = ({ viewCount, soldCount }) => {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4" />
        <span>{viewCount} pessoas viram este produto hoje</span>
      </div>
      <div className="flex items-center gap-1">
        <Zap className="h-4 w-4 text-orange-500" />
        <span className="text-orange-600 font-medium">{soldCount} vendidos esta semana</span>
      </div>
    </div>
  );
};

// Garantia de satisfação
export const SatisfactionGuarantee = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✓</span>
        </div>
        <h3 className="font-semibold text-green-800">Garantia de Satisfação</h3>
      </div>
      <p className="text-green-700 text-sm">
        Se não ficar 100% satisfeito, devolvemos o seu dinheiro em até 30 dias!
      </p>
    </div>
  );
};

// Prova social - últimas compras
export const RecentPurchases = () => {
  const [purchases] = useState([
    { name: "Maria S.", location: "Maputo", product: "Escova Facial", time: "há 5 min" },
    { name: "João M.", location: "Matola", product: "Cortador de Legumes", time: "há 12 min" },
    { name: "Ana C.", location: "Beira", product: "Mini Massageador", time: "há 18 min" },
    { name: "Carlos L.", location: "Maputo", product: "Cinta Modeladora", time: "há 25 min" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % purchases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [purchases.length]);

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs">
      <Card className="bg-white shadow-lg border animate-in slide-in-from-left duration-500">
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-sm">
              <span className="font-medium">{purchases[currentIndex].name}</span> de{' '}
              <span className="text-gray-600">{purchases[currentIndex].location}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Comprou: {purchases[currentIndex].product} • {purchases[currentIndex].time}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Botão de compra com urgência
export const UrgentBuyButton = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      className="w-full cta-button text-white relative overflow-hidden"
      size="lg"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center gap-2">
        <span>Comprar Agora - {product.price} MT</span>
        {isHovered && <Zap className="h-4 w-4 animate-pulse" />}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 animate-shimmer"></div>
    </Button>
  );
};

// Escassez de estoque
export const StockScarcity = ({ remaining }) => {
  const percentage = (remaining / 100) * 100;
  const isLow = remaining <= 10;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">
          {isLow ? '🔥 Últimas unidades!' : 'Disponibilidade'}
        </span>
        <span className={`text-sm ${isLow ? 'text-red-600 font-bold' : 'text-gray-600'}`}>
          {remaining} restantes
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            isLow ? 'bg-red-500' : 'bg-green-500'
          }`}
          style={{ width: `${Math.max(percentage, 5)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default {
  DiscountPopup,
  UrgencyTimer,
  PopularityIndicator,
  SatisfactionGuarantee,
  RecentPurchases,
  UrgentBuyButton,
  StockScarcity
};

