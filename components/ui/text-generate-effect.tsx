"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  highlightFrom = 4,
  highlightIndices,
  compact = false,
  nowrap = false,
}: {
  words: string;
  className?: string;
  /** Word index (0-based) where purple starts through end of line. */
  highlightFrom?: number;
  /** Only these word indexes are purple (e.g. Web + Apps). */
  highlightIndices?: number[];
  /** Removes extra vertical margin when stacking multiple lines in the hero. */
  compact?: boolean;
  nowrap?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  return (
    <div className={cn("font-bold", className)}>
      <div className={cn(!compact && "my-4")}>
        <motion.div
          ref={scope}
          className={cn(
            "block leading-[1.15] tracking-wide text-black dark:text-white",
            nowrap && "whitespace-nowrap"
          )}
        >
          {wordsArray.map((word, idx) => {
            const isPurple = highlightIndices
              ? highlightIndices.includes(idx)
              : idx >= highlightFrom;

            return (
              <motion.span
                key={`${word}-${idx}`}
                className={cn(
                  "opacity-0",
                  isPurple ? "text-purple" : "text-white"
                )}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
