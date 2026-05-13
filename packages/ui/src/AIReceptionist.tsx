"use client";

import React from "react";
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

interface AIReceptionistProps {
  agentId: string;
}

export function AIReceptionist({ agentId }: AIReceptionistProps) {
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
