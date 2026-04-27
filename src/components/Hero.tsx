import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-48 pb-20 md:pt-64 md:pb-32 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-widest text-[#00ffcc] uppercase mb-8"
      >
        Available for new opportunities
      </motion.div>
      
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Crafting Digital <br className="hidden md:block" />
        <span className="text-gradient">Masterpieces</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm G. Inthiyaz Hussain, a passionate Full-Stack Developer specializing in building exceptional digital experiences that combine stunning design with robust engineering.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="#projects" className="px-8 py-4 rounded-lg bg-[#00ffcc] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#00e6b8] transition-colors shadow-[0_0_20px_rgba(0,255,204,0.3)]">
          View My Work <ArrowRight size={20} />
        </a>
        <a href="#" className="px-8 py-4 rounded-lg glass-panel font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-white">
          Download CV <Download size={20} />
        </a>
      </motion.div>
    </section>
  );
}
