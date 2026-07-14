import convert from 'heic-convert'
import sharp from 'sharp'
import { readFile, mkdir, writeFile, unlink } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const galleryDir = path.join(__dirname, '../src/assets/makeup-artist/gallery')
const thumbsDir = path.join(galleryDir, 'thumbs')
const optimizedDir = path.join(galleryDir, 'optimized')

const files = process.argv.slice(2)

if (files.length === 0) {
  console.error('Usage: node scripts/process-heic-gallery.mjs IMG_0679.HEIC ...')
  process.exit(1)
}

await mkdir(thumbsDir, { recursive: true })
await mkdir(optimizedDir, { recursive: true })

for (const file of files) {
  const input = path.join(galleryDir, file)
  const base = path.basename(file, path.extname(file)).replace(/^IMG_/i, '')
  const outName = `${base}.jpg`

  const heicBuffer = await readFile(input)
  const jpegBuffer = await convert({
    buffer: heicBuffer,
    format: 'JPEG',
    quality: 0.92,
  })

  const tempPath = path.join(galleryDir, `.tmp-${outName}`)
  await writeFile(tempPath, Buffer.from(jpegBuffer))

  await sharp(tempPath)
    .resize(480, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(thumbsDir, outName))

  await sharp(tempPath)
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(optimizedDir, outName))

  await unlink(tempPath).catch(() => {})

  console.log(`✓ ${file} → thumbs/${outName} + optimized/${outName}`)
}

console.log('Done')
