"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

interface NeighborhoodCardProps {
  name: string;
  slug: string;
  description: string;
  index?: number;
}

export function NeighborhoodCard({ name, slug, description, index = 0 }: NeighborhoodCardProps) {
  return (
    <motion.a
      href={`/areas/${slug}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="group flex items-start gap-3 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl p-4 transition-all cursor-pointer"
    >
      <div className="w-9 h-9 bg-white group-hover:bg-red-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm transition-colors mt-0.5">
        <MapPin className="w-4 h-4 text-red-700 group-hover:text-white transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors text-sm mb-0.5">
          {name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-red-700 transition-colors flex-shrink-0 mt-1" />
    </motion.a>
  );
}
