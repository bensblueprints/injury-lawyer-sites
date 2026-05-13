"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  body: string;
}

export function ProcessSteps({ steps, title = "How It Works" }: { steps: Step[]; title?: string }) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">{title}</h2>
      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200" />
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-20 h-20 bg-red-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-900/30">
                <span className="text-white font-black text-2xl">{step.number}</span>
              </div>
              <h3 className="font-black text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
