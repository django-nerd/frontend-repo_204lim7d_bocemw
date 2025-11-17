import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServiceAnimation() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <header className="pt-32 pb-10 mx-auto max-w-7xl px-4">
        <h1 className="text-white text-4xl md:text-6xl font-black">Animatie die je verhaal laat leven.</h1>
        <p className="mt-4 text-white/80 max-w-2xl">Explainer video’s, logo-animaties en social animaties die aandacht pakken en bijblijven.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5">
            <div className="aspect-video bg-black/50 relative">
              <div className="absolute inset-0 grid place-items-center text-white/60">Video {i}</div>
            </div>
            <div className="p-4">
              <p className="text-white font-medium">Case {i}</p>
              <p className="text-white/60 text-sm">Autoplay on hover (placeholder)</p>
            </div>
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <a href="/contact" className="inline-flex items-center rounded-full bg-[#4A7DFF] px-6 py-3 text-white font-semibold">Vraag een offerte →</a>
      </div>

      <Footer />
    </div>
  )
}
