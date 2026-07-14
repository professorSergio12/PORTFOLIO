import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './EventAbout.css'

export default function EventAbout({ about }) {
  return (
    <section id="about" className="event-about">
      <div className="event-about__inner">
        <ScrollReveal className="event-about__content">
          <p className="event-about__label">Who We Are</p>
          <h2 className="event-about__title">{about.heading}</h2>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="event-about__text">
              {text}
            </p>
          ))}
        </ScrollReveal>

        <motion.div
          className="event-about__decor"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="event-about__orb event-about__orb--pink" />
          <span className="event-about__orb event-about__orb--blue" />
          <span className="event-about__icon">🎈</span>
        </motion.div>
      </div>
    </section>
  )
}
