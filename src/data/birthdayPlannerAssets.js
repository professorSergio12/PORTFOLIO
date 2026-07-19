import { entriesFromGlob, sortByName } from '../utils/assetLoader'

const heroVideoGlob = import.meta.glob('../assets/birthday-planner/main.mp4', {
  eager: true,
  import: 'default',
})

const allVideos = import.meta.glob('../assets/birthday-planner/**/*.mp4', {
  eager: true,
  import: 'default',
})

const allImages = import.meta.glob('../assets/birthday-planner/**/*.{jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
})

const FEATURED_PARTY_NAMES = [
  'WhatsApp-Image-2026-07-15-at-12.21.45',
  'WhatsApp-Image-2026-07-15-at-13.08.46',
]

function isMainVideo(path) {
  return /main\.mp4$/i.test(path)
}

function prioritizePartyImages(entries) {
  const featured = FEATURED_PARTY_NAMES.map((name) =>
    entries.find((entry) => entry.name.toLowerCase() === name.toLowerCase()),
  ).filter(Boolean)
  const featuredNames = new Set(featured.map((entry) => entry.name.toLowerCase()))
  const rest = sortByName(entries.filter((entry) => !featuredNames.has(entry.name.toLowerCase())))
  return [...featured, ...rest]
}

export function loadBirthdayPlannerAssets() {
  const heroVideo = Object.values(heroVideoGlob)[0] ?? null

  const videos = sortByName(entriesFromGlob(allVideos))
    .filter((entry) => !isMainVideo(entry.path))
    .map((entry, index) => ({
      id: index + 1,
      video: entry.url,
    }))

  const imageEntries = prioritizePartyImages(entriesFromGlob(allImages))
  const images = imageEntries.map((entry, index) => ({
    id: index + 1,
    image: entry.url,
    name: entry.name,
  }))

  const birthdayHall = images.find(
    (item) => item.name?.toLowerCase() === FEATURED_PARTY_NAMES[0].toLowerCase(),
  )
  const luxuryStage = images.find(
    (item) => item.name?.toLowerCase() === FEATURED_PARTY_NAMES[1].toLowerCase(),
  )

  return {
    heroVideo,
    videos,
    images,
    featuredImages: {
      birthdayHall: birthdayHall?.image ?? null,
      luxuryStage: luxuryStage?.image ?? null,
    },
  }
}
