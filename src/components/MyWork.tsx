import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, FolderGit2 } from "lucide-react";

export default function MyWork() {
  const pastProjects = [
    {
      title: "Past Project One",
      desc: "Description of a project you completed before. Highlight the key problem it solved.",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Past Project Two",
      desc: "Another earlier project showing your progression and learning over time.",
      tags: ["React", "Node.js"],
    },
    {
      title: "Past Project Three",
      desc: "An older web application or utility script you built.",
      tags: ["Python", "Django"],
    },
  ];

  return (
    <section id="mywork" className="py-20 relative">
      <motion.h2
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Work</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pastProjects.map((project, idx) => (
          <motion.div
            key={idx}
            className="glass-panel p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <FolderGit2 className="text-[#00ffcc]" size={40} />
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#00ffcc] transition-colors"
                >
                  <GitBranch size={20} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#00ffcc] transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ffcc] transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 mb-6 flex-grow">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-[#00ffcc]/80 bg-[#00ffcc]/10 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
