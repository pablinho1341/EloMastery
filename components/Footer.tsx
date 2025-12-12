import React from 'react';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-6">
              <Hexagon className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
              <span className="text-lg font-display font-bold text-white tracking-tight">
                NONAME<span className="text-yellow-500">COACH</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
               Professional League of Legends coaching. We don't just review VODs; we restructure your entire approach to the game.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-white/30 uppercase tracking-wider">
                <span>London, UK</span>
                <span>•</span>
                <span>Est. 2024</span>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#coach" className="hover:text-yellow-500 transition-colors">The Coach</a></li>
              <li><a href="#pricing" className="hover:text-yellow-500 transition-colors">Plans & Pricing</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

           {/* Partners / External */}
           <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">Partners</h4>
             <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">KoreanBuilds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OP.GG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">U.GG</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payments */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-white/30 text-xs font-mono">
                <p>&copy; 2025 NONAME COACH LTD. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Visual representation of payment methods using simple SVGs/Divs for the "human-made" feel */}
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center" title="Visa">
                    <span className="text-[8px] font-bold text-white">VISA</span>
                </div>
                 <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center" title="Mastercard">
                    <div className="flex -space-x-1">
                        <div className="w-3 h-3 rounded-full bg-white/80"></div>
                        <div className="w-3 h-3 rounded-full bg-white/50"></div>
                    </div>
                </div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center" title="Amex">
                    <span className="text-[6px] font-bold text-white uppercase">Amex</span>
                </div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center" title="PayPal">
                    <span className="text-[8px] font-bold text-white italic">Pay</span>
                </div>
                 <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center" title="Apple Pay">
                    <span className="text-[8px] font-bold text-white">Pay</span>
                </div>
                 <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center" title="Google Pay">
                    <span className="text-[8px] font-bold text-white">GPay</span>
                </div>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;