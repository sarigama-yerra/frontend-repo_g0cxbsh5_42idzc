import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const beneficios = [
  "Leads respondidos rapidamente, mesmo em horários de pico ou fora do horário comercial.",
  "Agenda mais cheia e menos faltas, com lembretes e confirmações automáticas.",
  "Equipe usando o tempo para o que realmente precisa de humano: negociação, diagnóstico, atendimento especializado.",
  "Funil visível: você sabe quantos entraram, quantos avançaram, quantos estão travados e em qual etapa.",
  "Menos retrabalho e menos “esqueci de responder”, “achei que fulano tinha visto”.",
  "Sensação de controle: você não depende mais de heróis individuais, e sim de um sistema que funciona."
];

export default function Resultados() {
  return (
    <section className="relative py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Como fica sua operação depois da automação com a Laia
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {beneficios.map((b, i) => (
            <motion.div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-slate-800/40 transition-colors" initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.05*i}}>
              <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
              <p className="text-slate-300">{b}</p>
            </motion.div>
          ))}
        </div>
        <motion.p className="mt-8 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Você já paga para trazer demanda até sua empresa. A Laia garante que essa demanda não morra no WhatsApp ou em um processo manual.
        </motion.p>
      </div>
    </section>
  );
}
