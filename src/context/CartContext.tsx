import React, { createContext, useContext, useEffect, useState } from 'react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { CartItem, ProductItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  hasPricelessItems: boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toggleCart: () => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  deliveryOption: 'retirada' | 'entrega';
  setDeliveryOption: (option: 'retirada' | 'entrega') => void;
  generateWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'barbearia_o_martins_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [deliveryOption, setDeliveryOption] = useState<'retirada' | 'entrega'>('retirada');

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (product: ProductItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    const itemPrice = item.product.price ?? 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  const hasPricelessItems = cart.some((item) => item.product.price === null || item.product.price === undefined);

  const generateWhatsAppOrderUrl = () => {
    if (cart.length === 0) return `https://wa.me/${BUSINESS_INFO.whatsapp}`;

    const greeting = customerName.trim()
      ? `Olá, Barbearia O Martins! Meu nome é ${customerName.trim()} e gostaria de fazer este pedido:`
      : `Olá, Barbearia O Martins! Gostaria de fazer este pedido:`;

    const itemsList = cart
      .map((item) => {
        const priceStr =
          item.product.price !== null && item.product.price !== undefined
            ? `R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}`
            : 'Consulte o valor';
        return `• ${item.product.name} — ${item.quantity} ${item.quantity > 1 ? 'unidades' : 'unidade'} — ${priceStr}`;
      })
      .join('\n');

    const totalStr = hasPricelessItems
      ? subtotal > 0
        ? `R$ ${subtotal.toFixed(2).replace('.', ',')} (+ itens sob consulta)`
        : 'Consulte com a equipe'
      : `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    const deliveryNote =
      deliveryOption === 'retirada'
        ? 'Opção: Retirada no local (Av. Heráclito Graça, 710 - Centro)'
        : 'Opção: Combinar entrega em Fortaleza';

    const message = `${greeting}\n\n${itemsList}\n\nTotal: ${totalStr}\n${deliveryNote}\n\nGostaria de confirmar a disponibilidade e combinar a retirada/entrega.`;

    return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        hasPricelessItems,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
        customerName,
        setCustomerName,
        deliveryOption,
        setDeliveryOption,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
