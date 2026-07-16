import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '../common/ScrollReveal'
import { weddingEase } from '../../utils/weddingMotion'
import './WeddingJourney.css'

export default function WeddingJourney({ journey }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="journey" className="wedding-journey" ref={sectionRef}>
      <div className="wedding-journey__inner">
        <ScrollReveal once={false} className="wedding-journey__header">
          <p className="section-label">{journey.label}</p>
          <h2 className="wedding-journey__title">{journey.title}</h2>
          <p className="wedding-journey__intro">{journey.intro}</p>
        </ScrollReveal>

        <div className="wedding-journey__body">
          {journey.portrait ? (
            <motion.div
              className="wedding-journey__portrait-wrap"
              style={{ y: portraitY }}
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 1, ease: weddingEase }}
            >
              <motion.div
                className="wedding-journey__portrait-frame"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 1.1, ease: weddingEase }}
              >
                <img src={journey.portrait} alt="" className="wedding-journey__portrait" />
              </motion.div>

              {journey.secondaryPortrait ? (
                <motion.div
                  className="wedding-journey__secondary"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, margin: '-40px' }}
                  transition={{ duration: 0.85, delay: 0.2, ease: weddingEase }}
                >
                  <img src={journey.secondaryPortrait} alt="" />
                </motion.div>
              ) : null}

              <motion.blockquote
                className="wedding-journey__quote"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.8, delay: 0.35, ease: weddingEase }}
              >
                &ldquo;{journey.quote}&rdquo;
              </motion.blockquote>
            </motion.div>
          ) : null}

          <div className="wedding-journey__timeline-wrap">
            <motion.span
              className="wedding-journey__line-fill"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 1.4, ease: weddingEase }}
              aria-hidden="true"
            />
            <ol className="wedding-journey__timeline">
              {journey.steps.map((step, index) => (
              <motion.li
                key={step.year}
                className="wedding-journey__step"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.14,
                  ease: weddingEase,
                }}
              >
                <motion.span
                  className="wedding-journey__dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.14 + 0.1, ease: weddingEase }}
                  aria-hidden="true"
                />
                <div className="wedding-journey__step-content">
                  <span className="wedding-journey__year">{step.year}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
