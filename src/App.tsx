import React from 'react';
import { HeaderFirstFold } from './components/HeaderFirstFold';
import { NuuuhDivider } from './components/NuuuhDivider';
import { AboutSection } from './components/AboutSection';
import { ProposalSection } from './components/ProposalSection';
import { BrandOpportunitySection } from './components/BrandOpportunitySection';
import { ReachSection } from './components/ReachSection';
import { BusinessCategoriesSection } from './components/BusinessCategoriesSection';
import { IntermediateCtaSection } from './components/IntermediateCtaSection';
import { QuickMessageWidget } from './components/QuickMessageWidget';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C211B] flex flex-col selection:bg-[#EBDDCB] selection:text-[#2C211B] relative overflow-x-hidden">
      {/* Subtle organic ambient background textures */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#EFE4D6]/40 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#E8DBD0]/40 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#F3E7DB]/40 blur-[140px]" />
      </div>

      <main className="relative z-10 flex-1 flex flex-col items-center w-full max-w-2xl mx-auto">
        {/* PRIMEIRA DOBRA DO SITE (Logo -> Alcance -> Foto da Nay -> Nome -> BH -> Bordão -> Frase Principal) */}
        <HeaderFirstFold />

        {/* BORDÃO QUE BH AMA: NUUUUUUUH! */}
        <NuuuhDivider variant="badge" />

        {/* SOBRE A NAY */}
        <AboutSection />

        {/* PROPOSTA DO SITE */}
        <ProposalSection />

        {/* OPORTUNIDADES PARA MARCAS */}
        <BrandOpportunitySection />

        {/* BLOCO DE ALCANCE AO LONGO DA PÁGINA (+100 MIL PESSOAS) */}
        <ReachSection />

        {/* CATEGORIAS DE EMPRESAS */}
        <BusinessCategoriesSection />

        {/* CTA COMERCIAL INTERMEDIÁRIO */}
        <IntermediateCtaSection />

        {/* INTERATIVIDADE: SIMULADOR DE MENSAGEM RÁPIDA PARA WHATSAPP */}
        <QuickMessageWidget />

        {/* NUUUUUUUH BANNER DE TRANSIÇÃO */}
        <NuuuhDivider variant="banner" subtitle="O que é bom de verdade em BH ganha esse selo!" />

        {/* CTA FINAL */}
        <FinalCtaSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />
    </div>
  );
}
