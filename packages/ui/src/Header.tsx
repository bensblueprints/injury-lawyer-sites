"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import type { SiteConfig } from "@injury/schema";

const practiceAreas = [
  { label: "Car Accidents", slug: "car-accident-lawyer" },
  { label: "Truck Accidents", slug: "truck-accident-lawyer" },
  { label: "Motorcycle Accidents", slug: "motorcycle-accident-lawyer" },
  { label: "Slip & Fall", slug: "slip-and-fall-lawyer" },
  { label: "Medical Malpractice", slug: "medical-malpractice-lawyer" },
  { label: "Wrongful Death", slug: "wrongful-death-lawyer" },
  { label: "Workers' Comp", slug: "workers-compensation-lawyer" },
  { label: "Dog Bites", slug: "dog-bite-lawyer" },
  { label: "Product Liability", slug: "product-liability-lawyer" },
  { label: "Brain Injuries", slug: "brain-injury-lawyer" },
  { label: "Spinal Injuries", slug: "spinal-cord-injury-lawyer" },
  { label: "Pedestrian Accidents", slug: "pedestrian-accident-lawyer" },
];

export function Header({ config }: { config: SiteConfig }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceAreas = config.serviceAreas ?? [];
  const half = Math.ceil(serviceAreas.length / 2);
  const col1 = serviceAreas.slice(0, half);
  const col2 = serviceAreas.slice(half);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {/* Top bar */}
        <div className="bg-red-700 text-white text-sm py-1.5 px-4 text-center">
          <span>Available 24/7 — Free Consultations — No Fee Unless We Win</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">⚖</span>
              </div>
              <div>
                <div className="font-black text-gray-900 text-sm leading-tight">
                  {config.city}
                </div>
                <div className="font-black text-red-700 text-xs leading-tight uppercase tracking-wider">
                  Injury Lawyer
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Practice Areas dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-red-700 font-medium text-sm transition-colors"
                  onMouseEnter={() => setPracticeOpen(true)}
                  onMouseLeave={() => setPracticeOpen(false)}
                >
                  Practice Areas <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {practiceOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 p-2 z-50"
                      onMouseEnter={() => setPracticeOpen(true)}
                      onMouseLeave={() => setPracticeOpen(false)}
                    >
                      {practiceAreas.map((area) => (
                        <a
                          key={area.slug}
                          href={`/${area.slug}`}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors"
                        >
                          {area.label}
                        </a>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <a
                          href="/practice-areas"
                          className="block px-3 py-2 text-sm text-red-700 font-semibold hover:bg-red-50 rounded-md transition-colors"
                        >
                          All Practice Areas →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Service Areas dropdown */}
              {serviceAreas.length > 0 && (
                <div className="relative">
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-red-700 font-medium text-sm transition-colors"
                    onMouseEnter={() => setAreasOpen(true)}
                    onMouseLeave={() => setAreasOpen(false)}
                  >
                    Areas Served <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {areasOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg border border-gray-100 p-2 z-50"
                        style={{ minWidth: serviceAreas.length > 8 ? "320px" : "200px" }}
                        onMouseEnter={() => setAreasOpen(true)}
                        onMouseLeave={() => setAreasOpen(false)}
                      >
                        <div className={serviceAreas.length > 8 ? "grid grid-cols-2 gap-0.5" : "grid grid-cols-1 gap-0.5"}>
                          {col1.map((area) => (
                            <a
                              key={area.slug}
                              href={`/areas/${area.slug}`}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors"
                            >
                              {area.label}
                            </a>
                          ))}
                          {col2.map((area) => (
                            <a
                              key={area.slug}
                              href={`/areas/${area.slug}`}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors"
                            >
                              {area.label}
                            </a>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <a
                            href="/areas"
                            className="block px-3 py-2 text-sm text-red-700 font-semibold hover:bg-red-50 rounded-md transition-colors"
                          >
                            All Service Areas →
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <a href="/faq/general-personal-injury" className="text-gray-700 hover:text-red-700 font-medium text-sm transition-colors">
                FAQ
              </a>
              <a href="/about/about-us" className="text-gray-700 hover:text-red-700 font-medium text-sm transition-colors">
                About
              </a>
              <a href="/resources/local-resources" className="text-gray-700 hover:text-red-700 font-medium text-sm transition-colors">
                Resources
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${config.phone}`}
                className="flex items-center gap-2 text-gray-800 hover:text-red-700 font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-red-700" />
                <span>{config.phoneFormatted}</span>
              </a>
              <a
                href="/free-consultation"
                className="bg-red-700 hover:bg-red-800 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-md"
              >
                Free Consultation
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Practice Areas accordion */}
                <button
                  onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-red-50 rounded-md"
                >
                  Practice Areas
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobilePracticeOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobilePracticeOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-1 grid grid-cols-2 gap-0.5">
                        {practiceAreas.map((area) => (
                          <a
                            key={area.slug}
                            href={`/${area.slug}`}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md"
                          >
                            {area.label}
                          </a>
                        ))}
                      </div>
                      <a
                        href="/practice-areas"
                        className="block ml-4 px-3 py-2 text-sm text-red-700 font-semibold hover:bg-red-50 rounded-md"
                      >
                        All Practice Areas →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Service Areas accordion */}
                {serviceAreas.length > 0 && (
                  <>
                    <button
                      onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-red-50 rounded-md"
                    >
                      Areas Served
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileAreasOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-1 grid grid-cols-2 gap-0.5">
                            {serviceAreas.map((area) => (
                              <a
                                key={area.slug}
                                href={`/areas/${area.slug}`}
                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md"
                              >
                                {area.label}
                              </a>
                            ))}
                          </div>
                          <a
                            href="/areas"
                            className="block ml-4 px-3 py-2 text-sm text-red-700 font-semibold hover:bg-red-50 rounded-md"
                          >
                            All Service Areas →
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}

                <div className="border-t border-gray-100 pt-3 mt-2 space-y-1">
                  <a href="/faq/general-personal-injury" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 rounded-md">FAQ</a>
                  <a href="/about/about-us" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 rounded-md">About</a>
                  <a href="/resources/local-resources" className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 rounded-md">Resources</a>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3 flex flex-col gap-2">
                  <a
                    href={`tel:${config.phone}`}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3 rounded-lg"
                  >
                    <Phone className="w-4 h-4" /> Call {config.phoneFormatted}
                  </a>
                  <a
                    href="/free-consultation"
                    className="flex items-center justify-center bg-red-700 text-white font-bold py-3 rounded-lg"
                  >
                    Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-[104px]" />
    </>
  );
}
