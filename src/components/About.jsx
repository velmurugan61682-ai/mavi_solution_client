import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects delivered', value: '128+' },
  { label: 'Students onboarded', value: '6.4K' },
  { label: 'AI workflows', value: '34' }
]

const cards = [
  {
    title: 'Mission',
    text: 'Design a future-proof student ecosystem with immersive learning, automation, and AI-powered collaboration that feels effortless.'
  },
  {
    title: 'Vision',
    text: 'Be the leading IT partner for futuristic brands, student communities, and educational innovators globally.'
  },
  {
    title: 'Promise',
    text: 'Deliver polished, secure, and visually stunning solutions that elevate the experience of every user.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-heading">About the agency</div>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-lg leading-8 text-slate-300">
            Mavi Solution is a futuristic IT studio crafting premium student portals, high-impact digital products, and next-generation service ecosystems with a neon-glow edge.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card) => (
              <div key={card.title} className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-slate-400 leading-7">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b1128]/80 p-8 shadow-glow"
        >
          <div className="flex items-center justify-between rounded-[1.75rem] bg-slate-900/70 p-5">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-violet-300">Innovation pulse</p>
              <p className="mt-2 text-xl font-semibold text-white">Building futuristic digital systems.</p>
            </div>
            <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-violet/70 to-cyan/60 shadow-glow" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/5 p-5 text-slate-200">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400">
            Our glassmorphism-driven interface merges clean structure with immersive neon energy, giving every student and client a premium dashboard feel.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
