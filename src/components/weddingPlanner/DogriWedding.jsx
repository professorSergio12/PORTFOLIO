import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '../common/ScrollReveal'
import EventReels from '../birthdayPlanner/EventReels'
import { imageReveal, weddingEase } from '../../utils/weddingMotion'
import './DogriWedding.css'

const GALLERY_LAYOUTS = ['portrait', 'landscape', 'landscape', 'wide', 'portrait', 'landscape']

function getGalleryLayout(index) {
  return GALLERY_LAYOUTS[index % GALLERY_LAYOUTS.length]
}

export default function DogriWedding({ section }) {
  const { featured, gallery = [], videos = [], reelsSection } = section
  const featuredRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ['start end', 'end start'],
  })
  const featuredScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])

  return (
    <section id="dogri-wedding" className="dogri-wedding">
      <div className="dogri-wedding__inner">
        <ScrollReveal once={false} direction="scale" className="dogri-wedding__header">
          <p className="section-label">{section.label}</p>
          <h2 className="dogri-wedding__title">{section.title}</h2>
          <p className="dogri-wedding__intro">{section.intro}</p>
        </ScrollReveal>

        {featured ? (
          <motion.div
            ref={featuredRef}
            className="dogri-wedding__featured"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 1.1, ease: weddingEase }}
          >
            <motion.img
              src={featured.imageFull || featured.image}
              alt=""
              style={{ scale: featuredScale }}
            />
            <motion.div
              className="dogri-wedding__featured-badge"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.7, ease: weddingEase }}
            >
              Traditional · Joyful · Unforgettable
            </motion.div>
          </motion.div>
        ) : null}

        {gallery.length > 0 ? (
          <div className="dogri-wedding__grid">
            {gallery.map((item, index) => (
              <motion.div
                key={`${item.id}-${item.image}`}
                className={`dogri-wedding__item dogri-wedding__item--${getGalleryLayout(index)}`}
                {...imageReveal}
                transition={{ duration: 0.95, delay: (index % 5) * 0.07, ease: weddingEase }}
                whileHover={{ scale: 1.025, y: -4 }}
              >
                <img src={item.imageFull || item.image} alt="" loading="lazy" />
              </motion.div>
            ))}
          </div>
        ) : null}

        {videos.length > 0 ? (
          <div className="dogri-wedding__reels">
            <EventReels videos={videos} section={reelsSection} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
