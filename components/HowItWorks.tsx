import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-lol-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-500">The Process</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-white/10 relative">
                {step.icon}
                <div className="absolute top-0 right-0 bg-cyan-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-black border border-lol-dark">
                    {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;