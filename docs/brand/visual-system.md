# Lucky Panda — canonical brand system (BR-00 / BR-01)

**Status:** original owner-supplied visual direction recovered 4 Nov 2026. Website application artwork reskin is **not yet merged or deployed**. Parent engineering #1, brand record #3.

## Brand promise

**Lucky Panda — Open a Little Luck.** An accessible, playful red-packet rewards platform for Telegram communities, creators and businesses. The product experience comes first; optional token information is separately gated.

## Canonical character DNA

The original panda should be recognisable across marketing and product surfaces:
- Black ears and eye patches; cream/white face; bold expressive brows and friendly/energetic expressions.
- **Bright red red packet** with gold envelope detailing is the primary prop.
- **Jade amulet/pendant**, **red waist sash**, **dark body**, and sometimes gold bracelets.
- Expressive gestures (giving a red packet, welcoming, celebrating, proudly raising a fist) appropriate for a community rewards product.
- Preserve supplied art, don't silently replace it with a newly invented approximation. The first website's simple SVG and emoji panda are placeholders only.

## Usage hierarchy

| Tier | Asset class | Primary use | Avoid |
| --- | --- | --- | --- |
| Core mark | Dark round panda-with-envelope, green jade pendant, red sash | Header brand mark, app/bot identity, social avatar, favicon candidate | Shrinking the full 1024px composition into tiny unreadable icons without creating approved derivatives |
| Product hero | Friendly panda holding or presenting a red packet | Homepage, playground illustration, community CTAs | Assuming city landmarks represent existing local operations |
| Campaign art | Horse, eastern dragon, fire/embers, coins | Seasonal launch campaigns, special promotions and social graphics | Dominating the product landing page or overshadowing red packet utility |
| Regional art | Panda and recognizable city landmark variants | Opt-in regional marketing | Claiming active market presence based on illustration |
| Historical token promo | Six short 'BUY' / 'GOD BUY' videos and token hype poster | Preserved historical creative, separately gated token marketing | Product site, unverified product-demo videos, investment-performance claims |

## Proposed colour tokens (to validate for WCAG 2.2 AA)

- Lucky red `#E94330` — red packets, primary brand.
- Ember orange `#FF721F` — animation and fire accents, not all backgrounds.
- Fortune gold `#F7BB53` — reward highlights, edges and focus.
- Jade `#169A78` — charm and fresh accent, limited usage.
- Midnight charcoal `#101619` — main background.
- Evergreen `#0C2925` — dark cards/Telegram scenes.
- Warm cream `#FFF1DB` — readable headings.

Avoid oversaturating entire pages with flame gradients. Use high contrast and accessible muted text.

## Website mapping

1. **Header:** approved emblem derivative (cropped/legible) and clearly readable Lucky Panda wordmark. Use no unsupported existing-logo claims.
2. **Hero:** friendly original panda with red packet. Do not place geographic landmark images as universal hero art.
3. **Packet:** preserve existing functional opening logic; update decoration using the original red packet gold-diamond motif and jade seals. Must remain clearly **DEMO — NO REAL PRIZES**.
4. **Community:** integrate selected product-friendly original illustrations, no fabricated adoption claims.
5. **Playground:** keep 3 sample packet themes, replay, sample rewards and local creator wizard. Decorations only.
6. **Optional seasonal module:** original flaming horse and dragon materials may accompany an approved celebration, never imply gambling or guaranteed wealth.
7. **Social cards:** future 1200×630 OG visuals using approved original mascot, copy about product, not token promotion.
8. **Visual accessibility:** width/height-aware optimized WebP, alt text, responsive sizes, reduced motion, no layout shift.
9. **SEO:** preserve site-wide noindex/noarchive while public demonstration is soft-launched.

## Source provenance and ingestion

The owner supplied original JPEG art and six MP4 clips in the 4 Nov 2026 Lucky Panda design conversation. A self-contained bundle `lucky-panda-brand-kit-20261104.zip` containing selected unchanged source JPEGs, optimized WebP variants, SHA-256 manifest and video contact-sheet is attached to the same conversation for owner download. **The binary images are not yet in GitHub.**

GitHub ingestion must use an authorized file upload / Work browser / authenticated local Git checkout. These installed GitHub connector actions do not directly access the conversation container's binary assets. Do not commit new UI references to image paths until the corresponding actual image files exist and builds pass.

Proposed location: `public/brand/`. Use stable names and retain original provenance under `docs/brand/` where helpful. Avoid another paid asset service.

## Safe release criteria

- CI tests, Next.js build, responsive layout screenshots, alt text checks.
- Opening demo works as before. No real giveaway claims or fake live stats.
- Review the actual graphics in browser on iPhone and desktop before accepting.
- No secret or infrastructure changes.
- No merging into `main` or production Vercel deployment without owner review and approval.

## Current constraints

The image references do not contain an official editable wordmark; use the image hierarchy as guidance until the final wordmark is approved. Historical clips cannot serve as functional product demos because they visually show token-buy promotion.
