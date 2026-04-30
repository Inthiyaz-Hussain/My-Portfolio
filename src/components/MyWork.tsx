import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, FolderGit2 } from "lucide-react";

export default function MyWork() {
  const pastProjects = [
    {
      title: "Past Project One",
      desc: "Description of a project you completed before. Highlight the key problem it solved.",
      img: "https://via.placeholder.com/400x200",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Past Project Two",
      desc: "Another earlier project showing your progression and learning over time.",
      img: "https://via.placeholder.com/400x200",
      tags: ["React", "Node.js"],
    },
    {
      title: "Past Project Three",
      desc: "An older web application or utility script you built.",
      img: "https://via.placeholder.com/400x200",
      tags: ["Python", "Django"],
    },
  ];

  return (
    // <section id="mywork" className="py-20 relative">
    //   <motion.h2
    //     className="text-4xl font-bold mb-16 text-center"
    //     initial={{ opacity: 0, y: 20 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     viewport={{ once: true }}
    //   >
    //     My <span className="text-gradient">Work</span>
    //   </motion.h2>

    //   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {pastProjects.map((project, idx) => (
    //       <motion.div
    //         key={idx}
    //         className="glass-panel p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300 group"
    //         initial={{ opacity: 0, y: 30 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ delay: idx * 0.1 }}
    //       >
    //         <div className="flex justify-between items-center mb-6">
    //           <FolderGit2 className="text-[#00ffcc]" size={40} />
    //           <div className="flex gap-3">
    //             <a
    //               href="#"
    //               className="text-slate-400 hover:text-[#00ffcc] transition-colors"
    //             >
    //               <GitBranch size={20} />
    //             </a>
    //             <a
    //               href="#"
    //               className="text-slate-400 hover:text-[#00ffcc] transition-colors"
    //             >
    //               <ExternalLink size={20} />
    //             </a>
    //           </div>
    //         </div>
    //         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ffcc] transition-colors">
    //           {project.title}
    //         </h3>
    //         <p className="text-slate-400 mb-6 flex-grow">{project.desc}</p>
    //         <div className="flex flex-wrap gap-2 mt-auto">
    //           {project.tags.map((tag, i) => (
    //             <span
    //               key={i}
    //               className="text-xs font-mono text-[#00ffcc]/80 bg-[#00ffcc]/10 px-2 py-1 rounded"
    //             >
    //               {tag}
    //             </span>
    //           ))}
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>
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
        {pastProjects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <div className="absolute inset-0 bg-[#00ffcc]/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div
              className={`w-full md:w-1/2 flex flex-col ${idx % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"} items-start text-left`}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <div className="glass-panel p-6 rounded-xl text-slate-300 mb-6 relative z-20 w-full">
                {project.desc}
              </div>
              <div
                className={`flex flex-wrap gap-3 mb-8 ${idx % 2 !== 0 ? "md:justify-end" : ""} w-full`}
              >
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-sm font-mono text-[#00ffcc]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full glass-panel hover:bg-white/10 transition-colors text-white"
                >
                  <GitBranch size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full glass-panel hover:bg-white/10 transition-colors text-white"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
