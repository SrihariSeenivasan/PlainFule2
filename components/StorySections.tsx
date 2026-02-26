"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { BridgeGlyph, GrainGlyph, PulseGlyph } from "./StoryIcons";

const tensionCards = [
  {
    title: "Trend fatigue",
    text: "Protein. Fibre. Gut health. Every month, a new panic headline.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Daily reality",
    text: "Busy mornings and mixed meals make perfect nutrition impossible.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
  },
];

const pillars = [
  {
    title: "Bridge, not replacement",
    text: "Plainfuel completes daily meals instead of replacing them.",
    icon: BridgeGlyph,
  },
  {
    title: "Food-first balance",
    text: "Protein, fibre, and micronutrients in practical amounts.",
    icon: GrainGlyph,
  },
  {
    title: "Built for routine",
    text: "Simple enough to stay consistent even on crowded days.",
    icon: PulseGlyph,
  },
];

const rhythmPoints = [
  {
    title: "Morning",
    text: "One scoop into breakfast. No pills. No complicated stack.",
  },
  {
    title: "Mid-day",
    text: "Steady support for energy and appetite rhythm through work hours.",
  },
  {
    title: "Long term",
    text: "Consistency over extremes. Better baseline, less nutritional anxiety.",
  },
];

export default function StorySections() {
  return (
    <>
      <section className="section-padding" id="story-start">
        <div className="mx-auto max-w-7xl">
          <p className="story-kicker">Act 01</p>
          <h2 className="headline-display mt-3 max-w-4xl text-[clamp(2.2rem,5vw,4.6rem)] font-semibold">
            Why people feel lost around food.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tensionCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="story-card overflow-hidden bg-[#f8f2e9]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={700}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-[var(--text-muted)]">{card.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--bg-secondary)]" id="act-two">
        <div className="mx-auto max-w-7xl">
          <p className="story-kicker">Act 02</p>
          <h2 className="headline-display mt-3 max-w-4xl text-[clamp(2.2rem,5vw,4.6rem)] font-semibold">
            What balance looks like in one system.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="soft-panel p-6"
                >
                  <Icon className="h-12 w-12 text-[var(--accent-maroon)]" />
                  <h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-[var(--text-muted)]">{pillar.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding" id="act-three">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="story-card overflow-hidden bg-[#f8f2e9]">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
              alt="Daily lifestyle rhythm"
              width={1200}
              height={880}
              className="h-full min-h-[26rem] w-full object-cover"
            />
          </div>
          <div className="rounded-[24px] border border-[rgba(45,37,30,0.14)] bg-[#f8f2e9] p-7 md:p-10">
            <p className="story-kicker">Act 03</p>
            <h2 className="mt-3 text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              It has to fit real life.
            </h2>
            <div className="mt-7 space-y-5">
              {rhythmPoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-[rgba(48,39,33,0.12)] bg-[#f4ebde] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-olive)]">{point.title}</p>
                  <p className="mt-2 text-[1.05rem] text-[rgba(32,27,22,0.93)]">{point.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton>Build My Routine</MagneticButton>
              <button className="rounded-full border border-[rgba(45,37,30,0.24)] px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] transition hover:-translate-y-0.5 hover:bg-[#efe5d8]">
                See Ingredients
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
