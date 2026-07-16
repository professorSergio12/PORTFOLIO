import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'
import './ReelsSection.css'

const DEFAULT_PREVIEW_TIME = 0.75

function ReelCard({ reel, isPlaying, onPlay, onStop }) {
  const videoRef = useRef(null)
  const hasPoster = Boolean(reel.poster)
  const previewTime = reel.previewTime ?? DEFAULT_PREVIEW_TIME

  useEffect(() => {
    const video = videoRef.current
    if (!video || hasPoster) return

    const showPreviewFrame = () => {
      if (isPlaying || !video.duration) return
      const target = Math.min(previewTime, Math.max(0, video.duration - 0.05))
      if (Math.abs(video.currentTime - target) > 0.05) {
        video.currentTime = target
      }
    }

    video.addEventListener('loadeddata', showPreviewFrame)
    if (video.readyState >= 2) showPreviewFrame()

    return () => video.removeEventListener('loadeddata', showPreviewFrame)
  }, [hasPoster, isPlaying, previewTime, reel.video])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.currentTime = 0
      video.play().catch(() => {})
      return
    }

    video.pause()

    if (hasPoster) return

    if (video.readyState >= 1 && video.duration) {
      const target = Math.min(previewTime, Math.max(0, video.duration - 0.05))
      video.currentTime = target
    }
  }, [isPlaying, hasPoster, previewTime, reel.video])

  return (
    <article className="reels-section__card">
      <div
        className={`reels-section__screen ${isPlaying ? 'reels-section__screen--playing' : ''}`}
        onMouseEnter={() => onPlay(reel.id)}
        onMouseLeave={onStop}
        onClick={() => (isPlaying ? onStop() : onPlay(reel.id))}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            isPlaying ? onStop() : onPlay(reel.id)
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
      >
        {hasPoster && !isPlaying ? (
          <img
            src={reel.poster}
            alt=""
            className="reels-section__poster"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <video
          ref={videoRef}
          src={reel.video}
          poster={hasPoster ? reel.poster : undefined}
          muted
          loop
          playsInline
          preload={hasPoster ? 'none' : 'metadata'}
          className={`reels-section__video ${hasPoster && !isPlaying ? 'reels-section__video--hidden' : ''}`}
        />
        <span className="reels-section__overlay" aria-hidden="true" />
        <span className="reels-section__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </article>
  )
}

export default function ReelsSection({ reels, section }) {
  const trackRef = useRef(null)
  const [playingId, setPlayingId] = useState(null)

  const sectionMeta = section ?? {
    label: 'Reels',
    title: 'Watch & Explore',
    subtitle: 'Swipe sideways to browse our latest makeup reels.',
  }

  const handlePlay = (id) => setPlayingId(id)
  const handleStop = () => setPlayingId(null)

  const scrollBy = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.reels-section__card')
    const step = card ? card.offsetWidth + 20 : 280
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  if (!reels?.length) return null

  return (
    <section id="reels" className="reels-section">
      <div className="reels-section__inner">
        <ScrollReveal className="reels-section__header">
          <p className="section-label">{sectionMeta.label}</p>
          <h2 className="reels-section__title">{sectionMeta.title}</h2>
          <p className="reels-section__subtitle">{sectionMeta.subtitle}</p>
        </ScrollReveal>

        <div className="reels-section__carousel">
          <button
            type="button"
            className="reels-section__nav reels-section__nav--prev"
            onClick={() => scrollBy(-1)}
            aria-label="Previous reel"
          >
            ‹
          </button>

          <div ref={trackRef} className="reels-section__track">
            {reels.map((reel) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                isPlaying={playingId === reel.id}
                onPlay={handlePlay}
                onStop={handleStop}
              />
            ))}
          </div>

          <button
            type="button"
            className="reels-section__nav reels-section__nav--next"
            onClick={() => scrollBy(1)}
            aria-label="Next reel"
          >
            ›
          </button>
        </div>

        <motion.p
          className="reels-section__hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Hover to play · Tap on mobile
        </motion.p>
      </div>
    </section>
  )
}
