import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "MongoDB", level: 75 },
    { name: "Next.js", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <motion.h2 
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical <span className="text-gradient">Skills</span>
      </motion.h2>

      <div className="glass-panel p-10 rounded-3xl grid md:grid-cols-2 gap-x-16 gap-y-10">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-slate-200">{skill.name}</span>
              <span className="text-[#00ffcc]">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-[#0a0a0f] rounded-full overflow-hidden border border-white/5">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00ffcc] to-[#ff00ff]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
