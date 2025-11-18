import { motion } from "framer-motion";

export default function PorqueAgora() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          E se nada mudar nos próximos 6 meses?
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Se você continuar com o modelo atual, provavelmente vai continuar vendo as mesmas cenas:
        </motion.p>
        <div className="mt-6 space-y-3">
          <p className="text-slate-300">leads que chegam quentes e esfriam porque ninguém conseguiu responder a tempo</p>
          <p className="text-slate-300">equipe estressada, os melhores começando a pensar em sair</p>
          <p className="text-slate-300">campanhas que “não convertem” porque a operação não acompanha o volume</p>
        </div>
        <motion.p className="mt-6 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Automação com I.A não é mais um “plus”: ela é o que separa empresas que escalam com a mesma estrutura daquelas que ficam travadas no operacional.
        </motion.p>
        <motion.p className="mt-6 text-slate-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Se você já percebeu que o seu gargalo está na operação de atendimento, o próximo passo natural é ver, na prática, como a Laia resolveria isso aí dentro.
        </motion.p>
        <div className="mt-8">
          <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all">Agendar demo de 15 minutos</a>
        </div>
      </div>
    </section>
  );
}
