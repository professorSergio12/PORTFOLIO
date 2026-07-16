import convert from 'heic-convert'
import sharp from 'sharp'
import { readFile, mkdir, writeFile, unlink, access } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { thumbPipeline, optimizedPipeline } from './lib/compress-presets.mjs'

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

  try {
    await access(input)
  } catch {
    console.error(`✗ File not found: ${input}`)
    console.error('  1. Copy your .HEIC into src/assets/makeup-artist/gallery/')
    console.error('  2. Run: npm run process-heic -- IMG_9326.HEIC')
    console.error('     (use your real filename — not IMG_XXXX.HEIC)')
    process.exit(1)
  }

  const heicBuffer = await readFile(input)
  const jpegBuffer = await convert({
    buffer: heicBuffer,
    format: 'JPEG',
    quality: 0.95,
  })

  const tempPath = path.join(galleryDir, `.tmp-${outName}`)
  await writeFile(tempPath, Buffer.from(jpegBuffer))

  await thumbPipeline(sharp(tempPath)).toFile(path.join(thumbsDir, outName))
  await optimizedPipeline(sharp(tempPath)).toFile(path.join(optimizedDir, outName))

  await unlink(tempPath).catch(() => {})
  await unlink(input)

  console.log(`✓ ${file} → thumbs/${outName} + optimized/${outName}`)
  console.log(`  deleted original: ${file}`)
}

console.log('Done')
