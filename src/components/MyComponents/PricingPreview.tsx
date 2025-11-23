"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "$9/mo",
      desc: "Perfect for solo creators & freelancers.",
      features: [
        "AI Content Ideas",
        "Basic Weekly Planner",
        "5 Social Platforms",
        "Standard Support",
      ],
    },
    {
      name: "Growth",
      price: "$29/mo",
      desc: "Ideal for small businesses & marketers.",
      features: [
        "Advanced AI Content Ideas",
        "Unlimited Weekly Plans",
        "Multi-Brand Support",
        "Priority Support",
      ],
      highlight: true,
    },
    {
      name: "Agency",
      price: "$79/mo",
      desc: "Built for agencies managing multiple clients.",
      features: [
        "Team Workspace",
        "Client Dashboards",
        "Unlimited Brands",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[var(--color-lux-dark)] overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/lux-pattern.svg')] bg-cover bg-center" />

      {/* Glow lights */}
      <div className="absolute -top-16 right-0 w-96 h-96 bg-[var(--color-lux-blue)] rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-[200px] opacity-10" />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-[var(--color-lux-gray)]"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-lg text-[var(--color-lux-gray)]/80 max-w-2xl mx-auto"
        >
          Flexible plans designed for creators, small businesses, and agencies —
          no hidden fees.
        </motion.p>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl border p-8 shadow-xl transition-all 
                ${
                  plan.highlight
                    ? "border-[var(--color-lux-blue)] bg-[var(--color-lux-dark)]/70 shadow-[0_0_30px_rgba(56,182,255,0.18)]"
                    : "border-white/10 bg-[var(--color-lux-dark)]/50"
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-lux-blue)] text-[var(--color-lux-dark)] px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Best Value
                </div>
              )}

              <h3 className="text-2xl font-semibold text-[var(--color-lux-gray)]">
                {plan.name}
              </h3>

              <p className="mt-2 text-[var(--color-lux-gray)]/70 text-sm">
                {plan.desc}
              </p>

              <div className="mt-6 text-4xl font-bold text-[var(--color-lux-blue)]">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-[var(--color-lux-gray)]/80 text-sm"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[var(--color-lux-blue)]"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className={`block mt-8 w-full text-center py-3 rounded-xl font-semibold transition 
                  ${
                    plan.highlight
                      ? "bg-[var(--color-lux-blue)] text-[var(--color-lux-dark)] hover:opacity-90"
                      : "bg-white/10 text-[var(--color-lux-gray)] hover:bg-white/20"
                  }
                `}
              >
                View Full Pricing{" "}
                <ArrowRight className="inline-block ml-2" size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
