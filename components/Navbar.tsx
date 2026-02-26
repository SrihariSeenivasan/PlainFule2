"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex w-[min(1200px,94vw)] items-center justify-between rounded-full border border-[rgba(45,37,30,0.18)] bg-[rgba(246,242,235,0.85)] px-4 py-3 backdrop-blur-md md:px-6">
        <a href="#" className="text-xl font-semibold tracking-tight">
          Plainfuel
        </a>

        <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] md:flex">
          <a href="#story-start" className="transition hover:text-[var(--text-main)]">
            Story
          </a>
          <a href="#act-two" className="transition hover:text-[var(--text-main)]">
            System
          </a>
          <a href="#act-three" className="transition hover:text-[var(--text-main)]">
            Routine
          </a>
        </div>

        <a
          href="#act-three"
          className="rounded-full bg-[var(--charcoal)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f8f3ea] transition hover:bg-[#2a2622]"
        >
          Start
        </a>
      </div>
    </motion.nav>
  );
}
