import React from 'react';
import { Target, MonitorPlay, BarChart2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Tracking",
      desc: "Learn to track the enemy jungler.",
      icon: <Target className="w-6 h-6 text-black" />,
    },
    {
      title: "Management",
      desc: "Understand when to gank or farm.",
      icon: <BarChart2 className="w-6 h-6 text-black" />,
    },
    {
      title: "Win Conditions",
      desc: "Identify how to win the game.",
      icon: <MonitorPlay className="w-6 h-6 text-black" />,
    }
  ];

  return (
    <section className="py-24 bg-lol-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {features.map((f, i) => (
                <div key={i} className="bg-lol-dark p-12 group hover:bg-white/[0.02] transition-colors relative">
                    <div className="mb-8 w-12 h-12 bg-yellow-500 flex items-center justify-center rounded-none shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                        {f.icon}
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-4 uppercase tracking-tight group-hover:text-yellow-400 transition-colors">
                        {f.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed font-light">
                        {f.desc}
                    </p>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;