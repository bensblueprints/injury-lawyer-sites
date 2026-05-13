"use client";

import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-50 border border-gray-100 rounded-xl p-5 my-6"
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 mb-3">
        <List className="w-4 h-4 text-red-700" />
        <span className="font-bold text-gray-900 text-sm">On This Page</span>
      </div>
      <ol className="space-y-1.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-2 text-sm text-gray-600 hover:text-red-700 transition-colors"
            >
              <span className="text-red-400 font-bold flex-shrink-0 text-xs mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}
