"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import type { SiteConfig } from "@injury/schema";
import { useState } from "react";
import { FindLawyerModal } from "./FindLawyerModal";

interface CTABoxProps {
  config: SiteConfig;
  headline?: string;
  body?: string;
  variant?: "red" | "dark" | "outline";
}

export function CTABox({
  config,
  headline = "Injured? Get a Free Case Review Now.",
  body = "Our attorneys are available 24/7. We handle all communication with insurance companies so you can focus on healing.",
  variant = "red",
}: CTABoxProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const bgClass =
    variant === "red"
      ? "bg-gradient-to-r from-red-700 to-red-800 text-white"
      : variant === "dark"
      ? "bg-gray-900 text-white"
      : "bg-white border-2 border-red-700";

  const textClass = variant === "outline" ? "text-gray-900" : "text-white";
  const subTextClass = variant === "outline" ? "text-gray-600" : "text-red-100";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-2xl p-7 my-8 ${bgClass}`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <h3 className={`font-black text-xl mb-1.5 ${textClass}`}>{headline}</h3>
            <p className={`text-sm leading-relaxed ${subTextClass}`}>{body}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 bg-white text-red-700 font-black px-5 py-3 rounded-xl text-sm shadow-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Find a Lawyer <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              href={`tel:${config.phone}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-black/20 hover:bg-black/30 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap border border-white/20"
            >
              <Phone className="w-4 h-4" /> Call Now
            </motion.a>
          </div>
        </div>
      </motion.div>
      <FindLawyerModal config={config} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
