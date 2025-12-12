import React, { useState } from 'react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">FAQ</h2>
        </div>
        
        <div className="space-y-0">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              >
                <span className="font-mono text-sm uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
                    {faq.question}
                </span>
                <Plus 
                    className={`w-4 h-4 text-white/30 transition-transform duration-300 ${openIndex === idx ? 'rotate-45 text-yellow-500' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="pb-6 text-white/50 text-base font-light max-w-2xl leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;