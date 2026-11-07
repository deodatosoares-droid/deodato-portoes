import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Code, 
  Wrench,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onOpenGoogleSites: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGoogleSites, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060e1d] text-slate-400 text-xs border-t border-slate-800">
      {/* Top Footer Banner */}
      <div className="bg-[#0a192f] py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Atendimento Técnico Especializado
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              DEODATO PORTÕES – Praia Grande / SP
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Conserto, manutenção preventiva e motores rápidos para portões basculantes, deslizantes e pivotantes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={COMPANY_INFO.phone1.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>(13) 99148-4520</span>
            </a>
            <a
              href={COMPANY_INFO.phone2.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl shadow-md transition-all border border-slate-700"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>(11) 98109-2963</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-white font-display">DEODATO</span>
              <span className="text-red-500 font-black text-base font-display">PORTÕES</span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Especialistas em automação de portões na Baixada Santista com garantia formal, motores homologados e reposição imediata de peças contra maresia.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-xs">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Praia Grande – SP e Região</span>
            </div>
          </div>

          {/* Col 2: Services shortcuts */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Serviços Populares
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Conserto de Portão Desalinhado
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Instalação de Motores Rápidos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Troca de Cabos e Roldanas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Substituição de Placas Eletrônicas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Travas e Sensores Anti-Esmagamento
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Brands & Coverage */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Marcas Homologadas
            </h4>
            <p className="text-xs text-slate-400">
              PPA Jet Flex · Garen TSI / KDZ · Nice Peccinin · Rossi Dzi
            </p>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display pt-2">
              Bairros Atendidos
            </h4>
            <p className="text-xs text-slate-400">
              Boqueirão, Canto do Forte, Guilhermina, Aviação, Tupi, Ocian, Mirim, Caiçara e todo município.
            </p>
          </div>

          {/* Col 4: Google Sites Integration Tool & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Integração Google Sites
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Página totalmente compatível e otimizada para ser incorporada via iframe ou código no Google Sites da sua empresa.
            </p>
            <button
              onClick={onOpenGoogleSites}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold rounded-lg border border-slate-700 transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Gerar Código Google Sites</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
          <div>
            © {new Date().getFullYear()} DEODATO PORTÕES. Todos os direitos reservados. Praia Grande – SP.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
