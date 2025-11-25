"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LuxuryCTA() {
  return (
    <section className="relative w-full overflow-hidden py-24 bg-[#010b19] text-white">
      {/* Soft Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-10 left-0 w-[500px] h-[500px] rounded-full bg-[#38b6ff] blur-[180px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#d9d9d9] blur-[200px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#d9d9d9] tracking-tight">
            Transform Your Content Strategy
            <span className="block text-[#38b6ff]">With AI Precision</span>
          </h1>

          <p className="text-lg md:text-xl text-[#d9d9d9]/70 max-w-md leading-relaxed">
            Get daily, personalised content ideas crafted for your brand.
            Designed to help you grow faster, engage better, and stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button className="bg-[#38b6ff] text-[#010b19] font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:bg-[#2ba8f0] transition-all flex items-center gap-2">
              Subscribe Now <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              className="border-[#38b6ff] text-[#38b6ff] px-8 py-6 text-lg rounded-xl hover:bg-[#38b6ff]/10 transition-all"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Right Side - Luxury Illustration */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] aspect-square rounded-3xl bg-gradient-to-br from-[#0b1528] to-[#06101f] border border-white/10 shadow-2xl p-8 flex items-center justify-center overflow-hidden">
            <Image
              src="/image.png"
              alt="Premium Idea Illustration"
              fill
              className="object-cover opacity-90 drop-shadow-[0_20px_50px_rgba(56,182,255,0.35)]"
            />

            {/* Floating Particles */}
            <Sparkles className="absolute top-6 left-6 w-7 h-7 text-[#38b6ff] opacity-70 animate-pulse" />
            <Sparkles className="absolute bottom-6 right-6 w-7 h-7 text-[#d9d9d9] opacity-70 animate-pulse" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="absolute inset-0 bg-[radial-gradient(circle,rgba(56,182,255,0.25)_0%,transparent_70%)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
