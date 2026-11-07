import React, { useState } from 'react';
import { X, Copy, Check, Code, ExternalLink } from 'lucide-react';

interface GoogleSitesEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSitesEmbedModal: React.FC<GoogleSitesEmbedModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [embedMode, setEmbedMode] = useState<'shared' | 'direct'>('shared');

  const sharedUrl = 'https://ais-pre-66l3joxskyn52dtzvxczul-480386564720.us-east1.run.app';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : sharedUrl;

  const targetUrl = embedMode === 'shared' ? sharedUrl : currentUrl;

  const embedCode = `<iframe 
  src="${targetUrl}" 
  width="100%" 
  height="950" 
  style="border:none; border-radius:12px; width:100%; min-height:850px; overflow:hidden;" 
  title="DEODATO PORTÕES – Praia Grande/SP"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">
                Incorporação no Google Sites
              </h3>
              <p className="text-xs text-slate-300">
                Código HTML pronto para publicar no seu Google Sites
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-blue-900 space-y-2">
            <p className="font-semibold text-blue-950 text-sm">
              Como incorporar no Google Sites em 3 passos simples:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-700">
              <li>No painel de edição do Google Sites, clique em <strong>Inserir</strong> na coluna lateral direita.</li>
              <li>Escolha a ferramenta <strong>Incorporar (&lt;/&gt;)</strong> e selecione a aba <strong>Incorporar código</strong>.</li>
              <li>Cole o código HTML abaixo e clique em <strong>Próximo &gt; Inserir</strong>. Pronto!</li>
            </ol>
          </div>

          {/* Toggle URL Version */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Escolha o tipo de URL para o Google Sites:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setEmbedMode('shared')}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  embedMode === 'shared'
                    ? 'border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  URL Pública Compartilhada (Recomendada)
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  ais-pre-...run.app (Acesso livre para visitantes)
                </div>
              </button>

              <button
                type="button"
                onClick={() => setEmbedMode('direct')}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  embedMode === 'direct'
                    ? 'border-blue-500 bg-blue-50/80 text-blue-950 ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold text-blue-800 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" />
                  URL Atual do Navegador
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {currentUrl}
                </div>
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              * A URL pública (ais-pre) nunca dá erro de "conexão recusada" no Google Sites pois não requer login de desenvolvedor.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Código HTML (Iframe Responsivo):
              </label>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Código Copiado!' : 'Copiar Código'}
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-emerald-400 text-xs font-mono rounded-xl overflow-x-auto border border-slate-800 leading-relaxed select-all">
              {embedCode}
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              Compatível com Google Sites, WordPress e qualquer CMS.
            </span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-medium transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
