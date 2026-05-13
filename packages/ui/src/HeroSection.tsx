"use client";

import { motion } from "framer-motion";
import { Shield, Star, Award, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { SiteConfig } from "@injury/schema";
import { LeadForm } from "./LeadForm";
import { openElevenLabsWidget } from "./AIReceptionist";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface HeroSectionProps {
  config: SiteConfig;
  headline?: string;
  subheadline?: string;
  compact?: boolean;
  /** Override the default hero.webp with a practice-area-specific image */
  imageSrc?: string;
}

export function HeroSection({ config, headline, subheadline, compact = false, imageSrc = "/images/hero.webp" }: HeroSectionProps) {
  const h = headline ?? `${config.city}'s #1 Personal Injury Lawyers`;
  const sub =
    subheadline ??
    `Injured in ${config.city}? Our attorneys fight insurance companies and win. Free consultation. No fees unless we win your case.`;

  return (
    <>
      <section className={`relative flex items-center overflow-hidden bg-gray-950 ${compact ? "min-h-[50vh] py-12" : "min-h-[90vh]"}`}>
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={`${config.city} personal injury lawyer`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/85 via-gray-900/75 to-red-950/70" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-red-600"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-20 w-[700px] h-[700px] rounded-full bg-red-700"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              {/* Badge */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 bg-red-700/20 border border-red-700/40 rounded-full px-4 py-1.5 mb-6"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-red-500"
                />
                <span className="text-red-400 text-sm font-semibold">
                  Available 24/7 — Free Consultations
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
              >
                {h.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-red-500">
                  {h.split(" ").slice(-2).join(" ")}
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl"
              >
                {sub}
              </motion.p>

              {/* Trust signals */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-4 mb-8"
              >
                {[
                  { icon: <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />, label: "4.9★ Rating (127 Reviews)" },
                  { icon: <Shield className="w-4 h-4 text-green-400" />, label: "No Fee Unless We Win" },
                  { icon: <Award className="w-4 h-4 text-blue-400" />, label: "$50M+ Recovered" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {item.icon}
                    <span className="text-white text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={openElevenLabsWidget}
                  className="bg-red-700 hover:bg-red-600 text-white font-black px-8 py-4 rounded-xl text-lg shadow-xl shadow-red-900/40 transition-colors"
                >
                  Talk to a Lawyer Now →
                </motion.button>
                <motion.a
                  href={`tel:${config.phone}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl border border-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {config.phoneFormatted}
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Lead form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-red-700/90 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-red-600/40">
                <h2 className="text-white font-black text-xl mb-1">
                  Free Case Evaluation
                </h2>
                <p className="text-red-200 text-sm mb-5">
                  Tell us what happened — we'll call you within 15 minutes.
                </p>
                <LeadForm config={config} variant="hero" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

    </>
  );
}
