import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="demo" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Vamos tirar sua operação do modo manual?
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Se você sente que seus leads, pacientes ou clientes estão escapando por falta de tempo, processo ou organização no WhatsApp, a Laia pode te ajudar a mudar essa história.
        </motion.p>
        <div className="mt-6 space-y-2 text-slate-300">
          <p>Na demo de 15 minutos, mostramos:</p>
          <ul className="list-disc list-inside">
            <li>onde sua operação está travando hoje</li>
            <li>como a automação com I.A entra em cada ponto</li>
            <li>qual seria o impacto esperado em tempo e resultado</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href="#form" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all">Agendar demo de 15 minutos</a>
          <p className="text-sm text-slate-400">Sem compromisso. Se fizer sentido, você segue com a gente. Se não fizer, sai com um diagnóstico claro dos gargalos da sua operação.</p>
        </div>
        <p className="mt-10 text-slate-400 text-sm">Laia Solutions – I.A e automação para operações comerciais e de atendimento que precisam de resultado real, não só de hype.</p>
      </div>
    </section>
  );
}
