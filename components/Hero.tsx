"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";

const heroTiles = [
  {
    title: "Protein Powders",
    subtitle: "Daily scoop support",
    image: "https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&w=700",
    slot: "hero-fuel-tile-a",
    icon: "⚡",
  },
  {
    title: "Protein Bars",
    subtitle: "Carry-anywhere fuel",
    image: "https://images.pexels.com/photos/14513406/pexels-photo-14513406.jpeg?auto=compress&cs=tinysrgb&w=700",
    slot: "hero-fuel-tile-b",
    icon: "🔥",
  },
  {
    title: "Routine Blend",
    subtitle: "Balanced meal companion",
    image: "https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=700",
    slot: "hero-fuel-tile-c",
    icon: "✨",
  },
];

const heroPromises = [
  { text: "Food-first formulation", icon: "🌿" },
  { text: "Traceable process notes", icon: "📋" },
  { text: "Routine-friendly design", icon: "⏰" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const particleConfigs = Array.from({ length: 6 }, (_, i) => ({
  id: `particle-${i}`,
  left: `${(i * 17 + 11) % 100}%`,
  top: `${(i * 23 + 7) % 100}%`,
  duration: 4 + (i % 3) * 0.6,
  delay: i * 0.3,
}));

export default function Hero() {
  return (
    <section className="hero-canvas relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Animated gradient background orbs */}
      <div className="hero-aura hero-aura-left" />
      <div className="hero-aura hero-aura-right" />
      <div className="hero-aura-accent hero-aura-accent-1" />
      <div className="hero-aura-accent hero-aura-accent-2" />

      {/* Grid pattern overlay */}
      <div className="hero-grid-overlay" />

      <div className="section-padding relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="hero-shell"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-copy"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Enhanced eyebrow badge */}
            <motion.div variants={itemVariants}>
              <p className="hero-eyebrow">
                <span className="hero-eyebrow-dot">●</span>
                Plainfuel Product System
              </p>
            </motion.div>

            {/* Hero title with gradient */}
            <motion.h1
              variants={itemVariants}
              className="hero-title mt-6 text-[clamp(2.8rem,7vw,6.4rem)] font-bold text-[#121a35]"
            >
              Smart nutrition,
              <br />
              shaped for
              <span className="hero-title-emphasis-gradient"> real routines.</span>
            </motion.h1>

            {/* Subtitle with better typography */}
            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-xl text-[clamp(1.06rem,1.65vw,1.28rem)] leading-[1.6] text-[var(--text-muted)]"
            >
              Powders, bars, and daily blends designed to complete real meals with consistent support.
              No extreme stacks. No replacement mindset.
            </motion.p>

            {/* Action buttons with improved styling */}
            <motion.div variants={itemVariants} className="hero-actions mt-10">
              <a href="#story-start">
                <MagneticButton>Build My Routine</MagneticButton>
              </a>
              <button className="hero-ghost-btn">See Product Line</button>
            </motion.div>

            {/* Promise pills with icons */}
            <motion.div variants={itemVariants} className="hero-promise-row mt-9">
              {heroPromises.map((promise, idx) => (
                <motion.span
                  key={promise.text}
                  className="hero-promise-pill"
                  whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="promise-icon">{promise.icon}</span>
                  {promise.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced hero stage with floating elements */}
          <motion.div
            className="hero-stage"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Main hero image with enhanced frame */}
            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-main-frame"
            >
              <div className="hero-image-wrapper">
                <Image
                  src="https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Plainfuel main product setup"
                  width={1200}
                  height={900}
                  priority
                  className="hero-main-image"
                />
              </div>
              <div className="hero-frame-glass" />
              <motion.span
                className="hero-main-chip"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                ✓ Process-visible nutrition
              </motion.span>
              <motion.span
                className="hero-main-badge"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                PF
              </motion.span>
            </motion.article>

            <div className="hero-stage-overlay" />

            {/* Floating product tiles */}
            {heroTiles.map((tile, index) => (
              <motion.article
                key={tile.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className={`hero-tile ${tile.slot}`}
              >
                <div className="hero-tile-image-wrapper">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    width={180}
                    height={120}
                    className="hero-tile-thumb"
                  />
                </div>
                <div className="hero-tile-content">
                  <span className="hero-tile-icon">{tile.icon}</span>
                  <div>
                    <p className="hero-tile-title">{tile.title}</p>
                    <p className="hero-tile-sub">{tile.subtitle}</p>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Animated stage note */}
            <motion.div
              className="hero-stage-note"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⭐ Built for daily consistency
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="hero-particles">
        {particleConfigs.map((particle) => (
          <motion.div
            key={particle.id}
            className="hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
