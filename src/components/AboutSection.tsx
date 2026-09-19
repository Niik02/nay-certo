import React from 'react';
import { motion } from 'motion/react';
import { Heart, Compass, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="w-full max-w-xl mx-auto px-4 sm:px-6 my-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#FAF5EE] border border-[#E7DAC7] rounded-3xl p-6 sm:p-8 shadow-[0_6px_28px_rgba(75,54,42,0.06)] relative overflow-hidden"
      >
        {/* Subtle accent tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-lg bg-[#EBDCCB] text-[#78442D]">
            <Compass className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#7A6456]">Sobre a Nay</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#2C211B] font-heading mb-4 leading-tight">
          A voz que conecta você ao que há de especial em Belo Horizonte
        </h2>

        <div className="space-y-3.5 text-[#544439] text-base leading-relaxed">
          <p>
            Nay é criadora de conteúdo e influencer em <strong>Belo Horizonte</strong>, dedicada a descobrir e apresentar
            para sua comunidade os melhores lugares, experiências memoráveis, marcas, produtos e serviços que fazem a
            capital mineira ser tão única.
          </p>
          <p>
            Com uma abordagem autêntica, próxima e vibrante, cada indicação é feita para valorizar o comércio local e guiar
            quem mora ou visita a cidade em busca de boas opções. E quando a dica é boa de verdade, já sabe: o bordão que
            ecoa na comunidade é um só:
          </p>
        </div>

        {/* NUUUUUUH feature card inside about */}
        <div className="mt-5 p-4 rounded-2xl bg-[#F0E4D5] border border-[#DFCFC0] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#806050]">Selo Nay de aprovação</div>
              <div className="text-xl sm:text-2xl font-black text-[#853D24] font-heading">&ldquo;NUUUUUUUH!&rdquo;</div>
            </div>
          </div>
          <div className="text-right text-xs font-medium text-[#6B574A] hidden sm:block">
            Tudo o que BH tem <br />de melhor
          </div>
        </div>

        {/* Value pillars - completely authentic based on briefing */}
        <div className="mt-6 pt-5 border-t border-[#E8DC CE] grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4A3B31]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4A7875] shrink-0" />
            <span>Lugares & Experiências em BH</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4A7875] shrink-0" />
            <span>Empresas & Negócios Locais</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4A7875] shrink-0" />
            <span>Produtos & Serviços de Qualidade</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4A7875] shrink-0" />
            <span>Novidades e Dicas da Capital</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
