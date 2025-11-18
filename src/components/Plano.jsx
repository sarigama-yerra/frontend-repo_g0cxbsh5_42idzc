import { motion } from "framer-motion";
import { SearchCheck, Wrench, Gauge } from "lucide-react";

const passos = [
  {
    icon: SearchCheck,
    title: "Passo 1 – Diagnóstico da operação",
    desc: "Em uma conversa rápida, entendemos como é hoje seu fluxo de atendimento, SDR e agenda. Mapeamos gargalos, desperdícios e oportunidades de automação."
  },
  {
    icon: Wrench,
    title: "Passo 2 – Desenho e implementação da automação",
    desc: "Desenhamos os agentes de I.A, os fluxos de conversa, as regras de follow-up e as integrações com WhatsApp, CRM, calendário, banco de dados e outros sistemas que você usa. Você acompanha e aprova antes de ir para produção."
  },
  {
    icon: Gauge,
    title: "Passo 3 – Acompanhamento e otimização",
    desc: "Depois de colocar no ar, monitoramos métricas-chave: tempo de resposta, taxa de resposta, agendas marcadas, comparecimento, avanços no funil. Com isso, fazemos ajustes contínuos para aumentar conversão e reduzir retrabalho."
  }
];

export default function Plano() {
  return (
    <section id="como-funciona" className="relative py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Um plano simples para tirar seu WhatsApp do modo manual
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Três passos para sair do caos de mensagens e ter uma operação com I.A rodando todos os dias.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {passos.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/30 transition-all hover:-translate-y-1" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.06*i}}>
              <Icon className="w-6 h-6 text-blue-400" />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/20 transition-all">
            Quero ver esse plano aplicado à minha empresa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
