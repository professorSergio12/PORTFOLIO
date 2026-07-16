/** Shared ffmpeg + sharp settings — preserves color/detail, avoids harsh compression. */

export const FFMPEG_VIDEO_OPTS = [
  '-vf',
  'scale=720:-2:flags=lanczos',
  '-c:v',
  'libx264',
  '-crf',
  '23',
  '-preset',
  'medium',
  '-pix_fmt',
  'yuv420p',
  '-profile:v',
  'high',
  '-movflags',
  '+faststart',
  '-an',
]

export function thumbPipeline(input) {
  return input
    .rotate()
    .withMetadata()
    .resize(480, null, { withoutEnlargement: true, fit: 'inside' })
    .jpeg({ quality: 88, mozjpeg: true, trellisQuantisation: true })
}

export function optimizedPipeline(input) {
  return input
    .rotate()
    .withMetadata()
    .resize(1200, null, { withoutEnlargement: true, fit: 'inside' })
    .jpeg({ quality: 90, mozjpeg: true, trellisQuantisation: true })
}
