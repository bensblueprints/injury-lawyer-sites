"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { useState, useEffect } from "react";
import { openElevenLabsWidget } from "./AIReceptionist";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

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
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-red-700 shadow-2xl"
          >
            <button
              onClick={openElevenLabsWidget}
              className="w-full h-14 flex items-center justify-center gap-3 text-white font-black text-base"
            >
              <Mic className="w-5 h-5" />
              Talk to a Lawyer — Free
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom padding on mobile so content isn't hidden by sticky bar */}
      <div className="h-14 lg:hidden" />
    </>
  );
}
