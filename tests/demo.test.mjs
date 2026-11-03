import test from "node:test";
import assert from "node:assert/strict";
import { getDemoPrize, demoHasRealPrize, THEMES } from "../lib/demo.ts";

test("all packet themes return predetermined, simulated demonstration rewards", () => {
  for (const theme of THEMES) {
    const first = getDemoPrize(theme.id, 0);
    assert.deepEqual(first, getDemoPrize(theme.id, 0));
    assert.equal(first.classification, "simulated");
    assert.ok(first.name);
    assert.ok(first.explanation);
  }
});

test("replays rotate between demo examples without any randomness", () => {
  assert.notEqual(getDemoPrize("classic", 0).id, getDemoPrize("classic", 1).id);
  assert.deepEqual(getDemoPrize("classic", 0), getDemoPrize("classic", 4));
});

test("invalid input is rejected and no real reward path exists", () => {
  for (const value of [-1, 1.5, Number.NaN, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => getDemoPrize("classic", value));
  }
  assert.throws(() => getDemoPrize("invalid", 0));
  assert.equal(demoHasRealPrize(), false);
});
