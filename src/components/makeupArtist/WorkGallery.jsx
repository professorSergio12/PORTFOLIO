import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import LazyImage from '../common/LazyImage'
import './WorkGallery.css'

function MobileCarousel({ items }) {
  const [paused, setPaused] = useState(false)
  const resumeTimerRef = useRef(null)

  const clearResumeTimer = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }

  const pauseBriefly = () => {
    clearResumeTimer()
    setPaused(true)
    resumeTimerRef.current = setTimeout(() => setPaused(false), 3500)
  }

  useEffect(() => () => clearResumeTimer(), [])

  if (!items.length) return null

  const loopItems = [...items, ...items]

  return (
    <div className="work-gallery__mobile">
      <div className="work-gallery__mobile-viewport">
        <div
          className={`work-gallery__mobile-track ${paused ? 'work-gallery__mobile-track--paused' : ''}`}
          style={{ '--mobile-count': items.length }}
          onTouchStart={pauseBriefly}
        >
          {loopItems.map((item, index) => (
            <article key={`${item.id}-${index}`} className="work-gallery__mobile-card">
              <div className="work-gallery__mobile-screen">
                <LazyImage src={item.imageFull || item.image} alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function RingCarousel({ items }) {
  const [paused, setPaused] = useState(false)
  const angleStep = 360 / items.length

  return (
    <div
      className="ring-carousel-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="ring-carousel" style={{ '--count': items.length }}>
        <div className="ring-carousel__floor" aria-hidden="true" />
        <div className="ring-carousel__glow" aria-hidden="true" />

        <div className="ring-carousel__scene">
          <div
            className={`ring-carousel__ring ${paused ? 'ring-carousel__ring--paused' : ''}`}
          >
            {items.map((item, i) => (
              <div
                key={item.id}
                className="ring-carousel__item"
                style={{ '--angle': `${i * angleStep}deg` }}
              >
                <div className="ring-carousel__phone">
                  <div className="ring-carousel__phone-screen">
                    <LazyImage src={item.imageFull || item.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkGallery({ items }) {
  return (
    <section id="work" className="work-gallery">
      <div className="work-gallery__inner">
        <ScrollReveal className="work-gallery__header">
          <p className="section-label">Portfolio</p>
          <h2 className="work-gallery__title">My Work</h2>
          <p className="work-gallery__subtitle">
            A glimpse into bridal transformations, editorial shoots, and celebration-ready looks.
          </p>
        </ScrollReveal>

        <motion.div
          className="work-gallery__carousel-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="work-gallery__desktop">
            <RingCarousel items={items} />
          </div>
          <MobileCarousel items={items} />
        </motion.div>

        <p className="work-gallery__hint work-gallery__hint--desktop">Hover to pause</p>

        <ScrollReveal delay={0.3}>
          <p className="work-gallery__stat">
            90% of brides discover their makeup artist through visual content — let your look speak.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
