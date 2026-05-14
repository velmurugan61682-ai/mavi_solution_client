export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-10 px-4 text-slate-400 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">Mavi Solution</p>
          <p className="max-w-md leading-7 text-slate-400">Futuristic IT services for student portals, AI systems, and premium brand experiences.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <a href="#services" className="text-sm transition hover:text-white">Services</a>
          <a href="#portfolio" className="text-sm transition hover:text-white">Portfolio</a>
          <a href="#contact" className="text-sm transition hover:text-white">Contact</a>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 Mavi Solution. All rights reserved.
      </div>
    </footer>
  )
}
