import { mkdir, readdir } from 'fs/promises'
import { spawn } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/assets/makeup-artist')
const sources = [
  path.join(root, 'reels'),
  path.join(root, 'gallery'),
]
const outputDir = path.join(root, 'compressed/reels')

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath.path, args, { stdio: 'inherit' })
    proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))))
  })
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

  console.log(`Compressing ${path.basename(input)}...`)
  await runFfmpeg([
    '-y',
    '-i',
    input,
    '-vf',
    'scale=720:-2',
    '-c:v',
    'libx264',
    '-crf',
    '28',
    '-preset',
    'fast',
    '-an',
    '-movflags',
    '+faststart',
    output,
  ])
  console.log(`✓ ${output}`)
}

console.log('Reel compression complete')
