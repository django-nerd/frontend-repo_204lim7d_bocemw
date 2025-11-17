import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import WhyKNTK from '../components/WhyKNTK'
import PortfolioGrid from '../components/PortfolioGrid'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#111111]">
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        <WhyKNTK />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
