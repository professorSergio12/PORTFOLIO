import { contactInfo } from '../../data/contactInfo'
import './ContactDetails.css'

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function InlineSeparator() {
  return <span className="contact-details__sep" aria-hidden="true">·</span>
}

export default function ContactDetails({ className = '', rowClassName = 'contact-details__row' }) {
  const { emails, phones, instagramLinks } = contactInfo

  return (
    <div className={`contact-details ${className}`.trim()}>
      <p className={rowClassName}>
        <EmailIcon />
        <span className="contact-details__inline">
          {emails.map((item, index) => (
            <span key={item.address} className="contact-details__item">
              {index > 0 ? <InlineSeparator /> : null}
              <a href={`mailto:${item.address}`}>{item.address}</a>
            </span>
          ))}
        </span>
      </p>

      <p className={rowClassName}>
        <PhoneIcon />
        <span className="contact-details__inline">
          {phones.map((item, index) => (
            <span key={item.number} className="contact-details__item">
              {index > 0 ? <InlineSeparator /> : null}
              <a href={`tel:${item.number.replace(/\s/g, '')}`}>{item.number}</a>
            </span>
          ))}
        </span>
      </p>

      <p className={rowClassName}>
        <InstagramIcon />
        <span className="contact-details__inline">
          {instagramLinks.map((item, index) => (
            <span key={item.url} className="contact-details__item">
              {index > 0 ? <InlineSeparator /> : null}
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.handle}
              </a>
            </span>
          ))}
        </span>
      </p>
    </div>
  )
}
