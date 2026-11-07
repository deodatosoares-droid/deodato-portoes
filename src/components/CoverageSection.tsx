import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { NEIGHBORHOODS_PRAIA_GRANDE, COMPANY_INFO } from '../data/content';

export const CoverageSection: React.FC = () => {
  const handleNeighborhoodClick = (neighborhood: string) => {
    const text = `Olá, DEODATO PORTÕES! Estou no bairro *${neighborhood}* em Praia Grande – SP e gostaria de solicitar um atendimento para o meu portão.`;
    const url = `https://wa.me/${COMPANY_INFO.phone1.raw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="cobertura" className="py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-md">
              <MapPin className="w-3.5 h-3.5" />
              Localização & Raio de Ação
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-white">
              Atendimento Completo em Praia Grande – SP
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nossa equipe técnica atua em campo com unidades móveis equipadas para realizar consertos, trocas de cabos, placas e motores diretamente no seu endereço.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <Navigation className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Unidades Móveis em Trânsito</span>
                  <span className="text-slate-400">Deslocamento ágil por toda a orla e avenidas principais de PG.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Plantão de Urgência</span>
                  <span className="text-slate-400">Atendimento prioritário para portões travados fora do horário comercial.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.phone1.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar Técnico no Seu Bairro</span>
              </a>
            </div>
          </div>

          {/* Right Neighborhoods Interactive Grid */}
          <div className="lg:col-span-7 bg-[#0a192f] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Clique no seu bairro para atendimento imediato:
              </h3>
              <span className="text-xs text-amber-400 font-semibold hidden sm:inline">
                Praia Grande / SP
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {NEIGHBORHOODS_PRAIA_GRANDE.map((bairro) => (
                <button
                  key={bairro}
                  onClick={() => handleNeighborhoodClick(bairro)}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/70 hover:bg-amber-400 hover:text-slate-950 text-slate-200 text-xs font-semibold border border-slate-700/60 hover:border-amber-400 transition-all text-left group"
                >
                  <span className="truncate">{bairro}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-current shrink-0" />
                </button>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>* Atendemos também cidades vizinhas da Baixada Santista sob consulta.</span>
              <span className="text-emerald-400 font-semibold">Técnicos em circulação</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
