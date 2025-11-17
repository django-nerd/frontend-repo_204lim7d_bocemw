import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
          <div className="h-full w-full bg-gradient-to-br from-[#4A7DFF]/30 to-white/10" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h3 className="text-white text-2xl font-semibold">Over</h3>
          <p className="mt-4 text-white/80 leading-relaxed">
            Ik ben Louie Jouban, visual artist en animator achter KNTK Studio. Mijn werk combineert marketingkennis, design en beweging om bedrijven duidelijker, creatiever en professioneler te maken.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
