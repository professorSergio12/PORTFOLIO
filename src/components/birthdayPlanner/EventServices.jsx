import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './EventServices.css'

export default function EventServices({ services }) {
  return (
    <section id="services" className="event-services">
      <div className="event-services__inner">
        <ScrollReveal className="event-services__header">
          <p className="event-services__label">What We Offer</p>
          <h2 className="event-services__title">Planning & Décor Services</h2>
        </ScrollReveal>

        <div className="event-services__grid">
          {services.map((service, i) => (
            <motion.article
              key={service.name}
              className="event-services__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="event-services__card-glow" aria-hidden="true" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
