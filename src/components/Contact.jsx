import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0b1b33] md:text-4xl">Get in touch</h2>
            <p className="mt-3 text-slate-600">
              Rufen Sie uns an oder schreiben Sie uns – wir melden uns innerhalb
              eines Werktags. Für dringende Fälle sind wir 24/7 erreichbar.
            </p>
            <div className="mt-6 grid gap-3 text-slate-700">
              <a href="tel:+492211234567" className="flex items-center gap-2 text-[#0a3dff] hover:underline"><Phone className="h-4 w-4"/> +49 (0)221 1234567</a>
              <a href="mailto:kontakt@meister-elektro.de" className="flex items-center gap-2 text-[#0a3dff] hover:underline"><Mail className="h-4 w-4"/> kontakt@meister-elektro.de</a>
              <a href="https://wa.me/492211234567" target="_blank" className="flex items-center gap-2 text-[#0a3dff] hover:underline" rel="noreferrer"><MessageCircle className="h-4 w-4"/> WhatsApp Chat</a>
              <p className="text-sm text-slate-500">Servicegebiet: Nordrhein-Westfalen (NRW) • Germany</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border">
              <iframe
                title="NRW Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.866%2C50.322%2C9.462%2C52.531&layer=mapnik"
                className="h-64 w-full"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-[#0a3dff]" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-[#0a3dff]" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-[#0a3dff]" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-[#0a3dff]" />
              </div>
              <button type="submit" className="mt-2 rounded-md bg-[#ffe600] px-5 py-3 font-semibold text-[#0b1b33] shadow hover:brightness-95">Send Request</button>
              {sent && (
                <p className="text-sm text-green-600">Thank you! We will get back to you shortly.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
