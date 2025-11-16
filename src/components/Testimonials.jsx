import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Schnell, sauber, absolut professionell. Unsere Smart-Home-Installation läuft perfekt!'
    , name: 'Familie Müller', role: 'Privatkunde', avatar: 'https://i.pravatar.cc/80?img=5'
  },
  {
    quote:
      'Top-Partner für unseren Büroausbau. Transparente Beratung und termingerecht umgesetzt.'
    , name: 'Lena Koch', role: 'Operations, Mittelstand', avatar: 'https://i.pravatar.cc/80?img=15'
  },
  {
    quote:
      'Kompetente Instandhaltung und Schaltschrankbau – minimierte Ausfallzeiten in der Produktion.'
    , name: 'A. Schneider', role: 'Werksleiter, Industrie', avatar: 'https://i.pravatar.cc/80?img=25'
  },
]

const Stars = () => (
  <div className="flex text-[#ffe600]">{'★★★★★'}</div>
)

const Testimonials = () => {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-[#0b1b33] md:text-4xl">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-medium text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-600">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
