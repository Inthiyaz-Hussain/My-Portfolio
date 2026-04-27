import React from 'react';
import { GitBranch, Briefcase, MessageSquare, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0f] py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <Terminal className="text-[#00ffcc]" size={24} />
          <span className="text-white">G. Inthiyaz</span>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} G. Inthiyaz Hussain. All rights reserved.
        </p>
        
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-[#00ffcc] hover:bg-white/10 transition-all"><GitBranch size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-[#00ffcc] hover:bg-white/10 transition-all"><Briefcase size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-[#00ffcc] hover:bg-white/10 transition-all"><MessageSquare size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
