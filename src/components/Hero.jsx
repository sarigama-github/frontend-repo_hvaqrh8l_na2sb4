import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              BEE — Bootcamp Empreendedorismo Estudantil
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-300"
            >
              Um dia imersivo para estudantes explorarem ideias, aprenderem com profissionais e criarem conexões reais.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#inscricao" className="inline-flex items-center rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:opacity-90 transition">Inscrever-me</a>
              <a href="#sobre" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">Saber mais</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-slate-300"
            >
              <p>24 de Maio, 09h00 — 16h00 • Campus Universitário</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-2">
              <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
