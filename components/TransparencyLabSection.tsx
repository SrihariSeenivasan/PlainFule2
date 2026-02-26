"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type ModeKey = "powders" | "bars";

type ModeData = {
  label: string;
  subtitle: string;
  image: string;
  stats: Array<{ label: string; value: string; x: string; y: string }>;
};

const MODE_DATA: Record<ModeKey, ModeData> = {
  powders: {
    label: "Protein Powders",
    subtitle: "Batching, blending, and sieve checks in one transparent line.",
    image:
      "https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { label: "Source checks", value: "3 stage", x: "8%", y: "16%" },
      { label: "Blend audit", value: "Every lot", x: "76%", y: "10%" },
      { label: "Micro scan", value: "QA live", x: "82%", y: "64%" },
      { label: "Trace logs", value: "100%", x: "10%", y: "68%" },
    ],
  },
  bars: {
    label: "Protein Bars",
    subtitle: "Roast-to-wrap flow with visible ingredient checkpoints.",
    image:
      "https://images.pexels.com/photos/14513406/pexels-photo-14513406.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { label: "Roast control", value: "Temp tracked", x: "10%", y: "14%" },
      { label: "Bind ratio", value: "Calibrated", x: "78%", y: "12%" },
      { label: "Texture QA", value: "Panel tested", x: "80%", y: "66%" },
      { label: "Pack seal", value: "Every batch", x: "11%", y: "68%" },
    ],
  },
};

function OrbitGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="22" cy="22" r="4" fill="currentColor" />
      <path d="M22 4v7M22 33v7M4 22h7M33 22h7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export default function TransparencyLabSection() {
  const [mode, setMode] = useState<ModeKey>("powders");
  const data = useMemo(() => MODE_DATA[mode], [mode]);

  return (
    <section className="section-padding orbit-section bg-[#f3efe8]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="story-kicker">Open Process</p>
            <h2 className="headline-display mt-3 text-[clamp(2.8rem,7vw,5.8rem)] font-semibold text-[#111b36]">
              Nothing to hide.
              <br />
              Everything to show.
            </h2>
            <p className="mt-6 max-w-xl text-[clamp(1.18rem,1.8vw,1.7rem)] leading-[1.42] text-[#232636]">
              From ingredient intake to final pack, every stage is built for visibility. You should be
              able to see how your food is made before you trust it.
            </p>
            <p className="mt-6 max-w-lg font-serif text-[clamp(1.45rem,2.5vw,2.3rem)] italic text-[var(--accent-maroon)]">
              FSSC certified facility. Public process mindset.
            </p>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.42 }}
            className="orbit-panel"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-[clamp(1.7rem,2.7vw,2.7rem)] font-semibold tracking-[-0.03em] text-[#141722]">
                Transparency Orbit
              </h3>
              <OrbitGlyph className="h-8 w-8 text-[var(--accent-maroon)]" />
            </div>
            <p className="mt-2 text-[1.05rem] text-[var(--text-muted)]">{data.subtitle}</p>

            <div className="mt-5 inline-flex rounded-full border border-[rgba(43,35,29,0.15)] bg-[#fffaf4] p-1">
              <button
                onClick={() => setMode("powders")}
                className={`orbit-switch ${mode === "powders" ? "orbit-switch-active" : ""}`}
              >
                Protein Powders
              </button>
              <button
                onClick={() => setMode("bars")}
                className={`orbit-switch ${mode === "bars" ? "orbit-switch-active" : ""}`}
              >
                Protein Bars
              </button>
            </div>

            <div className="orbit-canvas mt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.35, scale: 0.99 }}
                  transition={{ duration: 0.32 }}
                  className="relative"
                >
                  <Image
                    src={data.image}
                    alt={data.label}
                    width={1400}
                    height={920}
                    className="h-[280px] w-full rounded-[18px] bg-[#ece3d6] object-contain md:h-[360px]"
                  />

                  {data.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28 }}
                      className="orbit-node"
                      style={{ left: stat.x, top: stat.y }}
                    >
                      <p className="orbit-node-value">{stat.value}</p>
                      <p className="orbit-node-label">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <a href="#" className="orbit-cta mt-5">
              Explore full floor map {"\u2192"}
            </a>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="orbit-ticket"
        >
          <span className="orbit-ticket-dot" />
          Revealed: how we keep quality consistent in real-time
          <span className="orbit-ticket-play">{"\u25B7"}</span>
        </motion.div>
      </div>
    </section>
  );
}
