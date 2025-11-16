import React from 'react'
import { motion } from 'framer-motion'
import { Home, Building2, Factory, Sun, Zap } from 'lucide-react'

const services = [
  {
    title: 'Residential Wiring & Smart Home',
    desc: 'Neuinstallation, Sanierung, KNX, Wallbox, Beleuchtung',
    icon: Home,
    image:
      'https://images.unsplash.com/photo-1607408310518-81c3a3aa2c09?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Commercial Electrical Installations',
    desc: 'Büro- & Ladenbau, Beleuchtung, Netzwerk, Sicherheit',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Industrial Maintenance & Control Systems',
    desc: 'Schaltschränke, SPS, Instandhaltung, Prüfungen',
    icon: Factory,
    image:
      'https://images.unsplash.com/photo-1581092335365-5799919a6ba5?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Solar & Renewable Energy',
    desc: 'PV, Speicher, Netzmanagement, Monitoring',
    icon: Sun,
    image:
      'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Emergency 24 / 7 Service',
    desc: 'Schnell vor Ort, Diagnose, Wiederinbetriebnahme',
    icon: Zap,
    image:
      'https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1974&auto=format&fit=crop',
  },
]

const Services = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-[#0b1b33] md:text-4xl">
            Services
          </h2>
          <p className="text-sm text-slate-600">Privat • Gewerbe • Industrie</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
                  <s.icon className="h-4 w-4 text-[#0a3dff]" />
                  {s.title}
                </div>
              </div>
              <div className="p-5">
                <p className="text-slate-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
