import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function ServiceCard({ service, index = 0, className = '' }) {
  return (
    <motion.article
      className={`services-section__card ${className}`.trim()}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
    >
      <span className="services-section__card-border" aria-hidden="true" />
      <span className="services-section__card-shine" aria-hidden="true" />

      <div className="services-section__card-body">
        {service.badge && (
          <span className="services-section__badge">{service.badge}</span>
        )}
        <div className="services-section__card-top">
          <h3>{service.name}</h3>
          <span className="services-section__price">{service.price}</span>
        </div>
        {service.highlights ? (
          <ul className="services-section__highlights">
            {service.highlights.map((item, i) => (
              <li key={item} style={{ '--i': i }}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p>{service.description}</p>
        )}
      </div>
    </motion.article>
  )
}
