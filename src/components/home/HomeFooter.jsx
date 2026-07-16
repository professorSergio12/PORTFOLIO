import './HomeFooter.css'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function HomeFooter({ footer }) {
  if (!footer) return null

  return (
    <footer className="home-footer">
      <div className="home-footer__inner">
        <p className="home-footer__label section-label">Connect With Us</p>
        <h2 className="home-footer__title">Follow on Instagram</h2>

        <div className="home-footer__links">
          {footer.instagram.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className="home-footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="home-footer__link-icon">
                <InstagramIcon />
              </span>
              <span className="home-footer__link-text">
                <strong>{item.label}</strong>
                <span>{item.handle}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="home-footer__copy">{footer.copyright}</p>
      </div>
    </footer>
  )
}
