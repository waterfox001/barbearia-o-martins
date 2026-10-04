import React from 'react';
import { CalendarCheck, MessageSquare, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface HowItWorksProps {
  onOpenScheduleModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenScheduleModal }) => {
  const steps = [
    {
      num: '01',
      title: 'ESCOLHA SEU SERVIÇO',
      description: 'Escolha o serviço que deseja realizar — corte de cabelo, barba ou o pacote completo.',
      icon: CalendarCheck,
    },
    {
      num: '02',
      title: 'FALE COM A GENTE',
      description: 'Confirme seu horário diretamente pelo WhatsApp de forma rápida e sem burocracia.',
      icon: MessageSquare,
    },
    {
      num: '03',
      title: 'VENHA PARA A O MARTINS',
      description: 'Estamos no Centro de Fortaleza. Chegue com comodidade e aproveite seu atendimento.',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 bg-[#0d0e12] border-y border-[#1c1f28] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-[#c59a53] block mb-2">
            Simples e Rápido
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-100 uppercase tracking-tight">
            AGENDE. CORTE. <span className="text-[#c59a53]">APROVEITE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-7 rounded-xl bg-[#13151b] border border-[#21242e] hover:border-[#c59a53]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-4xl text-[#c59a53]/40 group-hover:text-[#c59a53] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#1a1d25] flex items-center justify-center text-[#c59a53] group-hover:bg-[#c59a53] group-hover:text-stone-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-stone-100 group-hover:text-[#d4a750] transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-stone-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-stone-600">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenScheduleModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#c59a53] hover:bg-[#d4a750] text-stone-950 font-bold uppercase tracking-wider text-sm shadow-xl hover:shadow-[0_0_20px_rgba(197,154,83,0.35)] transition-all active:scale-95"
          >
            AGENDAR MEU HORÁRIO
          </button>
        </div>
      </div>
    </section>
  );
};
