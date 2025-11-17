import { motion } from 'framer-motion'
import { Zap, Wallet, Bot } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Motion-first design', text: 'Alles draait om beweging en storytelling.' },
  { icon: Wallet, title: 'Betaalbaar voor kleine bedrijven', text: 'Prijzen zijn toegankelijk en transparant.' },
  { icon: Bot, title: 'AI-assisted workflow', text: 'Slimmer, sneller en efficiënter werken.' },
]

export default function WhyKNTK() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <it.icon className="h-8 w-8 text-[#4A7DFF]" />
              <h4 className="mt-4 text-white font-semibold">{it.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
