"use client";

import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "agent-id": string },
        HTMLElement
      >;
    }
  }
}

// Dispatch this event from any button to open the ElevenLabs widget
export const OPEN_WIDGET_EVENT = "open-elevenlabs-widget";

export function openElevenLabsWidget() {
  window.dispatchEvent(new CustomEvent(OPEN_WIDGET_EVENT));
}

interface AIReceptionistProps {
  agentId: string;
}

export function AIReceptionist({ agentId }: AIReceptionistProps) {
  useEffect(() => {
    const handleOpen = () => {
      const widget = document.querySelector("elevenlabs-convai");
      if (!widget) return;
      // Try shadow DOM button click first
      const shadowBtn = (widget as Element & { shadowRoot?: ShadowRoot }).shadowRoot?.querySelector("button");
      if (shadowBtn) {
        (shadowBtn as HTMLElement).click();
        return;
      }
      // Fallback: scroll widget into view
      widget.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener(OPEN_WIDGET_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_WIDGET_EVENT, handleOpen);
  }, []);

  if (!agentId) return null;
  return (
    <>
      <Script
        src="https://elevenlabs.io/convai-widget/index.js"
        strategy="lazyOnload"
      />
      <elevenlabs-convai agent-id={agentId} />
    </>
  );
}
