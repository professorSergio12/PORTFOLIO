import { useRef } from 'react'
import { motion } from 'framer-motion'
import './HeroVideo.css'

export default function HeroVideo({ video, label, title, brandLine, tagline }) {
  const videoRef = useRef(null)

  return (
    <section className="hero-video">
      <motion.div
        className="hero-video__media"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video__video"
        />
        <div className="hero-video__overlay" />
      </motion.div>

      <div className="hero-video__content">
        <motion.p
          className="hero-video__label section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {label}
        </motion.p>

        <motion.h1
          className="hero-video__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {title}
        </motion.h1>

        {brandLine && (
          <motion.p
            className="hero-video__brand"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            {brandLine}
          </motion.p>
        )}

        <motion.p
          className="hero-video__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          {tagline}
        </motion.p>
      </div>

      <motion.a
        href="#about"
        className="hero-video__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>Scroll</span>
        <motion.span
          className="hero-video__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
