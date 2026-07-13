import { mkdir } from 'fs/promises'
import { spawn } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/assets')

const videos = [
  {
    input: path.join(root, 'makeup-artist/mua-reel.mp4'),
    output: path.join(root, 'makeup-artist/compressed/mua-reel.mp4'),
  },
  {
    input: path.join(root, 'wedding-planner/decor-reel.mp4'),
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
  await mkdir(path.dirname(output), { recursive: true })
  console.log(`Compressing ${path.basename(input)}...`)
  await runFfmpeg([
    '-y', '-i', input,
    '-vf', 'scale=720:-2',
    '-c:v', 'libx264', '-crf', '28', '-preset', 'fast',
    '-an', '-movflags', '+faststart',
    output,
  ])
  console.log(`✓ ${output}`)
}

console.log('Video compression complete')
