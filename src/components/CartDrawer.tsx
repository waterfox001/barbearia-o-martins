import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, Store, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/barbershopData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    hasPricelessItems,
    customerName,
    setCustomerName,
    deliveryOption,
    setDeliveryOption,
    generateWhatsAppOrderUrl,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111318] border-l border-[#252833] text-stone-100 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#21242e] flex items-center justify-between bg-[#14161d]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1e212b] border border-[#2e3343] flex items-center justify-center text-[#c59a53]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide">
                  Seu Carrinho
                </h3>
                <p className="text-xs text-stone-400 font-mono">
                  {cart.length} {cart.length === 1 ? 'produto adicionado' : 'produtos adicionados'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-[#1f222b] transition-colors"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#181a22] border border-[#2b2f3d] flex items-center justify-center text-stone-500 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg text-stone-200 uppercase">
                  Seu carrinho está vazio
                </h4>
                <p className="text-sm text-stone-400 mt-2 max-w-xs">
                  Adicione nossa cera capilar para manter o estilo do seu cabelo impecável no dia a dia.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 rounded-md bg-[#c59a53] text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-[#d4a750] transition-colors"
                >
                  Ver Produtos
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-4">
                  {cart.map((item) => {
                    const priceFormatted =
                      item.product.price !== null && item.product.price !== undefined
                        ? `R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}`
                        : item.product.priceDisplay || 'Consulte o valor';

                    return (
                      <div
                        key={item.product.id}
                        className="p-4 rounded-xl bg-[#161820] border border-[#232632] flex gap-4 items-center justify-between"
                      >
                        {/* Thumb */}
                        <div className="w-16 h-16 rounded-lg bg-[#1f222b] overflow-hidden shrink-0 border border-[#2b2f3c]">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h5 className="font-heading font-bold text-stone-100 uppercase text-sm truncate">
                            {item.product.name}
                          </h5>
                          <span className="text-xs text-[#d4a750] font-mono block mt-0.5">
                            {priceFormatted}
                          </span>

                          {/* Quantity pick */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 rounded bg-[#1f222b] hover:bg-[#2b2f3d] text-stone-300 transition-colors"
                              aria-label="Diminuir"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs font-bold px-1.5">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 rounded bg-[#1f222b] hover:bg-[#2b2f3d] text-stone-300 transition-colors"
                              aria-label="Aumentar"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Delete button */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-stone-500 hover:text-rose-400 transition-colors"
                          title="Remover produto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Optional Customer Information for Faster WhatsApp handling */}
                <div className="p-4 rounded-xl bg-[#14161d] border border-[#222530] space-y-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Seu Nome (opcional)
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full px-3 py-2 rounded-lg bg-[#1a1c24] border border-[#2b2f3c] text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-[#c59a53]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Como prefere receber?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryOption('retirada')}
                        className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          deliveryOption === 'retirada'
                            ? 'bg-[#c59a53]/20 border-[#c59a53] text-[#d4a750]'
                            : 'bg-[#181a22] border-[#2b2f3c] text-stone-400'
                        }`}
                      >
                        <Store className="w-3.5 h-3.5" />
                        <span>Retirada no local</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDeliveryOption('entrega')}
                        className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          deliveryOption === 'entrega'
                            ? 'bg-[#c59a53]/20 border-[#c59a53] text-[#d4a750]'
                            : 'bg-[#181a22] border-[#2b2f3c] text-stone-400'
                        }`}
                      >
                        <Truck className="w-3.5 h-3.5" />
                        <span>Entrega em Fortaleza</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & WhatsApp Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#21242e] bg-[#14161d] space-y-4">
              {/* Summary line */}
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-stone-400 uppercase tracking-wider text-xs">
                  Total estimado
                </span>
                <div className="text-right">
                  <span className="font-heading font-black text-2xl text-[#d4a750]">
                    {hasPricelessItems
                      ? subtotal > 0
                        ? `R$ ${subtotal.toFixed(2).replace('.', ',')}*`
                        : 'Consulte o valor'
                      : `R$ ${subtotal.toFixed(2).replace('.', ',')}`}
                  </span>
                  <div className="text-[11px] text-stone-400">
                    {hasPricelessItems
                      ? 'Valores confirmados diretamente pelo WhatsApp'
                      : 'Pagamento combinado no WhatsApp'}
                  </div>
                </div>
              </div>

              {/* Finalize WhatsApp CTA - Exact requirement from Section 17 */}
              <a
                href={generateWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-emerald-600/30 transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>FINALIZAR PEDIDO PELO WHATSAPP</span>
              </a>

              {/* Secondary Continue Shopping & Clear */}
              <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="hover:text-stone-200 flex items-center gap-1"
                >
                  ← Continuar comprando
                </button>
                <button
                  onClick={clearCart}
                  className="hover:text-rose-400 text-stone-400"
                >
                  Esvaziar carrinho
                </button>
              </div>

              <div className="text-center text-[10px] text-stone-400 font-mono">
                Sem pagamento online. O pedido será enviado diretamente ao WhatsApp da barbearia.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
