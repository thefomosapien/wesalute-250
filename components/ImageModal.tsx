"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  photo: {
    src: string;
    alt: string;
    caption: string;
    credit?: string;
  };
  year: string;
  onClose: () => void;
  isOpen: boolean;
}

export function ImageModal({ photo, year, onClose, isOpen }: ImageModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [imgError, setImgError] = useState(false);

  // Reset error state when photo changes
  useEffect(() => {
    setImgError(false);
  }, [photo.src]);

  // Focus close button on open
  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => closeRef.current?.focus());
      return () => cancelAnimationFrame(frame);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Archival photo — ${year}`}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(4px)",
        animation: "modal-backdrop-in 0.2s ease-out forwards",
      }}
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative w-full overflow-y-auto"
        style={{
          maxWidth: "680px",
          maxHeight: "90vh",
          background: "#001E33",
          border: "1px solid rgba(255,196,62,0.4)",
          animation: "modal-panel-in 0.25s ease-out forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close photo"
          className="absolute top-3 right-3 z-10 text-gold hover:text-cream transition-colors duration-200"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        >
          <X size={18} />
        </button>

        {/* Image */}
        {!imgError ? (
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="680px"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div
            className="w-full flex items-center justify-center"
            style={{ aspectRatio: "16/9", background: "#000F1C" }}
          >
            <span
              className="font-display font-bold text-gold"
              style={{ fontSize: "3rem", opacity: 0.25 }}
            >
              {year}
            </span>
          </div>
        )}

        {/* Metadata strip */}
        <div style={{ padding: "20px 24px 24px" }}>
          <div className="font-mono text-[11px] tracking-[0.3em] text-gold uppercase">
            {year}
          </div>
          <p
            className="font-display italic text-cream leading-[1.45]"
            style={{ fontSize: "1rem", marginTop: "6px" }}
          >
            {photo.caption}
          </p>
          {photo.credit && (
            <div
              className="font-mono text-[10px] text-cream"
              style={{ opacity: 0.4, marginTop: "10px" }}
            >
              Photo: {photo.credit}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
