import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Em quanto tempo começo a ver resultado?",
    a: "Depende da complexidade, mas em muitos casos o primeiro fluxo (atendimento inicial + agendamento + follow-up básico) já começa a rodar em poucas semanas. Os ganhos aparecem primeiro em tempo de resposta e organização; depois, em aumento de agendas e conversões."
  },
  {
    q: "Preciso trocar meu CRM ou as ferramentas que já uso?",
    a: "Na maioria dos casos, não. Trabalhamos para integrar com o que você já tem. Só sugerimos mudança de ferramenta se estiver muito claro que ela está limitando sua operação."
  },
  {
    q: "Minha equipe vai ser substituída?",
    a: "Não. A I.A entra para tirar o peso do trabalho repetitivo e garantir que nenhum lead fique sem resposta. Sua equipe continua essencial para negociar, entender casos mais complexos e construir relacionamento — só que muito mais focada nisso."
  },
  {
    q: "Isso é muito caro?",
    a: "O custo depende do volume de leads, canais e nível de automação. O que olhamos sempre é a relação investimento x economia de tempo x aumento de receita. Na demo, mostramos onde você está perdendo dinheiro hoje e qual seria o cenário com a operação automatizada. A partir daí, você decide se faz sentido."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Perguntas frequentes de quem pensa em automatizar com I.A
        </motion.h2>

        <div className="mt-8 divide-y divide-slate-700/60 rounded-2xl overflow-hidden border border-slate-700/60">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-slate-800/40">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-white font-medium">{`Pergunta ${i + 1}: ${f.q}`}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-4 text-slate-300"
                    >
                      {`Resposta: ${f.a}`}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
