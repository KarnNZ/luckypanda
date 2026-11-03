import Link from "next/link";
export const metadata = { title: "Giveaways" };
export default function Giveaways() {
  return <main className="container interior informational"><span className="section-label">THE GIFT OF GIVING</span><h1>The lucky list. <em>Coming soon.</em></h1><p>Verified public giveaways will appear here once the live Lucky Panda service has been connected, reviewed and approved.</p><div className="empty-card"><span aria-hidden="true">🧧</span><h2>No verified public giveaways yet</h2><p>We won't invent events or display simulated numbers as real product activity. You can still enjoy the demonstration.</p><Link className="button button-gold" href="/demo">Open a demo packet ↗</Link></div></main>;
}
