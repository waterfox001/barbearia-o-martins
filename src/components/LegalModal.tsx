import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-[#13151b] border border-[#2b2f3d] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleIn">
        {/* Header */}
        <div className="p-6 border-b border-[#21242e] bg-[#161821] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#20232e] border border-[#2d3242] flex items-center justify-center text-[#c59a53]">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-stone-100">
                {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
              </h3>
              <p className="text-xs text-stone-400 font-mono">
                Barbearia O Martins • Fortaleza/CE
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

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto space-y-5 text-sm text-stone-300 leading-relaxed font-light">
          {isPrivacy ? (
            <>
              <p>
                A <strong>Barbearia O Martins</strong> (CNPJ: 57.516.334/0001-30), situada na Av. Heráclito Graça, 710, Centro, Fortaleza – CE, preza pela transparência, privacidade e proteção dos dados de seus clientes.
              </p>
              <h4 className="font-heading font-bold text-stone-100 uppercase text-base pt-2">
                1. Coleta de Informações
              </h4>
              <p>
                Nosso site não realiza cobranças automáticas online nem coleta de dados sensíveis de cartões. As informações fornecidas espontaneamente pelo usuário (como nome e preferências de agendamento ou pedido de produtos) são destinadas unicamente ao direcionamento para a conversa direta no aplicativo WhatsApp.
              </p>
              <h4 className="font-heading font-bold text-stone-100 uppercase text-base pt-2">
                2. Finalidade do Tratamento
              </h4>
              <p>
                Os dados têm a finalidade exclusiva de viabilizar a comunicação, o agendamento de horários para corte e barba, e a confirmação de disponibilidade de produtos para cabelo.
              </p>
              <h4 className="font-heading font-bold text-stone-100 uppercase text-base pt-2">
                3. Seus Direitos
              </h4>
              <p>
                Você poderá a qualquer momento solicitar esclarecimentos ou a exclusão de seus dados de nossa base de contatos pelo e-mail <strong>{BUSINESS_INFO.email}</strong> ou pelo WhatsApp oficial.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao site institucional da <strong>Barbearia O Martins</strong>. Ao navegar nesta plataforma, você concorda com os presentes termos.
              </p>
              <h4 className="font-heading font-bold text-stone-100 uppercase text-base pt-2">
                1. Agendamento e Serviços
              </h4>
              <p>
                As solicitações de horário e os pedidos de produtos realizados através do site são finalizados diretamente junto à nossa equipe via WhatsApp. O agendamento está sujeito à confirmação mútua de disponibilidade de agenda.
              </p>
              <h4 className="font-heading font-bold text-stone-100 uppercase text-base pt-2">
                2. Preços e Produtos
              </h4>
              <p>
                Os valores de serviços e produtos não exibidos no site serão prontamente informados mediante consulta no WhatsApp. A barbearia reserva-se o direito de atualizar valores e disponibilidade de estoque sem aviso prévio.
              </p>
              <h4 className="font-heading font-bold text-stone-100 uppercase text-base pt-2">
                3. Propriedade Intelectual
              </h4>
              <p>
                A marca Barbearia O Martins, seus logotipos, brasões e elementos gráficos são de uso exclusivo e protegidos pela legislação de propriedade industrial brasileira.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#14161f] border-t border-[#21242e] text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#222532] hover:bg-[#2e3344] text-stone-200 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
