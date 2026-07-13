import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './ServicesSection.css'

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="services-section">
      <div className="services-section__inner">
        <ScrollReveal className="services-section__title-col">
          <span className="services-section__vertical-title">Services</span>
        </ScrollReveal>

        <div className="services-section__content">
          <ScrollReveal>
            <p className="section-label">Packages</p>
            <h2 className="services-section__heading">What I Offer</h2>
          </ScrollReveal>

          <div className="services-section__grid">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                className="services-section__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
              >
                <div className="services-section__card-top">
                  <h3>{service.name}</h3>
                  <span className="services-section__price">{service.price}</span>
                </div>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
