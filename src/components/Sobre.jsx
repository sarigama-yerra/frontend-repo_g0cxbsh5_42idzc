import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Quem está por trás da Laia Solutions
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          A Laia Solutions nasceu de dentro da operação — não de um laboratório isolado. Antes de virar produto, a automação que usamos hoje foi construída para resolver o caos de WhatsApp, leads e agenda em negócios reais, com equipe enxuta e muita demanda.
        </motion.p>
        <div className="mt-6 space-y-3">
          <p className="text-slate-300">Somos especialistas em:</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>operações comerciais (SDR, pré-venda, acompanhamento de funil)</li>
            <li>automação com n8n, Evolution API, Supabase/Postgres, CV CRM, Google stack</li>
            <li>desenho de agentes conversacionais que conversam como gente, mas seguem processo como máquina</li>
          </ul>
        </div>
        <motion.p className="mt-6 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Nosso foco é simples: colocar a I.A para trabalhar todos os dias para o seu negócio, do jeito certo, com clareza de métricas e respeito total à LGPD.
        </motion.p>
      </div>
    </section>
  );
}
