import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#0d0e12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Address and Working Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a20] border border-[#c59a53]/30 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5" />
                Ponto de Fácil Acesso
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-stone-100 uppercase tracking-tight leading-tight">
                ESTAMOS NO <br />
                <span className="text-[#c59a53]">CENTRO DE FORTALEZA</span>
              </h2>
              <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
                Localização privilegiada na Av. Heráclito Graça, ideal para quem trabalha ou transita pelo Centro da capital cearense.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-xl bg-[#14161d] border border-[#242835] space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#1c1f2a] border border-[#2b3040] flex items-center justify-center text-[#c59a53] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg uppercase text-stone-100">
                    Endereço Oficial
                  </h3>
                  <p className="text-base text-stone-200 font-medium mt-1">
                    {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.number}
                  </p>
                  <p className="text-sm text-stone-400">
                    {BUSINESS_INFO.address.neighborhood} — Fortaleza / {BUSINESS_INFO.address.state}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Brasil
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#20232e] flex flex-wrap gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#c59a53] hover:bg-[#d4a750] text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>COMO CHEGAR</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    'Olá! Como faço para chegar na Barbearia O Martins a partir da minha localização?'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#191c25] hover:bg-[#232733] border border-[#2c3140] text-stone-300 text-xs font-semibold tracking-wider transition-colors"
                >
                  Pedir Referência no WhatsApp
                </a>
              </div>
            </div>

            {/* Operating Hours Card - Section 20 */}
            <div className="p-6 rounded-xl bg-[#14161d] border border-[#242835]">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#c59a53]" />
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-stone-100">
                  HORÁRIO DE FUNCIONAMENTO
                </h3>
              </div>

              <div className="divide-y divide-[#1f222d] text-sm">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-stone-300 font-medium">Segunda a sexta</span>
                  <span className="text-stone-100 font-mono font-semibold">09:00 — 19:00</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-stone-300 font-medium">Sábado</span>
                  <span className="text-stone-100 font-mono font-semibold">09:00 — 18:00</span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-stone-400 font-medium">Domingo</span>
                  <span className="text-rose-400 font-mono font-semibold">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#13151b] border border-[#262936] shadow-2xl h-[420px] sm:h-[480px]">
              {/* Google Maps iFrame embedding the exact location */}
              <iframe
                title="Localização da Barbearia O Martins - Av. Heráclito Graça, 710, Centro, Fortaleza"
                src="https://maps.google.com/maps?q=Av.+Her%C3%A1clito+Gra%C3%A7a,+710+-+Centro,+Fortaleza+-+CE&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105 brightness-95"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#0f1116]/95 backdrop-blur-md border border-[#2c3140] shadow-xl">
                <div className="flex items-center gap-2 text-[#d4a750] font-heading font-bold text-sm uppercase">
                  <CheckCircle className="w-4 h-4" />
                  Barbearia O Martins
                </div>
                <div className="text-xs text-stone-300 mt-1">
                  Av. Heráclito Graça, 710 – Centro
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  Fortaleza – CE
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#c59a53] hover:text-[#d4a750] font-semibold"
                >
                  <span>Abrir no aplicativo do Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
