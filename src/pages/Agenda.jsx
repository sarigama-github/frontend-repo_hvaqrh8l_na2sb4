import Navbar from '../components/Navbar'

const program = [
  ['09h00 - 09h30', 'Receção e Credenciação', 'Coffee de boas-vindas'],
  ['09h30 - 10h00', 'Sessão de Abertura', 'Apresentação do evento'],
  ['10h00 - 11h00', 'Palestra: Lançar do Zero', 'Speaker: Ana Silva — Produto'],
  ['11h00 - 11h15', 'Coffee Break', 'Networking'],
  ['11h15 - 12h30', 'Workshop: Validação de Ideias', 'Descrição breve'],
  ['12h30 - 14h00', 'Almoço', 'Networking'],
  ['14h00 - 15h30', 'Painel de Discussão', 'Tema e participantes'],
  ['15h30 - 16h00', 'Sessão de Encerramento', 'Conclusões e próximos passos'],
]

export default function Agenda() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-semibold text-white">Agenda</h1>
          <p className="mt-3 text-slate-300">Visão geral do dia e duração total do evento.</p>

          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
            {program.map(([hour, title, desc]) => (
              <div key={hour} className="grid md:grid-cols-[160px_1fr] gap-4 p-4 bg-white/5">
                <div className="text-cyan-300 font-mono text-sm">{hour}</div>
                <div>
                  <div className="text-white font-medium">{title}</div>
                  <div className="text-slate-300 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-5">
            <h2 className="text-white font-medium">Informações Práticas</h2>
            <ul className="mt-3 text-slate-300 text-sm list-disc pl-5 space-y-1">
              <li>Trazer computador portátil e carregador</li>
              <li>Chegar 15 minutos antes</li>
              <li>Almoço livre; coffee breaks incluídos</li>
              <li>Certificado digital enviado após o evento</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400">© {new Date().getFullYear()} BEE</footer>
    </div>
  )
}
