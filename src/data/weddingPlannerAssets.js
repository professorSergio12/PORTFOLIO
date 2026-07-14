import { entriesFromGlob, pickPreferred } from '../utils/assetLoader'

const heroVideos = import.meta.glob('../assets/wedding-planner/compressed/*.mp4', {
  eager: true,
  import: 'default',
})

const heroImages = import.meta.glob('../assets/wedding-planner/compressed/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

export function loadWeddingPlannerAssets() {
  const heroVideo = pickPreferred(entriesFromGlob(heroVideos), ['decor-reel', 'hero'])
  const heroImage = pickPreferred(entriesFromGlob(heroImages), ['hero', 'decor'])

  return {
    heroVideo: heroVideo?.url ?? null,
    heroImage: heroImage?.url ?? null,
  }
}
