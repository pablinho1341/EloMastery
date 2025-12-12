import React from 'react';
import { motion } from 'framer-motion';
import { Twitch, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-lol-darker">
      
      {/* 3D Animated Background - Lee Sin God Fist */}
      <div className="absolute inset-0 z-0">
        {/* Reduced overlay opacity to make animation more visible */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" /> 
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none" />
        
        {/* High Quality GIF Loop */}
        <img 
            src="" 
            alt="God Fist Lee Sin Background Animation"
            className="w-full h-full object-cover opacity-60 scale-105"
        />
      </div>

      {/* Texture Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none z-10" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center space-x-3 border-l-2 border-yellow-500 pl-4 mb-8 bg-gradient-to-r from-yellow-500/5 to-transparent py-1">
            <span className="text-xs font-mono font-bold text-yellow-500 tracking-[0.2em] uppercase">Season 14 Protocol</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] mb-8 text-white tracking-tighter">
            IMPROVE <br />
            YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-100">GAMEPLAY.</span>
          </h1>
          
          <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed font-light">
            Coaching from <strong className="text-white">NONAME</strong>. Simple concepts, real improvement. 
            We strip away the noise and focus on the macro decisions that actually win games.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://www.twitch.tv/n0nameeuw"target="_blank" 
  rel="noopener noreferrer"><button className="group relative px-8 py-4 bg-yellow-500 hover:bg-yellow-400 transition-all skew-x-[-12deg] cursor-pointer">
              <span className="skew-x-[12deg] flex items-center font-bold text-black tracking-wide">
                <Twitch className="mr-2 w-5 h-5" /> Watch on Twitch
              </span>
            </button></a>
            
            <button 
              onClick={scrollToPricing}
              className="group px-8 py-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all skew-x-[-12deg] inline-block cursor-pointer bg-black/20 backdrop-blur-sm"
            >
              <span className="skew-x-[12deg] flex items-center font-medium text-white tracking-wide">
                View Plans <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Hero Illustration / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative hidden lg:block"
        >
            <div className="relative w-full aspect-[4/5] border-t border-r border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent backdrop-blur-sm p-1">
                {/* Decorative UI Lines */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-white/20" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-500" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20" />

                {/* LoL Map Image - Jungle Emphasis */}
                <div className="absolute inset-8 border border-white/5 bg-black overflow-hidden group">
                     {/* Overlay Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10 pointer-events-none" />
                     <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay z-10 pointer-events-none" />
                     
                     {/* Map Image (Dignitas Article / Jungle Map) */}
                     <img 
                        src="/img/tiagopathing.png" 
                        alt="Jungle Routes Map"
                        className="w-full h-full object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                     />
                </div>
                
                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -left-6 bg-[#0A0A0A] border border-white/10 p-6 shadow-2xl max-w-xs z-20">
                    <div className="flex justify-between items-start mb-2">
                         <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Performance Metric</p>
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <p className="text-4xl font-display font-bold text-white mb-1">+18%</p>
                    <p className="text-xs text-white/60">Average Winrate Increase after 1 session.</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;