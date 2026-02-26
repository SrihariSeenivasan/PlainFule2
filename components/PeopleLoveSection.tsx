"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
  tone: "rose" | "sand" | "sage";
};

const testimonials: Testimonial[] = [
  {
    quote: "Finally a truly delicious and quality nutrition blend.",
    name: "Amaan Bakali",
    role: "Owner and Coach, Crossfit Third Eye",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=900&q=80",
    tone: "rose",
  },
  {
    quote: "It is so tasty, I did not even feel like I was having a health mix.",
    name: "Prerna Maarvikurne",
    role: "Student, Oberoi International",
    image:
      "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?auto=format&fit=crop&w=900&q=80",
    tone: "sand",
  },
  {
    quote: "Found my go-to breakfast ritual. No confusion, just consistency.",
    name: "Shailin Suvarna",
    role: "India Partner, Antal International",
    image:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=900&q=80",
    tone: "sage",
  },
  {
    quote: "Tastes fresh and clean, and it actually fits my daily schedule.",
    name: "Arjun Singh",
    role: "Partnerships, Thought Over Design",
    image:
      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
    tone: "rose",
  },
];

function SparkGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2l2.1 5.9L20 10l-5.9 2.1L12 18l-2.1-5.9L4 10l5.9-2.1L12 2Z" fill="currentColor" />
    </svg>
  );
}

export default function PeopleLoveSection() {
  return (
    <section className="people-section section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="story-kicker">People Proof</p>
            <h2 className="headline-display mt-3 text-[clamp(2.8rem,8vw,6.2rem)] font-semibold text-[#111b36]">
              Voices, not ads.
            </h2>
          </div>
          <div className="people-note">
            <p>Real people.</p>
            <p>Real routines.</p>
            <p>Real trust.</p>
          </div>
        </div>

        <div className="people-ribbon">
          <div className="people-ribbon-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="people-ribbon-set">
                <span>Daily consistency</span>
                <span>No supplement anxiety</span>
                <span>Balanced nutrition</span>
                <span>Built for Indian routines</span>
              </div>
            ))}
          </div>
        </div>

        <div className="people-stage mt-7">
          <div className="people-glow people-glow-one" />
          <div className="people-glow people-glow-two" />

          <div className="grid gap-5 lg:grid-cols-[1.14fr_0.86fr]">
            <motion.article
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="people-main-card"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="people-main-quote">&ldquo;{testimonials[0].quote}&rdquo;</p>
                <SparkGlyph className="h-7 w-7 shrink-0 text-[var(--accent-maroon)]" />
              </div>

              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                width={1200}
                height={760}
                className="mt-5 h-56 w-full rounded-[16px] object-cover md:h-72"
              />

              <div className="mt-4 flex items-center justify-between gap-4 border-t border-[rgba(142,44,74,0.2)] pt-4">
                <div>
                  <p className="people-name">{testimonials[0].name}</p>
                  <p className="people-role">{testimonials[0].role}</p>
                </div>
                <span className="people-arrow">{"\u2192"}</span>
              </div>
            </motion.article>

            <div className="grid gap-5">
              {testimonials.slice(1).map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.42, delay: index * 0.08 }}
                  whileHover={{ y: -4, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                  className={`people-float-card people-tone-${item.tone}`}
                >
                  <div className="flex gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={280}
                      height={280}
                      className="h-20 w-20 rounded-[12px] object-cover"
                    />
                    <div className="min-w-0">
                      <p className="people-float-quote">&ldquo;{item.quote}&rdquo;</p>
                      <p className="mt-3 text-[1.15rem] font-semibold leading-none tracking-[-0.02em]">{item.name}</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">{item.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}