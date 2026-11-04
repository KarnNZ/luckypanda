/**
 * LP-WEB-02: closed, deterministic browser-only demonstration.
 * No prize, payout, wallet, eligibility or Telegram production integration.
 */
export type PacketTheme = "classic" | "jade" | "gold";
export type DemoPrize = Readonly<{
  id: string;
  icon: string;
  name: string;
  explanation: string;
  classification: "simulated";
}>;

export const THEMES: ReadonlyArray<{ id: PacketTheme; name: string; subtitle: string }> = [
  { id: "classic", name: "Lucky Red", subtitle: "The original red packet" },
  { id: "jade", name: "Jade Fortune", subtitle: "A little bamboo magic" },
  { id: "gold", name: "Golden Wish", subtitle: "Something special inside" }
];

const PRIZES: ReadonlyArray<DemoPrize> = [
  { id: "panda-badge", icon: "🐼", name: "Panda Welcome Badge", explanation: "A sample digital collectible for joining the fun.", classification: "simulated" },
  { id: "golden-bamboo", icon: "🎋", name: "Golden Bamboo", explanation: "A demonstration collectible from the Lucky Panda garden.", classification: "simulated" },
  { id: "community-points", icon: "✨", name: "100 Community Points", explanation: "An example of a community reward. No real points were issued.", classification: "simulated" },
  { id: "gift-voucher", icon: "🎁", name: "Sample Gift Voucher", explanation: "A preview of a possible voucher reward. Not redeemable.", classification: "simulated" }
];

/** Repeatable example outcomes, independent of live activity or real giveaways. */
export function getDemoPrize(theme: PacketTheme, openingIndex: number): DemoPrize {
  const base = THEMES.findIndex((item) => item.id === theme);
  if (base < 0 || !Number.isSafeInteger(openingIndex) || openingIndex < 0) {
    throw new Error("Invalid demonstration parameters");
  }
  return PRIZES[(base + openingIndex) % PRIZES.length];
}

export function demoHasRealPrize(): false {
  return false;
}
