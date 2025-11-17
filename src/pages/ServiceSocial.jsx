import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServiceSocial() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <header className="pt-32 pb-10 mx-auto max-w-7xl px-4">
        <h1 className="text-white text-4xl md:text-6xl font-black">Blijf zichtbaar. Blijf in beweging.</h1>
        <p className="mt-4 text-white/80 max-w-2xl">10-post packs, templates en maandelijkse ondersteuning. Consistent, creatief en strategisch.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
        {[{
          tier: 'Starter', price: '€350/m', items: ['10 posts', '3 templates', '1 revisieronde']
        }, {
          tier: 'Groei', price: '€650/m', items: ['20 posts', '6 templates', '2 revisierondes']
        }, {
          tier: 'Pro', price: '€950/m', items: ['30 posts', '8 templates', '3 revisierondes']
        }].map(plan => (
          <div key={plan.tier} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-white text-xl font-semibold">{plan.tier}</h3>
            <p className="mt-2 text-[#4A7DFF] text-2xl font-bold">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              {plan.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <a href="/contact" className="inline-flex items-center rounded-full bg-[#4A7DFF] px-6 py-3 text-white font-semibold">Plan een kennismaking →</a>
      </div>

      <Footer />
    </div>
  )
}
