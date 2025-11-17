import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#111111]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111111]/40 via-[#111111]/60 to-[#111111]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-3xl"
        >
          Design that moves. Stories that stick.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl"
        >
          KNTK Studio creëert branding, animatie en webdesign die kleine bedrijven groot laat voelen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link to="/contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-[#4A7DFF] text-white px-6 py-3 font-semibold hover:shadow-[0_0_0_4px_rgba(74,125,255,0.2)] transition">
            Start je project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/portfolio" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-semibold hover:border-white/40 transition">
            Bekijk werk
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
