import { useEffect, useState } from 'react'

function useCountdown(target) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = Math.max(0, target - now)
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d, h, m, s }
}

export default function CTA() {
  const { d, h, m, s } = useCountdown(new Date('2025-05-24T09:00:00').getTime())

  return (
    <section id="inscricao" className="py-20">
      <div className="mx-auto max-w-3xl text-center px-4">
        <h2 className="text-3xl font-semibold text-white">Pronto para participar?</h2>
        <p className="mt-2 text-slate-300">Garante o teu lugar e junta-te à próxima geração de criadores.</p>
        <div className="mt-6 flex items-center justify-center gap-3 text-white/90 font-mono">
          <span className="rounded-lg bg-white/10 px-3 py-2">{String(d).padStart(2, '0')}d</span>
          <span className="rounded-lg bg-white/10 px-3 py-2">{String(h).padStart(2, '0')}h</span>
          <span className="rounded-lg bg-white/10 px-3 py-2">{String(m).padStart(2, '0')}m</span>
          <span className="rounded-lg bg-white/10 px-3 py-2">{String(s).padStart(2, '0')}s</span>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:opacity-90 transition">Inscrever-me</a>
          <form className="w-full sm:w-auto flex gap-2">
            <input type="email" required placeholder="O teu e-mail" className="flex-1 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/50 px-4 py-3 focus:outline-none" />
            <button className="rounded-full border border-white/20 text-white px-4 py-3 hover:bg-white/10 transition">Subscrever</button>
          </form>
        </div>
      </div>
    </section>
  )
}
