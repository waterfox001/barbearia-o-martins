import React, { useState } from 'react';
import { X, ShieldCheck, Download, Sparkles, Check } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface BrandGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandGuideModal: React.FC<BrandGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'main' | 'white' | 'black' | 'badge'>('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-[#111317] border border-[#2b2f3d] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleIn">
        {/* Header */}
        <div className="p-6 border-b border-[#21242e] bg-[#14161d] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-[#c59a53] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Guia de Identidade Visual Oficial
            </div>
            <h3 className="font-heading font-black text-2xl uppercase tracking-wide text-stone-100">
              BARBEARIA O MARTINS
            </h3>
            <p className="text-xs text-stone-400">
              Variações e Formatos de Aplicação — Especificação Oficial
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-[#1f222d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content: The 4 Official Variations */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Variação Principal (Original com Texto) */}
            <div className="p-6 rounded-xl bg-[#0d0e12] border border-[#222532] flex flex-col items-center justify-between text-center group">
              <div className="w-full text-left mb-4">
                <span className="text-[11px] font-mono text-[#c59a53] uppercase font-bold">
                  1. Variação Principal
                </span>
                <h4 className="font-heading font-bold text-lg text-stone-100 uppercase">
                  Original com Texto
                </h4>
                <p className="text-xs text-stone-400">
                  Brasão vintage, acabamento bronze/dourado e fundo escuro.
                </p>
              </div>

              <div className="py-4">
                <BrandLogo variant="main" size="custom" className="w-48 h-56" />
              </div>

              <div className="w-full pt-4 border-t border-[#1b1e28] text-center text-xs text-stone-400 font-mono">
                Pólo de barbeiro • Navalhas 'M' • Desde 2024
              </div>
            </div>

            {/* 2. Versão Negativa (Branco Sólido) */}
            <div className="p-6 rounded-xl bg-[#141822] border border-[#222532] flex flex-col items-center justify-between text-center group">
              <div className="w-full text-left mb-4">
                <span className="text-[11px] font-mono text-[#c59a53] uppercase font-bold">
                  2. Versão Negativa
                </span>
                <h4 className="font-heading font-bold text-lg text-stone-100 uppercase">
                  Branco Sólido
                </h4>
                <p className="text-xs text-stone-400">
                  Traços em branco puro para contrastar com fundos escuros e fotos.
                </p>
              </div>

              <div className="py-4">
                <BrandLogo variant="white" size="custom" className="w-48 h-56" />
              </div>

              <div className="w-full pt-4 border-t border-[#1b1e28] text-center text-xs text-stone-400 font-mono">
                Linhas limpas • Alta visibilidade
              </div>
            </div>

            {/* 3. Versão Monocromática (Preto Sólido) */}
            <div className="p-6 rounded-xl bg-stone-100 border border-stone-300 flex flex-col items-center justify-between text-center group">
              <div className="w-full text-left mb-4">
                <span className="text-[11px] font-mono text-stone-600 uppercase font-bold">
                  3. Versão Monocromática
                </span>
                <h4 className="font-heading font-bold text-lg text-stone-900 uppercase">
                  Preto Sólido
                </h4>
                <p className="text-xs text-stone-600">
                  Para impressos, notas fiscais, sacolas e aplicações claras.
                </p>
              </div>

              <div className="py-4">
                <BrandLogo variant="black" size="custom" className="w-48 h-56" />
              </div>

              <div className="w-full pt-4 border-t border-stone-200 text-center text-xs text-stone-600 font-mono">
                Vetor de alto contraste • Impressão PB
              </div>
            </div>

            {/* 4. Versão Reduzida (Ícone 'M' e 'O Martins') */}
            <div className="p-6 rounded-xl bg-[#0d0e12] border border-[#222532] flex flex-col items-center justify-between text-center group">
              <div className="w-full text-left mb-4">
                <span className="text-[11px] font-mono text-[#c59a53] uppercase font-bold">
                  4. Versão Reduzida
                </span>
                <h4 className="font-heading font-bold text-lg text-stone-100 uppercase">
                  Ícone 'M' e 'O Martins'
                </h4>
                <p className="text-xs text-stone-400">
                  Formato circular ideal para avatares, favicon, redes sociais e selos.
                </p>
              </div>

              <div className="py-6">
                <BrandLogo variant="badge" size="custom" className="w-36 h-36" />
              </div>

              <div className="w-full pt-4 border-t border-[#1b1e28] text-center text-xs text-stone-400 font-mono">
                Anel duplo dourado • Navalhas 'M'
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#14161f] border-t border-[#21242e] flex items-center justify-between">
          <span className="text-xs text-stone-400 font-mono">
            Guia oficial da Barbearia O Martins (Fortaleza – CE)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#c59a53] text-stone-950 text-xs font-bold uppercase tracking-wider hover:bg-[#d4a750] transition-colors"
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  );
};
