import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function ServiceWebdesign() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <header className="pt-32 pb-10 mx-auto max-w-7xl px-4">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white text-4xl md:text-6xl font-black">Webdesign met energie en karakter.</motion.h1>
        <p className="mt-4 text-white/80 max-w-2xl">Framer websites, landing pages en UI met animatie. Snel, modern en overtuigend.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-white text-xl font-semibold">Static vs Animated</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70">
            <div>
              <p className="font-semibold text-white">Oude statische site</p>
              <ul className="mt-2 space-y-1">
                <li>• Weinig beleving</li>
                <li>• Trage indruk</li>
                <li>• Lage conversie</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Nieuwe animated site</p>
              <ul className="mt-2 space-y-1">
                <li>• Dynamische storytelling</li>
                <li>• Sneller gevoel</li>
                <li>• Hogere conversie</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-white text-xl font-semibold">Wat je krijgt</h3>
          <ul className="mt-4 space-y-2 text-white/70 text-sm">
            <li>• Framer of custom React build</li>
            <li>• Copy, design en micro-animaties</li>
            <li>• Basis SEO en performance</li>
          </ul>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <a href="/contact" className="inline-flex items-center rounded-full bg-[#4A7DFF] px-6 py-3 text-white font-semibold">Start je project →</a>
      </div>

      <Footer />
    </div>
  )
}
