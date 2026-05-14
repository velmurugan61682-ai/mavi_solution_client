import { motion } from 'framer-motion'

const services = [
  { title: 'Web Development', description: 'Responsive websites and immersive dashboards built for speed, scale, and pixel-perfect delivery.' },
  { title: 'Mobile App Development', description: 'Modern cross-platform experiences that feel native, secure, and delight students and teams.' },
  { title: 'UI/UX Design', description: 'Futuristic interfaces with glassmorphism, neon accents, and intuitive navigation flows.' },
  { title: 'AI Solutions', description: 'Smart automation, predictive analytics, and AI-powered workflows for education and enterprise.' },
  { title: 'Cloud Services', description: 'Secure cloud architecture, infrastructure automation, and 24/7 performance monitoring.' },
  { title: 'Digital Marketing', description: 'Brand amplification, conversion strategies, and media campaigns that resonate with the future.' }
]

export default function Services() {
  return (
    <section id="services">
      <div className="section-heading">Core capabilities</div>
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass-card relative overflow-hidden rounded-[1.75rem] p-8 text-slate-200"
          >
            <div className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-violet/10 blur-2xl" />
            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-violet/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-violet-200">
                {service.title}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition group-hover:text-white">
                Explore service
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
