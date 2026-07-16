import {
  buildImageGallery,
  buildPortfolioDetail,
  buildReels,
  entriesFromGlob,
  mergeCompressedImages,
  mergeOptimizedOnlyGallery,
  pickPreferred,
} from '../utils/assetLoader'

const heroVideos = import.meta.glob('../assets/makeup-artist/compressed/*.mp4', {
  eager: true,
  import: 'default',
})

const reelVideos = import.meta.glob('../assets/makeup-artist/compressed/reels/*.mp4', {
  eager: true,
  import: 'default',
})

const reelPosters = import.meta.glob(
  '../assets/makeup-artist/compressed/reels/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
)

const reelImages = import.meta.glob(
  '../assets/makeup-artist/compressed/reels/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
)

const thumbImages = import.meta.glob('../assets/makeup-artist/gallery/thumbs/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const optimizedImages = import.meta.glob(
  '../assets/makeup-artist/gallery/optimized/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
)

const compressedImages = import.meta.glob(
  [
    '../assets/makeup-artist/compressed/images/*.{jpg,jpeg,png,webp}',
    '../assets/makeup-artist/compressed/*.{jpg,jpeg,png,webp}',
  ],
  { eager: true, import: 'default' },
)

const portraitImages = import.meta.glob(
  '../assets/makeup-artist/gallery/optimized/about-portrait*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
)

const contactSideImages = import.meta.glob(
  '../assets/makeup-artist/gallery/optimized/contact-*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
)

const galleryRootImages = import.meta.glob(
  '../assets/makeup-artist/gallery/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
)

function isPortraitName(name) {
  return /^about-portrait/i.test(name)
}

function isPosterName(name) {
  return /-poster$/i.test(name)
}

function isContactName(name) {
  return /^contact-/i.test(name)
}

function isGalleryExcluded(name) {
  return isPortraitName(name) || isContactName(name) || isPosterName(name)
}

export function loadMakeupArtistAssets() {
  const heroVideo = pickPreferred(entriesFromGlob(heroVideos), ['mua-reel', 'hero'])

  const portraitEntry = pickPreferred(entriesFromGlob(portraitImages), ['about-portrait-ring'])

  const optimizedEntries = entriesFromGlob(optimizedImages)

  let gallery = buildImageGallery(
    entriesFromGlob(thumbImages),
    optimizedEntries,
    { exclude: isGalleryExcluded },
  )

  gallery = mergeOptimizedOnlyGallery(gallery, optimizedEntries, {
    exclude: isGalleryExcluded,
  })

  const extraImages = [
    ...entriesFromGlob(compressedImages),
    ...entriesFromGlob(reelImages).filter((entry) => !isPosterName(entry.name)),
  ]
  gallery = mergeCompressedImages(extraImages, gallery)

  const posterEntries = entriesFromGlob(reelPosters).filter((entry) => isPosterName(entry.name))

  const reels = buildReels(entriesFromGlob(reelVideos), posterEntries)

  const contactLeft = optimizedEntries.find((entry) => entry.name === '9083')
  const contactRight = pickPreferred(entriesFromGlob(contactSideImages), ['contact-side'])

  const processImage =
    entriesFromGlob(galleryRootImages).find((entry) => entry.name === 'real')?.url ??
    optimizedEntries.find((entry) => entry.name !== '0679')?.url ??
    portraitEntry?.url ??
    gallery[0]?.imageFull ??
    null

  const whyUsImage =
    optimizedEntries.find((entry) => entry.name === '0679')?.url ??
    entriesFromGlob(thumbImages).find((entry) => entry.name === '0679')?.url ??
    null

  return {
    heroVideo: heroVideo?.url ?? null,
    portrait: portraitEntry?.url ?? gallery[0]?.imageFull ?? null,
    gallery,
    reels,
    portfolioDetail: buildPortfolioDetail(gallery),
    contactImages: [contactLeft?.url, contactRight?.url].filter(Boolean),
    processImage,
    whyUsImage,
  }
}
