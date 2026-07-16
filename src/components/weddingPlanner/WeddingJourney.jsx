import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ScrollReveal from '../common/ScrollReveal'
import { weddingEase } from '../../utils/weddingMotion'
import './WeddingJourney.css'

export default function WeddingJourney({ journey }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], [24, -24])

  useEffect(() => {
    if (!journey.portrait) return
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = journey.portrait
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [journey.portrait])

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
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: weddingEase }}
            >
              <div className="wedding-journey__portrait-frame">
                <img
                  src={journey.portrait}
                  alt=""
                  className="wedding-journey__portrait"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {journey.secondaryPortrait ? (
                <motion.div
                  className="wedding-journey__secondary"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: 0.15, ease: weddingEase }}
                >
                  <img
                    src={journey.secondaryPortrait}
                    alt=""
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>
              ) : null}

              <blockquote className="wedding-journey__quote">
                &ldquo;{journey.quote}&rdquo;
              </blockquote>
            </motion.div>
          ) : null}

          <div className="wedding-journey__timeline-wrap">
            <motion.span
              className="wedding-journey__line-fill"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: weddingEase }}
              aria-hidden="true"
            />
            <ol className="wedding-journey__timeline">
              {journey.steps.map((step, index) => (
                <motion.li
                  key={step.year}
                  className="wedding-journey__step"
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: weddingEase,
                  }}
                >
                  <motion.span
                    className="wedding-journey__dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.1 + 0.08, ease: weddingEase }}
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
