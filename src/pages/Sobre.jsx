import Navbar from '../components/Navbar'

const benefits = [
  { title: 'Aprendizagem prática', desc: 'Workshops orientados por profissionais com exercícios reais.' },
  { title: 'Mentoria', desc: 'Acesso a mentores de produto, design, marketing e tecnologia.' },
  { title: 'Comunidade', desc: 'Conhece pessoas com ambição e constrói a tua rede.' },
  { title: 'Portefólio', desc: 'Cria algo concreto para mostrar em candidaturas e entrevistas.' },
  { title: 'Oportunidades', desc: 'Liga-te a startups e entidades parceiras.' },
  { title: 'Certificado', desc: 'Recebe certificado de participação.' },
]

export default function Sobre() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-semibold text-white">Sobre o BEE</h1>
          <p className="mt-3 text-slate-300 max-w-3xl">O Bootcamp de Empreendedorismo Estudantil é uma iniciativa dedicada a impulsionar jovens entre os 18 e 26 anos a explorar, validar e comunicar ideias com impacto. Um espaço de aprendizagem ativa com foco em construir e partilhar.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="text-white font-medium">{b.title}</h3>
                <p className="text-slate-300 text-sm mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 mt-14">
          <h2 className="text-2xl font-semibold text-white">Equipa Organizadora</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="p-4">
                  <div className="text-white font-medium">Organizador {i}</div>
                  <div className="text-slate-300 text-sm">Associação XYZ</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 mt-14">
          <h2 className="text-2xl font-semibold text-white">Local e Data</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="text-slate-300">Campus Universitário, Edifício A</p>
              <p className="text-slate-300">24 de Maio • 09h00 — 16h00</p>
              <p className="text-slate-400 text-sm mt-2">Traz computador portátil e boa disposição.</p>
            </div>
            <iframe title="Mapa" className="rounded-2xl border border-white/10 w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.078!2d-9.139!3d38.736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933875!2sUniversidade!5e0!3m2!1spt-PT!2spt!4v1610000000000" allowFullScreen="" loading="lazy"></iframe>
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400">© {new Date().getFullYear()} BEE</footer>
    </div>
  )
}
