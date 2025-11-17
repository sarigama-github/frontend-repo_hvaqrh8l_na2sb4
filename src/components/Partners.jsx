export default function Partners() {
  const tiers = {
    Ouro: [
      { name: 'TechCorp', url: '#', logo: 'https://dummyimage.com/240x80/ffffff/000000&text=TechCorp' },
      { name: 'InnoBank', url: '#', logo: 'https://dummyimage.com/240x80/ffffff/000000&text=InnoBank' },
    ],
    Prata: [
      { name: 'UniLab', url: '#', logo: 'https://dummyimage.com/180x60/ffffff/000000&text=UniLab' },
      { name: 'MediaX', url: '#', logo: 'https://dummyimage.com/180x60/ffffff/000000&text=MediaX' },
      { name: 'RocketHub', url: '#', logo: 'https://dummyimage.com/180x60/ffffff/000000&text=RocketHub' },
    ],
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Parceiros & Patrocinadores</h2>
        <p className="mt-2 text-slate-300">Obrigado a quem torna este evento possível.</p>

        <div className="mt-8 space-y-8">
          {Object.entries(tiers).map(([tier, list]) => (
            <div key={tier}>
              <h3 className="text-white/90 font-medium">{tier}</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {list.map((p) => (
                  <a key={p.name} href={p.url} className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition flex items-center justify-center">
                    <img src={p.logo} alt={p.name} className="opacity-80 group-hover:opacity-100 transition" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
