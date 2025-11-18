import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.5 } })
};

export default function Problema() {
  const dores = [
    "Você investe em anúncios, mas quando o lead chama no WhatsApp a resposta demora, cai em alguém ocupado ou se perde no meio de tantas conversas.",
    "Sua equipe vive apagando incêndio: responde mensagem o dia todo, esquece follow-up, esquece de avisar que o cliente chegou na etapa X.",
    "Você já testou “chatbotzinho” ou ferramenta pronta, mas ficou com cara de robô, o cliente não engajou e a operação voltou para o manual.",
    "Não existe um fluxo claro: alguns leads recebem proposta, outros não; alguns são lembrados da consulta ou visita, outros somem.",
    "Você sente que poderia vender muito mais com a base que já tem, se a operação fosse organizada e automática."
  ];

  return (
    <section className="relative py-20 bg-slate-900/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Se você depende de atendimento manual, está deixando dinheiro na mesa.
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Talvez você se reconheça em alguns desses cenários:
        </motion.p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {dores.map((d, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/30 transition-colors" initial="hidden" whileInView="visible" viewport={{once:true}} variants={item} custom={i}>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 mt-1" />
                <p className="text-slate-200">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className="mt-10 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          O problema não é falta de esforço da sua equipe. O problema é tentar escalar um volume de leads cada vez maior com um modelo de atendimento que nasceu para o manual.
        </motion.p>
      </div>
    </section>
  );
}
