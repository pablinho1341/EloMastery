import React, { useState } from 'react';
import { PLANS } from '../constants';
import { Check, X, MessageSquare, Copy } from 'lucide-react'; // Adicionei ícones novos
import { motion, AnimatePresence } from 'framer-motion';

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Função simples para copiar o discord (opcional, mas útil)
  const copyToClipboard = () => {
    navigator.clipboard.writeText("pablinho1341");
    alert("Discord username copied!");
  };

  return (
    <section id="pricing" className="py-32 bg-lol-darker relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
             <span className="font-mono text-yellow-500 text-xs tracking-[0.2em] uppercase mb-4 block">Deployment Options</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tight text-white">
                Select Your <span className="text-white/40">Protocol</span>
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col relative p-10 md:p-12 transition-all hover:-translate-y-1 ${
                plan.isPopular 
                  ? 'bg-white/[0.03] border border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.1)]' 
                  : 'bg-transparent border border-white/10'
              }`}
            >
              {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-bold font-mono px-3 py-1 uppercase tracking-widest">
                      Recommended
                  </div>
              )}
              
              <h3 className="text-lg font-mono font-bold text-white mb-2 uppercase tracking-wider">{plan.name}</h3>
              <div className="flex items-baseline mb-8 pb-8 border-b border-white/10">
                <span className="text-5xl font-display font-medium text-white tracking-tighter">{plan.price}</span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-white/70">
                    <Check className={`w-5 h-5 mr-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-yellow-500' : 'text-white/30'}`} />
                    <span className="text-sm font-light tracking-wide">{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full py-5 font-bold uppercase tracking-[0.1em] text-sm transition-all border ${
                plan.isPopular 
                  ? 'bg-yellow-500 border-yellow-500 text-black hover:bg-yellow-400' 
                  : 'bg-transparent border-white/20 text-white hover:border-white hover:bg-white/5'
              }`}>
                My discord
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Discord Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPlan(null)} // Fecha ao clicar fora
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Previne fechar ao clicar dentro
              className="bg-[#0A0A0A] border border-white/10 w-full max-w-md relative p-8 md:p-12 shadow-2xl flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-yellow-500 border border-white/10">
                 <MessageSquare className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-2">
                Let's Chat
              </h3>
              
              <p className="text-white/50 text-sm mb-8">
                Send me a friend to argue about the <span className="text-yellow-500">{selectedPlan}</span>
              </p>

              {/* Caixa do Usuário Discord */}
              <div className="w-full bg-white/5 border border-white/10 p-4 mb-8 flex items-center justify-between group cursor-pointer hover:border-yellow-500/50 transition-colors"
                   onClick={copyToClipboard}>
                  <div className="text-left">
                      <span className="block text-xs text-white/30 uppercase tracking-wider font-mono">Discord Username</span>
                      {/* SUBTITUA AQUI PELO SEU USUÁRIO REAL */}
                      <span className="text-lg text-white font-mono tracking-wide">TrueKw</span>
                  </div>
                  <Copy className="w-5 h-5 text-white/30 group-hover:text-yellow-500 transition-colors" />
              </div>

              <button 
                onClick={() => setSelectedPlan(null)}
                className="w-full bg-white text-black font-bold text-sm py-4 hover:bg-yellow-500 transition-colors uppercase tracking-widest">
                Close Window
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;