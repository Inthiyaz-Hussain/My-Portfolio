import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0f] text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-[#0a0a0f] to-[#0a0a0f] z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full max-w-7xl px-6 md:px-12 mx-auto flex flex-col gap-32 pb-32">
          <Hero />
          <About />
          <MyWork />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
