import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <motion.h2
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In <span className="text-gradient">Touch</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white">
            Let's build something impactful together.
          </h3>
          <p className="text-slate-400 leading-relaxed">
            I'm currently available for freelance work and full-time
            opportunities. If you have a project that needs some creative magic,
            I'd love to hear about it. I build fast, responsive, and modern web
            applications using Angular, JavaScript, and frontend technologies.
            Available for freelance projects, internships, and full-time
            opportunities worldwide.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <span className="px-4 py-2 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 text-[#00ffcc] text-sm font-medium">
              Frontend Developer
            </span>
            <span className="px-4 py-2 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 text-[#00ffcc] text-sm font-medium">
              Responsive UI Design
            </span>
            <span className="px-4 py-2 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 text-[#00ffcc] text-sm font-medium">
              React Applications
            </span>

            <span className="px-4 py-2 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 text-[#00ffcc] text-sm font-medium">
              Landing Pages
            </span>
            <span className="px-4 py-2 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 text-[#00ffcc] text-sm font-medium">
              Portfolio Websites
            </span>
            <span className="px-4 py-2 rounded-full border border-[#00ffcc]/30 bg-[#00ffcc]/10 text-[#00ffcc] text-sm font-medium">
              API Integration
            </span>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-[#00ffcc]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="font-medium text-white text-lg">
                  inthiyazhussain8779@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-[#00ffcc]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="font-medium text-white text-lg">
                  Remote / Worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="glass-panel p-8 rounded-3xl flex flex-col gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xeendden" //Formspree.ai platform added and signup for free anf new form and enter mail address as the target and it will give you end point and use that endpoint here
          method="POST"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#0a0a0f]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00ffcc] transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[#0a0a0f]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00ffcc] transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-[#0a0a0f]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00ffcc] transition-colors resize-none"
              placeholder="Tell me about your project, role, or idea..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00ffcc] to-[#ff00ff] text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2"
          >
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
