import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <header className="pt-32 pb-6 mx-auto max-w-7xl px-4">
        <h1 className="text-white text-4xl md:text-6xl font-black">Contact</h1>
        <p className="mt-2 text-white/70">Plan een kennismaking – we reageren binnen 24 uur.</p>
      </header>
      <Contact />
      <Footer />
    </div>
  )
}
