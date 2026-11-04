# LP-WEB-BRAND-01 — artwork source and release evidence

The following original-user-artwork-derived assets have been imported as compressed WebP into the isolated development branch.

| Website path | Source | Dimensions | Git blob SHA-1 |
| --- | --- | --- | --- |
| `public/brand/mascot-emblem.webp` | `6E2E5565-70E7-4611-B385-375C502C835E.jpeg` | 180×180 | `db30ef7e9285741a503b59c5c107239a6b62c04a` |
| `public/brand/panda-rewards-pouch.webp` | `54FE1361-6341-400A-A895-DA271BFB7A5A.jpeg` | 260×390 | `f28ccb4f70d39afdf9ee58fb0f09e9be44005524` |
| `public/brand/panda-flaming-horse.webp` | `F213C2AD-5211-4CF2-8E51-A29339FDE3E4(1).jpeg` | 270×270 | `74e076b2b29d02b14a2d4d0f565b5fbc212cf769` |

Images are WebP *compressed/downsized copies* of owner-supplied original artworks, not AI-generated or redrawn. They have been checked against the exact local bytes by Git object hashing. These small derivatives prioritise low bandwidth for the first release; replace with higher-resolution approved derivatives as needed after live visual review. The original image files remain in the owner-provided brand kit, not overwritten by these versions.

The app references are now backed by actual committed files; no third-party hosting or new paid infrastructure is required. The old placeholders remain available in source history for rollback.

**Release verification required:** check CI, ensure no demo functionality changes, inspect public page and assets after approved merge, verify noindex headers and no real prize/tokens, then confirm the actual Vercel deployment SHA.
