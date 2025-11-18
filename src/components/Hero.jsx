import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
};

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Pare de perder leads no WhatsApp. A Laia automatiza seu atendimento, SDR e agendamentos com I.A sob medida.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Se você já investe em tráfego, anúncios e equipe comercial, mas os leads morrem no WhatsApp ou no atendimento manual, a Laia entra para resolver isso. Configuramos agentes de I.A que atendem, qualificam, agendam e fazem follow-up automático, integrados ao seu CRM, calendário e sistemas — para você parar de perder oportunidade por falta de resposta, organização ou tempo.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <motion.a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all group"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
          >
            Agendar demo de 15 minutos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.p
            className="text-sm text-slate-400 max-w-xl"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
          >
            Uma conversa prática para ver onde você está perdendo dinheiro no WhatsApp e como automatizar isso — sem compromisso.
          </motion.p>
        </div>

        <motion.a
          href="#como-funciona"
          className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <PlayCircle className="w-5 h-5" />
          Ver como a automação funciona na prática
        </motion.a>
      </div>
    </section>
  );
}
