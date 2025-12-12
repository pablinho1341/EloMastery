import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 bg-lol-darker relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-medium mb-4 text-white tracking-tighter">
                START YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-white">CLIMB.</span>
            </h2>
            <p className="text-white/40 font-light text-lg">Initialize your training protocol.</p>
        </div>
        
        <form className="max-w-md mx-auto relative">
          <div className="space-y-8">
            <div className="relative group">
              <input 
                type="email" 
                placeholder=" " 
                className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer transition-colors"
              />
              <label className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-mono uppercase tracking-wider">
                  Email Address
              </label>
            </div>

            <div className="relative group">
              <select className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer transition-colors">
                <option className="bg-black text-white/50">Current rank</option>
                <option className="bg-black text-white">Iron - Silver</option>
                <option className="bg-black text-white">Gold - Platinum</option>
                <option className="bg-black text-white">Emerald - Diamond</option>
                <option className="bg-black text-white">Master+</option>
              </select>
               <label className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] font-mono uppercase tracking-wider">
                  Current Status
              </label>
            </div>

            <div className="pt-4">
                <button className="w-full bg-white text-black font-bold text-lg py-5 hover:bg-yellow-500 transition-colors flex items-center justify-center group tracking-widest uppercase">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;