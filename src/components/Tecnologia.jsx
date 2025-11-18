import { motion } from "framer-motion";
import { Workflow, MessageSquare, Database, Calendar, Sheet, Bot, PlugZap } from "lucide-react";

const techs = [
  { icon: Workflow, label: "n8n para orquestrar fluxos complexos de automação" },
  { icon: PlugZap, label: "Evolution API para conexão estável com WhatsApp Business" },
  { icon: Database, label: "Supabase/Postgres como base de dados em tempo real" },
  { icon: PlugZap, label: "Integração com CRMs (como CV CRM) e ferramentas internas" },
  { icon: Calendar, label: "Google Calendar e Google Sheets para agendas e relatórios operacionais" },
  { icon: MessageSquare, label: "Chatwoot para unificar conversas entre I.A e atendentes humanos" },
  { icon: Bot, label: "Modelos avançados de I.A de texto e voz para conversas naturais" }
];

export default function Tecnologia() {
  return (
    <section className="relative py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Por dentro da tecnologia da Laia
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Por trás dos agentes de I.A e dos fluxos conversacionais, usamos um ecossistema sólido de automação e dados para garantir que tudo funcione de ponta a ponta:
        </motion.p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {techs.map(({ icon: Icon, label }, i) => (
            <motion.div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-indigo-500/30 transition-all hover:-translate-y-1" initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.06*i}}>
              <Icon className="w-5 h-5 text-indigo-400 mt-1" />
              <p className="text-slate-300">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p className="mt-8 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Você não precisa dominar nada disso. Seu trabalho é dizer onde dói; o nosso é usar essa infraestrutura para fazer sua operação rodar.
        </motion.p>
      </div>
    </section>
  );
}
