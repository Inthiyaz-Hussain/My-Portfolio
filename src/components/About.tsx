import React from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      desc: "Write structured, readable code with clear naming and reusable components. Focus on scalability and easy maintenance across projects.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Problem Solving",
      desc: "Solving complex problems with elegant and innovative approaches. Break complex features into simple steps and ship working solutions.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Performance Focus",
      desc: "Optimizing apps for lightning-fast speeds and smooth interactions. Build fast-loading apps with optimized assets and efficient rendering. Improve UX with smooth interactions and responsive design.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <motion.h2
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">About</span> Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#00ffcc]/10 flex items-center justify-center text-[#00ffcc] mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-400">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
