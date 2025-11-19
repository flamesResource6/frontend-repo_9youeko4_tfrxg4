function Footer() {
  return (
    <footer className="bg-slate-900 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/flame-icon.svg" alt="logo" className="h-6 w-6" />
              <span className="font-semibold">Blue Manufacturing</span>
            </div>
            <p className="text-sm text-blue-200/80">Precision parts, dependable timelines, and a team that cares about your build as much as you do.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-blue-200/80">
              <li>Mon–Fri: 8am–6pm</li>
              <li>USA-based facility</li>
              <li>AS9100 partners available</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-blue-200/80">
              <li>CNC Machining</li>
              <li>Sheet Metal</li>
              <li>Welding</li>
              <li>Finishing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-blue-200/80">
              <li>hello@blue-mfg.com</li>
              <li>(555) 123-4567</li>
              <li>123 Industry Way, Suite 100</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 text-sm text-blue-300/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Blue Manufacturing. All rights reserved.</p>
          <a href="/test" className="hover:text-white">System Status</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
