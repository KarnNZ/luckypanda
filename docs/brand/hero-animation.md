# LP-WEB-ANIM-01 — video provenance and technical acceptance
Owner approved replacing the static homepage hero with the *third* owner-supplied friendly Panda red-packet video. Source URL (public Grok media): `https://assets.grok.com/users/a6b700f7-04d3-4f78-ae54-4d386c94b822/generated/00d760a4-52cc-4a18-bf60-b9eb91d28f05/generated_video.mp4`.

- Source SHA256: `6e903efc964598b804dabd0c72da48880327617eefb5ceff35b4fae99364fbea`.
- 512×512, 30fps, 6.03 seconds, source size 2,326,637 bytes.
- Optimized candidate processed locally at H.264 CRF 30 / yuv420p, 360 KB approximately. Automated GitHub workflow reproduces a similarly sized build and poster from the exact verified source.
- Hero plays only for people **without** reduced-motion preference; otherwise poster shown.
- Autoplay muted, playsInline and loop; playback errors switch to static poster.
- Local asset hosting: no client request to Grok or third-party player.
- No login, real prize, token or giveaway contract changes.
- The initial homepage static artwork and supporting image remain preserved in repository.
- Temporary import workflow `.github/workflows/lp-hero-import.yml` must be removed from branch **after** media import and **before** production merge.
- Verify source hash, video and poster presence, CI (unit/invariants/typecheck/build), Preview READY and production SHA/URL.
