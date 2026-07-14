import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './EventReels.css'

function ReelCard({ reel, isPlaying, onPlay, onStop }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isPlaying])

  return (
    <article className="event-reels__card">
      <div
        className={`event-reels__screen ${isPlaying ? 'event-reels__screen--playing' : ''}`}
        onMouseEnter={() => onPlay(reel.id)}
        onMouseLeave={onStop}
        onClick={() => (isPlaying ? onStop() : onPlay(reel.id))}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        <video
          ref={videoRef}
          src={reel.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="event-reels__video"
        />
        <span className="event-reels__overlay" aria-hidden="true" />
        <span className="event-reels__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </article>
  )
}

export default function EventReels({ videos, section }) {
  const trackRef = useRef(null)
  const [playingId, setPlayingId] = useState(null)

  const meta = section ?? {
    label: 'Reels',
    title: 'Watch the Magic',
    subtitle: 'Swipe sideways to browse event highlights.',
  }

  const scrollBy = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.event-reels__card')
    const step = card ? card.offsetWidth + 16 : 260
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  if (!videos?.length) return null

  return (
    <section id="reels" className="event-reels">
      <div className="event-reels__inner">
        <ScrollReveal className="event-reels__header">
          <p className="event-reels__label">{meta.label}</p>
          <h2 className="event-reels__title">{meta.title}</h2>
          <p className="event-reels__subtitle">{meta.subtitle}</p>
        </ScrollReveal>

        <div className="event-reels__carousel">
          <button
            type="button"
            className="event-reels__nav event-reels__nav--prev"
            onClick={() => scrollBy(-1)}
            aria-label="Previous video"
          >
            ‹
          </button>

          <div ref={trackRef} className="event-reels__track">
            {videos.map((reel) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                isPlaying={playingId === reel.id}
                onPlay={setPlayingId}
                onStop={() => setPlayingId(null)}
              />
            ))}
          </div>

          <button
            type="button"
            className="event-reels__nav event-reels__nav--next"
            onClick={() => scrollBy(1)}
            aria-label="Next video"
          >
            ›
          </button>
        </div>

        <motion.p
          className="event-reels__hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Hover to play · Tap on mobile
        </motion.p>
      </div>
    </section>
  )
}
