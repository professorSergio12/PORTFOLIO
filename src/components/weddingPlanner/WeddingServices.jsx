import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import { weddingEase } from '../../utils/weddingMotion'
import './WeddingServices.css'

export default function WeddingServices({ services }) {
  return (
    <section id="services" className="wedding-services">
      <div className="wedding-services__inner">
        <ScrollReveal once={false} className="wedding-services__header">
          <p className="section-label">Services</p>
          <h2 className="wedding-services__title">What I Offer</h2>
        </ScrollReveal>

        <div className="wedding-services__grid">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              className="wedding-services__card"
              initial={{ opacity: 0, y: 48, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.75, delay: index * 0.12, ease: weddingEase }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <span className="wedding-services__index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
