import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServiceBranding from './pages/ServiceBranding'
import ServiceWebdesign from './pages/ServiceWebdesign'
import ServiceAnimation from './pages/ServiceAnimation'
import ServiceSocial from './pages/ServiceSocial'
import Portfolio from './pages/Portfolio'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/branding" element={<ServiceBranding />} />
      <Route path="/services/webdesign" element={<ServiceWebdesign />} />
      <Route path="/services/animation" element={<ServiceAnimation />} />
      <Route path="/services/social" element={<ServiceSocial />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
