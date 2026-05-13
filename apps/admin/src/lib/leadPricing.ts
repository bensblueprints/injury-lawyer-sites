export const LEAD_PRICING = {
  FORM_FILL: {
    label: "Form Fill Lead",
    basePrice: 200,
    description: "Web form submission with contact info and case details",
  },
  AI_CALL: {
    label: "AI Call Lead",
    basePrice: 500,
    description: "AI receptionist call with transcript and qualified info",
  },
  HOT_TRANSFER: {
    label: "Qualified Hot Transfer",
    basePrice: 2000,
    description: "Live transfer of verified, qualified prospective client",
  },
} as const;

export const PROCESSING_FEE_RATE = 0.05;

export function getPriceWithFee(basePrice: number) {
  const fee = Math.round(basePrice * PROCESSING_FEE_RATE * 100) / 100;
  return { subtotal: basePrice, processingFee: fee, total: basePrice + fee };
}
