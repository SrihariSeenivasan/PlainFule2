"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      <div className="absolute -left-16 top-8 h-[32rem] w-[32rem] rounded-full bg-[#e7daca] blur-[90px] opacity-70" />
      <div className="absolute -right-20 bottom-4 h-[30rem] w-[30rem] rounded-full bg-[#e8ddd0] blur-[90px] opacity-70" />

      <div className="section-padding relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="mb-8 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Plainfuel editorial</p>
          <h1 className="headline-display text-[clamp(3.2rem,8vw,7rem)] font-semibold">
            Plainfuel
            <span className="mt-2 block font-serif font-medium italic text-[var(--accent-maroon)]">
              The Vision
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-[var(--text-muted)] md:text-xl">
            The internet made us believe there was something wrong with our food. The real problem
            was never one nutrient. The real problem was imbalance.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#story-start">
              <MagneticButton>Start The Story</MagneticButton>
            </a>
            <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Scroll to follow chapter by chapter
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center pb-6 lg:justify-end">
          <motion.div
            whileHover={{ rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="relative drift"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="https://images.pexels.com/photos/36297486/pexels-photo-36297486.jpeg"
              alt="Plainfuel product"
              width={520}
              height={600}
              priority
              className="h-auto w-[min(82vw,32rem)] rounded-[30px] object-cover shadow-[0_40px_100px_rgba(17,13,8,0.26)]"
            />
          </motion.div>

          <div className="badge-pill absolute left-2 top-6 px-5 py-2 text-sm font-medium text-[var(--text-main)]">
            Not a meal replacement
          </div>
          <div className="badge-pill absolute -right-3 top-36 px-5 py-2 text-sm font-medium text-[var(--text-main)]">
            Not another supplement stack
          </div>
          <div className="badge-pill absolute bottom-4 right-4 px-5 py-2 text-sm font-medium text-[var(--text-main)]">
            It fits into real life
          </div>
        </div>
      </div>
    </section>
  );
}
