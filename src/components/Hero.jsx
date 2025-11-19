function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),transparent_35%)]"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Precision manufacturing for teams that can’t compromise
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 max-w-xl">
              From prototypes to production, we deliver CNC machining, sheet metal fabrication, and finishing services with on-time reliability and quality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 transition-colors">Request a Quote</a>
              <a href="#capabilities" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors">Explore Capabilities</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-blue-200/80">
              <div className="flex items-center gap-2"><span className="text-2xl">★</span><span>ISO 9001-ready</span></div>
              <div className="flex items-center gap-2"><span className="text-2xl">⏱</span><span>48h quotes</span></div>
              <div className="flex items-center gap-2"><span className="text-2xl">🏭</span><span>USA-based shop</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-white/10 shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1713371398485-7bde1bde9def?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmd8ZW58MHwwfHx8MTc2MzUxNTIyMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="CNC machining" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 border border-white/20 text-blue-100 rounded-xl p-4 backdrop-blur">
              <p className="text-sm">Tolerances to ±0.01mm • 100+ materials • Aerospace-grade alloys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
