"use client";

import { motion } from "framer-motion";
import { Shield, Star, Award, Users, Clock, Zap } from "lucide-react";
import type { SiteConfig } from "@injury/schema";

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "$50M+", label: "Recovered for Clients" },
  { icon: <Users className="w-6 h-6" />, value: "2,000+", label: "Cases Won" },
  { icon: <Star className="w-6 h-6" />, value: "4.9★", label: "Average Rating" },
  { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Available to You" },
  { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Free Consultation" },
  { icon: <Zap className="w-6 h-6" />, value: "15 Min", label: "Response Time" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TrustBar(_props?: { config?: SiteConfig }) {
  return (
    <section className="bg-white border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center text-red-700 mb-3 transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl font-black text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
