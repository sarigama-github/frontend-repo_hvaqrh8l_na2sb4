import Navbar from '../components/Navbar'

const sections = [
  {
    title: 'Sobre o Evento',
    qas: [
      ['O que é este evento?', 'É um bootcamp prático de empreendedorismo para estudantes universitários.'],
      ['A quem se destina?', 'A estudantes entre 18 e 26 anos, de qualquer curso.'],
      ['Preciso de experiência prévia?', 'Não. O conteúdo está preparado para principantes e curiosos.'],
    ],
  },
  {
    title: 'Inscrições',
    qas: [
      ['Como me inscrevo?', 'Usa o botão "Inscrever-me" nesta página.'],
      ['Qual é o preço?', 'Existem vagas gratuitas e pagas — detalhes no formulário.'],
      ['Até quando posso inscrever-me?', 'Até esgotar as vagas ou 48h antes do evento.'],
      ['Há limite de vagas?', 'Sim, para garantir qualidade e acompanhamento.'],
      ['Posso cancelar a minha inscrição?', 'Podes cancelar até 72h antes.'],
    ],
  },
  {
    title: 'Logística',
    qas: [
      ['A que horas devo chegar?', 'Recomendamos 15 minutos antes do início.'],
      ['Onde é o evento?', 'Campus Universitário, Edifício A.'],
      ['Como chego lá?', 'Transportes públicos ou estacionamento no campus.'],
      ['Está incluído almoço?', 'Almoço livre; coffee breaks incluídos.'],
      ['Quanto tempo dura o evento?', 'Das 09h00 às 16h00.'],
    ],
  },
  {
    title: 'Durante o Evento',
    qas: [
      ['Vou receber certificado?', 'Sim, certificado digital após o evento.'],
      ['Posso fazer networking?', 'Sim, existem momentos dedicados.'],
      ['Haverá material de apoio?', 'Sim, recursos digitais e templates.'],
      ['Posso tirar fotos?', 'Claro! Partilha e marca-nos.'],
    ],
  },
  {
    title: 'Outras Questões',
    qas: [
      ['O que devo levar?', 'Computador e carregador.'],
      ['Existe dress code?', 'Casual.'],
      ['O espaço é acessível?', 'Sim, com acessos e assistência.'],
      ['Ainda tens dúvidas?', 'Entra em contacto connosco por e-mail.'],
    ],
  },
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-semibold text-white">FAQ</h1>
          <p className="mt-3 text-slate-300">Tens dúvidas? Estamos aqui para ajudar!</p>

          <div className="mt-8 space-y-8">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h2 className="text-white font-medium">{sec.title}</h2>
                <div className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
                  {sec.qas.map(([q, a]) => (
                    <details key={q} className="group bg-white/5 open:bg-white/10">
                      <summary className="cursor-pointer list-none p-4 text-white/90 font-medium flex items-center justify-between">
                        <span>{q}</span>
                        <span className="text-slate-400 text-sm group-open:rotate-180 transition">⌄</span>
                      </summary>
                      <div className="px-4 pb-4 text-slate-300 text-sm">{a}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400">© {new Date().getFullYear()} BEE</footer>
    </div>
  )
}
