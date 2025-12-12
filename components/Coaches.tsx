import React from 'react';
import { motion } from 'framer-motion';
import { COACH } from '../constants';
import { Trophy, Globe, ExternalLink } from 'lucide-react';

const Coaches: React.FC = () => {
  return (
    <section id="coach" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Coach Image Column */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
            >
                {/* Image Container */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full border border-white/20 z-0"></div>
                    <div className="relative z-10 bg-gray-900 overflow-hidden">
                        <img 
                            src={COACH.image} 
                            alt={COACH.name} 
                            className="w-full h-auto object-cover" 
                        />
                        {/* Verified Tag - Top Right */}
                        <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider">
                            Verified Coach
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 flex flex-col pt-4"
            >
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-7xl font-display font-bold text-white mb-3 tracking-tighter uppercase leading-none">
                        {COACH.name}
                    </h2>
                    <div className="flex items-center space-x-3 text-yellow-500 font-mono text-xs tracking-[0.15em] uppercase font-bold">
                        <span className="w-px h-4 bg-yellow-500"></span>
                        <span>{COACH.tagline}</span>
                    </div>
                </div>
                
                {/* Bio */}
                <p className="text-white/70 text-lg leading-relaxed mb-12 font-light max-w-lg">
                    {COACH.bio}
                </p>

                {/* Active Accounts Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-2">
                        <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                            <Globe className="w-3 h-3" /> Active Accounts
                        </h4>
                        
                        {/* OP.GG Animated Button */}
                        <a href="https://op.gg/lol/summoners/euw/NONAME-gromp" className="group relative flex items-center gap-2 px-3 py-1 bg-[#5383E8] hover:bg-[#4169c4] transition-all overflow-hidden skew-x-[-10deg]"target="_blank" 
  rel="noopener noreferrer">
                             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                             <span className="skew-x-[10deg] font-bold text-[10px] text-white tracking-wider flex items-center gap-1">
                                OP.GG <ExternalLink className="w-3 h-3" />
                             </span>
                        </a>
                    </div>
                    
                    <div className="space-y-3">
                        {COACH.accounts.map((acc, i) => (
                            <div key={i} className="bg-[#0A0A0A] border border-white/10 p-5 flex items-center justify-between hover:border-yellow-500/50 transition-colors">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-white font-bold text-lg">{acc.ign}</span>
                                        <span className="bg-[#1a1a1a] text-[#888] px-1.5 py-0.5 text-[10px] font-mono rounded">{acc.region}</span>
                                    </div>
                                    <span className="text-yellow-500 text-xs font-mono font-bold uppercase tracking-wider">{acc.rank}</span>
                                </div>
                                <div className="text-right">
                                     <span className="block text-white/90 font-mono text-sm">{acc.lp}</span>
                                     <span className="text-xs text-white/40 font-mono">{acc.winrate} WR</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Signature Picks Section */}
                <div>
                    <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Trophy className="w-3 h-3" /> Signature Picks
                    </h4>
                    <div className="flex gap-3">
                        {COACH.champions.map((champ, i) => (
                            <div key={i} className="border border-white/10 px-5 py-3 hover:border-white transition-colors cursor-default bg-[#0A0A0A]">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">{champ}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;