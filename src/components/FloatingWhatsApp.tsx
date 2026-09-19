import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../types';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Automatically minimize tooltip after a few seconds or allow closing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp" className="fixed bottom-5 right-4 sm:right-6 z-50 flex items-center gap-2">
      {/* Discreet tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-2 bg-[#FAF7F2] border border-[#DFCFC0] px-3.5 py-2 rounded-2xl shadow-[0_8px_20px_rgba(40,30,25,0.15)] text-[#33251C] text-xs font-medium"
          >
            <span>Falar com a Nay no WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#968273] hover:text-[#33251C] transition-colors p-0.5"
              aria-label="Fechar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={WHATSAPP_BASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com Nay em Ação"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] border-2 border-[#FAF7F2] transition-colors"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Small badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#88432C] text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-[#FAF7F2]">
          1
        </span>
      </motion.a>
    </aside>
  );
};
