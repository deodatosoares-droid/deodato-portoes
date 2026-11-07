import React, { useState } from 'react';
import { X, Send, PhoneCall, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, NEIGHBORHOODS_PRAIA_GRANDE } from '../data/content';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Conserto / Manutenção de Portão'
}) => {
  const [service, setService] = useState(initialService);
  const [neighborhood, setNeighborhood] = useState('Boqueirão');
  const [gateType, setGateType] = useState('Basculante');
  const [urgency, setUrgency] = useState('Urgente (Portão travado / emergência)');
  const [description, setDescription] = useState('');
  const [selectedPhone, setSelectedPhone] = useState<'13' | '11'>('13');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = selectedPhone === '13' ? COMPANY_INFO.phone1.raw : COMPANY_INFO.phone2.raw;
    const text = `Olá, DEODATO PORTÕES! Gostaria de um orçamento para Praia Grande:
• *Serviço:* ${service}
• *Tipo de Portão:* ${gateType}
• *Bairro:* ${neighborhood} (Praia Grande/SP)
• *Urgência:* ${urgency}
${description ? `• *Detalhes:* ${description}` : ''}

Poderia me informar valores e disponibilidade de atendimento?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0a192f] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold font-display text-base text-white">
                Solicitar Orçamento Grátis
              </h3>
              <p className="text-xs text-slate-300">
                Atendimento Rápido em Praia Grande – SP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Escolha o Número de Atendimento
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedPhone('13')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                  selectedPhone === '13'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="text-[11px] text-emerald-700 font-bold">Principal (13)</div>
                {COMPANY_INFO.phone1.display}
              </button>
              <button
                type="button"
                onClick={() => setSelectedPhone('11')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                  selectedPhone === '11'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="text-[11px] text-emerald-700 font-bold">Suporte (11)</div>
                {COMPANY_INFO.phone2.display}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Serviço Desejado
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
              >
                <option value="Conserto / Manutenção de Portão">Conserto de Portão Travado</option>
                <option value="Instalação de Novo Motor">Instalação de Novo Motor</option>
                <option value="Troca de Placa / Central Eletrônica">Troca de Central Eletrônica</option>
                <option value="Troca de Cabos e Roldanas">Troca de Cabos e Roldanas</option>
                <option value="Controles Remotos Adicionais">Novos Controles Remotos</option>
                <option value="Instalação de Trava Elétrica">Trava Eletromagnética</option>
                <option value="Fotocélula Anti-Esmagamento">Sensor de Fotocélula</option>
                <option value="Manutenção Preventiva Geral">Revisão e Lubrificação</option>
                <option value="Solda / Reparo de Serralheria">Serviço de Serralheria e Solda</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tipo do Portão
              </label>
              <select
                value={gateType}
                onChange={(e) => setGateType(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
              >
                <option value="Basculante (Levanta para cima)">Basculante (Sobe)</option>
                <option value="Deslizante / De Correr">Deslizante (De Correr)</option>
                <option value="Pivotante (Abre como porta)">Pivotante (Folhas duplas/simples)</option>
                <option value="Portão Manual (Quero Automatizar)">Manual (Automatização Nova)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Bairro em Praia Grande
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
              >
                {NEIGHBORHOODS_PRAIA_GRANDE.map((nh) => (
                  <option key={nh} value={nh}>{nh}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nível de Urgência
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
              >
                <option value="Urgente (Portão travado / emergência)">Urgente (Hoje)</option>
                <option value="Para esta semana">Para esta semana</option>
                <option value="Apenas cotação de valores">Apenas cotação</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Descreva brevemente o problema (opcional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex.: Motor ronca mas não abre, cabo arrebentou, quero colocar motor mais rápido..."
              rows={2}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 resize-none"
            />
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2 text-slate-600 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Resposta rápida diretamente no WhatsApp com orçamento sem compromisso.</span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-md transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              Enviar no WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
