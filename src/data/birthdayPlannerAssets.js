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

function isMainVideo(path) {
  return /main\.mp4$/i.test(path)
}

export function loadBirthdayPlannerAssets() {
  const heroVideo = Object.values(heroVideoGlob)[0] ?? null

  const videos = sortByName(entriesFromGlob(allVideos))
    .filter((entry) => !isMainVideo(entry.path))
    .map((entry, index) => ({
      id: index + 1,
      video: entry.url,
    }))

  const images = sortByName(entriesFromGlob(allImages)).map((entry, index) => ({
    id: index + 1,
    image: entry.url,
  }))

  return { heroVideo, videos, images }
}
