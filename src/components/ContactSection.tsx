import React from 'react';
import { MessageCircle, Phone, Mail, Instagram, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const ContactSection: React.FC = () => {
  const contactCards = [
    {
      title: 'WhatsApp',
      value: BUSINESS_INFO.whatsappFormatted,
      desc: 'Nosso canal principal para agendamentos e pedidos',
      icon: MessageCircle,
      actionText: 'Conversar no WhatsApp',
      href: `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
        'Olá! Gostaria de falar com a Barbearia O Martins.'
      )}`,
      highlight: true,
    },
    {
      title: 'Telefone Direto',
      value: BUSINESS_INFO.phone,
      desc: 'Ligações diretas para a barbearia',
      icon: Phone,
      actionText: 'Ligar Agora',
      href: `tel:+5585992353320`,
      highlight: false,
    },
    {
      title: 'Instagram',
      value: BUSINESS_INFO.instagramHandle,
      desc: 'Acompanhe cortes, novidades e estilo',
      icon: Instagram,
      actionText: 'Seguir no Instagram',
      href: BUSINESS_INFO.instagram,
      highlight: false,
    },
    {
      title: 'E-mail Comercial',
      value: BUSINESS_INFO.email,
      desc: 'Contato institucional e fornecedores',
      icon: Mail,
      actionText: 'Enviar E-mail',
      href: `mailto:${BUSINESS_INFO.email}`,
      highlight: false,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-[#0a0b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#c59a53] block mb-2">
            Canais de Atendimento
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-stone-100 uppercase tracking-tight">
            FALE COM A <br className="hidden sm:inline" />
            <span className="text-[#c59a53]">BARBEARIA O MARTINS</span>
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Estamos prontos para atender você com rapidez, atenção e respeito ao seu tempo.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  card.highlight
                    ? 'bg-[#151822] border-2 border-[#c59a53] shadow-[0_0_25px_rgba(197,154,83,0.18)]'
                    : 'bg-[#12141a] border border-[#222530] hover:border-[#34384a]'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      card.highlight
                        ? 'bg-[#c59a53] text-stone-950'
                        : 'bg-[#1b1d26] text-[#c59a53] border border-[#2b3040]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                    {card.title}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-stone-100 mt-1">
                    {card.value}
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1f222d]">
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors ${
                      card.highlight
                        ? 'bg-[#c59a53] hover:bg-[#d4a750] text-stone-950'
                        : 'bg-[#181a22] hover:bg-[#252834] text-stone-200 border border-[#2a2e3b]'
                    }`}
                  >
                    <span>{card.actionText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Physical Address reminder banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#12141a] border border-[#222530] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1b1e28] flex items-center justify-center text-[#c59a53] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                Atendimento Presencial
              </div>
              <div className="text-sm font-semibold text-stone-200">
                {BUSINESS_INFO.address.full}
              </div>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#1a1c25] hover:bg-[#252836] border border-[#2c3040] text-xs font-semibold text-stone-200 uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-3 h-3 text-[#c59a53]" />
          </a>
        </div>
      </div>
    </section>
  );
};
