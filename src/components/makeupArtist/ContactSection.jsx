import ScrollReveal from '../common/ScrollReveal'
import ArchedFrame from '../common/ArchedFrame'
import PillButton from '../common/PillButton'
import './ContactSection.css'

export default function ContactSection({ contact }) {
  const sideImages = contact.sideImages ?? []
  const ctaLabel = contact.cta ?? 'Book a Session'
  const footerText = contact.footer ?? '© 2026 — Makeup Artist & Wedding Planner'

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__inner">
        <ScrollReveal direction="left" className="contact-section__side">
          <ArchedFrame src={sideImages[0]} alt="Contact" variant="small" />
        </ScrollReveal>

        <ScrollReveal className="contact-section__center">
          <p className="section-label">Get In Touch</p>
          <h2 className="contact-section__title">Let's Work Together</h2>

          <div className="contact-section__details">
            <a href={`mailto:${contact.email}`} className="contact-section__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              {contact.email}
            </a>

            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="contact-section__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {contact.phone}
            </a>

            {contact.instagram && (
              <span className="contact-section__link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                {contact.instagram}
              </span>
            )}
          </div>

          <PillButton href={`mailto:${contact.email}`} variant="cream">
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
