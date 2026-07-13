import sharp from 'sharp'
import { mkdir, readdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const galleryDir = path.join(__dirname, '../src/assets/makeup-artist/gallery')
const originalsDir = path.join(galleryDir, 'originals')
const thumbsDir = path.join(galleryDir, 'thumbs')
const optimizedDir = path.join(galleryDir, 'optimized')

await mkdir(originalsDir, { recursive: true })
await mkdir(thumbsDir, { recursive: true })
await mkdir(optimizedDir, { recursive: true })

const files = (await readdir(originalsDir)).filter((f) => /\.jpe?g$/i.test(f))

for (const file of files) {
  const input = path.join(originalsDir, file)

  await sharp(input)
    .resize(480, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(thumbsDir, file))

  await sharp(input)
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(optimizedDir, file))

  console.log(`✓ ${file}`)
}

console.log('Done — thumbs (480px) + optimized (1200px) created')
