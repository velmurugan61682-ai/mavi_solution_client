import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portal', href: '#portal' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/10 bg-black/40 px-4 py-4 backdrop-blur-xl shadow-glass sm:px-6 lg:px-10"
    >
      <a href="#home" className="flex items-center gap-3 text-white">
        <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-violet/80 via-cyan/70 to-indigo/70 text-lg font-black text-white shadow-glow">
          M
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-slate-300">Mavi Solution</p>
          <p className="text-xs text-slate-500">Future Technology</p>
        </div>
      </a>

      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-slate-300 transition hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
