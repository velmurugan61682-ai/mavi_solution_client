import { motion } from 'framer-motion'

const tasks = [
  { title: 'AI Lab Presentation', description: 'Complete the module summary and submit slides.', due: 'May 20', status: 'Start' },
  { title: 'Cloud Security Quiz', description: 'Review access control and finish the final test.', due: 'May 22', status: 'Submit' },
  { title: 'UI Concept Review', description: 'Refine the dashboard wireframes and upload assets.', due: 'May 24', status: 'Start' }
]

export default function StudentPortal() {
  return (
    <section id="portal" className="relative">
      <div className="section-heading">Student portal</div>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold text-white">Student Login</h3>
            <p className="mt-3 text-slate-400">Access your assignments, dashboard, and AI-assisted learning center.</p>
            <form className="mt-8 space-y-5">
              <label className="block text-sm text-slate-300">
                Email
                <input placeholder="student@mavi.edu" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-violet/50" />
              </label>
              <label className="block text-sm text-slate-300">
                Password
                <input type="password" placeholder="********" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-violet/50" />
              </label>
              <button type="button" className="glow-btn w-full">Log in to portal</button>
            </form>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold text-white">Registration</h3>
            <p className="mt-3 text-slate-400">Join the platform and unlock your personalized assignments dashboard.</p>
            <form className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Name" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
                <input placeholder="Email" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
              </div>
              <input placeholder="Create password" className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
              <button type="button" className="glow-btn w-full">Register now</button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="glass-card rounded-[2rem] p-8 shadow-glow"
        >
          <div className="mb-8 flex items-center justify-between rounded-3xl bg-[#090c1d]/90 p-5 text-slate-200">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Live dashboard</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Assignments & tasks</h3>
            </div>
            <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">AntiGravity</span>
          </div>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 text-slate-200 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{task.title}</h4>
                    <p className="mt-2 text-sm text-slate-400">{task.description}</p>
                  </div>
                  <span className="rounded-full bg-violet/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-violet-200">Due {task.due}</span>
                </div>
                <button className="mt-5 w-full rounded-full border border-cyan/20 bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan/20">
                  {task.status}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
