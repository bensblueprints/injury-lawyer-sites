"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, Clock, ExternalLink, MessageSquare } from "lucide-react";
import type { SiteConfig } from "@injury/schema";
import { useEffect } from "react";

interface FindLawyerModalProps {
  config: SiteConfig;
  open: boolean;
  onClose: () => void;
}

export function FindLawyerModal({ config, open, onClose }: FindLawyerModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-red-700 to-red-900 p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-red-200 text-xs font-semibold uppercase tracking-widest mb-2">
                  Your {config.city} Injury Attorney
                </p>

                {/* Lawyer card */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-4xl shadow-lg flex-shrink-0">
                    ⚖️
                  </div>
                  <div>
                    <h2 className="text-white font-black text-xl leading-tight">
                      {config.lawyerName}
                    </h2>
                    <p className="text-red-200 text-sm">{config.firmName}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {"★★★★★".split("").map((s, i) => (
                        <span key={i} className="text-yellow-400 text-xs">{s}</span>
                      ))}
                      <span className="text-red-200 text-xs ml-1">4.9 (127 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <a href={`tel:${config.phone}`} className="font-bold text-gray-900 hover:text-red-700 transition-colors">
                        {config.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <a href={`mailto:${config.email}`} className="font-bold text-gray-900 hover:text-red-700 transition-colors text-sm">
                        {config.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-red-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Address</p>
                      <p className="font-medium text-gray-900 text-sm">{config.address}</p>
                    </div>
                    <a
                      href={config.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:text-red-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Office Hours</p>
                      <p className="font-medium text-gray-900 text-sm">Mon–Fri 8am–6pm, Sat 9am–2pm</p>
                      <p className="text-xs text-green-600 font-semibold">24/7 Emergency Line Available</p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <motion.a
                    href={`tel:${config.phone}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-black py-3.5 rounded-xl transition-colors shadow-lg shadow-red-900/25"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </motion.a>
                  <motion.a
                    href={`mailto:${config.email}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black py-3.5 rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </motion.a>
                </div>

                <p className="text-center text-xs text-gray-400">
                  Free consultation — No fee unless we win your case
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
