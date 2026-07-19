import ScrollReveal from '../common/ScrollReveal'
import ArchedFrame from '../common/ArchedFrame'
import PillButton from '../common/PillButton'
import ContactDetails from '../common/ContactDetails'
import { contactInfo } from '../../data/contactInfo'
import './ContactSection.css'

export default function ContactSection({ contact, tone = 'cream' }) {
  const sideImages = contact.sideImages ?? []
  const ctaLabel = contact.cta ?? 'Book a Session'
  const footerText = contact.footer ?? '© 2026 — Makeup Artist & Wedding Planner'
  const sectionClass = [
    'contact-section',
    tone === 'burgundy' ? 'contact-section--burgundy' : '',
    tone === 'wedding' ? 'contact-section--wedding' : '',
  ]
    .filter(Boolean)
    .join(' ')
  const ctaVariant =
    tone === 'wedding' ? 'wedding' : tone === 'cream' ? 'cream' : 'outline'
  const detailsTone =
    tone === 'burgundy' ? 'burgundy' : tone === 'wedding' ? 'wedding' : ''

  return (
    <section id="contact" className={sectionClass}>
      <div className="contact-section__inner">
        <ScrollReveal direction="left" className="contact-section__side">
          <ArchedFrame src={sideImages[0]} alt="Contact" variant="small" />
        </ScrollReveal>

        <ScrollReveal className="contact-section__center">
          <p className="section-label">Get In Touch</p>
          <h2 className="contact-section__title">Let's Work Together</h2>

          <ContactDetails className={detailsTone ? `contact-details--${detailsTone}` : ''} />

          <PillButton href={`mailto:${contactInfo.primaryEmail}`} variant={ctaVariant}>
            {ctaLabel}
          </PillButton>
        </ScrollReveal>

        <ScrollReveal direction="right" className="contact-section__side">
          <ArchedFrame src={sideImages[1]} alt="Contact" variant="small" />
        </ScrollReveal>
      </div>

      <footer className="contact-section__footer">
        <p>{footerText}</p>
      </footer>
    </section>
  )
}
