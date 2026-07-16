import { Link } from 'react-router-dom'
import './BrandLogo.css'

function BrandIcon() {
  return (
    <svg
      className="brand-logo__icon"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 14V10h4M38 14V10h-4M10 34v4h4M38 34v4h-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M24 11c0 3.2-2.2 5.8-5 6.6 2.8.8 5 3.4 5 6.6s-2.2 5.8-5 6.6c2.8.8 5 3.4 5 6.6" />
        <path d="M24 11c0 3.2 2.2 5.8 5 6.6-2.8.8-5 3.4-5 6.6s2.2 5.8 5 6.6c-2.8.8-5 3.4-5 6.6" />
        <path d="M11 24c3.2 0 5.8-2.2 6.6-5-.8 2.8-3.4 5-6.6 5s-5.8 2.2-6.6 5c-.8-2.8-3.4-5-6.6-5" />
        <path d="M37 24c-3.2 0-5.8-2.2-6.6-5 .8 2.8 3.4 5 6.6 5s5.8 2.2 6.6 5c.8-2.8 3.4-5 6.6-5" />
      </g>
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
    </svg>
  )
}

export default function BrandLogo({ to = '/', variant = 'site' }) {
  const isMakeup = variant === 'makeup'

  return (
    <Link
      to={to}
      className="brand-logo"
      aria-label={isMakeup ? 'Beauty Maison by Mannat Vig — Home' : 'Go to home page'}
    >
      <BrandIcon />
      <span className="brand-logo__text">
        {isMakeup ? (
          <>
            Beauty Maison <span className="brand-logo__by">by Mannat Vig</span>
          </>
        ) : (
          <>
            Celebrations <span className="brand-logo__by">Home</span>
          </>
        )}
      </span>
    </Link>
  )
}
