# Assets Guide

## What's in the repo (used by the site)
- `gallery/thumbs/` — carousel thumbnails (~40–60 KB)
- `gallery/optimized/` — section & gallery images (~150–300 KB)
- `compressed/mua-reel.mp4` — hero video
- `compressed/reels/*.mp4` — reel carousel videos
- `compressed/reels/*-poster.jpg` — reel preview thumbnails (auto-created by `compress-reels`)
- `wedding-planner/compressed/decor-reel.mp4`

**Total assets folder: ~23 MB**

## Raw files (NOT in repo — local only)
Drop originals here when you need to re-compress:
- `makeup-artist/raw/mua-reel.mp4`
- `makeup-artist/reels/*.MOV` — reel sources
- `makeup-artist/gallery/*.HEIC` — photo sources
- `wedding-planner/raw/decor-reel.mp4`

These folders are gitignored. After adding raw files, run:
```bash
npm run compress-videos   # hero + decor reels → deletes raw after success
npm run compress-reels    # reel MOVs → compressed/reels/*.mp4, deletes originals
npm run process-heic -- IMG_9326.HEIC   # HEIC → thumbs + optimized, deletes .HEIC
npm run optimize-images   # JPEGs from gallery/originals/ → thumbs + optimized
```

Originals are removed automatically after a successful compress. Quality settings preserve colors/detail (no harsh filter break).
