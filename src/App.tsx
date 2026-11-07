import React, { useState } from 'react';
import { Header } from './components/Header';
import { CoverSection } from './components/CoverSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FanpagePosts } from './components/FanpagePosts';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { GallerySection } from './components/GallerySection';
import { CoverageSection } from './components/CoverageSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GoogleSitesEmbedModal } from './components/GoogleSitesEmbedModal';
import { QuickQuoteModal } from './components/QuickQuoteModal';

export default function App() {
  const [isGoogleSitesOpen, setIsGoogleSitesOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('Conserto / Manutenção de Portão');
  const [activeTab, setActiveTab] = useState('sobre');

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setQuoteService(serviceTitle);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Bar following Top Bar Contract */}
      <Header
        onOpenGoogleSites={() => setIsGoogleSitesOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Fanpage Content */}
      <main className="flex-1">
        {/* Cover & Brand Profile Header */}
        <CoverSection
          onOpenQuote={() => setIsQuoteOpen(true)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Section 1: Sobre a Empresa */}
        <AboutSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 2: Nossos Serviços (10 especialidades) */}
        <ServicesSection onSelectServiceForQuote={handleOpenQuoteWithService} />

        {/* Section 3: Publicações Estilo Fanpage (Feed com 6 posts) */}
        <FanpagePosts onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 4: Avaliações Reais do Google */}
        <GoogleReviewsSection />

        {/* Section 5: Galeria de Fotos & Trabalhos */}
        <GallerySection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 6: Cobertura em Praia Grande */}
        <CoverageSection />

        {/* Section 7: Contato & Orçamento Expresso */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenGoogleSites={() => setIsGoogleSitesOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Floating Fast Action WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Google Sites Embed Code Helper Modal */}
      <GoogleSitesEmbedModal
        isOpen={isGoogleSitesOpen}
        onClose={() => setIsGoogleSitesOpen(false)}
      />

      {/* Quick Quote Interactive Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={quoteService}
      />
    </div>
  );
}
