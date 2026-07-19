import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './EventGallery.css'

export default function EventGallery({ images, section }) {
  if (!images?.length) return null

  const meta = section ?? {
    label: 'Gallery',
    title: 'Our Celebrations',
    subtitle: 'Moments we have styled and celebrated.',
  }

  const featured = images.slice(0, 2)
  const rest = images.slice(2)

  return (
    <section id="gallery" className="event-gallery">
      <div className="event-gallery__inner">
        <ScrollReveal className="event-gallery__header">
          <p className="event-gallery__label">{meta.label}</p>
          <h2 className="event-gallery__title">{meta.title}</h2>
          <p className="event-gallery__subtitle">{meta.subtitle}</p>
        </ScrollReveal>

        {featured.length > 0 ? (
          <div className="event-gallery__featured">
            {featured.map((item, i) => (
              <motion.div
                key={item.id}
                className={`event-gallery__featured-item event-gallery__featured-item--${i === 0 ? 'wide' : 'tall'}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <img src={item.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
              </motion.div>
            ))}
          </div>
        ) : null}

        {rest.length > 0 ? (
          <div className="event-gallery__grid">
            {rest.map((item, i) => (
              <motion.div
                key={item.id}
                className="event-gallery__item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <img src={item.image} alt="" loading="lazy" decoding="async" />
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
