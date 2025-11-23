// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg, rgba(1,11,25,1), rgba(1,11,25,0.98))] border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-lux-blue" />
            <span className="text-lux-gray font-semibold">IdeaFlux</span>
          </div>
          <p className="mt-4 text-sm text-lux-gray max-w-xs">
            AI content ideas & workflows for teams. Built for marketers who
            ship.
          </p>
        </div>

        <div className="flex gap-8">
          <div>
            <h4 className="text-white font-medium">Product</h4>
            <ul className="mt-3 text-lux-gray space-y-2">
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/docs">Docs</Link>
              </li>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-3 text-lux-gray space-y-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium">Get in touch</h4>
          <p className="mt-3 text-lux-gray text-sm">hello@ideaflux.ai</p>
          <p className="mt-2 text-lux-gray text-xs">
            © {new Date().getFullYear()} IdeaFlux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
