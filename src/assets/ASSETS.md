# Assets Guide

## What's in the repo (used by the site)
- `gallery/thumbs/` — carousel thumbnails (~40–60 KB)
- `gallery/optimized/` — section & gallery images (~150–300 KB)
- `compressed/mua-reel.mp4` — hero video
- `compressed/reels/*.mp4` — reel carousel videos
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
npm run compress-videos   # hero + decor reels
npm run compress-reels    # gallery/reels MOV files
npm run process-heic -- IMG_XXXX.HEIC   # single HEIC → thumbs + optimized
```

Then delete the raw files locally once compressed versions look good.
