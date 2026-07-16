import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import LazyImage from '../common/LazyImage'
import ScrollReveal from '../common/ScrollReveal'
import EventReels from '../birthdayPlanner/EventReels'
import { imageReveal, weddingEase } from '../../utils/weddingMotion'
import './DogriWedding.css'

const GALLERY_LAYOUTS = ['portrait', 'landscape', 'portrait', 'landscape', 'tall', 'square', 'landscape', 'portrait']

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
  const featuredScale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: weddingEase }}
          >
            <motion.img
              src={featured.imageFull || featured.image}
              alt=""
              style={{ scale: featuredScale }}
              loading="eager"
              decoding="async"
            />
            <div className="dogri-wedding__featured-badge">Traditional · Joyful · Unforgettable</div>
          </motion.div>
        ) : null}

        {gallery.length > 0 ? (
          <div className="dogri-wedding__grid">
            {gallery.map((item, index) => (
              <motion.div
                key={`${item.id}-${item.name}`}
                className={`dogri-wedding__item dogri-wedding__item--${getGalleryLayout(index)}`}
                {...imageReveal}
                transition={{ duration: 0.55, delay: (index % 6) * 0.04, ease: weddingEase }}
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <LazyImage src={item.imageFull || item.image} alt="" className="dogri-wedding__lazy" />
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
