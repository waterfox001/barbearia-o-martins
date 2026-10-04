import React from 'react';
import { MessageCircle, Scissors, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface FinalCTAProps {
  onOpenScheduleModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenScheduleModal }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar um horário na Barbearia O Martins.'
  )}`;

  return (
    <section className="py-24 bg-[#0a0b0d] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(197,154,83,0.18),rgba(255,255,255,0))]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a20] border border-[#c59a53]/40 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Atendimento Personalizado no Centro de Fortaleza</span>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-100 uppercase tracking-tight leading-tight">
          SEU PRÓXIMO CORTE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c278] via-[#c59a53] to-[#8e6a2b]">
            ESTÁ A UM CLIQUE.
          </span>
        </h2>

        <p className="mt-5 text-lg sm:text-xl text-stone-300 font-light max-w-xl mx-auto">
          Fale com a Barbearia O Martins e agende seu horário.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-lg bg-gradient-to-r from-[#c59a53] via-[#d4af37] to-[#a87e36] text-stone-950 font-black text-base uppercase tracking-wider shadow-[0_4px_35px_rgba(197,154,83,0.4)] hover:brightness-110 active:scale-95 transition-all group"
          >
            <MessageCircle className="w-5 h-5 text-stone-950 fill-stone-950 group-hover:scale-110 transition-transform" />
            <span>AGENDAR MEU HORÁRIO</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-400 font-mono">
          <span>✓ Confirmação ágil</span>
          <span>✓ Sem cobrança prévia</span>
          <span>✓ Centro de Fortaleza</span>
        </div>
      </div>
    </section>
  );
};
