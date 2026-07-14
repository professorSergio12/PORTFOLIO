import { motion } from 'framer-motion'
import './BirthdayHero.css'

export default function BirthdayHero({ video, label, title, tagline }) {
  return (
    <section className="birthday-hero">
      <motion.div
        className="birthday-hero__media"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {video ? (
          <video src={video} autoPlay muted loop playsInline className="birthday-hero__video" />
        ) : (
          <div className="birthday-hero__fallback" />
        )}
        <div className="birthday-hero__overlay" />
      </motion.div>

      <div className="birthday-hero__content">
        <motion.p
          className="birthday-hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {label}
        </motion.p>

        <motion.h1
          className="birthday-hero__title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="birthday-hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          {tagline}
        </motion.p>
      </div>

      <motion.a
        href="#about"
        className="birthday-hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span>Scroll</span>
        <motion.span
          className="birthday-hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
