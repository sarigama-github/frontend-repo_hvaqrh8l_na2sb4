import { Lightbulb, Users, Rocket, Sparkles } from 'lucide-react'

const items = [
  { icon: Lightbulb, title: 'Ideação', desc: 'Transforma ideias em projetos com suporte prático.' },
  { icon: Users, title: 'Networking', desc: 'Conhece mentores, startups e outros estudantes.' },
  { icon: Rocket, title: 'Workshops', desc: 'Sessões hands-on com ferramentas reais.' },
  { icon: Sparkles, title: 'Pitch', desc: 'Apresenta o teu projeto e recebe feedback.' },
]

export default function Highlights() {
  return (
    <section id="sobre" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">Sobre o evento</h2>
          <p className="mt-3 text-slate-300">Um resumo rápido do que vais encontrar: objetivos claros, foco prático e ambiente colaborativo para aprender e construir.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
              <Icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-3 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
