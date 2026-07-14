import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './EventContact.css'

export default function EventContact({ contact }) {
  return (
    <section id="contact" className="event-contact">
      <div className="event-contact__inner">
        <ScrollReveal className="event-contact__content">
          <p className="event-contact__label">Get In Touch</p>
          <h2 className="event-contact__title">Let's Plan Your Celebration</h2>
          <p className="event-contact__text">
            Ready to create something beautiful? Reach out and we'll bring your vision to life.
          </p>

          <motion.a
            href="#contact"
            className="event-contact__cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            {contact.cta ?? 'Plan Your Event'}
          </motion.a>
        </ScrollReveal>
      </div>

      <footer className="event-contact__footer">
        <p>{contact.footer}</p>
      </footer>
    </section>
  )
}
