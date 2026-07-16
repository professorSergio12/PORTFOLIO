import { motion } from 'framer-motion'
import LazyImage from '../common/LazyImage'
import ScrollReveal from '../common/ScrollReveal'
import { clipRevealUp, weddingEase } from '../../utils/weddingMotion'
import './FirstImpression.css'

const CARD_LABELS = ['Signage', 'Photobooth', 'Entry Styling', 'Welcome Décor', 'Mirror Sign', 'Guest Experience']

export default function FirstImpression({ section }) {
  const items = section.items ?? []
  const loopItems = items.length ? [...items, ...items] : []

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
            {...clipRevealUp}
            transition={{ duration: 0.8, ease: weddingEase }}
          >
            <img
              src={section.hero}
              alt=""
              className="first-impression__hero-img"
              loading="eager"
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.5, delay: (index % items.length) * 0.05, ease: weddingEase }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="first-impression__card-image">
                      <LazyImage src={item.image} alt="" />
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
