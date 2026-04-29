import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? "py-4 backdrop-blur-xl bg-[#0a0a0f]/30 border-b border-white/5 shadow-lg" : "py-6 bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          {/* <Terminal className="text-[#00ffcc]" size={28} /> */}
          <pre>
            <span className="text-white">Inthiyaz Hussain Gokavaram</span>
          </pre>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-300 hover:text-[#00ffcc] transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffcc] transition-all group-hover:w-full"></span>
            </a>
          ))}
          {/* <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-[#00ffcc] ml-4">
            Hire Me
          </a> */}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-[#0a0a0f] border-b border-white/10 md:hidden flex flex-col p-6 gap-6 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xl font-medium text-slate-300 hover:text-[#00ffcc]"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
