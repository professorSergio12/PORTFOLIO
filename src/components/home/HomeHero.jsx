import { motion } from 'framer-motion'
import PillButton from '../common/PillButton'
import './HomeHero.css'

const COLLAGE_LAYOUTS = ['hero', 'tall', 'wide', 'square', 'tall', 'square']

const ease = [0.22, 1, 0.36, 1]

export default function HomeHero({ hero }) {
  const titleWords = hero.title.split(' ')
  const collage = hero.collage ?? []
  const highlights = hero.highlights ?? []

  return (
    <section className="home-hero">
      <div className="home-hero__bg" aria-hidden="true">
        <span className="home-hero__orb home-hero__orb--1" />
        <span className="home-hero__orb home-hero__orb--2" />
        <span className="home-hero__orb home-hero__orb--3" />
      </div>

      <div className="home-hero__inner">
        <div className="home-hero__content">
          <motion.p
            className="home-hero__label section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
          >
            {hero.label}
          </motion.p>

          <h1 className="home-hero__title">
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="home-hero__title-word"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.07, duration: 0.75, ease }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="home-hero__tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease }}
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            className="home-hero__actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease }}
          >
            <PillButton href="#portals" variant="cream">
              Explore Our Work
            </PillButton>
          </motion.div>

          {highlights.length > 0 ? (
            <motion.ul
              className="home-hero__highlights"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease }}
            >
              {highlights.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </div>

        {collage.length > 0 ? (
          <motion.div
            className="home-hero__collage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease }}
          >
            {collage.map((photo, index) => (
              <motion.div
                key={photo}
                className={`home-hero__collage-item home-hero__collage-item--${COLLAGE_LAYOUTS[index % COLLAGE_LAYOUTS.length]}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.65, ease }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <img src={photo} alt="" loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>

      <motion.a
        href="#portals"
        className="home-hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll to services"
      >
        <span>Scroll</span>
        <motion.span
          className="home-hero__scroll-line"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
