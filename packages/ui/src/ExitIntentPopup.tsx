"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle } from "lucide-react";
import type { SiteConfig } from "@injury/schema";
import { useState, useEffect, useRef } from "react";
import { LeadForm } from "./LeadForm";

export function ExitIntentPopup({ config }: { config: SiteConfig }) {
  const [open, setOpen] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown.current) {
        shown.current = true;
        setOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="fixed inset-0 z-[91] flex items-center justify-center px-4 pointer-events-none"
          >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full max-w-md pointer-events-auto"
          >
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 relative">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Wait!</p>
                    <h2 className="text-white font-black text-xl leading-tight">
                      Don't Leave Without Your Free Case Review
                    </h2>
                  </div>
                </div>

                <p className="text-red-200 text-sm mb-5 leading-relaxed">
                  You may be owed thousands of dollars in compensation. Our {config.city} attorneys
                  are ready to fight for you — at zero cost unless we win.
                </p>

                <LeadForm config={config} variant="modal" />
              </div>

              <div className="bg-black/20 px-6 py-3 text-center">
                <button
                  onClick={() => setOpen(false)}
                  className="text-red-300 hover:text-white text-xs transition-colors"
                >
                  No thanks, I don't want compensation
                </button>
              </div>
            </div>
          </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
