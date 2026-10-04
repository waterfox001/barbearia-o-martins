import React from 'react';
import { MessageCircle, ArrowDown, MapPin, Scissors, ShoppingBag, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/barbershopData';
import heroBg from '../assets/images/barbershop_hero_1791077676422.jpg';

interface HeroProps {
  onOpenScheduleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScheduleModal }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar um horário na Barbearia O Martins.'
  )}`;

  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0c0d10]"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Ambiente elegante da Barbearia O Martins no Centro de Fortaleza"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-110 scale-105 transform motion-safe:animate-pulse motion-safe:duration-[10000ms]"
        />
        {/* Radial and Linear Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-[#0d0e11]/70 to-[#0d0e11]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-[#0d0e11]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Brand Badge at Top */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <BrandLogo variant="badge" size="lg" className="mx-auto" />
        </div>

        {/* Small Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a20]/90 border border-[#c59a53]/40 text-[#d4a750] text-xs font-semibold uppercase tracking-[0.2em] mb-5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Atendimento Aberto no Centro de Fortaleza</span>
        </div>

        {/* Main Title - Exact copy from prompt */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-stone-100 uppercase leading-[1.05] drop-shadow-md">
          SEU ESTILO. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c278] via-[#c59a53] to-[#8e6a2b]">
            NOSSA TRADIÇÃO.
          </span>
        </h1>

        {/* Subtitle - Exact copy from prompt */}
        <p className="mt-5 text-lg sm:text-xl md:text-2xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
          Corte, barba e cuidado masculino no Centro de Fortaleza.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA - Agendar */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Also support clicking directly or opening modal
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-gradient-to-r from-[#c59a53] via-[#d4af37] to-[#a87e36] text-stone-950 font-bold text-base uppercase tracking-wider shadow-[0_4px_25px_rgba(197,154,83,0.35)] hover:shadow-[0_4px_35px_rgba(197,154,83,0.55)] hover:brightness-110 active:scale-95 transition-all group"
          >
            <MessageCircle className="w-5 h-5 text-stone-950 fill-stone-950 group-hover:scale-110 transition-transform" />
            <span>AGENDAR MEU HORÁRIO</span>
          </a>

          {/* Secondary CTA - Conhecer Serviços */}
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#16181f]/80 hover:bg-[#20232c] border border-[#343846] text-stone-200 hover:text-[#d4a750] font-semibold text-base uppercase tracking-wider transition-all active:scale-95"
          >
            <span>CONHECER OS SERVIÇOS</span>
            <ArrowDown className="w-4 h-4 text-[#c59a53] animate-bounce" />
          </button>
        </div>

        {/* Three Quick Bullet Info Items - As requested */}
        <div className="mt-12 pt-8 border-t border-[#262933]/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl">
          <div className="flex items-center justify-center gap-2.5 py-2 px-4 rounded-lg bg-[#14161c]/60 border border-[#232631]">
            <MapPin className="w-4 h-4 text-[#c59a53] shrink-0" />
            <span className="text-sm font-semibold text-stone-200">Centro de Fortaleza</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 py-2 px-4 rounded-lg bg-[#14161c]/60 border border-[#232631]">
            <Scissors className="w-4 h-4 text-[#c59a53] shrink-0" />
            <span className="text-sm font-semibold text-stone-200">Corte & Barba</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 py-2 px-4 rounded-lg bg-[#14161c]/60 border border-[#232631]">
            <ShoppingBag className="w-4 h-4 text-[#c59a53] shrink-0" />
            <span className="text-sm font-semibold text-stone-200">Produtos para cabelo</span>
          </div>
        </div>

        {/* Operating status banner */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-400">
          <Clock className="w-3.5 h-3.5 text-[#c59a53]" />
          <span>Seg a Sex: 09h às 19h • Sáb: 09h às 18h • Dom: Fechado</span>
        </div>
      </div>
    </section>
  );
};
