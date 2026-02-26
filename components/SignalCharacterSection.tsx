"use client";

import { motion } from "framer-motion";

const studioDeck = [
  {
    kicker: "Notebook 01",
    title: "Noise Filter",
    text: "We compare bold nutrition claims with ingredient-level evidence and usage context.",
    metric: "92 claims audited",
    tone: "signal-card-ink",
  },
  {
    kicker: "Notebook 02",
    title: "Source Trail",
    text: "Batch steps, quality checks, and sourcing notes are mapped into one readable trail.",
    metric: "7-stage map",
    tone: "signal-card-sage",
  },
  {
    kicker: "Notebook 03",
    title: "Routine Build",
    text: "We translate data into practical meal timing, portion logic, and long-term consistency.",
    metric: "3 routine templates",
    tone: "signal-card-clay",
  },
];

export default function SignalCharacterSection() {
  return (
    <section className="section-padding signal-section">
      <div className="mx-auto max-w-7xl">
        <div className="signal-shell">
          <div className="signal-copy">
            <p className="story-kicker">Plainfuel Editorial System</p>
            <h2 className="headline-display mt-3 text-[clamp(2.4rem,6.2vw,5.4rem)] font-semibold text-[#111b36]">
              From claim overload
              <br />
              to daily clarity.
            </h2>
            <p className="mt-6 max-w-2xl text-[clamp(1.08rem,1.55vw,1.4rem)] leading-[1.45] text-[#2b3243]">
              This studio is where we break nutrition noise into practical guidance. Not hot takes, not fear.
              Just evidence translated into routines that fit real schedules.
            </p>
            <p className="signal-hand mt-5">Sketchboard principle: explain first, sell second.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="signal-chip">Claim Check</span>
              <span className="signal-chip">Source Proof</span>
              <span className="signal-chip">Routine Plan</span>
            </div>
            <a href="#" className="signal-action mt-7">
              Read our method {"\u2192"}
            </a>
          </div>

          <div className="signal-board">
            <div className="signal-path signal-path-a" />
            <div className="signal-path signal-path-b" />
            <div className="signal-path signal-path-c" />
            <span className="signal-dot signal-dot-a" />
            <span className="signal-dot signal-dot-b" />
            <span className="signal-dot signal-dot-c" />

            <motion.div
              className="signal-pen"
              animate={{ x: [0, 10, -8, 0], y: [0, -6, 4, 0], rotate: [-8, -2, -12, -8] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {"\u270e"}
            </motion.div>

            <div className="signal-stack">
              {studioDeck.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.42, delay: index * 0.1 }}
                  className={`signal-card ${item.tone}`}
                >
                  <p className="signal-card-kicker">{item.kicker}</p>
                  <h3 className="mt-1 text-[clamp(1.3rem,2.1vw,1.7rem)] font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-[1.38]">{item.text}</p>
                  <p className="signal-metric mt-3">{item.metric}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
