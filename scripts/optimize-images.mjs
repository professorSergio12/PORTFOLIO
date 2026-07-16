import sharp from 'sharp'
import { mkdir, readdir, unlink } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { thumbPipeline, optimizedPipeline } from './lib/compress-presets.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const galleryDir = path.join(__dirname, '../src/assets/makeup-artist/gallery')
const originalsDir = path.join(galleryDir, 'originals')
const thumbsDir = path.join(galleryDir, 'thumbs')
const optimizedDir = path.join(galleryDir, 'optimized')

await mkdir(originalsDir, { recursive: true })
await mkdir(thumbsDir, { recursive: true })
await mkdir(optimizedDir, { recursive: true })

const files = (await readdir(originalsDir)).filter((f) => /\.jpe?g$/i.test(f))

if (files.length === 0) {
  console.log('No JPEGs in gallery/originals/. Drop files there first.')
  process.exit(0)
}

for (const file of files) {
  const input = path.join(originalsDir, file)

  await thumbPipeline(sharp(input)).toFile(path.join(thumbsDir, file))
  await optimizedPipeline(sharp(input)).toFile(path.join(optimizedDir, file))

  await unlink(input)
  console.log(`✓ ${file} → thumbs + optimized (original deleted)`)
}

console.log('Done — thumbs (480px) + optimized (1200px) created')
