# Lucky Panda — interactive website

Owner: MadLabz · Engineering record: GitHub issue #1 · Branch: feat/lp-web01-interactive-demo-20261104

## Scope
A self-contained Next.js/TypeScript browser-only demonstration for the prize-neutral Lucky Panda Telegram community rewards platform. This development branch does not create or claim real prizes, perform blockchain actions, call Telegram, collect identities, or connect to a database.

The original videos start.mp4, jackpot.mp4 and global.mp4 remain at the repository root, unchanged. Review their messaging before any public reuse.

## Run
Requires Node.js 22 or later.
1. npm install
2. npm test
3. npm run build
4. npm run dev

## Design and security
- Demo outcomes are predetermined and explicitly labelled SIMULATED.
- No network call is performed from the packet component.
- Giveaway creator fields exist only in browser memory.
- Responsive layout and keyboard-operable native buttons; reduced-motion CSS.
- Homepage and public event pages deliberately show no fabricated usage or event counts.
- Robots indexing disabled during initial preview.
- Official Telegram links, partner registration, live backend/API, token module and public domain are deliberately held back pending verification.
- The recovered Python bot source is preserved in KarnNZ/subutai-bot branch archive/lucky-panda-source-20261104 and is NOT modified by website work.

## Gates
LP-WEB-01 visual foundation; LP-WEB-02 browser packet demonstration; LP-WEB-03 initial offline creator walkthrough. Real prize launch requires a separate engineering and legal review. Merge to main and production deployment require explicit owner approval. No new paid services or database.
