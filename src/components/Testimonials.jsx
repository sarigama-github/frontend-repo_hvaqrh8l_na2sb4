export default function Testimonials() {
  const quotes = [
    { name: 'Inês', text: 'Sai com a minha primeira ideia pronta a testar. Energia incrível!' },
    { name: 'Ricardo', text: 'Mentores top e conteúdos práticos. Recomendo a 100%.' },
    { name: 'Luísa', text: 'Conheci pessoas com interesses iguais. Networking valeu ouro.' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Testemunhos</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <blockquote className="text-slate-200">“{q.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-400">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
