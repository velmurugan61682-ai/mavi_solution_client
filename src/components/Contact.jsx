import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="section-heading">Contact</div>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[2rem] p-8"
        >
          <h3 className="text-3xl font-semibold text-white">Let&rsquo;s build your future product.</h3>
          <p className="mt-4 text-slate-400 leading-7">Reach out for AI-driven design, secure student portals, and cloud platforms with futuristic branding.</p>
          <div className="mt-8 space-y-4 text-slate-300">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-violet-300">Email</p>
              <p className="mt-2 text-lg text-white">connect@mavisolution.ai</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-violet-300">Phone</p>
              <p className="mt-2 text-lg text-white">+1 800 426 948</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-violet-300">Address</p>
              <p className="mt-2 text-lg text-white">Sector 7, Neon District, Digital City</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-slate-300">
            {['LinkedIn', 'Twitter', 'Instagram', 'GitHub'].map((network) => (
              <a key={network} href="#" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm transition hover:border-violet/50 hover:text-white">
                {network}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[2rem] p-8"
        >
          <div className="grid gap-5">
            <input placeholder="Your name" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none" />
            <input placeholder="Email address" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none" />
            <textarea rows="5" placeholder="How can we help?" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none" />
            <button type="button" className="glow-btn w-full">Send message</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
