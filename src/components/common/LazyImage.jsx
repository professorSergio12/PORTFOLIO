import { useState } from 'react'
import './LazyImage.css'

export default function LazyImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`lazy-image ${loaded ? 'lazy-image--loaded' : ''} ${className}`}>
      {!loaded && <div className="lazy-image__skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="lazy-image__img"
      />
    </div>
  )
}
