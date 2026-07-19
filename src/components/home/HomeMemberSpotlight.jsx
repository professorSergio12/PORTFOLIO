import { motion } from 'framer-motion'
import PillButton from '../common/PillButton'
import './HomeMemberSpotlight.css'

export default function HomeMemberSpotlight({ member, tone = 'cream', sectionTone = 'cream' }) {
  const buttonVariant = tone === 'wedding' ? 'wedding' : 'cream'

  return (
    <section className={`home-member home-member--${tone} home-section--${sectionTone}`}>
      <div className="home-member__inner">
        <div className="home-member__content">
          <motion.div
            initial={{ opacity: 0, x: tone === 'wedding' ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">{member.label}</p>
            <h2 className="home-member__title">{member.title}</h2>

            <div className="home-member__about">
              {member.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <PillButton href={member.cta.to} variant={buttonVariant} className="home-member__cta">
              {member.cta.label}
            </PillButton>
          </motion.div>
        </div>

        <motion.div
          className="home-member__visual"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {member.portrait ? (
            <div className="home-member__portrait-wrap">
              <img src={member.portrait} alt="" loading="lazy" decoding="async" />
            </div>
          ) : null}

          {member.photos?.length > 0 ? (
            <div className="home-member__gallery">
              {member.photos.map((photo, index) => (
                <motion.div
                  key={`${photo}-${index}`}
                  className="home-member__gallery-item"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <img src={photo} alt="" loading="lazy" decoding="async" />
                </motion.div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
