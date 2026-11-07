import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Send, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO, FAQS, NEIGHBORHOODS_PRAIA_GRANDE } from '../data/content';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState('Conserto de Portão Automático');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Boqueirão');
  const [userMsg, setUserMsg] = useState('');

  const handleSendFormWhatsApp = (phoneKey: '13' | '11') => {
    const rawNumber = phoneKey === '13' ? COMPANY_INFO.phone1.raw : COMPANY_INFO.phone2.raw;
    const text = `Olá, DEODATO PORTÕES! Gostaria de um orçamento:
• Serviço: ${selectedService}
• Bairro: ${selectedNeighborhood} (Praia Grande – SP)
${userMsg ? `• Observação: ${userMsg}` : ''}

Podem me passar o valor e disponibilidade de horário?`;

    window.open(`https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-12 sm:py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-2">
            <Phone className="w-3.5 h-3.5" />
            Canais Diretos de Atendimento
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display tracking-tight">
            Fale com a DEODATO PORTÕES
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Estamos prontos para atender você em Praia Grande. Escolha o WhatsApp de sua preferência ou preencha a mensagem rápida.
          </p>
        </div>

        {/* 2 Big Featured WhatsApp Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Card 1: WhatsApp 13 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-emerald-500/40 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {COMPANY_INFO.phone1.label}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight mb-2">
              {COMPANY_INFO.phone1.display}
            </h3>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Linha prioritária para orçamentos, agendamentos de manutenção e visitas em qualquer bairro de Praia Grande.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={COMPANY_INFO.phone1.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar no WhatsApp (13)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone1.raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
                title="Ligar"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span className="sm:hidden">Ligar</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp 11 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#163665]/40 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              {COMPANY_INFO.phone2.label}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight mb-2">
              {COMPANY_INFO.phone2.display}
            </h3>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Canal direto de suporte técnico, plantão para dúvidas, cotação de peças e agendamento rápido de serviços.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={COMPANY_INFO.phone2.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0a192f] hover:bg-[#163665] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp (11)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone2.raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
                title="Ligar"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span className="sm:hidden">Ligar</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column: Fast Budget Builder + FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* WhatsApp Direct Message Builder */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Orçamento Expresso
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Monte sua Mensagem de Contato
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Selecione o serviço e bairro para já enviar sua dúvida pronta no WhatsApp sem precisar digitar tudo.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Qual serviço você precisa?
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="Conserto de Portão Automático Travado">Conserto de Portão Automático</option>
                  <option value="Instalação de Novo Motor Rápido">Instalação de Novo Motor Rápido</option>
                  <option value="Motores PPA / Garen TSI / Rossi">Cotação de Motores PPA, Garen, Rossi</option>
                  <option value="Substituição de Central Eletrônica">Troca de Central Eletrônica / Placa</option>
                  <option value="Codificação de Controles Remotos">Programação de Controles Remotos</option>
                  <option value="Troca de Cabos de Aço e Roldanas">Troca de Cabos de Aço e Roldanas</option>
                  <option value="Instalação de Trava Eletromagnética">Trava Eletromagnética de Segurança</option>
                  <option value="Sinalização e Fotocélula">Fotocélula Anti-Esmagamento</option>
                  <option value="Lubrificação e Revisão Preventiva">Lubrificação e Manutenção Preventiva</option>
                  <option value="Serralheria e Reparo de Solda">Pequenos Serviços de Serralheria e Solda</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Qual seu bairro em Praia Grande?
                </label>
                <select
                  value={selectedNeighborhood}
                  onChange={(e) => setSelectedNeighborhood(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {NEIGHBORHOODS_PRAIA_GRANDE.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Observações adicionais (opcional)
                </label>
                <input
                  type="text"
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Ex.: Portão faz barulho estranho, motor parou de rodar..."
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => handleSendFormWhatsApp('13')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar para WhatsApp (13)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSendFormWhatsApp('11')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Enviar para WhatsApp (11)</span>
                </button>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                Dúvidas Frequentes
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Perguntas sobre Atendimento
              </h3>
            </div>

            <div className="space-y-2.5">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        openFaq === idx ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="p-3.5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
