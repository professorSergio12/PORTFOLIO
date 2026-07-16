import sharp from 'sharp'
import { mkdir, readdir, stat, unlink, rename } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import { FFMPEG_HERO_OPTS, weddingFullPipeline } from './lib/compress-presets.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/assets/wedding-planner')

const IMAGE_DIRS = ['Decor', 'Friends Wedding', 'Personal', 'Photobooth & Signage']
const IMAGE_EXT = /\.(jpe?g|png|webp|JPG|JPEG|PNG|WEBP)$/i
const SKIP_DIR = /[/\\]optimized[/\\]/i

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath.path, args, { stdio: 'inherit' })
    proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))))
  })
}

function safeBaseName(file) {
  const base = path.basename(file, path.extname(file))
  const cleaned = base.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
  return cleaned || 'image'
}

async function walkImages(dir, results = []) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return results
  }

  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name.toLowerCase() === 'optimized') continue
      await walkImages(full, results)
      continue
    }
    if (!IMAGE_EXT.test(entry.name)) continue
    if (SKIP_DIR.test(full)) continue
    results.push(full)
  }

  return results
}

async function optimizeImage(inputPath) {
  const dir = path.dirname(inputPath)
  const outDir = path.join(dir, 'optimized')
  await mkdir(outDir, { recursive: true })

  const outName = `${safeBaseName(inputPath)}.jpg`
  const outputPath = path.join(outDir, outName)
  const tempPath = path.join(outDir, `.tmp-${outName}`)

  await weddingFullPipeline(sharp(inputPath)).toFile(tempPath)
  await rename(tempPath, outputPath)

  const [before, after] = await Promise.all([stat(inputPath), stat(outputPath)])
  await unlink(inputPath)

  console.log(
    `✓ ${path.relative(root, inputPath)} → optimized/${outName} (${(before.size / 1024 / 1024).toFixed(1)}MB → ${(after.size / 1024).toFixed(0)}KB)`,
  )
}

async function optimizeHeroVideo() {
  const videoPath = path.join(root, 'compressed/decor-reel.mp4')
  try {
    await stat(videoPath)
  } catch {
    console.log('Skip — decor-reel.mp4 not found')
    return
  }

  const before = (await stat(videoPath)).size
  const tempPath = path.join(root, 'compressed/.tmp-decor-reel.mp4')
  console.log(`Compressing decor-reel.mp4 (hero, ${(before / 1024 / 1024).toFixed(1)}MB)...`)
  await runFfmpeg(['-y', '-i', videoPath, ...FFMPEG_HERO_OPTS, tempPath])

  const after = (await stat(tempPath)).size
  if (after >= before) {
    await unlink(tempPath)
    console.log(`Skip — keeping decor-reel.mp4 (${(before / 1024 / 1024).toFixed(1)}MB)`)
    return
  }

  await unlink(videoPath)
  await rename(tempPath, videoPath)
  console.log(
    `✓ decor-reel.mp4 ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB`,
  )
}

const images = []
for (const folder of IMAGE_DIRS) {
  await walkImages(path.join(root, folder), images)
}

if (images.length === 0) {
  console.log('No wedding images to optimize.')
} else {
  console.log(`Optimizing ${images.length} wedding image(s)...`)
  for (const input of images) {
    await optimizeImage(input)
  }
}

await optimizeHeroVideo()
console.log('Wedding asset optimization complete')
