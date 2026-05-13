import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 max-w-7xl mx-auto px-6 md:px-12 relative"
    >
      {/* Left Column: Content */}
      <div className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-widest text-[#00ffcc] uppercase mb-8"
        >
          Available for Frontend and Full Stack Roles
        </motion.div> */}

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building Fast, Scalable Web Apps <br className="hidden lg:block" />
          <span className="text-gradient">That Converts</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm G. Inthiyaz Hussain, a passionate Full-Stack Developer
          specializing in building exceptional digital experiences that combine
          stunning design with robust engineering. I build responsive websites,
          real-time apps, and clean user experiences that solve real business
          problems.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#mywork"
            className="px-8 py-4 rounded-lg bg-[#00ffcc] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#00e6b8] transition-colors shadow-[0_0_20px_rgba(0,255,204,0.3)]"
          >
            View My Work <ArrowRight size={20} />
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-lg glass-panel font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-white"
          >
            Download Resume <Download size={20} />
          </a>
        </motion.div>
      </div>

      {/* Right Column: Profile Image */}
      <motion.div
        className="flex flex-1 justify-center items-center relative w-full mt-12 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Soft Glow / Gradient Behind Image */}
        <div className="absolute w-[280px] sm:w-[320px] lg:w-[350px] aspect-square bg-gradient-to-tr from-[#00ffcc] to-[#ff00ff] rounded-full blur-3xl opacity-30 mix-blend-screen"></div>

        {/* Image Container */}
        <div className="relative z-10 w-[280px] sm:w-[320px] lg:w-[350px] aspect-square rounded-full border border-white/10 shadow-[0_0_40px_rgba(0,255,204,0.1)] flex justify-center items-center bg-[#0a0a0f]/50 overflow-hidden">
          <img
            src="/original.png"
            alt="G. Inthiyaz Hussain"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
