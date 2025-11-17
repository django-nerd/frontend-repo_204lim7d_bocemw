import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  image: `https://picsum.photos/seed/kntk-${i}/800/600`
}))

export default function PortfolioGrid() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10"
            >
              <Link to={`/portfolio/${p.id}`}>
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h5 className="text-white font-medium">{p.title}</h5>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
