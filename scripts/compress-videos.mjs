import { mkdir, access, unlink } from 'fs/promises'
import { spawn } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import { FFMPEG_VIDEO_OPTS } from './lib/compress-presets.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/assets')

const videos = [
  {
    input: path.join(root, 'makeup-artist/raw/mua-reel.mp4'),
    output: path.join(root, 'makeup-artist/compressed/mua-reel.mp4'),
  },
  {
    input: path.join(root, 'wedding-planner/raw/decor-reel.mp4'),
    output: path.join(root, 'wedding-planner/compressed/decor-reel.mp4'),
  },
]

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath.path, args, { stdio: 'inherit' })
    proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))))
  })
}

for (const { input, output } of videos) {
  try {
    await access(input)
  } catch {
    console.log(`Skip — raw file not found: ${input}`)
    continue
  }

  await mkdir(path.dirname(output), { recursive: true })
  console.log(`Compressing ${path.basename(input)}...`)
  await runFfmpeg(['-y', '-i', input, ...FFMPEG_VIDEO_OPTS, output])
  console.log(`✓ ${output}`)

  await unlink(input)
  console.log(`  deleted original: ${path.basename(input)}`)
}

console.log('Video compression complete')
