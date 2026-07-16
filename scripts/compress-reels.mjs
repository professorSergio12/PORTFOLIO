import { mkdir, readdir, access, unlink } from 'fs/promises'
import { spawn } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import { FFMPEG_VIDEO_OPTS } from './lib/compress-presets.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/assets/makeup-artist')
const sources = [
  path.join(root, 'reels'),
  path.join(root, 'gallery'),
  path.join(root, 'compressed/reels'),
]
const outputDir = path.join(root, 'compressed/reels')

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath.path, args, { stdio: 'inherit' })
    proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))))
  })
}

async function ensurePoster(videoPath) {
  const base = path.basename(videoPath, path.extname(videoPath)).toLowerCase()
  const posterPath = path.join(outputDir, `${base}-poster.jpg`)

  try {
    await access(posterPath)
    return
  } catch {
    // create below
  }

  console.log(`Creating poster ${path.basename(posterPath)}...`)
  await runFfmpeg([
    '-y',
    '-ss',
    '00:00:01',
    '-i',
    videoPath,
    '-vframes',
    '1',
    '-q:v',
    '3',
    '-vf',
    'scale=480:-2',
    posterPath,
  ])
  console.log(`✓ ${posterPath}`)
}

await mkdir(outputDir, { recursive: true })

const seen = new Set()
const files = []

for (const dir of sources) {
  try {
    const entries = await readdir(dir)
    for (const file of entries) {
      if (!/\.(mov|mp4|MOV|MP4)$/i.test(file)) continue
      if (file.toLowerCase() === 'mua-reel.mp4') continue
      const key = file.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      files.push(path.join(dir, file))
    }
  } catch {
    // optional source folder
  }
}

if (files.length === 0) {
  console.log('No reel videos found. Drop .MOV/.mp4 files in src/assets/makeup-artist/reels/')
  process.exit(0)
}

for (const input of files) {
  const base = path.basename(input, path.extname(input)).toLowerCase()
  const output = path.join(outputDir, `${base}.mp4`)
  const isAlreadyCompressed = path.resolve(input) === path.resolve(output)

  if (!isAlreadyCompressed) {
    console.log(`Compressing ${path.basename(input)}...`)
    await runFfmpeg(['-y', '-i', input, ...FFMPEG_VIDEO_OPTS, output])
    console.log(`✓ ${output}`)

    await unlink(input)
    console.log(`  deleted original: ${path.basename(input)}`)
  }

  await ensurePoster(isAlreadyCompressed ? input : output)
}

console.log('Reel compression complete')
