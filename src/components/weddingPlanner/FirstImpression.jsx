import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ScrollReveal from '../common/ScrollReveal'
import { weddingEase } from '../../utils/weddingMotion'
import './FirstImpression.css'

const CARD_LABELS = ['Signage', 'Photobooth', 'Entry Styling', 'Welcome Décor', 'Mirror Sign', 'Guest Experience']

export default function FirstImpression({ section }) {
  const items = section.items ?? []
  const loopItems = items.length ? [...items, ...items] : []

  useEffect(() => {
    if (!section.hero) return
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = section.hero
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [section.hero])

  return (
    <section id="first-impression" className="first-impression">
      <div className="first-impression__inner">
        <ScrollReveal once={false} className="first-impression__header">
          <p className="section-label">{section.label}</p>
          <h2 className="first-impression__title">{section.title}</h2>
          <p className="first-impression__intro">{section.intro}</p>
        </ScrollReveal>

        {section.hero ? (
          <motion.div
            className="first-impression__hero"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: weddingEase }}
          >
            <img
              src={section.hero}
              alt=""
              className="first-impression__hero-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="first-impression__hero-caption">
              <span>Welcome</span>
              <p>Your guests&apos; first glimpse of the celebration</p>
            </div>
          </motion.div>
        ) : null}

        {items.length > 0 ? (
          <div className="first-impression__marquee-wrap">
            <div className="first-impression__marquee">
              <div className="first-impression__marquee-track">
                {loopItems.map((item, index) => (
                  <motion.article
                    key={`${item.id}-${index}`}
                    className="first-impression__card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.45, delay: (index % items.length) * 0.04, ease: weddingEase }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="first-impression__card-image">
                      <img
                        src={item.imageFull || item.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="first-impression__card-label">
                      {CARD_LABELS[index % items.length] ?? 'Styling'}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
