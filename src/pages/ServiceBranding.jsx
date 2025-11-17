import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function ServiceBranding() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <header className="pt-32 pb-16 mx-auto max-w-7xl px-4">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white text-4xl md:text-6xl font-black">Branding die beweegt.</motion.h1>
        <p className="mt-4 text-white/80 max-w-2xl">Logo design, visual identity, brand guidelines. Wij bouwen merken die herkenbaar zijn en bewegen met je bedrijf mee.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Basic', price: '€850', items: ['Logo set', 'Kleuren & typografie', 'Basis brand guide'] },
          { title: 'Plus', price: '€1.100', items: ['Logo + varianten', 'Uitgebreide identiteit', 'Social templates'] },
          { title: 'Full Identity', price: '€1.200', items: ['Volledige brand toolkit', 'Guidelines', 'Launch assets'] },
        ].map((p) => (
          <div key={p.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-white text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-[#4A7DFF] text-2xl font-bold">{p.price}</p>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              {p.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <a href="/contact" className="inline-flex items-center rounded-full bg-[#4A7DFF] px-6 py-3 text-white font-semibold">Plan een call →</a>
      </div>

      <Footer />
    </div>
  )
}
