import { birthdayPlannerData } from '../data/birthdayPlanner'
import BalloonField from '../components/birthdayPlanner/BalloonField'
import BirthdayHero from '../components/birthdayPlanner/BirthdayHero'
import EventAbout from '../components/birthdayPlanner/EventAbout'
import EventGallery from '../components/birthdayPlanner/EventGallery'
import EventReels from '../components/birthdayPlanner/EventReels'
import EventServices from '../components/birthdayPlanner/EventServices'
import EventContact from '../components/birthdayPlanner/EventContact'
import './BirthdayPlannerPage.css'

export default function BirthdayPlannerPage() {
  const data = birthdayPlannerData

  return (
    <main className="birthday-planner-page">
      <BalloonField />
      <BirthdayHero
        video={data.heroVideo}
        label={data.heroLabel}
        title={data.heroTitle}
        tagline={data.tagline}
      />
      <EventAbout about={data.about} />
      <EventGallery images={data.images} section={data.gallerySection} />
      <EventReels videos={data.videos} section={data.reelsSection} />
      <EventServices services={data.services} />
      <EventContact contact={data.contact} />
    </main>
  )
}
