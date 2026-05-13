"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PracticeAreaCardProps {
  icon: string;
  title: string;
  excerpt: string;
  slug: string;
  index?: number;
}

export function PracticeAreaCard({ icon, title, excerpt, slug, index = 0 }: PracticeAreaCardProps) {
  return (
    <motion.a
      href={`/${slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(185,28,28,0.25)" }}
      className="group bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-shadow hover:border-red-200"
    >
      <div className="w-14 h-14 bg-red-50 group-hover:bg-red-700 rounded-xl flex items-center justify-center text-2xl transition-colors duration-300">
        <span className="group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</span>
      </div>
      <div>
        <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-red-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
      </div>
      <div className="flex items-center gap-1 text-red-700 font-bold text-sm mt-auto">
        Learn More
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </div>
    </motion.a>
  );
}
