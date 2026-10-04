import React from 'react';
import { Shield, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/barbershopData';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0c0d10] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Crest & Brand Art */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#14161d] to-[#0f1014] border border-[#2b2f3d] shadow-2xl max-w-sm w-full text-center group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c59a53] text-stone-950 text-[11px] font-bold uppercase tracking-widest shadow">
                Identidade Oficial
              </div>

              {/* Scalable Brand Crest Badge */}
              <div className="my-4 transform group-hover:scale-102 transition-transform duration-300">
                <BrandLogo variant="main" size="custom" className="w-64 h-76 mx-auto" />
              </div>

              <div className="pt-4 border-t border-[#222530] text-center">
                <div className="text-xs uppercase tracking-widest text-[#c59a53] font-semibold">
                  Fortaleza • Ceará
                </div>
                <div className="text-stone-400 text-xs mt-1 font-mono">
                  Av. Heráclito Graça, 710 – Centro
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#c59a53] mb-3">
              <Shield className="w-4 h-4" />
              Tradição & Cuidado
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-stone-100 uppercase tracking-tight leading-tight">
              MAIS QUE UM CORTE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c278] via-[#c59a53] to-[#8e6a2b]">
                UMA EXPERIÊNCIA.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              <p className="font-medium text-stone-200">
                “Uma história marcada pela tradição e pelo cuidado masculino.”
              </p>
              <p>
                A <strong>Barbearia O Martins</strong> une o cuidado clássico da barbearia a uma experiência moderna e prática. Um espaço pensado para quem valoriza o próprio estilo, gosta de se cuidar e busca um atendimento direto, confortável e profissional.
              </p>
              <p className="text-stone-400 text-sm">
                Localizada estrategicamente no Centro de Fortaleza, criamos um refúgio masculino onde você encontra pontualidade, técnicas refinadas de corte e barba, e os melhores produtos para a sua manutenção diária.
              </p>
            </div>

            {/* Pillar checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-[#222530]">
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Atendimento direto pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Navalhete e toalha quente</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Ambiente climatizado e confortável</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Produtos selecionados para cabelo</span>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  'Olá! Gostaria de agendar um horário na Barbearia O Martins.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#c59a53] hover:bg-[#d4a750] text-stone-950 font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
              >
                Falar no WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#161820] hover:bg-[#20232c] border border-[#2e3240] text-stone-300 hover:text-stone-100 text-sm font-medium transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#c59a53]" />
                Ver no Mapa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
