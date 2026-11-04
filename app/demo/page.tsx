"use client";

import { useState, type FormEvent } from "react";
import { PacketExperience } from "@/components/PacketExperience";

type Tab = "open" | "create" | "community";
type GiveawayKind = "Random red packets" | "Equal-value red packets" | "Scheduled rewards" | "Milestone rewards";

export default function DemoPage() {
  const [tab, setTab] = useState<Tab>("open");
  const [step, setStep] = useState(1);
  const [kind, setKind] = useState<GiveawayKind>("Random red packets");
  const [name, setName] = useState("Friday Panda Surprise");
  const [reward, setReward] = useState("A sample gift voucher");
  const [recipients, setRecipients] = useState(8);
  const [duration, setDuration] = useState("24 hours");

  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep((current) => Math.min(current + 1, 3));
  }

  return (
    <main className="container interior">
      <div className="interior-heading"><span className="section-label">WELCOME TO THE PLAYGROUND</span><h1>Try the <em>magic.</em></h1><p>Explore the Lucky Panda experience in your browser. Everything on this page is a simulation — no real prizes, Telegram users or live events are involved.</p></div>
      <div className="demo-tabs" role="tablist" aria-label="Demonstration mode">
        <button type="button" role="tab" aria-selected={tab === "open"} className={tab === "open" ? "active" : ""} onClick={() => setTab("open")}>🧧 Open a packet</button>
        <button type="button" role="tab" aria-selected={tab === "create"} className={tab === "create" ? "active" : ""} onClick={() => setTab("create")}>🎁 Create a giveaway</button>
        <button type="button" role="tab" aria-selected={tab === "community"} className={tab === "community" ? "active" : ""} onClick={() => setTab("community")}>💬 Community preview</button>
      </div>
      {tab === "open" && <PacketExperience />}
      {tab === "create" && (
        <section className="wizard-card" aria-label="Simulated giveaway creator">
          <div className="wizard-top"><span className="demo-pill">DEMO ONLY · NO EVENT CREATED</span><span>STEP {step} / 3</span></div>
          {step === 1 && <div><h2>Choose your giveaway style.</h2><p>Pick how your sample event would work. Some modes are design previews, not verified live bot features.</p><div className="kind-grid">{(["Random red packets", "Equal-value red packets", "Scheduled rewards", "Milestone rewards"] as GiveawayKind[]).map((option) => <button type="button" key={option} onClick={() => setKind(option)} aria-pressed={kind === option} className={"kind-choice " + (kind === option ? "chosen" : "")}><span>🧧</span>{option}<small>{option === "Random red packets" ? "Existing concept" : "Planned preview"}</small></button>)}</div><button type="button" className="button button-gold" onClick={() => setStep(2)}>Continue <span aria-hidden="true">→</span></button></div>}
          {step === 2 && <form onSubmit={next}><h2>Make it your own.</h2><p>This is a local example. Nothing you enter is sent or saved.</p><div className="field-grid"><label>Event name<input maxLength={70} required value={name} onChange={(event) => setName(event.target.value)} /></label><label>Example prize<input maxLength={90} required value={reward} onChange={(event) => setReward(event.target.value)} /></label><label>Number of recipients<input type="number" min={1} max={100} required value={recipients} onChange={(event) => setRecipients(Number(event.target.value))} /></label><label>Sample duration<select value={duration} onChange={(event) => setDuration(event.target.value)}><option>1 hour</option><option>24 hours</option><option>7 days</option></select></label></div><div className="wizard-actions"><button type="button" className="button button-outline" onClick={() => setStep(1)}>Back</button><button className="button button-gold" type="submit">Preview sample <span aria-hidden="true">→</span></button></div></form>}
          {step === 3 && <div><h2>It's ready to imagine!</h2><p>This is how your example giveaway could appear in Telegram.</p><div className="chat-demo"><div className="chat-bar"><span>🐼</span><div><strong>Lucky Panda Bot</strong><small>Illustrative Telegram-style preview</small></div></div><div className="chat-bubble"><strong>🧧 {name}</strong><p>{reward}</p><span>{kind} · {recipients} recipient(s) · {duration}</span><div className="fake-telegram-button">🧧 Open a sample red packet</div></div></div><strong className="simulated-tag">SAMPLE ONLY — NO LIVE GIVEAWAY OR PRIZE</strong><div className="wizard-actions"><button type="button" className="button button-outline" onClick={() => setStep(2)}>Edit details</button><button type="button" className="button button-gold" onClick={() => setStep(1)}>Create another example ↗</button></div></div>}
        </section>
      )}
      {tab === "community" && <section className="wizard-card"><span className="demo-pill">ILLUSTRATIVE CONVERSATION</span><h2>One packet. Lots of smiles.</h2><p>A preview of the community experience — all participants and messages below are fictional.</p><div className="chat-demo"><div className="chat-bar"><span>💬</span><div><strong>Panda Community — example</strong><small>Simulated Telegram group</small></div></div><div className="chat-bubble"><strong>🐼 Lucky Panda Bot</strong><p>Surprise! A new red packet has arrived! 🧧</p><span>Sample campaign · 8 example packets</span></div><div className="chat-bubble user"><strong>Alex (fictional)</strong><p>I opened mine! 🎋</p></div><div className="chat-bubble"><strong>🐼 Lucky Panda Bot</strong><p>Alex uncovered a Golden Bamboo collectible in this sample event!</p></div><div className="chat-bubble user"><strong>Sam (fictional)</strong><p>That's so cute 😂🐼</p></div></div><p className="muted-small">No actual Telegram conversation or activity was used.</p></section>}
    </main>
  );
}
