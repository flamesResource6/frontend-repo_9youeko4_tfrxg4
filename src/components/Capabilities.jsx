import { useEffect, useState } from 'react'

function Capabilities() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/capabilities`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([
          { name: 'CNC Machining', summary: 'Precision milling and turning for metals and plastics', icon: 'settings' },
          { name: 'Sheet Metal Fabrication', summary: 'Laser cutting, bending, and assembly for prototypes to production', icon: 'square' },
          { name: 'Welding', summary: 'Certified MIG/TIG welding for structural and aesthetic parts', icon: 'hammer' },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Capabilities</h2>
          <p className="mt-4 text-slate-600">Reliable production, fast turnarounds, and quality you can measure.</p>
        </div>

        {loading ? (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-40 bg-slate-100 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((c, idx) => (
              <div key={idx} className="group rounded-xl border border-slate-200 p-6 hover:shadow-xl transition-all">
                <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="font-semibold text-slate-900">{c.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Capabilities
