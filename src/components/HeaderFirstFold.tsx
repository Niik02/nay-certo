import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, MapPin, Users, Sparkles } from 'lucide-react';
import { LOGO_URL, LOCAL_IMAGE_FALLBACK } from '../types';

export const HeaderFirstFold: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState<string>(LOGO_URL);
  const [heroSrc, setHeroSrc] = useState<string>(LOGO_URL);

  const handleLogoError = () => {
    if (logoSrc !== LOCAL_IMAGE_FALLBACK) {
      setLogoSrc(LOCAL_IMAGE_FALLBACK);
    }
  };

  const handleHeroError = () => {
    if (heroSrc !== LOCAL_IMAGE_FALLBACK) {
      setHeroSrc(LOCAL_IMAGE_FALLBACK);
    }
  };

  return (
    <section id="hero-first-fold" className="w-full pt-8 pb-12 px-4 sm:px-6 flex flex-col items-center text-center">
      {/* 1. LOGO DA NAY EM AÇÃO (centralizada e em destaque) */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center mb-6"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-[#E7DAC7] via-[#F2E8DC] to-[#E2D2BE] shadow-[0_8px_24px_rgba(75,54,42,0.08)]">
          <div className="w-full h-full rounded-full bg-[#FAF7F2] p-2 flex items-center justify-center overflow-hidden">
            <img
              src={logoSrc}
              alt="Logo Oficial Nay em Ação"
              onError={handleLogoError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-sm select-none"
              loading="eager"
            />
          </div>
          {/* Subtle Verified Indicator */}
          <div className="absolute -bottom-1 -right-1 bg-[#4A7875] text-[#FAF7F2] p-1.5 rounded-full shadow-md border-2 border-[#FAF7F2] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>

      {/* 2. BLOCO DE ALCANCE (Logo abaixo da logo, antes da foto principal) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full max-w-sm sm:max-w-md mx-auto mb-8"
      >
        <div className="bg-[#F4ECE1] border border-[#E3D4C0] rounded-2xl p-5 shadow-[0_4px_20px_rgba(75,54,42,0.05)] relative overflow-hidden text-center">
          {/* Subtle decorative background pattern */}
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#E7DAC7]/30 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-[#D8C7B0]/20 rounded-full blur-xl pointer-events-none" />

          {/* Subheading: Alcance da comunidade */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADCCB] text-[#5A4537] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Users className="w-3.5 h-3.5 text-[#8A5A44]" />
            <span>Alcance da comunidade</span>
          </div>

          {/* Primary Metric: Mais de 100 mil pessoas */}
          <div className="text-2xl sm:text-3xl font-extrabold text-[#2F241D] tracking-tight font-heading my-1">
            Mais de 100 mil pessoas
          </div>

          {/* Metric Subtitle: alcançadas mensalmente no Instagram */}
          <div className="text-sm sm:text-base font-medium text-[#5F4D40] mb-3">
            alcançadas mensalmente no Instagram
          </div>

          {/* Legal / Exact profile attribution */}
          <div className="pt-2.5 border-t border-[#DECDB7] flex items-center justify-center gap-1.5 text-xs text-[#7A675A]">
            <Instagram className="w-3.5 h-3.5 text-[#9C6D58]" />
            <span className="italic">
              Informação sobre o alcance mensal do perfil <strong className="text-[#3F2F25] font-semibold">@floramar.bh</strong> no Instagram.
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. FOTO PRINCIPAL DA NAY (Depois do bloco de alcance, grande e bem enquadrada) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="w-full max-w-xs sm:max-w-sm mx-auto mb-6 relative"
      >
        <div className="relative mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#F3EAE0] via-[#ECE0D0] to-[#E1D1BE] p-2.5 shadow-[0_16px_36px_rgba(72,50,38,0.12)] border border-[#E5D7C5]">
          <div className="rounded-2xl overflow-hidden bg-[#FAF7F2] aspect-[4/5] relative flex items-center justify-center">
            <img
              src={heroSrc}
              alt="Nay em Ação - Foto Oficial"
              onError={handleHeroError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top select-none"
              loading="eager"
            />
            {/* Subtle soft gradient at the bottom for smooth contrast */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#2D2420]/20 to-transparent pointer-events-none" />
            
            {/* Soft badge */}
            <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#443329] border border-[#E8DC CE] shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#3D8361] animate-pulse" />
              <span>Criadora em BH</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. NOME (Logo abaixo da foto, com bastante destaque) */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-3xl sm:text-4xl font-extrabold text-[#2B211B] font-heading tracking-tight mb-2"
      >
        Nay em Ação
      </motion.h1>

      {/* 5. LOCALIZAÇÃO */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#755F51] mb-4 bg-[#F2EAE0] px-3.5 py-1 rounded-full border border-[#E3D5C3]"
      >
        <MapPin className="w-4 h-4 text-[#B55B38]" />
        <span>Belo Horizonte — MG</span>
      </motion.div>

      {/* 6. BORDÃO DE ENTRADA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="text-lg sm:text-xl font-bold text-[#8A5138] italic font-heading mb-4"
      >
        &ldquo;Ei, ei gente!&rdquo;
      </motion.div>

      {/* 7. FRASE PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-md mx-auto"
      >
        <p className="text-xl sm:text-2xl font-semibold text-[#3D3028] leading-snug font-heading">
          Seu guia completo: <br />
          <span className="text-[#8E4930] font-bold">Tudo o que BH tem de melhor.</span>
        </p>
      </motion.div>
    </section>
  );
};
