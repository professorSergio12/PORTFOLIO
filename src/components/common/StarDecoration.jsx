import { motion } from 'framer-motion'
import './StarDecoration.css'

const positions = {
  cluster: [
    { top: '10%', left: '5%', size: 12, delay: 0 },
    { top: '25%', left: '12%', size: 8, delay: 0.3 },
    { top: '15%', left: '20%', size: 16, delay: 0.6 },
    { top: '35%', left: '8%', size: 10, delay: 0.9 },
    { top: '5%', left: '18%', size: 6, delay: 1.2 },
  ],
  scattered: [
    { top: '8%', right: '6%', size: 10, delay: 0.2 },
    { top: '20%', right: '15%', size: 14, delay: 0.5 },
    { top: '12%', left: '4%', size: 8, delay: 0.8 },
    { bottom: '15%', right: '10%', size: 12, delay: 1.1 },
  ],
}

function Star({ size, style, delay }) {
  return (
    <motion.span
      className="star"
      style={{ width: size, height: size, ...style }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function StarDecoration({ variant = 'scattered' }) {
  const stars = positions[variant] || positions.scattered

  return (
    <div className="star-decoration" aria-hidden="true">
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </div>
  )
}
