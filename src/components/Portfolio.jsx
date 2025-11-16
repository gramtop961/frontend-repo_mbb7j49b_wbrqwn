import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop',
    caption: 'Modern Home – Smart Lighting & KNX (Residential)'
  },
  {
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1974&auto=format&fit=crop',
    caption: 'Office Fit-Out – LED & Network (Commercial)'
  },
  {
    image:
      'https://images.unsplash.com/photo-1581091215367-59ab6c76d9a2?q=80&w=1974&auto=format&fit=crop',
    caption: 'Factory – Control Panels & Maintenance (Industrial)'
  },
  {
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1974&auto=format&fit=crop',
    caption: 'Retail – Accent Lighting & Safety (Commercial)'
  },
  {
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1974&auto=format&fit=crop',
    caption: 'Solar Roof – PV Integration (Residential)'
  },
  {
    image:
      'https://images.unsplash.com/photo-1581091014527-7c4b3974f7cc?q=80&w=1974&auto=format&fit=crop',
    caption: 'Industrial – Cable Management & Safety (Industrial)'
  },
]

const Portfolio = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-[#0b1b33] md:text-4xl">Portfolio</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
            >
              <img
                src={p.image}
                alt={p.caption}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm">{p.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
