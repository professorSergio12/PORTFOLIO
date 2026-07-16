import { entriesFromGlob, pickPreferred, sortByName } from '../utils/assetLoader'

const heroVideos = import.meta.glob('../assets/wedding-planner/compressed/*.mp4', {
  eager: true,
  import: 'default',
})

const optimizedImages = import.meta.glob(
  '../assets/wedding-planner/**/optimized/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

const thumbImages = import.meta.glob(
  '../assets/wedding-planner/**/thumbs/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

const displayImages = import.meta.glob(
  '../assets/wedding-planner/**/display/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
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
    if (pathIncludes(entry, '/thumbs/') || pathIncludes(entry, '/display/')) continue

    const key = entry.name.toLowerCase()
    const isOptimized = pathIncludes(entry, 'optimized')

    if (!byKey.has(key) || isOptimized) {
      byKey.set(key, entry)
    }
  }

  return sortByName([...byKey.values()])
}

function urlForName(entries, name) {
  return entries.find((entry) => entry.name.toLowerCase() === name.toLowerCase())?.url ?? null
}

function resolveImageUrls(entry, thumbs, displays) {
  if (!entry) return { thumb: null, display: null, full: null }
  const name = entry.name
  return {
    thumb: urlForName(thumbs, name) ?? entry.url,
    display: urlForName(displays, name) ?? entry.url,
    full: entry.url,
  }
}

function toGalleryItem(entry, index, thumbs, displays) {
  const urls = resolveImageUrls(entry, thumbs, displays)
  return {
    id: index + 1,
    name: entry.name,
    image: urls.display ?? urls.full,
    imageFull: urls.full,
    label: entry.name,
  }
}

function portraitThumbUrl(entry, optimizedEntries) {
  if (!entry) return null
  const base = entry.name.replace(/\.(jpe?g|png|webp)$/i, '')
  const thumb = optimizedEntries.find(
    (item) => item.name.toLowerCase() === `${base.toLowerCase()}-portrait`,
  )
  return thumb?.url ?? entry.url
}

function isPortraitThumb(entry) {
  return /-portrait$/i.test(entry.name)
}

export function loadWeddingPlannerAssets() {
  const heroVideo = pickPreferred(entriesFromGlob(heroVideos), ['decor-reel', 'hero'])

  const optimizedEntries = entriesFromGlob(optimizedImages).filter((entry) => !isPortraitThumb(entry))
  const thumbEntries = entriesFromGlob(thumbImages)
  const displayEntries = entriesFromGlob(displayImages)

  const images = preferOptimizedImages([
    ...optimizedEntries,
    ...entriesFromGlob(fallbackImages),
  ]).filter((entry) => !isPortraitThumb(entry))

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

  const portraitEntry =
    pickPreferred(personal, ['9461', '9459', 'IMG_9461', 'IMG_9459']) ??
    personal[0] ??
    null

  const secondaryPortraitEntry =
    personal.find((entry) => entry.url !== portraitEntry?.url) ?? null

  const portraitOptimized = entriesFromGlob(optimizedImages)
  const portrait = portraitThumbUrl(portraitEntry, portraitOptimized)
  const secondaryPortrait = portraitThumbUrl(secondaryPortraitEntry, portraitOptimized)

  const dogriFeaturedEntry =
    pickPreferred(dogriImages, ['229A2916', '229A3050', '180A3652']) ??
    dogriImages[0] ??
    null

  const dogriFeaturedUrls = resolveImageUrls(dogriFeaturedEntry, thumbEntries, displayEntries)

  const welcomeHeroEntry =
    photobooth.find((entry) => /welcome|impression|mirror/i.test(entry.path)) ??
    photobooth[0] ??
    null

  const welcomeHeroUrls = resolveImageUrls(welcomeHeroEntry, thumbEntries, displayEntries)

  const marqueeSource = [...dogriImages, ...decor]

  return {
    heroVideo: heroVideo?.url ?? null,
    portrait,
    secondaryPortrait,
    journeyImages: personal.map((entry) => entry.url),
    allPhotos: images.map((entry, index) => toGalleryItem(entry, index, thumbEntries, displayEntries)),
    marqueePhotos: marqueeSource.map((entry, index) =>
      toGalleryItem(entry, index, thumbEntries, displayEntries),
    ),
    firstImpression: {
      hero:
        welcomeHeroUrls.full ??
        welcomeHeroUrls.display ??
        welcomeHeroEntry?.url ??
        null,
      items: photobooth.map((entry, index) => toGalleryItem(entry, index, thumbEntries, displayEntries)),
    },
    dogriWedding: {
      featured: dogriFeaturedEntry
        ? {
            image: dogriFeaturedUrls.display ?? dogriFeaturedUrls.full,
            imageFull: dogriFeaturedUrls.full,
            label: 'Celebration',
          }
        : null,
      gallery: dogriImages.map((entry, index) => toGalleryItem(entry, index, thumbEntries, displayEntries)),
      videos: dogriVideos.map((entry, index) => ({
        id: index + 1,
        video: entry.url,
        previewTime: 0.75,
      })),
    },
    decor: decor.map((entry, index) => toGalleryItem(entry, index, thumbEntries, displayEntries)),
    contactImages: [
      resolveImageUrls(secondaryPortraitEntry, thumbEntries, displayEntries).display ??
        secondaryPortraitEntry?.url,
      resolveImageUrls(decor[decor.length - 1], thumbEntries, displayEntries).display ??
        decor[decor.length - 1]?.url,
      resolveImageUrls(dogriImages[2] ?? dogriImages[0], thumbEntries, displayEntries).display ??
        dogriImages[2]?.url ??
        dogriImages[0]?.url,
    ].filter(Boolean),
  }
}
