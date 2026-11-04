# Hero animation media import — LP-WEB-ANIM-01

The animation code is complete but the media must be present in this feature branch before merging.

**Verified imported source:** owner-provided Lucky Panda panda-with-floating-packets clip (00d760a4), 6 seconds, square, 30fps, no sound.

**Expected repo paths (upload files separately via GitHub):**
- `public/brand/lucky-panda-hero.mp4` (optimised local MP4; 360 KB)
- `public/brand/lucky-panda-hero-poster.webp` (static frame; 20 KB)

The source media host denies server-side downloads with HTTP 403, so the one-time automatic importer was removed. Two owner-downloadable files are already prepared in the ChatGPT conversation and need to be added as binary files to this branch, not `main`:
`feat/lp-web-anim01-hero-loop-20261104`.

Do not merge PR or publish production until the GitHub PR runs both video-file tests and demo tests successfully, and Vercel Preview is READY. The GIF/MP4 is purely decorative; packet opening continues to work as before.

Release constraints: No paid infrastructure, no token operations, no real prizes, keep noindex and previous source preservation.
