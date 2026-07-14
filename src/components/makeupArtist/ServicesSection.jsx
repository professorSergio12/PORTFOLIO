import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import './ServicesSection.css'

const ease = [0.22, 1, 0.36, 1]

export default function ServicesSection({ services, section, courseBundle }) {
  const sectionMeta = section ?? {
    verticalTitle: 'Services',
    label: 'Packages',
    title: 'What I Offer',
  }

  return (
    <section id="services" className="services-section">
      <div className="services-section__inner">
        <motion.div
          className="services-section__title-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <motion.span
            className="services-section__vertical-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.12 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
          >
            {sectionMeta.verticalTitle}
          </motion.span>
        </motion.div>

        <div className="services-section__content">
          <div className="services-section__header">
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease }}
            >
              {sectionMeta.label}
            </motion.p>

            <motion.h2
              className="services-section__heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              {sectionMeta.title}
            </motion.h2>

            <motion.span
              className="services-section__heading-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
            />
          </div>

          <div className="services-section__grid">
            {services.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>

          {courseBundle && (
            <motion.div
              className="services-section__bundle services-section__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
              whileHover={{ y: -6 }}
            >
              <span className="services-section__card-border" aria-hidden="true" />
              <span className="services-section__card-shine" aria-hidden="true" />

              <div className="services-section__card-body">
                {courseBundle.badge && (
                  <span className="services-section__badge services-section__badge--bundle">
                    {courseBundle.badge}
                  </span>
                )}
                <div className="services-section__bundle-top">
                  <h3>{courseBundle.name}</h3>
                  <span className="services-section__price">{courseBundle.price}</span>
                </div>
                <p className="services-section__bundle-label">Includes</p>
                <ul className="services-section__highlights services-section__highlights--bundle">
                  {courseBundle.includes.map((item, i) => (
                    <li key={item} style={{ '--i': i }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
