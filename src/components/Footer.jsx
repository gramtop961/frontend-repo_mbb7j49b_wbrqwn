import React from 'react'
import { Linkedin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <p className="font-semibold text-[#0b1b33]">Meister Elektro GmbH</p>
          <p className="text-sm text-slate-600">Kölner Straße 1, 50667 Köln, Germany</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-[#0a3dff]">Impressum</a>
          <a href="#" className="hover:text-[#0a3dff]">Datenschutz</a>
          <a href="#" className="hover:text-[#0a3dff]">AGB</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-[#0a3dff]"><Linkedin className="h-5 w-5"/></a>
          <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-[#0a3dff]"><Facebook className="h-5 w-5"/></a>
          <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-[#0a3dff]"><Instagram className="h-5 w-5"/></a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Meister Elektro GmbH. All rights reserved.</div>
    </footer>
  )
}

export default Footer
