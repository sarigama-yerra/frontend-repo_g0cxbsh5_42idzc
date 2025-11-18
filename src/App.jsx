import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Diferenciais from "./components/Diferenciais";
import Plano from "./components/Plano";
import Segmentos from "./components/Segmentos";
import Resultados from "./components/Resultados";
import PorqueAgora from "./components/PorqueAgora";
import Tecnologia from "./components/Tecnologia";
import Sobre from "./components/Sobre";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50" />;
}

function Navbar() {
  useEffect(() => {
    const handler = () => {};
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#topo" className="font-extrabold text-white text-lg tracking-tight">Laia Solutions</a>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
          <a href="#segmentos" className="hover:text-white transition-colors">Para quem é</a>
          <a href="#tech" className="hover:text-white transition-colors">Tecnologia</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#demo" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">Agendar demo</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-slate-400">
      <p>Laia Solutions – I.A e automação para operações comerciais e de atendimento que precisam de resultado real, não só de hype.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <section className="relative" id="diferenciais">
          <Diferenciais />
        </section>
        <section id="como-funciona" className="relative">
          <Plano />
        </section>
        <section id="segmentos" className="relative">
          <Segmentos />
        </section>
        <Resultados />
        <PorqueAgora />
        <section id="tech" className="relative">
          <Tecnologia />
        </section>
        <Sobre />
        <section id="faq" className="relative">
          <FAQ />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
