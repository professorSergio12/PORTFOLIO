import { motion } from 'framer-motion'
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
            transition={{ duration: 1.1, ease: weddingEase }}
          >
            <motion.img
              src={section.hero}
              alt=""
              className="first-impression__hero-img"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 1.4, ease: weddingEase }}
            />
            <motion.div
              className="first-impression__hero-caption"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: weddingEase }}
            >
              <span>Welcome</span>
              <p>Your guests&apos; first glimpse of the celebration</p>
            </motion.div>
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
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-20px' }}
                    transition={{ duration: 0.65, delay: (index % items.length) * 0.08, ease: weddingEase }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="first-impression__card-image">
                      <img src={item.imageFull || item.image} alt="" loading="lazy" />
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
