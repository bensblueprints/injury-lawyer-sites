"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  title?: string;
  label?: string;
  href: string;
  excerpt?: string;
}

export function RelatedPages({ pages, title, heading }: { pages: RelatedPage[]; title?: string; heading?: string }) {
  const sectionTitle = title ?? heading ?? "You May Also Find Helpful";
  return (
    <section className="mt-12 pt-8 border-t border-gray-100">
      <h2 className="text-xl font-black text-gray-900 mb-5">{sectionTitle}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page, i) => {
          const pageTitle = page.title ?? page.label ?? "";
          return (
            <motion.a
              key={page.href}
              href={page.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="group block bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl p-4 transition-all"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-red-700 text-sm mb-1 transition-colors">
                {pageTitle}
              </h3>
              {page.excerpt && (
                <p className="text-xs text-gray-500 line-clamp-2 mb-2">{page.excerpt}</p>
              )}
              <span className="text-xs text-red-700 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
