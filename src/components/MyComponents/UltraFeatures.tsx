"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, Palette, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Brain size={22} />,
    title: "AI Made for Marketers",
    desc: "IdeaFlux analyzes trends, brand tone, competitor content and creates weekly content ideas tailored to your product — not generic prompts.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Instant Weekly Calendar",
    desc: "Turn a single keyword into a full 7-day posting schedule — captions, hooks, CTAs, hashtags and visuals generated automatically.",
  },
  {
    icon: <Palette size={22} />,
    title: "Brand-Perfect Creativity",
    desc: "AI that adapts to your writing style. Choose vibes: luxury, bold, friendly, corporate. Every output feels on-brand.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Consistent Quality Every Time",
    desc: "No burnout. No blank-screen moments. Just high-quality, optimized, scroll-stopping content — every single day.",
  },
];

export default function UltraFeatures() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background pattern + glow effects */}
      <div className="absolute inset-0 bg-lux-dark">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.35)_1px,transparent_1px)] " />

        {/* Luxury glow blobs */}
        <div className="absolute -top-32 left-1/3 w-[420px] h-[420px] bg-lux-blue opacity-20 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 right-1/4 w-[380px] h-[380px] bg-[#38b6ff55] opacity-20 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why marketers <span className="text-lux-blue">love IdeaFlux</span>
          </h2>

          <p className="mt-4 text-lux-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Our AI engine doesn’t just generate content — it builds your entire
            creative workflow. Faster ideas. Higher engagement. Zero effort.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="
                relative p-6 rounded-2xl 
                bg-[rgba(255,255,255,0.03)] 
                border border-[rgba(255,255,255,0.08)]
                backdrop-blur-md
                shadow-[0_18px_60px_rgba(1,11,25,0.45)]
                hover:shadow-[0_28px_80px_rgba(56,182,255,0.18)]
                hover:bg-[rgba(56,182,255,0.05)]
                transition-all duration-300
              "
            >
              <div
                className="
                  w-14 h-14 rounded-xl flex items-center justify-center 
                  bg-[rgba(56,182,255,0.12)] 
                  text-lux-blue
                  shadow-[0_8px_24px_rgba(56,182,255,0.14)]
                "
              >
                {f.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {f.title}
              </h3>

              <p className="mt-3 text-sm text-lux-gray leading-relaxed">
                {f.desc}
              </p>

              {/* Subtle hover light effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-10 transition-all duration-300 bg-[radial-gradient(circle_at_center,var(--color-lux-blue),transparent_60%)]" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold text-white">
            Build content smarter, not harder.
          </h3>

          <p className="mt-2 text-lux-gray max-w-xl mx-auto">
            Let AI handle ideation so you can focus on strategy, creativity, and
            actually growing your brand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
