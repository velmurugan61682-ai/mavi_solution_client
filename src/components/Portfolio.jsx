import { motion } from 'framer-motion'

const projects = [
  { title: 'Neon Campus Portal', description: 'A futuristic dashboard for student collaboration and real-time project tracking.', tags: ['React', 'Tailwind', 'AI'], accent: 'from-violet/50 to-cyan/40' },
  { title: 'Quantum Learning App', description: 'A mobile study platform with adaptive task flows and immersive UI performance.', tags: ['React Native', 'Cloud', 'UX'], accent: 'from-cyan/40 to-violet/40' },
  { title: 'AI Mentor Studio', description: 'A smart recommendation engine that supports campus coaching and productivity workflows.', tags: ['AI', 'Data', 'Design'], accent: 'from-violet/40 to-indigo/40' }
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-heading">Portfolio showcase</div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#06090f]/90 p-6 shadow-glow"
          >
            <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${project.accent} opacity-80`} />
            <div className="relative z-10 mt-4 space-y-4">
              <div className="h-40 rounded-[1.5rem] bg-slate-900/80 p-4 text-slate-400 shadow-inner">
                <div className="flex h-full items-end justify-between">
                  <span className="text-sm uppercase tracking-[0.28em] text-slate-500">Preview</span>
                  <div className="rounded-3xl bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">Live</div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-slate-400 leading-7">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
