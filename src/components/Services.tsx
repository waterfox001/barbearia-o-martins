import React from 'react';
import { MessageCircle, Clock, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/barbershopData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForScheduling: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForScheduling }) => {
  return (
    <section id="servicos" className="py-24 bg-[#0d0e11] relative">
      {/* Decorative subtle border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2a2e3a] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a20] border border-[#c59a53]/30 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Serviços Especializados
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-100 uppercase tracking-tight">
            SEU PRÓXIMO VISUAL <br className="hidden sm:inline" />
            <span className="text-[#c59a53]">COMEÇA AQUI.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-400 font-light">
            Atendimento pontual, navalha afiada e atenção cuidadosa aos mínimos detalhes no Centro de Fortaleza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.filter((s) => s.available).map((service) => {
            const directWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            const isCombo = service.id === 'corte-barba';

            return (
              <div
                key={service.id}
                className={`group relative rounded-xl bg-[#13151b] border ${
                  isCombo
                    ? 'border-[#c59a53]/60 shadow-[0_0_25px_rgba(197,154,83,0.12)]'
                    : 'border-[#222530] hover:border-[#383d4e]'
                } overflow-hidden transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Service Image Header */}
                <div className="relative h-60 w-full overflow-hidden bg-[#181b22]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13151b] via-[#13151b]/30 to-transparent" />

                  {/* Badge duration or combo */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                    {isCombo && (
                      <span className="px-3 py-1 rounded bg-[#c59a53] text-stone-950 text-xs font-bold uppercase tracking-wider shadow">
                        Combo Completo
                      </span>
                    )}
                    {service.duration && (
                      <span className="px-2.5 py-1 rounded bg-[#0f1014]/80 backdrop-blur border border-[#2b2f3d] text-stone-300 text-xs flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-[#c59a53]" />
                        {service.duration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-stone-100 group-hover:text-[#d4a750] transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-stone-300 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price Block - Strict adherence: Consulte o valor */}
                    <div className="mt-5 pt-4 border-t border-[#1f222c] flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                        Investimento
                      </span>
                      <span className="text-sm font-semibold text-[#d4a750] bg-[#181a22] px-3 py-1 rounded border border-[#2a2d3a]">
                        {service.price !== null && service.price !== undefined
                          ? `R$ ${service.price.toFixed(2).replace('.', ',')}`
                          : service.priceDisplay || 'Consulte o valor'}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-2">
                    {/* Direct WhatsApp Scheduling button */}
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#191b22] hover:bg-[#c59a53] border border-[#2f3342] hover:border-[#c59a53] text-stone-200 hover:text-stone-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-stone-950" />
                      <span>
                        {service.id === 'corte-cabelo'
                          ? 'AGENDAR CORTE'
                          : service.id === 'barba'
                          ? 'AGENDAR BARBA'
                          : 'AGENDAR SERVIÇO'}
                      </span>
                    </a>

                    {/* Quick schedule assistant trigger */}
                    <button
                      onClick={() => onSelectServiceForScheduling(service)}
                      className="w-full text-center text-xs text-stone-400 hover:text-amber-300 py-1 font-mono transition-colors"
                    >
                      Escolher dia & horário antes de enviar →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
