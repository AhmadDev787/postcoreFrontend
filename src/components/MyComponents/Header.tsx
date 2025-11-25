// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const nav = [
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Docs", href: "/docs" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[rgba(1,11,25,0.6)] backdrop-blur-sm border-b border-[rgba(255,255,255,0.03)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Minimal logo */}
          <Image
            alt="postcore ai's logo"
            src={"/logoNoBg.png"}
            height={250}
            width={80}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lux-gray hover:text-lux-blue transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          {/* <Link href="/login" className="ml-2">*/}
          {/* <Button className="rounded-xl bg-lux-blue text-lux-dark hover:text-lux-blue hover:bg-lux-dark cursor-pointer px-5 py-2 shadow-lg"> */}
          <div className="flex items-center cursor-pointer gap-2">
            <SignedOut>
              <div className="rounded-xl bg-lux-blue text-lux-dark hover:text-lux-blue hover:bg-lux-dark cursor-pointer px-5 py-2 shadow-lg">
                <SignInButton />
              </div>
              <div className="rounded-xl bg-lux-blue text-lux-dark hover:text-lux-blue hover:bg-lux-dark cursor-pointer px-5 py-2 shadow-lg">
                <SignUpButton></SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {/* </Button> */}
          {/*</Link> */}
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-lux-gray hover:text-lux-blue"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Animated mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden max-w-3xl mx-auto px-6 pb-6 space-y-4"
          >
            <div className="flex flex-col bg-[rgba(1,11,25,0.85)] rounded-xl p-4 border border-[rgba(255,255,255,0.03)]">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-2 text-lux-gray hover:text-lux-blue font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/login" className="mt-2">
                <Button className="w-full rounded-xl bg-lux-blue text-lux-dark hover:text-lux-blue hover:bg-lux-dark cursor-pointer py-2">
                  Login
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
