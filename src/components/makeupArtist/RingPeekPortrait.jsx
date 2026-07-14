import { motion } from 'framer-motion'
import './RingPeekPortrait.css'

export default function RingPeekPortrait({ src, alt = 'Portrait' }) {
  return (
    <motion.div
      className="ring-peek"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ring-peek__glow" aria-hidden="true" />

      <motion.div
        className="ring-peek__stage"
        initial={{ rotate: -14, scale: 0.94 }}
        whileInView={{ rotate: -10, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ring-peek__person-wrap">
          <img src={src} alt={alt} className="ring-peek__person" />
        </div>

        <div className="ring-peek__ring" aria-hidden="true">
          <span className="ring-peek__ring-inner" />
        </div>
      </motion.div>
    </motion.div>
  )
}
