import ScrollReveal from '../common/ScrollReveal'
import './EventAbout.css'

export default function EventAbout({ about }) {
  return (
    <section id="about" className="event-about">
      <div className="event-about__inner">
        <ScrollReveal className="event-about__content">
          <p className="event-about__label">Who We Are</p>
          <h2 className="event-about__title">{about.heading}</h2>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="event-about__text">
              {text}
            </p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
