import {
  buildImageGallery,
  buildPortfolioDetail,
  buildReels,
  entriesFromGlob,
  mergeCompressedImages,
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

function isPortraitName(name) {
  return /^about-portrait/i.test(name)
}

function isPosterName(name) {
  return /-poster$/i.test(name)
}

export function loadMakeupArtistAssets() {
  const heroVideo = pickPreferred(entriesFromGlob(heroVideos), ['mua-reel', 'hero'])

  const portraitEntry = pickPreferred(entriesFromGlob(portraitImages), ['about-portrait-ring'])

  const galleryFromThumbs = buildImageGallery(
    entriesFromGlob(thumbImages),
    entriesFromGlob(optimizedImages),
    { exclude: isPortraitName },
  )

  const gallery = mergeCompressedImages(entriesFromGlob(compressedImages), galleryFromThumbs)

  const posterEntries = entriesFromGlob(reelPosters).filter((entry) => isPosterName(entry.name))

  const reels = buildReels(entriesFromGlob(reelVideos), posterEntries)

  return {
    heroVideo: heroVideo?.url ?? null,
    portrait: portraitEntry?.url ?? gallery[0]?.imageFull ?? null,
    gallery,
    reels,
    portfolioDetail: buildPortfolioDetail(gallery),
  }
}
