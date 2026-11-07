import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Wrench, 
  Zap, 
  Share2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface CoverSectionProps {
  onOpenQuote: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const CoverSection: React.FC<CoverSectionProps> = ({
  onOpenQuote,
  activeTab,
  setActiveTab,
}) => {
  const [copiedShare, setCopiedShare] = React.useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'DEODATO PORTÕES – Praia Grande/SP',
        text: 'Especialistas em Conserto, Manutenção e Instalação de Portões Automáticos em Praia Grande – SP.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <section id="topo" className="relative bg-[#0a192f] border-b border-slate-800 text-white">
      {/* Grand Fanpage Cover Banner */}
      <div className="relative h-56 sm:h-72 md:h-84 lg:h-96 w-full overflow-hidden bg-slate-950">
        <img
          src="/images/hero_gate.jpg"
          alt="DEODATO PORTÕES - Instalação e Manutenção de Portões Automáticos em Praia Grande SP"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to local asset if needed
            (e.target as HTMLImageElement).src = '/src/assets/images/hero_modern_automatic_gate_1794061159788.jpg';
          }}
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-700 hover:scale-105"
        />
        {/* Navy gradient scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-slate-950/40" />

        {/* Top Floating Badges in Cover */}
        <div className="absolute top-4 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-[#0a192f]/90 backdrop-blur-md border border-amber-400/40 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Página Comercial Oficial
            </div>
            <div className="bg-red-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
              Plantão Praia Grande
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-medium rounded-lg backdrop-blur-md border border-white/20 transition-all shadow-md shrink-0"
            title="Compartilhar página comercial"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{copiedShare ? 'Link Copiado!' : 'Compartilhar'}</span>
          </button>
        </div>

        {/* Clean Center-Bottom Highlights on Cover without Collision */}
        <div className="absolute bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wide rounded-md shadow-md">
            <MapPin className="w-3.5 h-3.5" />
            {COMPANY_INFO.highlight}
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 text-slate-200 text-xs font-medium rounded-md backdrop-blur-md border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Garantia Formal em Peças e Mão de Obra
          </div>
        </div>
      </div>

      {/* Fanpage Business Profile Lockup Area (Clean Flow, Zero Overlap Clashes) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-6 border-b border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Brand Avatar Badge & Typography */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              {/* Circular Corporate Logo Badge */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0a192f] p-1 shadow-2xl border-2 border-amber-400 shrink-0">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0e2548] via-[#0a192f] to-[#060e1d] flex flex-col items-center justify-center text-center p-1.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-600 flex items-center justify-center text-white mb-0.5 shadow-md">
                    <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-white tracking-wider font-display">
                    DEODATO
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-extrabold text-amber-400 tracking-widest uppercase">
                    PORTÕES
                  </span>
                </div>
                {/* Official verified badge */}
                <div 
                  className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-0.5 rounded-full shadow-lg ring-2 ring-white"
                  title="Empresa Verificada"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-600 text-white" />
                </div>
              </div>

              {/* Title & Slogan */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight">
                    {COMPANY_INFO.name}
                  </h1>
                  <span className="text-[11px] bg-red-600 text-white font-bold px-2 py-0.5 rounded shadow-sm">
                    Verificado
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-amber-400 font-display">
                  {COMPANY_INFO.slogan}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 pt-0.5">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    Atendimento Rápido em Praia Grande
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Portões Automáticos & Manuais</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-amber-300">PPA, Garen, Rossi, Nice e KDZ</span>
                </div>
              </div>
            </div>

            {/* Right: Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              {/* WhatsApp 1 (13) */}
              <a
                href={COMPANY_INFO.phone1.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (13) 99148-4520</span>
              </a>

              {/* WhatsApp 2 (11) */}
              <a
                href={COMPANY_INFO.phone2.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#163665] hover:bg-[#1e4580] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md border border-blue-400/30 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (11) 98109-2963</span>
              </a>

              {/* Call Direct */}
              <a
                href={`tel:${COMPANY_INFO.phone1.raw}`}
                className="inline-flex items-center justify-center p-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all border border-slate-700"
                title="Ligar para (13) 99148-4520"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Orçamento modal trigger */}
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold rounded-xl shadow-md transition-all active:scale-95"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Pedir Orçamento</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fanpage Sub-Navigation Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar text-xs sm:text-sm font-medium">
          {[
            { id: 'sobre', label: 'Sobre a Empresa' },
            { id: 'servicos', label: 'Nossos Serviços (10)' },
            { id: 'publicacoes', label: 'Publicações & Comentários' },
            { id: 'avaliacoes', label: 'Avaliações Google' },
            { id: 'galeria', label: 'Fotos & Trabalhos' },
            { id: 'cobertura', label: 'Bairros em PG' },
            { id: 'contato', label: 'Contato & Telefones' }
          ].map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all font-semibold ${
                activeTab === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
