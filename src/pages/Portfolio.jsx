import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const items = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  image: `https://picsum.photos/seed/kntk-portfolio-${i}/800/600`
}))

export default function Portfolio() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <header className="pt-32 pb-6 mx-auto max-w-7xl px-4">
        <h1 className="text-white text-4xl md:text-6xl font-black">Werk</h1>
        <p className="mt-2 text-white/70">Een selectie van recente projecten.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {items.map(p => (
          <div key={p.id} className="group overflow-hidden rounded-2xl border border-white/10">
            <div className="overflow-hidden">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <p className="text-white">{p.title}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  )
}
