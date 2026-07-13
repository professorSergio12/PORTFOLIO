import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import ArchedFrame from '../common/ArchedFrame'
import './PortfolioGrid.css'

export default function PortfolioGrid({ gallery, portrait }) {
  const gridImages = gallery.slice(1, 5)

  return (
    <section className="portfolio-grid">
      <div className="portfolio-grid__inner">
        <ScrollReveal direction="left" className="portfolio-grid__portrait">
          <ArchedFrame src={portrait} alt="Featured look" variant="large" />
        </ScrollReveal>

        <div className="portfolio-grid__content">
          <ScrollReveal>
            <p className="section-label">Gallery</p>
            <h2 className="portfolio-grid__title">Beauty in Detail</h2>
            <p className="portfolio-grid__desc">
              Every look crafted with precision — from skin prep to the final setting spray,
              designed to glow under any light.
            </p>
          </ScrollReveal>

          <div className="portfolio-grid__images">
            {gridImages.map((item, i) => (
              <motion.div
                key={item.id}
                className="portfolio-grid__item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.imageFull || item.image} alt={item.label} loading="lazy" decoding="async" />
                <span className="portfolio-grid__item-label">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
