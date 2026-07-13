# Assets Guide

## What's committed to Git
- `gallery/thumbs/` — small images for carousel (~45 KB each)
- `gallery/optimized/` — medium images for sections (~200 KB each)
- `**/compressed/*.mp4` — web-optimized videos

## What's NOT committed (local only)
- Original full-size JPGs in `gallery/originals/`
- Raw video files (`mua-reel.mp4`, `decor-reel.mp4` in parent folders)

## After cloning the repo
1. Place your raw videos in:
   - `src/assets/makeup-artist/mua-reel.mp4`
   - `src/assets/wedding-planner/decor-reel.mp4`
2. Run compression:
   ```bash
   npm run compress-videos
   npm run optimize-images
   ```

Or copy compressed files from a teammate who already has them.
