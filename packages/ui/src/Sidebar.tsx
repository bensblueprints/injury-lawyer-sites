"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import type { SiteConfig } from "@injury/schema";
import { LeadForm } from "./LeadForm";
import { useState } from "react";
import { FindLawyerModal } from "./FindLawyerModal";

interface SidebarProps {
  config: SiteConfig;
  relatedLinks?: { label: string; href: string }[];
  links?: { label: string; href: string }[];
  heading?: string;
}

export function Sidebar({ config, relatedLinks, links, heading }: SidebarProps) {
  const allLinks = relatedLinks ?? links ?? [];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <aside className="space-y-6">
        {/* Lead form card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-700 rounded-2xl p-6 sticky top-28"
        >
          <h3 className="text-white font-black text-lg mb-1">
            Free Case Review
          </h3>
          <p className="text-red-200 text-sm mb-4">
            Response within 15 minutes.
          </p>
          <LeadForm config={config} variant="sidebar" />

          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-sm transition-colors border border-white/20"
          >
            Find a Lawyer Now →
          </button>

          <div className="mt-4 pt-4 border-t border-red-600 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-red-300" />
            <a href={`tel:${config.phone}`} className="text-white font-black hover:text-yellow-300 transition-colors">
              {config.phoneFormatted}
            </a>
          </div>
        </motion.div>

        {/* Related links */}
        {allLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
              {heading ?? "Related Topics"}
            </h3>
            <ul className="space-y-1">
              {allLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-red-700 transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </aside>

      <FindLawyerModal config={config} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
