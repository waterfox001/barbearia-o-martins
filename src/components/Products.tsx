import React, { useState } from 'react';
import { ShoppingBag, Check, Plus, Minus, Sparkles, AlertCircle } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/barbershopData';
import { useCart } from '../context/CartContext';
import { ProductItem } from '../types';

export const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});

  const getQuantity = (id: string) => quantities[id] || 1;

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const handleAdd = (product: ProductItem) => {
    const qty = getQuantity(product.id);
    addToCart(product, qty);

    // Trigger visual feedback
    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="produtos" className="py-24 bg-[#0d0e11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a20] border border-[#c59a53]/30 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            Loja Oficial O Martins
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-stone-100 uppercase tracking-tight">
            PRODUTOS PARA MANTER <br className="hidden sm:inline" />
            <span className="text-[#c59a53]">SEU ESTILO EM DIA</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-400 font-light">
            Leve para casa produtos que ajudam você a manter o cuidado e o estilo entre um atendimento e outro.
          </p>
        </div>

        {/* Available Products Grid */}
        <div className="max-w-3xl mx-auto">
          {PRODUCTS_DATA.filter((p) => p.available).map((product) => {
            const qty = getQuantity(product.id);
            const isAdded = addedAnimation[product.id];

            return (
              <div
                key={product.id}
                className="bg-[#13151b] border border-[#232733] hover:border-[#c59a53]/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8"
              >
                {/* Product Image */}
                <div className="md:col-span-5 relative rounded-xl overflow-hidden bg-[#181a22] flex items-center justify-center aspect-square border border-[#20232e]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0d0e12]/80 backdrop-blur text-[11px] font-mono uppercase tracking-wider text-[#c59a53] border border-[#2e3240]">
                    {product.category}
                  </div>
                </div>

                {/* Product Details */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-wide text-stone-100">
                        {product.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Disponível
                      </span>
                    </div>

                    <p className="mt-3 text-stone-300 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    {product.features && (
                      <ul className="mt-4 space-y-1.5">
                        {product.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-stone-400">
                            <Sparkles className="w-3.5 h-3.5 text-[#c59a53] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Price Block */}
                    <div className="mt-6 pt-4 border-t border-[#1f222c] flex items-baseline justify-between">
                      <span className="text-xs uppercase font-medium tracking-wider text-stone-400">
                        Valor
                      </span>
                      <div className="text-right">
                        <span className="font-heading font-bold text-xl text-[#d4a750]">
                          {product.price !== null && product.price !== undefined
                            ? `R$ ${product.price.toFixed(2).replace('.', ',')}`
                            : product.priceDisplay || 'Consulte o valor'}
                        </span>
                        <div className="text-[11px] text-stone-400 font-mono">
                          Finalização direta pelo WhatsApp
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Add to Cart Row */}
                  <div className="mt-6 pt-4 border-t border-[#1f222c] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Quantity Picker */}
                    <div className="flex items-center justify-between sm:justify-center border border-[#2b2f3d] bg-[#171922] rounded-lg px-2 py-1">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="p-2 text-stone-400 hover:text-white transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-mono font-bold text-stone-100 text-base">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="p-2 text-stone-400 hover:text-white transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Add to Cart CTA */}
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#c59a53] hover:bg-[#d4a750] text-stone-950 shadow-lg'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Adicionado ao Carrinho!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Adicionar ao Carrinho</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future expansion note / reassurance */}
        <div className="mt-12 max-w-xl mx-auto text-center p-4 rounded-xl bg-[#12141a]/60 border border-[#20232e] text-xs text-stone-400">
          <span className="text-[#c59a53] font-semibold">Linha em expansão:</span> Novos produtos (pomadas de efeito brilho, shampoos fortificantes e óleos para barba) estarão disponíveis em breve.
        </div>
      </div>
    </section>
  );
};
