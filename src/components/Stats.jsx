const stats = [
  { label: 'Speakers', value: '12+' },
  { label: 'Workshops', value: '8' },
  { label: 'Horas de Networking', value: '5h' },
  { label: 'Participantes', value: '300+' },
]

export default function Stats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.03] border border-white/10 p-6 text-center">
              <div className="text-3xl font-semibold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
