"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export default function MagneticButton({
  children,
  className = "",
  variant = "dark",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`magnetic-btn ${variant === "light" ? "magnetic-btn-light" : ""} rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase ${className}`}
    >
      {children}
    </motion.button>
  );
}
