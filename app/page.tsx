import Link from "next/link";
import { PacketExperience } from "@/components/PacketExperience";
import Image from "next/image";
import { HeroPandaAnimation } from "@/components/HeroPandaAnimation";

export default function HomePage() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star">✦</span> THE LITTLE MOMENTS THAT BRING US TOGETHER</div>
          <h1>OPEN A<br /><em>LITTLE LUCK.</em></h1>
          <p className="hero-lead">A little surprise. A lot of smiles. <strong>Red packets, real community spirit.</strong></p>
          <p className="hero-description">Turn any Telegram community into a place worth celebrating. Create exciting giveaways, share rewards and make every little moment feel special. <strong>No cryptocurrency required.</strong></p>
          <div className="hero-actions">
            <a href="#hero-demo" className="button button-gold">🧧 Open a demo packet <span aria-hidden="true">↗</span></a>
            <Link href="/demo" className="button button-outline">Explore the playground <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-proof"><span className="hero-proof-icon">✳</span><div><strong>A real product in development</strong><small>Try a simulated version right here. No sign-up, wallet or Telegram needed.</small></div></div>
        </div>
        <HeroPandaAnimation />
      </section>
      <div className="announcement"><div className="container announcement-inner"><span>✷</span> MORE THAN A GIVEAWAY BOT <span className="ann-divider">/</span> MADE FOR COMMUNITIES, CREATORS & BRANDS <span>✷</span></div></div>
      <section id="hero-demo" className="container showcase-section">
        <div className="section-intro centered">
          <span className="section-label">01 / YOUR FIRST LITTLE SURPRISE</span>
          <h2>Go on. <em>Pick a packet.</em></h2>
          <p>There's nothing to connect, install or sign up for. Choose a packet, give it a tap and see how Lucky Panda works.</p>
        </div>
        <PacketExperience />
      </section>
      <section id="how-it-works" className="container how-section">
        <div className="section-intro"><span className="section-label">02 / EASY AS ONE, TWO, THREE</span><h2>Good things come<br /><em>in little packets.</em></h2><p>Made to feel effortless for the people running communities and the people who make them special.</p></div>
        <div className="steps">
          <article className="step-card"><span className="step-number">01</span><span className="step-icon">🎁</span><h3>Dream up a giveaway</h3><p>Community admins plan a reward, choose how their event works and share it with their group.</p></article>
          <article className="step-card"><span className="step-number">02</span><span className="step-icon">🧧</span><h3>Open a little luck</h3><p>Members tap a red packet right inside Telegram. Everyone gets a moment of anticipation.</p></article>
          <article className="step-card"><span className="step-number">03</span><span className="step-icon">✨</span><h3>Make someone's day</h3><p>Participants see their result and, for real eligible campaigns, get the organiser's claim instructions.</p></article>
        </div>
      </section>
      <section className="container community-banner">
        <div><span className="section-label">03 / FOR EVERY KIND OF COMMUNITY</span><h2>A little luck goes<br /><em>a long way.</em></h2><p>For creators, businesses, gaming groups and crypto communities alike. Lucky Panda is designed to make giving back feel fun.</p><Link href="/communities" className="button button-gold">Explore community use cases <span aria-hidden="true">↗</span></Link></div>
        <div className="community-art-wrap"><Image src="/brand/panda-flaming-horse.webp" alt="Original Lucky Panda promotional illustration riding a fiery horse; illustrative seasonal artwork, not a prize" width={960} height={960} sizes="(max-width: 760px) 75vw, 380px" className="community-original-art" /><span className="community-art-caption">ORIGINAL LUCKY PANDA ART • SEASONAL INSPIRATION</span></div>
      </section>
      <section className="container closing-cta"><span className="section-label">A LITTLE LUCK LOOKS GOOD ON YOU</span><h2>Ready for your <em>first packet?</em></h2><p>The playground is open. The real Telegram handoff will appear after its official identity is verified.</p><Link href="/demo" className="button button-gold">🧧 Try Lucky Panda free <span aria-hidden="true">↗</span></Link></section>
    </main>
  );
}
