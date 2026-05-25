"use client";

import { techStackItems } from "@/data";

export function TechStackCarousel() {
  const marqueeItems = [...techStackItems, ...techStackItems];

  return (
    <div className="relative z-20 mt-5 w-full sm:mt-6">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-tech-marquee items-center gap-3 sm:gap-4">
          {marqueeItems.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="shrink-0 rounded-lg border border-white/[0.08] bg-[#10132e] px-3 py-1.5 text-xs font-medium text-white/90 sm:px-4 sm:py-2 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
