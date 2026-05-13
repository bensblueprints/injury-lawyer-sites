import Image from "next/image";
import type { ReactNode } from "react";

export const PRACTICE_AREA_IMAGE_MAP: Record<string, string> = {
  "car-accident-lawyer": "/images/car-accident.webp",
  "truck-accident-lawyer": "/images/truck-accident.webp",
  "motorcycle-accident-lawyer": "/images/motorcycle-accident.webp",
  "slip-and-fall-lawyer": "/images/slip-fall.webp",
  "medical-malpractice-lawyer": "/images/medical-malpractice.webp",
  "wrongful-death-lawyer": "/images/wrongful-death.webp",
  "workers-compensation-lawyer": "/images/workers-comp.webp",
  "dog-bite-lawyer": "/images/dog-bite.webp",
  "product-liability-lawyer": "/images/product-liability.webp",
  "brain-injury-lawyer": "/images/brain-injury.webp",
  "spinal-cord-injury-lawyer": "/images/spinal-injury.webp",
  "pedestrian-accident-lawyer": "/images/pedestrian-accident.webp",
};

interface PageHeroSectionProps {
  children: ReactNode;
  /** Practice area slug — auto-resolves the background image */
  practiceAreaSlug?: string;
  /** Explicit image path override */
  imageSrc?: string;
  /** Alt text for the background image */
  imageAlt?: string;
  className?: string;
}

export function PageHeroSection({
  children,
  practiceAreaSlug,
  imageSrc,
  imageAlt = "Personal injury law background",
  className = "",
}: PageHeroSectionProps) {
  const resolvedSrc = imageSrc ?? (practiceAreaSlug ? PRACTICE_AREA_IMAGE_MAP[practiceAreaSlug] : null);

  return (
    <section className={`relative bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 py-16 ${className}`}>
      {resolvedSrc && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={resolvedSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-gray-900/70 to-red-950/60" />
        </div>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
