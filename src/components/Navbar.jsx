import React from 'react'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-[#0a3dff]" />
          <span className="text-sm font-semibold tracking-wide text-[#0b1b33]">Meister Elektro</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <button onClick={() => scrollTo('services')} className="hover:text-[#0a3dff]">Services</button>
          <button onClick={() => scrollTo('portfolio')} className="hover:text-[#0a3dff]">Portfolio</button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-[#0a3dff]">Testimonials</button>
          <button onClick={() => scrollTo('contact')} className="rounded-md bg-[#ffe600] px-4 py-2 font-semibold text-[#0b1b33] shadow hover:brightness-95">Free Quote</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
