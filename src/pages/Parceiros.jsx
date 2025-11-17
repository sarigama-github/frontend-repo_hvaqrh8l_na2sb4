import Navbar from '../components/Navbar'

export default function Parceiros() {
  const main = [
    { name: 'TechCorp', url: '#', desc: 'Líder em soluções cloud', logo: 'https://dummyimage.com/300x100/ffffff/000000&text=TechCorp' },
    { name: 'InnoBank', url: '#', desc: 'Apoio a empreendedores', logo: 'https://dummyimage.com/300x100/ffffff/000000&text=InnoBank' },
  ]

  const support = [
    'https://dummyimage.com/180x60/ffffff/000000&text=UniLab',
    'https://dummyimage.com/180x60/ffffff/000000&text=MediaX',
    'https://dummyimage.com/180x60/ffffff/000000&text=RocketHub',
    'https://dummyimage.com/180x60/ffffff/000000&text=CityCouncil',
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-semibold text-white">Parceiros</h1>
          <p className="mt-3 text-slate-300">Obrigado a todos os que apoiam este evento.</p>

          <div className="mt-8 grid gap-6">
            {main.map((p) => (
              <a key={p.name} href={p.url} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-6 hover:bg-white/10 transition">
                <img src={p.logo} alt={p.name} className="w-40" />
                <div>
                  <div className="text-white font-medium">{p.name}</div>
                  <div className="text-slate-300 text-sm">{p.desc}</div>
                </div>
              </a>
            ))}
          </div>

          <h2 className="mt-12 text-white font-medium">Apoios</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {support.map((logo, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-center">
                <img src={logo} alt="apoio" className="opacity-80" />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-medium">Torna-te Parceiro</div>
              <p className="text-slate-300 text-sm">Junta-te ao ecossistema e apoia o desenvolvimento de talento jovem.</p>
            </div>
            <a href="mailto:parcerias@bee.pt" className="rounded-full bg-white text-slate-900 font-semibold px-5 py-3">Contactar</a>
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400">© {new Date().getFullYear()} BEE</footer>
    </div>
  )
}
