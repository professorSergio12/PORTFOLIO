import './HomeFooter.css'
import ContactDetails from '../common/ContactDetails'

export default function HomeFooter({ footer, sectionTone = 'cream' }) {
  if (!footer) return null

  return (
    <footer className={`home-footer home-section--${sectionTone}`}>
      <div className="home-footer__inner">
        <p className="home-footer__label section-label">Connect With Us</p>
        <h2 className="home-footer__title">Get In Touch</h2>

        <ContactDetails className="contact-details--home home-footer__details" />

        <p className="home-footer__copy">{footer.copyright}</p>
      </div>
    </footer>
  )
}
