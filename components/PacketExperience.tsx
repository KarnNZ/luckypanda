"use client";

import { useEffect, useRef, useState } from "react";
import { getDemoPrize, THEMES, type PacketTheme } from "@/lib/demo";

type Stage = "ready" | "opening" | "revealed";

/** All results are predetermined simulations. This component never calls a network endpoint. */
export function PacketExperience({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<PacketTheme>("classic");
  const [openingIndex, setOpeningIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("ready");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prize = getDemoPrize(theme, openingIndex);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function resetTimer() {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }

  function selectTheme(next: PacketTheme) {
    resetTimer();
    setTheme(next);
    setOpeningIndex(0);
    setStage("ready");
  }

  function open() {
    if (stage !== "ready") return;
    setStage("opening");
    timer.current = setTimeout(() => {
      setStage("revealed");
      timer.current = null;
    }, 650);
  }

  function again() {
    resetTimer();
    setOpeningIndex((current) => current + 1);
    setStage("ready");
  }

  return (
    <section className={compact ? "packet-panel packet-compact" : "packet-panel"} aria-label="Interactive demonstration packet">
      <div className="packet-panel-top">
        <span className="demo-pill"><span className="pulse-dot" /> INTERACTIVE DEMO</span>
        <span className="packet-safe">No wallet · No login · No real prizes</span>
      </div>
      <div className="theme-selector" role="group" aria-label="Choose a sample packet design">
        {THEMES.map((item) => (
          <button
            key={item.id}
            type="button"
            className={"theme-option " + (theme === item.id ? "selected" : "")}
            aria-pressed={theme === item.id}
            onClick={() => selectTheme(item.id)}
          >
            <span aria-hidden="true" className={"theme-dot theme-" + item.id} />
            {item.name}
          </button>
        ))}
      </div>
      <div className={"packet-stage stage-" + stage}>
        <div className="stage-aura" aria-hidden="true" />
        {stage !== "revealed" ? (
          <button className={"red-envelope envelope-" + theme} type="button" onClick={open} disabled={stage === "opening"} aria-label={stage === "ready" ? "Open simulated red packet" : "Simulated packet opening"}>
            <span className="envelope-flap" aria-hidden="true" />
            <span className="envelope-seal" aria-hidden="true">福</span>
            <span className="envelope-bottom" aria-hidden="true" />
            <span className="envelope-caption">{stage === "opening" ? "Opening…" : "TAP TO OPEN"}</span>
          </button>
        ) : (
          <div className="prize-reveal" aria-live="polite" role="status">
            <div className="reveal-sparkle" aria-hidden="true">✦ ✧ ✦</div>
            <div className="prize-icon" aria-hidden="true">{prize.icon}</div>
            <span className="prize-eyebrow">YOU UNCOVERED A SAMPLE</span>
            <h3>{prize.name}</h3>
            <p>{prize.explanation}</p>
            <strong className="simulated-tag">SIMULATED REWARD · NOT REDEEMABLE</strong>
          </div>
        )}
      </div>
      <div className="packet-bottom">
        {stage === "revealed" ? (
          <button type="button" className="button button-gold" onClick={again}>🧧 Open another example <span aria-hidden="true">↗</span></button>
        ) : (
          <button type="button" className="button button-gold" onClick={open} disabled={stage === "opening"}>{stage === "opening" ? "Opening sample…" : "🧧 Open my demo packet"} <span aria-hidden="true">↗</span></button>
        )}
        <p>Demo Mode — No real prizes are awarded. Every result is illustrative.</p>
      </div>
    </section>
  );
}
