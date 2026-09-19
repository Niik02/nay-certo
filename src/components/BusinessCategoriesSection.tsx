import React from 'react';
import { motion } from 'motion/react';
import {
  Shirt,
  UtensilsCrossed,
  Coffee,
  Sparkles,
  Dumbbell,
  Compass,
  CalendarCheck,
  Briefcase,
  Flame,
  Store,
  Tag,
  TrendingUp,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { BUSINESS_CATEGORIES, getWhatsAppUrl } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Shirt,
  UtensilsCrossed,
  Coffee,
  Sparkles,
  Dumbbell,
  Compass,
  CalendarCheck,
  Briefcase,
  Flame,
  Store,
  Tag,
  TrendingUp,
};

export const BusinessCategoriesSection: React.FC = () => {
  return (
    <section id="para-quem-e" className="w-full max-w-xl mx-auto px-4 sm:px-6 my-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADCCB] text-[#5A4537] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Oportunidades</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291F18] font-heading leading-tight">
          Para quem é a divulgação?
        </h2>
        <p className="text-[#5F4E42] text-sm sm:text-base mt-2 max-w-md mx-auto leading-relaxed">
          Exemplos de negócios, serviços e iniciativas perfeitas para conectar com o público de Belo Horizonte:
        </p>
      </motion.div>

      {/* Grid of 12 categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {BUSINESS_CATEGORIES.map((cat, idx) => {
          const Icon = ICON_MAP[cat.iconName] || Store;
          const directUrl = getWhatsAppUrl(
            `Olá Nay! Tenho um negócio no segmento de ${cat.name} em BH e gostaria de falar sobre divulgação.`
          );

          return (
            <motion.a
              key={cat.id}
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FAF6F0] hover:bg-[#F3ECE1] border border-[#E7D9C7] hover:border-[#D1BCA8] rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center transition-all group shadow-xs cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EDE1D1] group-hover:bg-[#E3D1BC] flex items-center justify-center text-[#744530] mb-2 transition-colors">
                <Icon className="w-4.5 h-4.5" />
              </div>
              <span className="font-bold text-[#32251D] text-xs sm:text-sm font-heading line-clamp-1">
                {cat.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#7A6658] mt-0.5 line-clamp-2 leading-tight">
                {cat.description}
              </span>
            </motion.a>
          );
        })}
      </div>

      {/* Mandatory closing message: Se sua marca tem algo interessante para mostrar em BH, fale com a Nay. */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-6 p-4 rounded-2xl bg-[#F4EBE0] border border-[#DFCFC0] text-center"
      >
        <p className="text-sm sm:text-base font-medium text-[#46372D] leading-snug">
          &ldquo;<strong>Se sua marca tem algo interessante para mostrar em BH, fale com a Nay.</strong>&rdquo;
        </p>
        <p className="text-xs text-[#7B6658] mt-1.5 italic">
          A divulgação não se limita a essas categorias: qualquer ideia autêntica tem espaço para brilhar.
        </p>
      </motion.div>
    </section>
  );
};
