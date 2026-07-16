import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './WeddingHero.css'

export default function WeddingHero({ video, label, title, tagline }) {
  const videoRef = useRef(null)
  const titleWords = title.split(' ')

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(() => {})
  }, [video])

  return (
    <section className="wedding-hero">
      <div className="wedding-hero__media">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="wedding-hero__video"
          />
        ) : (
          <div className="wedding-hero__fallback" />
        )}
        <div className="wedding-hero__overlay" />
        <div className="wedding-hero__sparkles" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`wedding-hero__sparkle wedding-hero__sparkle--${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="wedding-hero__content">
        <motion.div
          className="wedding-hero__ornament"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />

        <motion.p
          className="wedding-hero__label section-label"
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.22em' }}
          transition={{ delay: 0.5, duration: 1.1 }}
        >
          {label}
        </motion.p>

        <h1 className="wedding-hero__title">
          {titleWords.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="wedding-hero__title-word"
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.65 + index * 0.12,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="wedding-hero__tagline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 + titleWords.length * 0.12, duration: 0.85 }}
        >
          {tagline}
        </motion.p>

        <motion.div
          className="wedding-hero__ornament wedding-hero__ornament--bottom"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.1 + titleWords.length * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
      </div>

      <motion.a
        href="#journey"
        className="wedding-hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll</span>
        <motion.span
          className="wedding-hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
