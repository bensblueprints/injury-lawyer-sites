"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Phone, Loader2 } from "lucide-react";
import type { SiteConfig } from "@injury/schema";

interface FormData {
  name: string;
  phone: string;
  email: string;
  caseType: string;
  description: string;
}

const caseTypes = [
  "Car Accident",
  "Truck Accident",
  "Motorcycle Accident",
  "Slip & Fall",
  "Medical Malpractice",
  "Wrongful Death",
  "Workers' Compensation",
  "Dog Bite",
  "Pedestrian Accident",
  "Product Liability",
  "Other Injury",
];

interface LeadFormProps {
  config: SiteConfig;
  variant?: "hero" | "sidebar" | "footer" | "modal";
}

export function LeadForm({ config, variant = "hero" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: variant }),
      });
      setSubmitted(true);
    } catch {
      // fail silently — lead is still logged server-side
    } finally {
      setLoading(false);
    }
  };

  const isCompact = variant === "sidebar" || variant === "footer";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3 py-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CheckCircle className="w-14 h-14 text-green-500" />
          </motion.div>
          <h3 className="text-xl font-black text-white">We Got Your Request!</h3>
          <p className="text-red-100 max-w-sm">
            A {config.city} injury attorney will call you within 15 minutes.
            Can't wait?{" "}
            <a href={`tel:${config.phone}`} className="underline font-bold">
              Call us now: {config.phoneFormatted}
            </a>
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className={`space-y-3 ${isCompact ? "text-sm" : ""}`}
        >
          {/* Name + Phone row */}
          <div className={`grid gap-3 ${isCompact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Your Full Name *"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.name ? "border-yellow-400" : "border-white/20"
                } text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all`}
              />
              {errors.name && (
                <p className="text-yellow-300 text-xs mt-1">Name is required</p>
              )}
            </div>
            <div>
              <input
                {...register("phone", { required: true, pattern: /^[\d\s()\-+]{7,}$/ })}
                placeholder="Phone Number *"
                type="tel"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.phone ? "border-yellow-400" : "border-white/20"
                } text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all`}
              />
              {errors.phone && (
                <p className="text-yellow-300 text-xs mt-1">Valid phone required</p>
              )}
            </div>
          </div>

          {/* Email */}
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            placeholder="Email Address *"
            type="email"
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
              errors.email ? "border-yellow-400" : "border-white/20"
            } text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all`}
          />

          {/* Case type */}
          <select
            {...register("caseType", { required: true })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/60 transition-all appearance-none"
            style={{ colorScheme: "dark" }}
          >
            <option value="" className="text-gray-900">Type of Injury / Case</option>
            {caseTypes.map((t) => (
              <option key={t} value={t} className="text-gray-900">{t}</option>
            ))}
          </select>

          {/* Description — only in hero/modal */}
          {!isCompact && (
            <textarea
              {...register("description")}
              placeholder="Briefly describe what happened (optional)"
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all resize-none"
            />
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-white text-red-700 font-black py-4 rounded-lg text-base hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                Get My Free Case Review
              </>
            )}
          </motion.button>

          <p className="text-center text-white/60 text-xs">
            Or call directly:{" "}
            <a href={`tel:${config.phone}`} className="text-white font-bold hover:text-yellow-300 transition-colors inline-flex items-center gap-1">
              <Phone className="w-3 h-3" />
              {config.phoneFormatted}
            </a>
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
