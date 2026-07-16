import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './HomePortals.css'

const ease = [0.22, 1, 0.36, 1]

export default function HomePortals({ portals }) {
  return (
    <section id="portals" className="home-portals">
      <div className="home-portals__inner">
        <motion.div
          className="home-portals__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease }}
        >
          <p className="section-label">Our Services</p>
          <h2>Choose Your Experience</h2>
          <p>Three dedicated portfolios — pick where you&apos;d like to begin.</p>
        </motion.div>

        <div className="home-portals__grid">
          {portals.map((portal, index) => (
            <motion.div
              key={portal.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease }}
            >
              <Link to={portal.to} className={`home-portals__card home-portals__card--${portal.accent}`}>
                {portal.image ? (
                  <div className="home-portals__card-media">
                    <img src={portal.image} alt="" loading="lazy" decoding="async" />
                    <span className="home-portals__card-overlay" aria-hidden="true" />
                  </div>
                ) : null}

                <div className="home-portals__card-body">
                  <span className="home-portals__card-label">{portal.label}</span>
                  <h3>{portal.title}</h3>
                  <p>{portal.teaser}</p>
                  <span className="home-portals__card-link">Explore →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
