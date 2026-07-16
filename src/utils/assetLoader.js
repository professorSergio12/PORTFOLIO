/** @typedef {{ name: string, url: string, path: string }} AssetEntry */

/**
 * @param {Record<string, unknown>} globResult
 * @returns {AssetEntry[]}
 */
export function entriesFromGlob(globResult) {
  return Object.entries(globResult).map(([path, url]) => {
    const file = path.split('/').pop() ?? path
    const name = file.replace(/\.[^.]+$/, '')
    return { name, url, path }
  })
}

/** @param {AssetEntry[]} entries */
export function sortByName(entries) {
  return [...entries].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }),
  )
}

/** @param {string} name */
function filenameToLabel(name) {
  return name
    .replace(/^img[_-]?/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim() || 'Untitled'
}

/**
 * @param {AssetEntry[]} entries
 * @param {string[]} preferredNames
 */
export function pickPreferred(entries, preferredNames) {
  for (const preferred of preferredNames) {
    const match = entries.find((entry) => entry.name.toLowerCase() === preferred.toLowerCase())
    if (match) return match
  }
  return sortByName(entries)[0] ?? null
}

/**
 * @param {AssetEntry[]} thumbs
 * @param {AssetEntry[]} optimized
 * @param {{ exclude?: (name: string) => boolean }} [options]
 */
export function buildImageGallery(thumbs, optimized, options = {}) {
  const { exclude = () => false } = options
  const optimizedByName = new Map(optimized.map((entry) => [entry.name, entry.url]))

  return sortByName(thumbs)
    .filter((entry) => !exclude(entry.name))
    .map((entry, index) => ({
      id: index + 1,
      name: entry.name,
      image: entry.url,
      imageFull: optimizedByName.get(entry.name) ?? entry.url,
      label: filenameToLabel(entry.name),
    }))
}

/**
 * @param {ReturnType<typeof buildImageGallery>} gallery
 * @param {AssetEntry[]} optimized
 * @param {{ exclude?: (name: string) => boolean }} [options]
 */
export function mergeOptimizedOnlyGallery(gallery, optimized, options = {}) {
  const { exclude = () => false } = options
  const existingNames = new Set(gallery.map((item) => item.name))

  const extras = sortByName(optimized)
    .filter((entry) => !exclude(entry.name) && !existingNames.has(entry.name))
    .map((entry) => ({
      name: entry.name,
      image: entry.url,
      imageFull: entry.url,
      label: filenameToLabel(entry.name),
    }))

  return sortByName([...gallery, ...extras].map((item) => ({ ...item }))).map((item, index) => ({
    ...item,
    id: index + 1,
  }))
}

/**
 * @param {AssetEntry[]} images
 * @param {ReturnType<typeof buildImageGallery>} existingGallery
 */
export function mergeCompressedImages(images, existingGallery) {
  const existingNames = new Set(existingGallery.map((item) => item.name))

  const extra = sortByName(images)
    .filter((entry) => !existingNames.has(entry.name))
    .map((entry, index) => ({
      id: existingGallery.length + index + 1,
      name: entry.name,
      image: entry.url,
      imageFull: entry.url,
      label: filenameToLabel(entry.name),
    }))

  return sortByName([...existingGallery, ...extra].map((item) => ({ ...item }))).map(
    (item, index) => ({ ...item, id: index + 1 }),
  )
}

/** @param {ReturnType<typeof buildImageGallery>} gallery */
export function buildPortfolioDetail(gallery) {
  if (!gallery.length) {
    return { featured: null, grid: [] }
  }

  const featured =
    gallery.find((item) => /^(1|featured)$/i.test(item.name)) ?? gallery[0]

  const namedGrid = ['2', '3', '4', '5']
    .map((name) => gallery.find((item) => item.name === name))
    .filter(Boolean)

  const grid =
    namedGrid.length > 0
      ? namedGrid
      : gallery.filter((item) => item.name !== featured.name).slice(0, 4)

  return {
    featured: {
      id: 'detail-featured',
      image: featured.image,
      imageFull: featured.imageFull,
      label: featured.label,
    },
    grid: grid.map((item, index) => ({
      id: `detail-${index + 2}`,
      image: item.image,
      imageFull: item.imageFull,
      label: item.label,
    })),
  }
}

/**
 * @param {AssetEntry[]} videos
 * @param {AssetEntry[]} posters
 */
export function buildReels(videos, posters) {
  const posterByBase = new Map(
    posters.map((entry) => [entry.name.replace(/-poster$/i, ''), entry.url]),
  )

    return sortByName(videos).map((entry, index) => {
    const poster = posterByBase.get(entry.name)
    return {
      id: index + 1,
      video: entry.url,
      ...(poster ? { poster } : { previewTime: 0.75 }),
    }
  })
}
