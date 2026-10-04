import React, { useState } from 'react';
import { X, Calendar, Clock, MessageCircle, Scissors, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/barbershopData';
import { ServiceItem } from '../types';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: ServiceItem | null;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    defaultService ? defaultService.id : SERVICES_DATA[0].id
  );
  const [clientName, setClientName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [observation, setObservation] = useState('');

  if (!isOpen) return null;

  const currentService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleConfirmAndSend = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `Olá! Gostaria de agendar um horário na Barbearia O Martins.`;

    if (currentService) {
      msg = `Olá! Gostaria de agendar ${currentService.name.toLowerCase()} na Barbearia O Martins.`;
    }

    if (clientName.trim()) {
      msg += `\nNome: ${clientName.trim()}`;
    }

    if (preferredDate) {
      // Format YYYY-MM-DD to DD/MM/YYYY
      const parts = preferredDate.split('-');
      const formattedDate = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : preferredDate;
      msg += `\nData preferida: ${formattedDate}`;
    }

    if (preferredTime) {
      msg += `\nHorário sugerido: ${preferredTime}`;
    }

    if (observation.trim()) {
      msg += `\nObservação: ${observation.trim()}`;
    }

    msg += `\n\nComo está a disponibilidade para esse horário?`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  // Generate reasonable time slots for barbershop (09:00 to 18:30)
  const availableTimeSlots = [
    '09:00',
    '09:45',
    '10:30',
    '11:15',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-[#12141a] border border-[#2c3140] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleIn">
        {/* Header */}
        <div className="p-6 border-b border-[#21242e] bg-gradient-to-r from-[#171922] to-[#12141a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#20232e] border border-[#303546] flex items-center justify-center text-[#c59a53]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-stone-100">
                Agendamento Rápido
              </h3>
              <p className="text-xs text-stone-400">
                Barbearia O Martins • Centro de Fortaleza
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-[#1f222d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleConfirmAndSend} className="p-6 space-y-5">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
              1. Selecione o Serviço
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {SERVICES_DATA.map((srv) => {
                const isSelected = selectedServiceId === srv.id;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      isSelected
                        ? 'bg-[#c59a53]/15 border-[#c59a53] text-stone-100 ring-1 ring-[#c59a53]'
                        : 'bg-[#161820] border-[#252834] text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <Scissors className={`w-3.5 h-3.5 ${isSelected ? 'text-[#c59a53]' : 'text-stone-500'}`} />
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#c59a53]" />}
                    </div>
                    <span className="font-heading font-bold text-xs uppercase mt-2 leading-tight">
                      {srv.name}
                    </span>
                    <span className="text-[10px] text-stone-400 mt-1">
                      {srv.duration || 'Consulte'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
              2. Seu Nome (opcional)
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Como podemos te chamar?"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#181a22] border border-[#2b2f3d] text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-[#c59a53]"
            />
          </div>

          {/* Date and Time slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                3. Data Desejada
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181a22] border border-[#2b2f3d] text-sm text-stone-200 focus:outline-none focus:border-[#c59a53]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                4. Horário Preferido
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181a22] border border-[#2b2f3d] text-sm text-stone-200 focus:outline-none focus:border-[#c59a53]"
              >
                <option value="">A combinar no WhatsApp</option>
                {availableTimeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Schedule Info Box */}
          <div className="p-3 rounded-lg bg-[#161820] border border-[#242834] text-[11px] text-stone-400 flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#c59a53] shrink-0 mt-0.5" />
            <div>
              <strong>Horário de Funcionamento:</strong> Segunda a Sexta: 09:00 às 19:00 | Sábado: 09:00 às 18:00 (Domingo fechado).
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-gradient-to-r from-[#c59a53] via-[#d4af37] to-[#a87e36] text-stone-950 font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-stone-950 text-stone-950" />
            <span>CONFIRMAR E ENVIAR NO WHATSAPP</span>
          </button>
        </form>
      </div>
    </div>
  );
};
