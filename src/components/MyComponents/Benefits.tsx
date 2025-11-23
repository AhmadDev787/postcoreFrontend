"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Rocket, Lightbulb, Timer } from "lucide-react";

export default function AdvancedBenefits() {
  const benefits = [
    {
      title: "Instant AI Content Ideas",
      desc: "Never run out of post ideas again — get fresh, engaging content tailored to your brand in seconds.",
      icon: <Lightbulb size={30} />,
    },
    {
      title: "Save 10+ Hours Weekly",
      desc: "AI automates your weekly planning, captions, and hashtags so you focus only on scaling your business.",
      icon: <Timer size={30} />,
    },
    {
      title: "Boost Engagement by 67%",
      desc: "Our trend-aware AI generates viral-ready ideas designed to grow your audience across all platforms.",
      icon: <Rocket size={30} />,
    },
    {
      title: "Consistent Posting = More Sales",
      desc: "Your brand stays active 24/7 with automated planning and smart content reminders.",
      icon: <Sparkles size={30} />,
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[var(--color-lux-dark)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/lux-pattern.svg')] bg-cover bg-center" />

      {/* Soft Glow Light Effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--color-lux-blue)] rounded-full blur-[140px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-[160px] opacity-10" />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-[var(--color-lux-gray)]"
        >
          Why Marketers Love Our AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-lg text-[var(--color-lux-gray)]/80 max-w-2xl mx-auto"
        >
          Our platform turns your social media strategy into a revenue-driving
          machine — powered by next-generation AI built for serious creators &
          agencies.
        </motion.p>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-[var(--color-lux-dark)] border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_25px_rgba(56,182,255,0.25)] transition-all group"
            >
              {/* Icon */}
              <div className="text-[var(--color-lux-blue)] mb-4">{b.icon}</div>

              <h3 className="text-xl font-semibold text-[var(--color-lux-gray)]">
                {b.title}
              </h3>

              <p className="mt-3 text-[var(--color-lux-gray)]/70 text-sm leading-relaxed">
                {b.desc}
              </p>

              {/* Check Icon Bottom Right */}
              <CheckCircle
                className="absolute bottom-4 right-4 text-[var(--color-lux-blue)] opacity-70 group-hover:opacity-100 transition"
                size={22}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
