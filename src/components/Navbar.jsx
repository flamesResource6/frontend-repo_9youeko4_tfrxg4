import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="logo" className="h-8 w-8" />
            <span className="font-semibold tracking-tight text-slate-800">Blue Manufacturing</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#capabilities" className="hover:text-blue-600 transition-colors">Capabilities</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition-all">Request a Quote</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              <a href="#capabilities" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-slate-100">Capabilities</a>
              <a href="#about" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-slate-100">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-slate-100">Contact</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded bg-blue-600 text-white">Request a Quote</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
