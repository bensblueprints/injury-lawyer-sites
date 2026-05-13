"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import type { SiteConfig } from "@injury/schema";
import { useState, useEffect } from "react";
import { FindLawyerModal } from "./FindLawyerModal";

export function StickyBar({ config }: { config: SiteConfig }) {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-2xl"
          >
            <div className="flex items-stretch h-16">
              <a
                href={`tel:${config.phone}`}
                className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-gray-900 text-white"
              >
                <Phone className="w-5 h-5" />
                <span className="text-xs font-bold">Call Now</span>
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="flex-[2] flex items-center justify-center gap-2 bg-red-700 text-white font-black text-sm"
              >
                Find a Lawyer Now <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/free-consultation"
                className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-red-900 text-white"
              >
                <span className="text-lg">📋</span>
                <span className="text-xs font-bold">Free Case</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom padding on mobile so content isn't hidden by sticky bar */}
      <div className="h-16 lg:hidden" />

      <FindLawyerModal config={config} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
