import { makeupArtistData } from '../data/makeupArtist'
import HeroVideo from '../components/makeupArtist/HeroVideo'
import AboutSection from '../components/makeupArtist/AboutSection'
import WorkGallery from '../components/makeupArtist/WorkGallery'
import PortfolioGrid from '../components/makeupArtist/PortfolioGrid'
import ServicesSection from '../components/makeupArtist/ServicesSection'
import ProcessSection from '../components/makeupArtist/ProcessSection'
import ContactSection from '../components/makeupArtist/ContactSection'

export default function MakeupArtistPage() {
  const data = makeupArtistData

  return (
    <main className="makeup-artist-page">
      <HeroVideo
        video={data.reel}
        title={data.name}
        tagline={data.tagline}
      />
      <AboutSection portrait={data.portrait} about={data.about} />
      <WorkGallery items={data.gallery} />
      <PortfolioGrid gallery={data.gallery} portrait={data.gallery[2]?.imageFull} />
      <ServicesSection services={data.services} />
      <ProcessSection steps={data.process} portrait={data.gallery[1]?.imageFull} />
      <ContactSection
        contact={data.contact}
        portrait={data.portrait}
        gallery={data.gallery}
      />
    </main>
  )
}
