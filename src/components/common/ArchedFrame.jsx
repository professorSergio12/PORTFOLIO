import { motion } from 'framer-motion'
import './ArchedFrame.css'

export default function ArchedFrame({
  src,
  alt = '',
  className = '',
  variant = 'portrait',
  peek = false,
  children,
}) {
  return (
    <motion.div
      className={`arched-frame arched-frame--${variant} ${peek ? 'arched-frame--peek' : ''} ${className}`}
      initial={{ opacity: 0, scale: peek ? 0.96 : 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="arched-frame__door" aria-hidden="true" />
      <div className="arched-frame__border">
        {src ? (
          <>
            <img src={src} alt={alt} className="arched-frame__image" />
            {peek && <div className="arched-frame__vignette" aria-hidden="true" />}
          </>
        ) : (
          children
        )}
      </div>
    </motion.div>
  )
}
