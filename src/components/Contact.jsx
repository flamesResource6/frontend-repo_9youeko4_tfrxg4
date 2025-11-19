import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error(`Failed: ${res.status}`)
      const data = await res.json()
      setStatus({ type: 'success', message: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Could not send your request. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Request a quote</h2>
            <p className="mt-4 text-slate-600">Tell us about your project—materials, quantities, drawings, and timelines. Our team responds within 1–2 business days.</p>

            <div className="mt-8 grid grid-cols-2 gap-6 text-slate-700">
              <div className="rounded-lg bg-white p-4 border border-slate-200"><span className="text-2xl">⏱</span><p className="mt-2 font-medium">Fast quotes</p><p className="text-sm text-slate-500">Most requests answered in 48 hours.</p></div>
              <div className="rounded-lg bg-white p-4 border border-slate-200"><span className="text-2xl">🧪</span><p className="mt-2 font-medium">Material options</p><p className="text-sm text-slate-500">Aluminum, steel, stainless, plastics, and more.</p></div>
              <div className="rounded-lg bg-white p-4 border border-slate-200"><span className="text-2xl">📦</span><p className="mt-2 font-medium">Prototype to production</p><p className="text-sm text-slate-500">Flexible runs from 1 to 10,000+ units.</p></div>
              <div className="rounded-lg bg-white p-4 border border-slate-200"><span className="text-2xl">✅</span><p className="mt-2 font-medium">Quality checks</p><p className="text-sm text-slate-500">Dimensional inspection available.</p></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select name="service" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                  <option value="CNC Machining">CNC Machining</option>
                  <option value="Sheet Metal Fabrication">Sheet Metal Fabrication</option>
                  <option value="Welding">Welding</option>
                  <option value="Powder Coating">Powder Coating</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Project details</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Materials, quantities, drawings, timelines..." />
              </div>
            </div>

            {status && (
              <div className={`mt-4 rounded-md p-3 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {status.message}
              </div>
            )}

            <button disabled={loading} type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 transition-colors disabled:opacity-60">
              {loading ? 'Sending...' : 'Send request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
