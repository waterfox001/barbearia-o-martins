import React from 'react';
import { MessageCircle, Scissors, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface MidCTAProps {
  onOpenScheduleModal: () => void;
}

export const MidCTA: React.FC<MidCTAProps> = ({ onOpenScheduleModal }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar um horário na Barbearia O Martins.'
  )}`;

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1116] via-[#14161f] to-[#0f1116] relative overflow-hidden border-y border-[#262a38]">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#c59a53]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#c59a53]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e222e] border border-[#c59a53]/40 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-4">
          <Scissors className="w-3.5 h-3.5" />
          <span>Transforme Seu Visual</span>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-100 uppercase tracking-tight leading-tight">
          PRONTO PARA DAR AQUELE <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c278] via-[#c59a53] to-[#99732b]">
            TRATO NO VISUAL?
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
          Agende seu próximo corte e venha viver a experiência da Barbearia O Martins no Centro de Fortaleza.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-lg bg-gradient-to-r from-[#c59a53] via-[#d4af37] to-[#a87e36] text-stone-950 font-bold text-base uppercase tracking-wider shadow-[0_4px_30px_rgba(197,154,83,0.35)] hover:brightness-110 active:scale-95 transition-all group"
          >
            <MessageCircle className="w-5 h-5 text-stone-950 fill-stone-950 group-hover:scale-110 transition-transform" />
            <span>AGENDAR PELO WHATSAPP</span>
          </a>

          <button
            onClick={onOpenScheduleModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#181a22] hover:bg-[#222530] border border-[#2e3344] text-stone-200 text-sm font-semibold uppercase tracking-wider transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#c59a53]" />
            <span>Escolher Data & Horário</span>
          </button>
        </div>
      </div>
    </section>
  );
};
