import React from 'react';
import { Star, MessageSquarePlus, ExternalLink } from 'lucide-react';
import { TESTIMONIALS_DATA, BUSINESS_INFO } from '../data/barbershopData';

export const Testimonials: React.FC = () => {
  // Google Review direct intent link for Barbearia O Martins (search intent on Google Maps)
  const googleReviewUrl = `https://www.google.com/maps/search/?api=1&query=Barbearia+O+Martins+Av.+Her%C3%A1clito+Gra%C3%A7a+710+Centro+Fortaleza`;

  return (
    <section className="py-20 bg-[#0e0f13] border-t border-[#1b1e27] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a20] border border-[#c59a53]/30 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-[#d4a750]" />
            Experiência & Prova Social
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-100 uppercase tracking-tight">
            O QUE NOSSOS CLIENTES <span className="text-[#c59a53]">DIZEM</span>
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base">
            Sua opinião é fundamental para mantermos a excelência em cada atendimento no Centro de Fortaleza.
          </p>
        </div>

        {/* If testimonials exist in TESTIMONIALS_DATA, display them. Otherwise show genuine Google review invitation */}
        {TESTIMONIALS_DATA.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-xl bg-[#14161c] border border-[#222530] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#d4a750] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a750]" />
                    ))}
                  </div>
                  <p className="text-stone-300 text-sm italic">"{t.comment}"</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1f222b] flex items-center justify-between text-xs text-stone-400">
                  <span className="font-bold text-stone-200">{t.name}</span>
                  {t.date && <span>{t.date}</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-[#13151b] border border-[#232733] text-center shadow-lg mb-10">
            <div className="w-14 h-14 rounded-full bg-[#1b1e27] border border-[#2d3242] flex items-center justify-center text-[#c59a53] mx-auto mb-4">
              <Star className="w-7 h-7 fill-[#c59a53]" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-stone-100 uppercase tracking-wide">
              Já foi atendido na Barbearia O Martins?
            </h3>
            <p className="mt-2 text-stone-300 text-sm leading-relaxed max-w-lg mx-auto">
              Compartilhe como foi sua experiência de corte ou barba. Nossas avaliações são 100% reais e diretas no Google.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#c59a53] hover:bg-[#d4a750] text-stone-950 font-bold text-sm uppercase tracking-wider shadow-lg transition-all"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>AVALIAR NO GOOGLE</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
