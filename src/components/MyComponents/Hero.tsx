// components/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Feather, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0",

          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
          "[background-size:36px_36px]"
        )}
      />

      <section className="max-w-7xl relative z-50  mx-auto px-6 md:px-10 py-10 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-[rgba(56,182,255,0.08)] text-lux-blue px-3 py-1 rounded-full mb-6">
              <Zap size={16} />
              <span className="text-sm font-medium text-lux-blue">
                AI-first idea engine
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Turn a spark of an idea into a week's worth of content —
              instantly.
            </h1>

            <p className="mt-6 text-lg text-lux-gray max-w-2xl">
              IdeaFlux gives marketing teams AI-powered content ideas, outlines,
              and copy variations with built-in brand tone controls and
              SEO-ready suggestions. Save time, scale faster, and stop staring
              at blank screens.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/signup">
                <Button className="rounded-xl bg-lux-blue text-lux-dark px-6 py-3 shadow-lg hover:brightness-95">
                  Get started — Free trial
                </Button>
              </Link>
              <Link href="/pricing" className="ml-0 sm:ml-3">
                <Button
                  variant="outline"
                  className="rounded-xl border border-[rgba(255,255,255,0.06)] text-lux-gray px-5 py-3"
                >
                  View pricing
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex gap-6 items-center">
              <div className="text-sm text-lux-gray">
                Trusted by
                <div className="mt-2 flex items-center gap-4">
                  <div className="w-20 h-8 bg-[rgba(255,255,255,0.03)] rounded flex items-center justify-center text-xs">
                    Acme
                  </div>
                  <div className="w-20 h-8 bg-[rgba(255,255,255,0.03)] rounded flex items-center justify-center text-xs">
                    Nova
                  </div>
                  <div className="w-20 h-8 bg-[rgba(255,255,255,0.03)] rounded flex items-center justify-center text-xs">
                    Orbit
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Illustration / card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[linear-gradient(135deg,rgba(56,182,255,0.06),rgba(217,217,217,0.03))] border border-[rgba(255,255,255,0.04)] rounded-2xl p-6 shadow-[0_30px_60px_rgba(1,11,25,0.6)]">
              {/* mock product preview */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">
                    AI Content Sprint
                  </h3>
                  <p className="text-xs text-lux-gray mt-1">
                    10 ready-to-publish ideas
                  </p>
                </div>
                <div className="text-xs text-lux-blue font-semibold">New</div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">
                  <h4 className="text-sm text-lux-gray font-medium">
                    Blog Idea
                  </h4>
                  <p className="mt-2 text-xs text-white">
                    AI: How to craft subject lines that convert
                  </p>
                </div>
                <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">
                  <h4 className="text-sm text-lux-gray font-medium">Ad Hook</h4>
                  <p className="mt-2 text-xs text-white">
                    AI: Doubled CTR in 14 days — here's how
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-lux-gray">
                  Tone: Professional • SEO: Optimized
                </div>
                <div className="text-xs text-lux-blue font-medium">
                  Generate → Edit → Publish
                </div>
              </div>
            </div>

            {/* subtle background pattern */}
            <div className="pointer-events-none absolute -inset-y-8 -right-10 w-72 h-72 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_10%_10%,rgba(56,182,255,0.18),rgba(1,11,25,0))]" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
