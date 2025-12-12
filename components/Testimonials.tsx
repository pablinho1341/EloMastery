import React from 'react';
import { TESTIMONIALS } from '../constants';
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { Quote, Trophy } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
                <h2 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white leading-none">
                    Results.
                </h2>
                <p className="text-white/40 font-light mt-4 max-w-lg text-lg">
                    We don't sell hours. We sell LP.
                </p>
            </div>
            
            {/* 13x Tournament Wins Big Text */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-6">
                <Trophy className="w-12 h-12 text-yellow-500" />
                <div>
                    <h3 className="text-4xl font-display font-bold text-white leading-none">13x</h3>
                    <p className="text-xs font-mono text-white/50 uppercase tracking-widest mt-1">Tournament Wins</p>
                </div>
            </div>
        </div>

        {/* Animated Rank Up Visual Section */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <h4 className="text-white font-display text-2xl uppercase mb-2 relative z-10">Client Progression</h4>
                 <p className="text-white/40 font-light mb-8 max-w-md relative z-10">See how my students climb from low elo to high diamond and beyond in record time.</p>
                 
                 <div className="flex items-center justify-around relative z-10">
                    <div className="text-center opacity-50">
                        <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center mb-2 mx-auto">
                            <span className="font-bold text-white/30">S4</span>
                        </div>
                        <span className="text-xs font-mono text-white/30">Silver</span>
                    </div>
                    <div className="h-px w-16 bg-white/10"></div>
                     <div className="text-center opacity-70">
                        <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-2 mx-auto">
                            <span className="font-bold text-white/50">P2</span>
                        </div>
                        <span className="text-xs font-mono text-white/50">Plat</span>
                    </div>
                    <div className="h-px w-16 bg-yellow-500/50"></div>
                     <div className="text-center">
                        <div className="w-20 h-20 rounded-full border-2 border-yellow-500 bg-yellow-500/10 flex items-center justify-center mb-2 mx-auto shadow-[0_0_20px_rgba(234,179,8,0.3)] animate-pulse">
                            <span className="font-bold text-yellow-500 text-xl">D1</span>
                        </div>
                        <span className="text-xs font-mono text-yellow-500 font-bold uppercase">Diamond</span>
                    </div>
                 </div>
             </div>
             
             <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-center text-center">
                 <div className="text-6xl font-display font-bold text-white mb-2">+400</div>
                 <p className="text-sm font-mono text-white/40 uppercase tracking-widest">Average LP Gain</p>
                 <div className="mt-8 w-full bg-white/5 h-1">
                     <div className="h-full bg-yellow-500 w-[70%]"></div>
                 </div>
             </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-12 hover:bg-white/[0.02] transition-colors relative"
            >
              <div className="absolute top-6 right-6">
                  <Quote className="text-white/20 w-8 h-8 rotate-180" />
              </div>

              <div className="flex items-center space-x-4 mb-8">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 grayscale object-cover" />
                  <div>
                      <h4 className="font-bold text-white uppercase tracking-wide">{t.name}</h4>
                      <p className="text-xs text-yellow-500 font-mono mt-0.5">
                          {t.rankStart} <span className="text-white/30 mx-1">→</span> {t.rankEnd}
                      </p>
                  </div>
              </div>

              <p className="text-white/80 font-light text-lg mb-10 leading-relaxed">"{t.quote}"</p>

              {/* Minimal Chart - Just the line */}
              <div className="h-16 w-32 ml-0 opacity-50 grayscale hover:grayscale-0 transition-all">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={t.lpGain.map((val, i) => ({ month: i, lp: val }))}>
                    <Tooltip 
                        contentStyle={{ display: 'none' }}
                        cursor={{ stroke: 'transparent' }}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="lp" 
                        stroke="#EAB308" 
                        strokeWidth={2} 
                        dot={false}
                        isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;