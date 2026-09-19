import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface NuuuhDividerProps {
  subtitle?: string;
  variant?: 'badge' | 'banner';
}

export const NuuuhDivider: React.FC<NuuuhDividerProps> = ({
  subtitle = 'Expressão mineira genuína ao descobrir o melhor de Belo Horizonte',
  variant = 'badge',
}) => {
  if (variant === 'banner') {
    return (
      <div className="w-full max-w-lg mx-auto my-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-[#F4EDE3] via-[#EFE4D5] to-[#F4EDE3] border border-[#DFCFC0] rounded-2xl p-4 text-center shadow-sm relative overflow-hidden"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#A8583B]" />
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#7E3D25] font-heading">
              NUUUUUUUH!
            </span>
            <Sparkles className="w-4 h-4 text-[#A8583B]" />
          </div>
          <p className="text-xs sm:text-sm text-[#6F5B4E] font-medium">{subtitle}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE3D3] border border-[#DECDB9] text-[#693926] shadow-xs"
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6652]">Bordão que BH ama:</span>
        <span className="text-base sm:text-lg font-black tracking-wide text-[#7C361E] font-heading">&ldquo;NUUUUUUUH!&rdquo;</span>
      </motion.div>
    </div>
  );
};
