import { weddingPlannerData } from '../data/weddingPlanner'
import WeddingHero from '../components/weddingPlanner/WeddingHero'
import WeddingJourney from '../components/weddingPlanner/WeddingJourney'
import FirstImpression from '../components/weddingPlanner/FirstImpression'
import DogriWedding from '../components/weddingPlanner/DogriWedding'
import DecorShowcase from '../components/weddingPlanner/DecorShowcase'
import WeddingPhotoMarquee from '../components/weddingPlanner/WeddingPhotoMarquee'
import WeddingServices from '../components/weddingPlanner/WeddingServices'
import ProcessSection from '../components/makeupArtist/ProcessSection'
import ContactSection from '../components/makeupArtist/ContactSection'
import './WeddingPlannerPage.css'

export default function WeddingPlannerPage() {
  const data = weddingPlannerData

  return (
    <main className="wedding-planner-page">
      <WeddingHero
        video={data.heroVideo}
        label={data.heroLabel}
        title={data.heroTitle}
        tagline={data.tagline}
      />
      <WeddingJourney journey={data.journey} />
      <FirstImpression section={data.firstImpression} />
      <DogriWedding section={data.dogriWedding} />
      <DecorShowcase section={data.decorSection} />
      <WeddingPhotoMarquee section={data.photoMarquee} />
      <WeddingServices services={data.services} />
      <ProcessSection
        steps={data.process}
        section={data.processSection}
        portrait={data.processImage}
        tone="wedding"
      />
      <ContactSection contact={data.contact} tone="wedding" />
    </main>
  )
}
