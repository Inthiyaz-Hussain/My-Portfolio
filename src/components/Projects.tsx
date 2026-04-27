import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI Code Assistant IDE",
      desc: "A futuristic web-based IDE powered by AI to automatically generate and execute code. Built with React and Vite.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind v4", "AI"]
    },
    {
      title: "E-Commerce Platform",
      desc: "A full-stack e-commerce solution with dynamic product management, cart functionality, and secure checkout.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <motion.h2 
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="flex flex-col gap-16">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <div className="absolute inset-0 bg-[#00ffcc]/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className={`w-full md:w-1/2 flex flex-col ${idx % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-start text-left`}>
              <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
              <div className="glass-panel p-6 rounded-xl text-slate-300 mb-6 relative z-20 w-full">
                {project.desc}
              </div>
              <div className={`flex flex-wrap gap-3 mb-8 ${idx % 2 !== 0 ? 'md:justify-end' : ''} w-full`}>
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-sm font-mono text-[#00ffcc]">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full glass-panel hover:bg-white/10 transition-colors text-white"><GitBranch size={20} /></a>
                <a href="#" className="p-3 rounded-full glass-panel hover:bg-white/10 transition-colors text-white"><ExternalLink size={20} /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
