import { motion } from 'framer-motion'

const reviews = [
  { quote: 'Mavi Solution transformed our campus platform into a stellar experience — the results felt futuristic and polished.', author: 'Sophia R.', role: 'Campus Director' },
  { quote: 'Their portal design increased student engagement and made task management feel effortless.', author: 'Arjun N.', role: 'Lead Product Manager' },
  { quote: 'The AI dashboard is intuitive, fast, and visually stunning. It gave our brand a real competitive edge.', author: 'Elena K.', role: 'Head of Innovation' }
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-heading">Client reviews</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {reviews.map((review, index) => (
          <motion.div
            key={review.author}
            whileHover={{ y: -12 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
            className="glass-card rounded-[2rem] border border-white/10 p-8 text-slate-200"
          >
            <p className="text-lg leading-8 text-slate-300">“{review.quote}”</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">{review.author}</p>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{review.role}</p>
              </div>
              <div className="h-14 w-14 rounded-3xl bg-gradient-to-br from-cyan/50 to-violet/50" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
