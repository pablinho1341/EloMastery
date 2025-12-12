import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Twitch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'The Coach', id: 'coach' },
    { name: 'Results', id: 'results' },
    { name: 'Pricing', id: 'pricing' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
             <Hexagon className="w-9 h-9 text-yellow-500 fill-yellow-500/10 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
             <div className="absolute inset-0 bg-yellow-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-display font-semibold text-white tracking-tighter">
            NONAME<span className="text-yellow-500">COACH</span>
          </span>
        </div>

        {/* Desktop Menu - CORRIGIDO */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-white/60 hover:text-white font-mono text-xs uppercase tracking-[0.2em] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-yellow-500 after:transition-all hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
          
          {/* O link agora envolve APENAS o botão da Twitch */}
          <a 
            href="https://www.twitch.tv/n0nameeuw" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="group relative px-6 py-2 bg-yellow-500 overflow-hidden skew-x-[-12deg] transition-all hover:bg-yellow-400">
               <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-[12deg]" />
              <span className="skew-x-[12deg] inline-flex items-center gap-2 font-display font-bold text-black text-sm uppercase tracking-wide">
                <Twitch className="w-4 h-4" /> Twitch
              </span>
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2">
            {isMobileOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-6">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white/80 hover:text-white font-display text-lg uppercase tracking-widest"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Adicionei o link aqui no mobile também para funcionar igual ao desktop */}
              <a 
                href="https://www.twitch.tv/n0nameeuw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-yellow-500 py-3 text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                  <Twitch className="w-5 h-5" /> Twitch
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;