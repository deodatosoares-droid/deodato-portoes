import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Clock, 
  CheckCircle, 
  Zap, 
  Sparkles,
  MapPin,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="sobre" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5">
            <span className="w-8 h-0.5 bg-red-600"></span>
            Quem Somos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display tracking-tight text-balance">
            Especialistas em Serviços Residenciais e Comerciais de Portões Automáticos e Manuais
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            A <strong className="text-slate-900">DEODATO PORTÕES</strong> é referência técnica em Praia Grande – SP. 
            Atuamos com conserto ágil, manutenção preventiva e instalação especializada, oferecendo soluções duráveis 
            preparadas para suportar a intensa maresia e as condições climáticas do litoral paulista.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Image showcase with coastal assurance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group h-full min-h-[300px]">
              <img
                src="/images/motor_installation.jpg"
                alt="Instalação de motor de portão em Praia Grande pela Deodato Portões"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/gate_motor_installation_1794061159418.jpg';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Compromisso Técnico
                </div>
                <p className="text-xs text-slate-200 leading-snug">
                  Mão de obra qualificada, peças de procedência garantida e atendimento rápido para que você nunca fique trancado fora de casa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Differentials */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center mb-3 shadow-sm">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                  Atendimento Ágil em Praia Grande
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sabemos que um portão travado compromete a segurança de toda a sua família. Priorizamos chamados emergenciais em todos os bairros de Praia Grande com atendimento no mesmo dia.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                  Proteção Contra a Maresia
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Utilizamos cabos de aço reforçados, graxa marítima hidrorrepelente e placas de comando com verniz especial, garantindo maior vida útil contra o salitre de Praia Grande.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                  Marcas Líderes de Motores
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trabalhamos exclusivamente com fabricantes consagrados: PPA, Garen TSI, KDZ, Nice e Rossi. Equipamentos originais com garantia de fábrica e reposição imediata.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center mb-3 shadow-sm">
                  <Wrench className="w-5 h-5 text-slate-950" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                  Solução Completa em 1 Lugar
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Do pequeno reparo de solda e troca de roldana à instalação completa de motores rápidos com travas e sensores anti-esmagamento.
                </p>
              </div>
            </div>

            {/* Checklist Bar */}
            <div className="p-4 rounded-xl bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Precisa de visita técnica rápida?
                </div>
                <p className="text-xs text-slate-200">
                  Entre em contato via WhatsApp com envio de fotos ou vídeos do seu portão para orçamento rápido!
                </p>
              </div>
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg whitespace-nowrap transition-all shadow-md active:scale-95 shrink-0"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>

        {/* Credibility Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-display tabular-nums">
              +15
            </span>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              Anos de Experiência
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-display tabular-nums">
              100%
            </span>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              Cobertura em Praia Grande
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-700 font-display tabular-nums">
              5
            </span>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              Marcas Líderes com Suporte
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
            <span className="text-2xl sm:text-3xl font-black text-red-600 font-display tabular-nums">
              24h
            </span>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              Plantão de Emergência
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
