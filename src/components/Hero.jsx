import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      {/* Decorative gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#001a3d]/30 via-transparent to-[#00e5ff]/10" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:py-28">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="z-10 w-full md:w-1/2"
        >
          <span className="inline-block rounded-full bg-[#001a3d] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Meisterbetrieb • TÜV-geprüft
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#0b1b33] md:text-5xl">
            Your Certified Master Electrician – Powering Homes & Businesses
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Reliable, Safe, Expert Service Since 2003. We deliver premium electrical
            solutions for private households and commercial clients across Germany
            and international projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center rounded-md bg-[#0a3dff] px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-[#0026ff]"
            >
              Request Free Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <span className="text-sm font-medium text-[#0a3dff]">
              24/7 Notdienst • DE / EN Service
            </span>
          </div>
        </motion.div>

        {/* 3D Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative w-full md:w-1/2"
          aria-hidden
        >
          <div className="relative aspect-[4/3] w-full rounded-2xl border border-blue-100 bg-white/50 shadow-xl">
            <Spline
              scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
