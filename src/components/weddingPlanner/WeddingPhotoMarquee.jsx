import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './WeddingPhotoMarquee.css'

function MarqueeRow({ photos, reverse = false }) {
  const loop = [...photos, ...photos]

  return (
    <div className={`wedding-marquee__row ${reverse ? 'wedding-marquee__row--reverse' : ''}`}>
      <div className="wedding-marquee__track">
        {loop.map((photo, index) => (
          <div key={`${photo.id}-${index}`} className="wedding-marquee__frame">
            <img src={photo.imageFull || photo.image} alt="" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WeddingPhotoMarquee({ section }) {
  const photos = section?.photos ?? []
  if (photos.length < 2) return null

  const midpoint = Math.ceil(photos.length / 2)
  const topRow = photos.slice(0, midpoint)
  const bottomRow = photos.slice(midpoint)

  return (
    <section className="wedding-marquee" aria-label="Photo highlights">
      <ScrollReveal once={false} className="wedding-marquee__header">
        <p className="section-label">{section.label}</p>
        <h2 className="wedding-marquee__title">{section.title}</h2>
        {section.intro ? <p className="wedding-marquee__intro">{section.intro}</p> : null}
      </ScrollReveal>

      <motion.div
        className="wedding-marquee__rows"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-40px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <MarqueeRow photos={topRow.length ? topRow : photos} />
        <MarqueeRow photos={bottomRow.length ? bottomRow : photos} reverse />
      </motion.div>
    </section>
  )
}
