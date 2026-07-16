import sharp from 'sharp'
import { mkdir, readdir, stat } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { weddingDisplayPipeline, weddingThumbPipeline } from './lib/compress-presets.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/assets/wedding-planner')

const IMAGE_EXT = /\.(jpe?g|png|webp|JPG|JPEG|PNG|WEBP)$/i
const SKIP_NAME = /-portrait\.jpe?g$/i

async function walkOptimized(dir, results = []) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return results
  }

  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['thumbs', 'display'].includes(entry.name.toLowerCase())) continue
      await walkOptimized(full, results)
      continue
    }
    if (!IMAGE_EXT.test(entry.name)) continue
    if (SKIP_NAME.test(entry.name)) continue
    if (!full.includes(`${path.sep}optimized${path.sep}`)) continue
    results.push(full)
  }

  return results
}

async function writeVariant(inputPath, folder, pipeline) {
  const optimizedDir = path.dirname(inputPath)
  const albumDir =
    path.basename(optimizedDir).toLowerCase() === 'optimized'
      ? path.dirname(optimizedDir)
      : optimizedDir
  const outDir = path.join(albumDir, folder)
  await mkdir(outDir, { recursive: true })

  const outName = `${path.basename(inputPath, path.extname(inputPath))}.jpg`
  const outputPath = path.join(outDir, outName)
  const before = await stat(inputPath)

  await pipeline(sharp(inputPath)).toFile(outputPath)

  const after = await stat(outputPath)
  return {
    rel: path.relative(root, outputPath),
    beforeKb: Math.round(before.size / 1024),
    afterKb: Math.round(after.size / 1024),
  }
}

const images = await walkOptimized(root)

if (images.length === 0) {
  console.log('No wedding optimized images found.')
  process.exit(0)
}

console.log(`Generating thumbs + display for ${images.length} image(s)...`)

for (const input of images) {
  const thumb = await writeVariant(input, 'thumbs', weddingThumbPipeline)
  const display = await writeVariant(input, 'display', weddingDisplayPipeline)
  console.log(
    `✓ ${path.relative(root, input)} → thumbs/${thumb.afterKb}KB, display/${display.afterKb}KB (from ${thumb.beforeKb}KB)`,
  )
}

console.log('Wedding thumb generation complete')
