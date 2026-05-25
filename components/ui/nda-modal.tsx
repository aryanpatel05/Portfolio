"use client";

import { useEffect } from "react";

type NdaModalProps = {
  open: boolean;
  onClose: () => void;
  projectTitle?: string;
};

export function NdaModal({ open, onClose, projectTitle }: NdaModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="nda-modal-title"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#04071d] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl leading-none text-white/50 transition hover:text-white"
        >
          ×
        </button>

        <p className="text-xs font-medium uppercase tracking-wider text-purple">
          Confidential
        </p>
        <h2
          id="nda-modal-title"
          className="mt-2 text-xl font-bold text-white sm:text-2xl"
        >
          Project in progress
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#c1c2d3]">
          {projectTitle ? (
            <>
              <span className="text-white">{projectTitle}</span> is currently in
              development and covered under an NDA. A live preview is not
              available at this time.
            </>
          ) : (
            <>
              This project is currently in development and covered under an NDA.
              A live preview is not available at this time.
            </>
          )}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg border border-white/10 bg-[#10132e] py-2.5 text-sm font-medium text-white transition hover:border-purple/40"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
