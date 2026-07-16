import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import { slideFromLeft, slideFromRight, weddingEase } from '../../utils/weddingMotion'
import './WeddingServices.css'

const CARD_MOTION = [slideFromLeft, slideFromRight, slideFromLeft, slideFromRight]

const SERVICE_ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18V6l8 4 8-4v12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 10v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
]

export default function WeddingServices({ services }) {
  return (
    <section id="services" className="wedding-services">
      <div className="wedding-services__bg" aria-hidden="true">
        <span className="wedding-services__orb wedding-services__orb--1" />
        <span className="wedding-services__orb wedding-services__orb--2" />
        <span className="wedding-services__orb wedding-services__orb--3" />
      </div>

      <div className="wedding-services__inner">
        <ScrollReveal once={false} className="wedding-services__header">
          <p className="section-label">Services</p>
          <h2 className="wedding-services__title">What I Offer</h2>
          <p className="wedding-services__subtitle">
            Thoughtful planning and stunning décor — tailored to how much support you need.
          </p>
        </ScrollReveal>

        <div className="wedding-services__grid">
          {services.map((service, index) => {
            const motionProps = CARD_MOTION[index % CARD_MOTION.length]

            return (
              <motion.article
                key={service.name}
                className="wedding-services__card"
                {...motionProps}
                transition={{ duration: 0.75, delay: index * 0.1, ease: weddingEase }}
                whileHover={{ y: -8, scale: 1.015 }}
              >
                <span className="wedding-services__card-shine" aria-hidden="true" />
                <span className="wedding-services__card-glow" aria-hidden="true" />
                <span className="wedding-services__watermark" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="wedding-services__card-top">
                  <span className="wedding-services__icon">{SERVICE_ICONS[index % SERVICE_ICONS.length]}</span>
                  <span className="wedding-services__index">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="wedding-services__card-line" aria-hidden="true" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
