import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#050914] via-[#070c1f] to-[#090b20] px-6 py-20 shadow-glow sm:px-10 lg:px-14">
      <div className="absolute right-[-4rem] top-8 h-52 w-52 rounded-full bg-violet/20 blur-3xl" />
      <div className="absolute left-[-4rem] bottom-16 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <p className="inline-flex items-center rounded-full border border-violet/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-violet-200 shadow-glow">
            Empowering the next generation of digital innovators
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Mavi Solution — Future Technology & AntiGravity Student Portal
          </motion.h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            We build futuristic digital experiences with AI, cloud, and immersive student systems — designed for teams that move fast and think beyond gravity.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="glow-btn">
              Start your mission
            </a>
            <a href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-500/30 bg-white/5 px-6 text-sm font-semibold text-slate-200 transition hover:border-violet/50 hover:text-white">
              Explore the portfolio
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { label: 'AI-driven', value: '24/7' },
              { label: 'Cloud-native', value: 'Enterprise' },
              { label: 'Student-first', value: 'Secure' }
            ].map((item) => (
              <div key={item.label} className="glass-card p-4 text-sm text-slate-200">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040612]/80 p-6 shadow-glow"
        >
          <div className="rounded-[1.75rem] bg-[#0b0f26]/90 p-6 shadow-[inset_0_0_40px_rgba(124,77,255,0.14)]">
            <div className="mb-8 flex items-center justify-between text-slate-300">
              <span className="text-xs uppercase tracking-[0.3em] text-violet-300">Live mission</span>
              <div className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-slate-300">Online</div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Core tech</p>
                <h2 className="text-2xl font-semibold text-white">Quantum Web Grid</h2>
                <p className="text-sm leading-6 text-slate-400">Multi-platform digital architecture built for the next generation of immersive learning.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/70 p-4 text-slate-200">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Score</p>
                  <p className="mt-2 text-3xl font-semibold text-white">98%</p>
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-4 text-slate-200">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Task uptime</p>
                  <p className="mt-2 text-3xl font-semibold text-white">4.8/5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-16 top-20 h-24 w-24 rounded-full bg-gradient-to-br from-violet/40 to-cyan/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
