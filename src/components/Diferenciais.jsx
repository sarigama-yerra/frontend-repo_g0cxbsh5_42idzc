import { motion } from "framer-motion";
import { Workflow, Cog, Plug, LineChart } from "lucide-react";

const cards = [
  {
    icon: Workflow,
    title: "Não é só “mais um chatbot”. É sua operação comercial operando com I.A, do jeito que você vende.",
    subtitle:
      "A maioria dos chatbots falha porque são genéricos, não entendem o seu processo e não conversam com seus sistemas. A Laia nasce do lado oposto: começamos pela SUA operação e depois colocamos a I.A para trabalhar dentro dela.",
    body:
      "1. Começamos pela sua operação, não pela ferramenta Antes de falar em tecnologia, mapeamos como você vende hoje: de onde vem o lead, quais etapas existem, quem atende, onde trava, onde você está perdendo oportunidades."
  },
  {
    icon: Cog,
    title: "I.A + automação construídas sob medida",
    subtitle:
      "Desenhamos agentes de I.A conversacional e fluxos de automação específicos para sua realidade — não script genérico. Seu atendimento, SDR e agenda funcionam do jeito que você precisa, mas sem depender do “bom humor” da equipe.",
    body: "2. I.A + automação construídas sob medida Desenhamos agentes de I.A conversacional e fluxos de automação específicos para sua realidade — não script genérico. Seu atendimento, SDR e agenda funcionam do jeito que você precisa, mas sem depender do “bom humor” da equipe."
  },
  {
    icon: Plug,
    title: "Integração de verdade com seus sistemas",
    subtitle:
      "Conectamos WhatsApp, CRM, banco de dados, agenda e outros sistemas para que cada conversa vire dado útil: etapa do funil, próximo passo, agendamento, status de documentos, etc.",
    body:
      "3. Integração de verdade com seus sistemas Conectamos WhatsApp, CRM, banco de dados, agenda e outros sistemas para que cada conversa vire dado útil: etapa do funil, próximo passo, agendamento, status de documentos, etc."
  },
  {
    icon: LineChart,
    title: "Acompanhamento e ajuste contínuo",
    subtitle:
      "Depois que entra no ar, acompanhamos métricas e ajustamos mensagens, gatilhos e fluxos. O objetivo é simples: mais leads atendidos, mais agendas, mais negócios fechados.",
    body:
      "4. Acompanhamento e ajuste contínuo Depois que entra no ar, acompanhamos métricas e ajustamos mensagens, gatilhos e fluxos. O objetivo é simples: mais leads atendidos, mais agendas, mais negócios fechados."
  }
];

export default function Diferenciais() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Não é só “mais um chatbot”. É sua operação comercial operando com I.A, do jeito que você vende.
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          A maioria dos chatbots falha porque são genéricos, não entendem o seu processo e não conversam com seus sistemas. A Laia nasce do lado oposto: começamos pela SUA operação e depois colocamos a I.A para trabalhar dentro dela.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, subtitle }, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/30 transition-all hover:-translate-y-1" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.06*i}}>
              <Icon className="w-6 h-6 text-blue-400" />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{subtitle}</p>
            </motion.div>
          ))}
        </div>

        <motion.p className="mt-10 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Você não precisa de “uma ferramenta de I.A”. Você precisa de uma operação automatizada que funcione todo dia, como um time disciplinado que não cansa.
        </motion.p>
      </div>
    </section>
  );
}
