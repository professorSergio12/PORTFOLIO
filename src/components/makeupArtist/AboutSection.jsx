import ScrollReveal from '../common/ScrollReveal'
import RingPeekPortrait from './RingPeekPortrait'
import StarDecoration from '../common/StarDecoration'
import PillButton from '../common/PillButton'
import './AboutSection.css'

export default function AboutSection({ portrait, about }) {
  return (
    <section id="about" className="about-section">
      <StarDecoration variant="scattered" />

      <div className="about-section__inner">
        <ScrollReveal direction="left" className="about-section__col about-section__col--left">
          <h2 className="about-section__heading">{about.left.heading}</h2>
          {about.left.paragraphs.map((text, i) => (
            <p key={i} className="about-section__text">
              {text}
            </p>
          ))}
          <StarDecoration variant="cluster" />
        </ScrollReveal>

        <div className="about-section__center">
          <RingPeekPortrait src={portrait} alt="Makeup artist portrait" />
        </div>

        <ScrollReveal direction="right" className="about-section__col about-section__col--right">
          <h2 className="about-section__heading">{about.right.heading}</h2>
          {about.right.paragraphs.map((text, i) => (
            <p key={i} className="about-section__text">
              {text}
            </p>
          ))}
          <PillButton href="#contact">{about.right.cta}</PillButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
