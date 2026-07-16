import { motion } from 'framer-motion'
import LazyImage from '../common/LazyImage'
import ScrollReveal from '../common/ScrollReveal'
import { imageReveal, weddingEase } from '../../utils/weddingMotion'
import './DecorShowcase.css'

const DECOR_LAYOUTS = ['wide', 'portrait', 'square', 'landscape']

function getDecorLayout(index) {
  return DECOR_LAYOUTS[index % DECOR_LAYOUTS.length]
}

export default function DecorShowcase({ section }) {
  const items = section.items ?? []

  if (!items.length) return null

  return (
    <section id="decor" className="decor-showcase">
      <div className="decor-showcase__inner">
        <ScrollReveal once={false} className="decor-showcase__header">
          <p className="section-label">{section.label}</p>
          <h2 className="decor-showcase__title">{section.title}</h2>
          <p className="decor-showcase__intro">{section.intro}</p>
        </ScrollReveal>

        <div className="decor-showcase__layout">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={`decor-showcase__item decor-showcase__item--${getDecorLayout(index)}`}
              {...imageReveal}
              transition={{ duration: 0.55, delay: index * 0.06, ease: weddingEase }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <LazyImage src={item.imageFull || item.image} alt="" className="decor-showcase__lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
