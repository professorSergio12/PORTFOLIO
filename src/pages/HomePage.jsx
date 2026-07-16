import { homeData } from '../data/home'
import HomeHero from '../components/home/HomeHero'
import HomePhotoStrip from '../components/home/HomePhotoStrip'
import HomePortals from '../components/home/HomePortals'
import HomeMemberSpotlight from '../components/home/HomeMemberSpotlight'
import HomeFooter from '../components/home/HomeFooter'
import './HomePage.css'

export default function HomePage() {
  const data = homeData

  return (
    <main className="home-page">
      <HomeHero hero={data.hero} />
      <HomePhotoStrip photos={data.photoStrip} />
      <HomePortals portals={data.portals} />
      <HomeMemberSpotlight member={data.weddingSpotlight} tone="wedding" />
      <HomeMemberSpotlight member={data.makeupSpotlight} tone="makeup" />
      <HomeFooter footer={data.footer} />
    </main>
  )
}
