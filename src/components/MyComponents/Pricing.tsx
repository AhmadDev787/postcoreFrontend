// components/PricingCTA.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PricingCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.995 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl bg-[linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))] border border-[rgba(255,255,255,0.03)] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-2xl font-bold text-white">
            Ready to scale content production?
          </h3>
          <p className="mt-2 text-lux-gray">
            Start with a free trial. Pause or cancel anytime.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/signup">
            <Button className="rounded-xl bg-lux-blue text-lux-dark px-6 py-3 shadow-lg">
              Start free trial
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              variant="outline"
              className="rounded-xl border border-[rgba(255,255,255,0.06)] text-lux-gray px-5 py-3"
            >
              Compare plans
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
