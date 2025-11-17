import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Stats from '../components/Stats'
import Schedule from '../components/Schedule'
import Speakers from '../components/Speakers'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Stats />
        <Schedule />
        <Speakers />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} BEE — Todos os direitos reservados
      </footer>
    </div>
  )
}
