const speakers = [
  { name: 'Ana Silva', title: 'Head of Product, NovaTech', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop' },
  { name: 'João Costa', title: 'Founder, StartLab', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Marta Rocha', title: 'VC Analyst, SeedFund', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Pedro Alves', title: 'Designer, FlowStudio', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1000&auto=format&fit=crop' },
]

export default function Speakers() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Professores em Destaque</h2>
          <a href="/speakers" className="text-sm text-cyan-300 hover:text-white">Ver todos →</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {speakers.map((s) => (
            <div key={s.name} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
              <div className="p-4">
                <div className="text-white font-medium">{s.name}</div>
                <div className="text-slate-300 text-sm">{s.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
