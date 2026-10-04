import React from 'react';
import { Zap, Sparkles, UserCheck, MapPin } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'PRATICIDADE',
      description: 'Uma experiência pensada para facilitar sua rotina, com agendamento direto e sem complicação.',
    },
    {
      icon: Sparkles,
      title: 'ESTILO',
      description: 'Cuidado masculino para valorizar seu visual, respeitando suas preferências e anatomia facial.',
    },
    {
      icon: UserCheck,
      title: 'ATENDIMENTO',
      description: 'Uma experiência direta, confortável e profissional em cada corte ou barba realizada.',
    },
    {
      icon: MapPin,
      title: 'LOCALIZAÇÃO',
      description: 'No Centro de Fortaleza (Av. Heráclito Graça, 710), ponto de fácil acesso para o seu dia.',
    },
  ];

  return (
    <section className="py-20 bg-[#0f1014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-[#c59a53] block mb-2">
            Nossos Valores
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-100 uppercase tracking-tight">
            POR QUE ESCOLHER A <span className="text-[#c59a53]">O MARTINS?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-xl bg-[#14161c] border border-[#222530] hover:border-[#c59a53]/50 transition-all duration-300 group hover:-translate-y-1 shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1b1e26] border border-[#2e3240] flex items-center justify-center text-[#c59a53] group-hover:bg-[#c59a53] group-hover:text-stone-950 transition-colors mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-stone-100 group-hover:text-[#d4a750] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-stone-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
