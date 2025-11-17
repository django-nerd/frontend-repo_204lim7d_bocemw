import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 p-8 relative overflow-hidden">
          <div className="pointer-events-none absolute -left-10 top-1/2 h-0.5 w-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-2xl font-semibold">Plan een kennismaking</h3>
              <p className="mt-2 text-white/70">Vertel kort over je project. We reageren binnen 24 uur.</p>
            </div>
            <form className="grid gap-4">
              <input placeholder="Naam" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4A7DFF]" />
              <input placeholder="E-mail" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4A7DFF]" />
              <textarea rows="4" placeholder="Bericht" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4A7DFF]" />
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-[#4A7DFF] text-white px-6 py-3 font-semibold hover:shadow-[0_0_0_4px_rgba(74,125,255,0.2)] transition">
                Verstuur
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
