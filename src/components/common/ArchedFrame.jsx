import { motion } from 'framer-motion'
import './ArchedFrame.css'

export default function ArchedFrame({
  src,
  alt = '',
  className = '',
  variant = 'portrait',
  children,
}) {
  return (
    <motion.div
      className={`arched-frame arched-frame--${variant} ${className}`}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="arched-frame__border">
        {src ? (
          <img src={src} alt={alt} className="arched-frame__image" />
        ) : (
          children
        )}
      </div>
    </motion.div>
  )
}
