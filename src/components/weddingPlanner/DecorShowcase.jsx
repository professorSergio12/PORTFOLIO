import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '../common/ScrollReveal'
import { imageReveal, slideFromLeft, slideFromRight, weddingEase } from '../../utils/weddingMotion'
import './DecorShowcase.css'

export default function DecorShowcase({ section }) {
  const items = section.items ?? []
  const layoutRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: layoutRef,
    offset: ['start end', 'end start'],
  })
  const featuredY = useTransform(scrollYProgress, [0, 1], [30, -30])

  if (!items.length) return null

  const [featured, ...rest] = items

  return (
    <section id="decor" className="decor-showcase">
      <div className="decor-showcase__inner">
        <ScrollReveal once={false} className="decor-showcase__header">
          <p className="section-label">{section.label}</p>
          <h2 className="decor-showcase__title">{section.title}</h2>
          <p className="decor-showcase__intro">{section.intro}</p>
        </ScrollReveal>

        <div className="decor-showcase__layout" ref={layoutRef}>
          <motion.div
            className="decor-showcase__featured"
            style={{ y: featuredY }}
            {...slideFromLeft}
            transition={{ duration: 1, ease: weddingEase }}
          >
            <motion.img
              src={featured.imageFull || featured.image}
              alt=""
              {...imageReveal}
              transition={{ duration: 1.1, ease: weddingEase }}
            />
          </motion.div>

          <div className="decor-showcase__grid">
            {rest.map((item, index) => (
              <motion.div
                key={item.id}
                className="decor-showcase__item"
                {...slideFromRight}
                transition={{ duration: 0.85, delay: index * 0.12, ease: weddingEase }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <img src={item.imageFull || item.image} alt="" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
