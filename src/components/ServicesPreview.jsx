import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Branding & Rebranding',
    desc: 'Visual identities die je bedrijf richting geven.',
    to: '/services/branding'
  },
  {
    title: 'Webdesign & Framer Websites',
    desc: 'Snelle, moderne en animatie-gedreven sites die overtuigen.',
    to: '/services/webdesign'
  },
  {
    title: 'Animatie & Motion Graphics',
    desc: 'Korte, krachtige animaties die je verhaal tot leven brengen.',
    to: '/services/animation'
  },
  {
    title: 'Social Media & Monthly Support',
    desc: 'Constante, sterke visuals voor blijvende zichtbaarheid.',
    to: '/services/social'
  }
]

export default function ServicesPreview() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#4A7DFF]/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              <h3 className="text-white text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <Link to={s.to} className="mt-6 inline-flex text-[#4A7DFF] font-semibold">Ontdek meer →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
