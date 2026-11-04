import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(process.cwd(), "public", "brand");

test("owner-approved animated hero MP4 and poster are bundled locally", () => {
  const mp4 = readFileSync(join(ROOT, "lucky-panda-hero.mp4"));
  const poster = readFileSync(join(ROOT, "lucky-panda-hero-poster.webp"));
  assert.ok(mp4.length > 4096, "missing or empty MP4");
  assert.ok(mp4.length < 1_500_000, "MP4 is larger than homepage media budget");
  assert.equal(mp4.toString("ascii", 4, 8), "ftyp", "not an MP4 container");
  assert.equal(poster.toString("ascii", 0, 4), "RIFF", "not WebP RIFF");
  assert.equal(poster.toString("ascii", 8, 12), "WEBP", "not a WebP image");
  assert.ok(statSync(join(ROOT, "lucky-panda-hero-poster.webp")).size > 1024);
});

test("hero implementation preserves reduced-motion, fallback and muted autoplay", () => {
  const code = readFileSync(join(process.cwd(), "components", "HeroPandaAnimation.tsx"), "utf8");
  for (const contract of ["prefers-reduced-motion", "muted", "autoPlay", "loop", "playsInline", "videoFailed", "poster="]) {
    assert.ok(code.includes(contract), `missing hero requirement: ${contract}`);
  }
  assert.ok(!code.includes("assets.grok.com"), "production player must not depend on Grok CDN");
});
