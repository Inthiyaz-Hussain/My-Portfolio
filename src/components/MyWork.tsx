import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

export default function Work() {
  const pastProjects = [
    {
      title: "Swiftora - Smart Logistics & Real time Tracking",
      desc: "Built a platform that aggregates services form multiple providers in one place. Enabled users to compare options based on price, ratings, and availability. Integrated APIs to fetch real-time data from different sources. Implemented filtering, search, and sorting for better decision making. Focused on fast load time and smooth user flow to improve conversions.",
      img: "swiftora.png",
      tags: [
        "React.js |",
        "Node.js |",
        "Express |",
        "Supabase |",
        "TailwindCSS |",
        "Typescript |",
        "Vercel ",
      ],
      link: "https://swiftora.co/",
      github: "",
    },
    {
      title: "WebSite for a Restaurant",
      desc: "Responsive restaurant web app showcasing menu, dishes, and dining services with a clean, modern UI. Focuses on smooth navigation and engaging visuals for better user experience. Built and deployed on Vercel, demonstrating real-world frontend development skills.",
      img: "restuarent.png",
      tags: [
        "Typescript |",
        "TailwindCSS |",
        "JavaScript |",
        "Firebase |",
        "React.js |",
        "Vercel ",
      ],
      link: "https://restaurent-food-chi.vercel.app/",
      github: "https://github.com/Inthiyaz-Hussain/Restaurent_website",
    },
    {
      title: "Edureka E-Learning Platform Clone",
      desc: "Responsive e-learning website inspired by Edureka, showcasing courses, categories, and structured content layout. Focuses on clean UI, reusable components, and smooth navigation for better user experience.",
      img: "edureka.png",
      tags: [
        "React.js |",
        "Node.js |",
        "JavaScript |",
        "HTML/CSS |",
        "TailwindCSS |",
        "Netlify ",
      ],
      link: "https://edureka-in.netlify.app/",
      github: "https://github.com/Inthiyaz-Hussain/Edureka-Tour",
    },
    {
      title: "Guess My Number Game",
      desc: "Interactive number guessing game built with JavaScript, where users try to guess a random number with score tracking. Demonstrates DOM manipulation, event handling, and game logic implementation.",
      img: "game.png",
      tags: ["HTML |", "CSS |", "JavaScript |", "Netlify "],
      link: "https://guess-my-number-in.netlify.app/",
      github: "https://github.com/Inthiyaz-Hussain/Guess-My-Number",
    },
  ];

  return (
    <section id="work" className="py-20 relative">
      <motion.h2
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="text-gradient">Work</span>
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
                  href={project.github}
                  className="p-3 rounded-full glass-panel hover:bg-white/10 transition-colors text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch size={20} />
                </a>
                <a
                  href={project.link}
                  className="p-3 rounded-full glass-panel hover:bg-white/10 transition-colors text-white"
                  target="_blank"
                  rel="noopener noreferrer"
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
