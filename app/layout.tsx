import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Lucky Panda | Open a Little Luck", template: "%s | Lucky Panda" },
  description: "Explore interactive red-packet giveaways and community rewards for Telegram. Try a free browser demonstration. No cryptocurrency required.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/mascot-emblem.webp", apple: "/brand/mascot-emblem.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-bg" aria-hidden="true" />
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="Lucky Panda homepage">
              <Image className="brand-mark-original" src="/brand/mascot-emblem.webp" alt="" aria-hidden="true" width={44} height={44} sizes="44px" />
              <span className="brand-words">LUCKY<span>PANDA</span><small>OPEN A LITTLE LUCK</small></span>
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
              <Link href="/">Home</Link><Link href="/demo">Try It</Link><Link href="/#how-it-works">How It Works</Link><Link href="/communities">Communities</Link><Link href="/giveaways">Giveaways</Link>
            </nav>
            <Link href="/demo" className="nav-action">🧧 <span>Open a Packet</span></Link>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-inner">
            <div><strong>LUCKY PANDA 🧧</strong><p>Red packets. Real community spirit. A MadLabz project.</p><span>Website preview · All packet rewards are simulated.</span></div>
            <nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/demo">Try the demo</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/giveaway-rules">Giveaway rules</Link></nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
