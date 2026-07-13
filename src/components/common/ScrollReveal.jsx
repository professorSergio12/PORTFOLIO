import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const initial = {
    up: { opacity: 0, y: 48 },
    down: { opacity: 0, y: -48 },
    left: { opacity: 0, x: -48 },
    right: { opacity: 0, x: 48 },
    scale: { opacity: 0, scale: 0.92 },
  }

  const animate = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      className={className}
      initial={initial[direction] || initial.up}
      whileInView={animate[direction] || animate.up}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
