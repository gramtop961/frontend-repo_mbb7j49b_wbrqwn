import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Receipt, Truck, BadgeCheck } from 'lucide-react'

const points = [
  { icon: ShieldCheck, text: 'Certified Master Craftsman (Meisterbetrieb)' },
  { icon: Clock, text: '24/7 Support' },
  { icon: Receipt, text: 'Transparent Pricing' },
  { icon: Truck, text: 'Fast On-Site Service' },
  { icon: BadgeCheck, text: 'German Quality Standards' },
]

const WhyUs = () => {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-[#0b1b33] md:text-4xl">Why Choose Us</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a3dff]/10">
                <p.icon className="h-5 w-5 text-[#0a3dff]" />
              </div>
              <p className="text-slate-700">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
