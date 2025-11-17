export default function Schedule() {
  const items = [
    { time: '09h00', title: 'Receção e Credenciação', desc: 'Coffee de boas-vindas' },
    { time: '09h30', title: 'Sessão de Abertura', desc: 'Apresentação do evento' },
    { time: '10h00', title: 'Palestra: Lançar do Zero', desc: 'Speaker: Ana Silva — Produto' },
    { time: '11h00', title: 'Coffee Break', desc: 'Networking' },
    { time: '11h15', title: 'Workshop: Validação de Ideias', desc: 'Ferramentas e exercícios' },
    { time: '12h30', title: 'Almoço', desc: 'Networking' },
    { time: '14h00', title: 'Painel de Discussão', desc: 'Tendências e desafios' },
    { time: '15h30', title: 'Sessão de Encerramento', desc: 'Conclusões e próximos passos' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Schedule</h2>
          <a href="/agenda" className="text-sm text-cyan-300 hover:text-white">Ver agenda completa →</a>
        </div>

        <div className="mt-8 grid gap-3">
          {items.map((it) => (
            <div key={it.time} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-4 flex items-center justify-between">
              <div className="text-cyan-300 font-mono text-sm w-20">{it.time}</div>
              <div className="flex-1">
                <div className="text-white font-medium">{it.title}</div>
                <div className="text-slate-300 text-sm">{it.desc}</div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 text-slate-300 text-sm transition">Detalhes</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
