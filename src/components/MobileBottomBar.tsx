import React from 'react';
import { Calendar, MessageCircle, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { useCart } from '../context/CartContext';

interface MobileBottomBarProps {
  onOpenScheduleModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenScheduleModal }) => {
  const { totalItems, toggleCart } = useCart();

  const directWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a Barbearia O Martins.'
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0f14]/95 backdrop-blur-lg border-t border-[#232734] px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* WhatsApp Fast Contact */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg text-stone-300 hover:text-emerald-400 active:scale-95 transition-all text-center"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Primary CTA - Agendar (Highest Prominence) */}
        <button
          onClick={onOpenScheduleModal}
          className="flex-[2] flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-gradient-to-r from-[#c59a53] via-[#d4af37] to-[#a87e36] text-stone-950 font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
          aria-label="Agendar Horário"
        >
          <Calendar className="w-4 h-4 fill-stone-950 text-stone-950" />
          <span>AGENDAR</span>
        </button>

        {/* Cart */}
        <button
          onClick={toggleCart}
          className="flex-1 relative flex flex-col items-center justify-center py-1.5 px-2 rounded-lg text-stone-300 hover:text-[#d4a750] active:scale-95 transition-all text-center"
          aria-label={`Carrinho, ${totalItems} itens`}
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 mb-0.5 text-stone-300" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#c59a53] text-stone-950 font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Carrinho</span>
        </button>
      </div>
    </div>
  );
};
