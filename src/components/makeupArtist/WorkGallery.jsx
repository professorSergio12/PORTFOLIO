import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import LazyImage from '../common/LazyImage'
import './WorkGallery.css'

function MobileCarousel({ items }) {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef(null)

  const pauseAutoScroll = (ms = 4000) => {
    pausedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false
    }, ms)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track || items.length <= 1) return

    const tick = () => {
      if (pausedRef.current) return

      const card = track.querySelector('.work-gallery__mobile-card')
      if (!card) return

      const gap = Number.parseFloat(getComputedStyle(track).gap) || 13.6
      const step = card.offsetWidth + gap
      const maxScroll = track.scrollWidth - track.clientWidth

      if (maxScroll <= 0) return

      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' })
      }
    }

    const interval = setInterval(tick, 3200)
    return () => clearInterval(interval)
  }, [items.length])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => pauseAutoScroll(4500)

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [])

  if (!items.length) return null

  return (
    <div className="work-gallery__mobile">
      <div className="work-gallery__mobile-viewport">
        <div
          ref={trackRef}
          className="work-gallery__mobile-track"
          onTouchStart={() => pauseAutoScroll(5000)}
        >
          {items.map((item) => (
            <article key={item.id} className="work-gallery__mobile-card">
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
  const pauseTimerRef = useRef(null)
  const angleStep = 360 / items.length

  const handlePhoneEnter = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    setPaused(true)
  }

  const handlePhoneLeave = () => {
    pauseTimerRef.current = setTimeout(() => setPaused(false), 120)
  }

  useEffect(
    () => () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    },
    [],
  )

  return (
    <div className="ring-carousel-wrap">
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
                <div
                  className="ring-carousel__phone"
                  onMouseEnter={handlePhoneEnter}
                  onMouseLeave={handlePhoneLeave}
                >
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

        <p className="work-gallery__hint work-gallery__hint--desktop">Hover images to pause</p>
        <p className="work-gallery__hint work-gallery__hint--mobile">
          Swipe to browse · Auto scrolls
        </p>

        <ScrollReveal delay={0.3}>
          <p className="work-gallery__stat">
            90% of brides discover their makeup artist through visual content — let your look speak.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
