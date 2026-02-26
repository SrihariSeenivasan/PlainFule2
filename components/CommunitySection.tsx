"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.3" y="5.4" width="17.4" height="13.2" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" />
      <path d="M6.8 11.2v6.1M11.2 17.3v-3.4c0-1.4.8-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3v3.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const press = [
  "Shashank Mehta on removing Instagram from the marketing mix.",
  "Plainfuel unpacks unhealthy food narratives with data and context.",
  "Why balance matters more than trend-based clean eating.",
];

export default function CommunitySection() {
  return (
    <section className="section-padding bg-[#f4efea]">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[rgba(48,39,33,0.14)] bg-[#f7f2ea] p-6 shadow-[0_18px_40px_rgba(33,24,14,0.08)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="story-kicker">Community</p>
            <h2 className="headline-display text-[clamp(2.8rem,8vw,6.1rem)] font-semibold text-[#101d3b]">
              Come, join
              <br />
              the fam!
            </h2>
            <p className="community-note mt-3">Go truth seekers!</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              Follow us for practical nutrition explainers, no-fear food education, and daily
              routines that actually fit Indian life.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="community-chip community-chip-primary">
                <InstagramGlyph className="h-6 w-6" />
                Join our Instagram Community
                <span aria-hidden="true">{"\u2192"}</span>
              </a>
              <a href="#" className="community-chip">
                <YouTubeGlyph className="h-6 w-6" />
                YouTube
                <span aria-hidden="true">{"\u2192"}</span>
              </a>
              <a href="#" className="community-chip">
                <LinkedInGlyph className="h-6 w-6" />
                LinkedIn
                <span aria-hidden="true">{"\u2192"}</span>
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="community-stat">
                <p className="community-stat-num">3x/week</p>
                <p className="community-stat-text">nutrition explainers</p>
              </div>
              <div className="community-stat">
                <p className="community-stat-num">0 hype</p>
                <p className="community-stat-text">just practical food logic</p>
              </div>
              <div className="community-stat">
                <p className="community-stat-num">real use</p>
                <p className="community-stat-text">habits for busy routines</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[24px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?auto=format&fit=crop&w=1400&q=80"
              alt="Plainfuel community moment"
              width={1400}
              height={920}
              className="h-[320px] w-full object-cover md:h-[430px]"
            />
          </motion.div>
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <p className="community-hand text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
              Stop the press
            </p>
            <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-muted)]">
              recent mentions
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {press.map((item, index) => (
              <article key={item} className={`community-press ${index === 1 ? "community-press-alt" : ""}`}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
