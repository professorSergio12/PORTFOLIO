import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import ArchedFrame from '../common/ArchedFrame'
import './ProcessSection.css'

export default function ProcessSection({
  steps,
  portrait,
  section,
  reversed = false,
  tone = 'burgundy',
}) {
  const sectionMeta = section ?? {
    label: 'How It Works',
    title: 'Your Journey to Flawless',
  }

  const sectionClass = [
    'process-section',
    reversed ? 'process-section--reversed' : '',
    tone === 'cream' ? 'process-section--cream' : '',
    tone === 'wedding' ? 'process-section--wedding' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClass}>
      <div className="process-section__inner">
        <ScrollReveal once={false} className="process-section__header">
          <p className="section-label">{sectionMeta.label}</p>
          <h2 className="process-section__title">{sectionMeta.title}</h2>
          {sectionMeta.intro ? (
            <p className="process-section__intro">{sectionMeta.intro}</p>
          ) : null}
        </ScrollReveal>

        <div className="process-section__body">
          <div className="process-section__steps">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="process-section__step"
                initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="process-section__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <span className="process-section__step-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {portrait ? (
            <div className="process-section__frame">
              <ArchedFrame src={portrait} alt="" variant="small" once={false} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
