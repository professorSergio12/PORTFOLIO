import { entriesFromGlob, pickPreferred, sortByName } from '../utils/assetLoader'

const heroVideos = import.meta.glob('../assets/wedding-planner/compressed/*.mp4', {
  eager: true,
  import: 'default',
})

const optimizedImages = import.meta.glob(
  '../assets/wedding-planner/**/optimized/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

const fallbackImages = import.meta.glob(
  '../assets/wedding-planner/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

const allVideos = import.meta.glob(
  [
    '../assets/wedding-planner/**/*.{mp4,MP4,mov,MOV}',
    '../assets/wedding-planner/compressed/**/*.mp4',
  ],
  { eager: true, import: 'default' },
)

function pathIncludes(entry, segment) {
  return entry.path.toLowerCase().includes(segment.toLowerCase())
}

function preferOptimizedImages(entries) {
  const byKey = new Map()

  for (const entry of entries) {
    if (pathIncludes(entry, 'compressed')) continue

    const key = entry.name.toLowerCase()
    const isOptimized = pathIncludes(entry, 'optimized')

    if (!byKey.has(key) || isOptimized) {
      byKey.set(key, entry)
    }
  }

  return sortByName([...byKey.values()])
}

function toGalleryItem(entry, index) {
  return {
    id: index + 1,
    name: entry.name,
    image: entry.url,
    imageFull: entry.url,
    label: entry.name,
  }
}

export function loadWeddingPlannerAssets() {
  const heroVideo = pickPreferred(entriesFromGlob(heroVideos), ['decor-reel', 'hero'])

  const images = preferOptimizedImages([
    ...entriesFromGlob(optimizedImages),
    ...entriesFromGlob(fallbackImages),
  ])

  const personal = images.filter((entry) => pathIncludes(entry, 'personal'))
  const dogriImages = images.filter((entry) => pathIncludes(entry, 'friends wedding'))
  const photobooth = images.filter((entry) => pathIncludes(entry, 'photobooth'))
  const decor = images.filter(
    (entry) =>
      pathIncludes(entry, 'decor') && !pathIncludes(entry, 'photobooth'),
  )

  const dogriVideos = sortByName(entriesFromGlob(allVideos)).filter(
    (entry) =>
      pathIncludes(entry, 'friends wedding') &&
      !pathIncludes(entry, 'compressed/decor-reel'),
  )

  const portrait =
    pickPreferred(personal, ['9461', '9459', 'IMG_9461', 'IMG_9459'])?.url ??
    personal[0]?.url ??
    null

  const secondaryPortrait =
    personal.find((entry) => entry.url !== portrait)?.url ?? null

  const dogriFeatured =
    pickPreferred(dogriImages, ['229A2916', '229A3050', '180A3652']) ??
    dogriImages[0] ??
    null

  const welcomeHero =
    photobooth.find((entry) => /welcome|impression|mirror/i.test(entry.path)) ??
    photobooth[0] ??
    null

  return {
    heroVideo: heroVideo?.url ?? null,
    portrait,
    secondaryPortrait,
    journeyImages: personal.map((entry) => entry.url),
    allPhotos: images.map(toGalleryItem),
    firstImpression: {
      hero: welcomeHero?.url ?? null,
      items: photobooth.map(toGalleryItem),
    },
    dogriWedding: {
      featured: dogriFeatured
        ? {
            image: dogriFeatured.url,
            imageFull: dogriFeatured.url,
            label: 'Celebration',
          }
        : null,
      gallery: dogriImages.map(toGalleryItem),
      videos: dogriVideos.map((entry, index) => ({
        id: index + 1,
        video: entry.url,
        previewTime: 0.75,
      })),
    },
    decor: decor.map(toGalleryItem),
    contactImages: [
      secondaryPortrait ?? personal[0]?.url,
      decor[decor.length - 1]?.url ?? photobooth[photobooth.length - 1]?.url,
      dogriImages[2]?.url ?? dogriImages[0]?.url,
    ].filter(Boolean),
  }
}
