import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0b1b33] md:text-4xl">
            Meisterbetrieb – Sicherheit und Qualität seit 2003
          </h2>
          <p className="mt-4 text-slate-600">
            Als zertifizierter Meisterbetrieb stehen wir für höchste Sicherheit,
            transparente Beratung und präzise Ausführung. Über 20 Jahre Erfahrung
            in Wohn- und Gewerbeprojekten: Von moderner Hausinstallation und
            Smart-Home-Lösungen bis hin zu komplexen Industrieanlagen und
            Energiemanagement – wir liefern zuverlässig, termintreu und
            normkonform.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700">
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#0a3dff]" />VDE-konforme Installationen</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#ffe600]" />Geprüfte Sicherheit & Dokumentation</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#0a3dff]" />Privat & Gewerbe – DE/EN Betreuung</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1590402494587-44b71d7772f4?q=80&w=1974&auto=format&fit=crop"
              alt="Unser Team im Einsatz"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
