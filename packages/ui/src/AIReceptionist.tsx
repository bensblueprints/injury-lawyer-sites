"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Mic, X } from "lucide-react";
import { useConversation } from "@11labs/react";

interface AIReceptionistProps {
  agentId: string;
}

export function AIReceptionist({ agentId }: AIReceptionistProps) {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<"idle" | "calling" | "active" | "ended">("idle");

  const conversation = useConversation({
    onConnect: () => setPhase("active"),
    onDisconnect: () => setPhase("ended"),
    onError: () => setPhase("idle"),
  });

  const startCall = useCallback(async () => {
    setPhase("calling");
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId });
    } catch {
      setPhase("idle");
    }
  }, [agentId, conversation]);

  const endCall = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const close = useCallback(() => {
    endCall();
    setOpen(false);
    setPhase("idle");
  }, [endCall]);

  return (
    <>
      {/* Floating call button — bottom-right, above sticky bar */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-5 z-[80] w-14 h-14 rounded-full bg-red-600 shadow-xl shadow-red-900/50 flex items-center justify-center text-white"
        aria-label="Speak with our AI receptionist"
        title="Talk to our AI receptionist"
      >
        <Phone className="w-6 h-6" />
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-red-500"
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[85]"
              onClick={close}
            />

            {/* Dialog */}
            <motion.div
              className="fixed inset-0 z-[86] flex items-center justify-center p-4 pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="w-full max-w-sm pointer-events-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Header bar */}
                <div className="bg-gradient-to-r from-red-700 to-red-800 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">AI Legal Receptionist</p>
                      <p className="text-red-200 text-xs">
                        {phase === "idle" && "Available now — free consultation"}
                        {phase === "calling" && "Connecting…"}
                        {phase === "active" && "● Live — speak now"}
                        {phase === "ended" && "Call ended"}
                      </p>
                    </div>
                  </div>
                  <button onClick={close} className="text-white/60 hover:text-white transition-colors ml-2">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 text-center">
                  {phase === "idle" && (
                    <>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        Speak directly with our AI receptionist. Tell us about your situation and we'll connect you with an attorney within 24 hours — at no cost.
                      </p>
                      <button
                        onClick={startCall}
                        className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <Mic className="w-4 h-4" />
                        Start Free Consultation Call
                      </button>
                      <p className="text-gray-500 text-xs mt-3">Requires microphone access</p>
                    </>
                  )}

                  {phase === "calling" && (
                    <div className="py-6">
                      <div className="flex justify-center gap-1.5 mb-5">
                        {[0, 1, 2].map(i => (
                          <motion.div
                            key={i}
                            animate={{ scaleY: [1, 2.5, 1] }}
                            transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.18, ease: "easeInOut" }}
                            className="w-1.5 h-5 bg-red-500 rounded-full origin-bottom"
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm">Connecting to receptionist…</p>
                    </div>
                  )}

                  {phase === "active" && (
                    <div className="py-4">
                      <div className="flex justify-center gap-1 mb-4">
                        {[0, 1, 2, 3, 4].map(i => (
                          <motion.div
                            key={i}
                            animate={{ scaleY: [0.4, 1.8, 0.4] }}
                            transition={{ repeat: Infinity, duration: 0.55, delay: i * 0.09, ease: "easeInOut" }}
                            className="w-1.5 h-8 bg-green-400 rounded-full origin-center"
                          />
                        ))}
                      </div>
                      <p className="text-green-400 text-sm font-semibold mb-1">● Connected</p>
                      <p className="text-gray-400 text-xs mb-6">Speak naturally — the receptionist is listening</p>
                      <button
                        onClick={endCall}
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <PhoneOff className="w-4 h-4" />
                        End Call
                      </button>
                    </div>
                  )}

                  {phase === "ended" && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-green-900/40 flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <p className="text-white font-bold mb-2">Thank you!</p>
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        An attorney will follow up within 24 hours. You can also fill out the form below to make sure we have your details.
                      </p>
                      <a
                        href="#lead-form"
                        onClick={close}
                        className="w-full block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm"
                      >
                        Submit My Info
                      </a>
                      <button onClick={close} className="text-gray-500 hover:text-gray-300 text-xs mt-3 transition-colors">
                        Close
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
