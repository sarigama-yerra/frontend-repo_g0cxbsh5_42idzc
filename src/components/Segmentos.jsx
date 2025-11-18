import { motion } from "framer-motion";
import { Building2, Stethoscope, Scissors, Briefcase } from "lucide-react";

const segmentos = [
  {
    icon: Building2,
    title: "Imobiliárias e Construtoras",
    bullets: [
      "Atendimento inicial, qualificação e pré-cadastro",
      "Coleta de documentos e atualização de status",
      "Agendamento de visitas e retorno de interessados",
      "Follow-up por etapa (interessado, pré-cadastro, reserva, repasse)"
    ]
  },
  {
    icon: Stethoscope,
    title: "Clínicas, Dentistas e Saúde",
    bullets: [
      "Agendamento e confirmação de consultas",
      "Reagendamentos automáticos",
      "Lembretes para reduzir faltas",
      "Reativação de pacientes inativos"
    ]
  },
  {
    icon: Scissors,
    title: "Salões, Estética, Studios e Academias",
    bullets: [
      "Gestão de agenda por profissional",
      "Confirmação e lembrete automático",
      "Lista de espera e encaixes",
      "Reativação de clientes que sumiram"
    ]
  },
  {
    icon: Briefcase,
    title: "Agências e B2B em geral",
    bullets: [
      "SDR automatizado para leads de campanha",
      "Qualificação e agendamento de reuniões",
      "Follow-up pós-proposta",
      "Nutrição básica antes de ir para o closer"
    ]
  }
];

export default function Segmentos() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Para quem a Laia faz mais diferença hoje
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Se o seu negócio depende de WhatsApp, agenda e gente respondendo cliente o dia todo, provavelmente conseguimos ajudar.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {segmentos.map(({ icon: Icon, title, bullets }, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/30 transition-all hover:-translate-y-1" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.06*i}}>
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-blue-400" />
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                {bullets.map((b, j) => (
                  <li key={j} className="text-slate-300 text-sm">{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p className="mt-10 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Mesmo que o seu segmento não esteja aqui, se você sente que está perdendo venda porque falta tempo, organização ou processo no WhatsApp, vale conversar.
        </motion.p>
      </div>
    </section>
  );
}
