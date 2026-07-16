import { makeupArtistData } from '../data/makeupArtist'
import HeroVideo from '../components/makeupArtist/HeroVideo'
import AboutSection from '../components/makeupArtist/AboutSection'
import WorkGallery from '../components/makeupArtist/WorkGallery'
import ReelsSection from '../components/makeupArtist/ReelsSection'
import PortfolioGrid from '../components/makeupArtist/PortfolioGrid'
import ProcessSection from '../components/makeupArtist/ProcessSection'
import ContactSection from '../components/makeupArtist/ContactSection'

export default function MakeupArtistPage() {
  const data = makeupArtistData

  return (
    <main className="makeup-artist-page">
      <HeroVideo
        video={data.reel}
        label={data.heroLabel}
        title={data.heroTitle}
        tagline={data.tagline}
      />
      <AboutSection portrait={data.portrait} about={data.about} />
      <WorkGallery items={data.gallery} />
      <ReelsSection reels={data.reels} section={data.reelsSection} />
      <PortfolioGrid
        featured={data.portfolioDetail.featured}
        grid={data.portfolioDetail.grid}
        tone="cream"
      />
      <ProcessSection
        steps={data.process}
        section={data.processSection}
        portrait={data.processImage || data.portrait}
        tone="burgundy"
      />
      <ProcessSection
        steps={data.whyUs}
        section={data.whyUsSection}
        portrait={data.whyUsImage}
        reversed
        tone="cream"
      />
      <ContactSection contact={data.contact} tone="burgundy" />
    </main>
  )
}
