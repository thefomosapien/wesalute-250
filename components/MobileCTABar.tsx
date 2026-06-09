"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { TRAVEL_CASH_250_URL } from "@/lib/links";

export function MobileCTABar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-[150]"
      style={{
        background: "#001E33",
        borderTop: "2px solid rgba(255,196,62,0.5)",
        paddingBottom: "env(safe-area-inset-bottom)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.5)",
        animation: "modal-panel-in 0.3s ease-out forwards",
      }}
    >
      <div className="flex items-center gap-2 px-3 py-2.5">
        {/* Primary */}
        <a
          href={TRAVEL_CASH_250_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 font-condensed font-bold text-[13px] tracking-[0.18em] uppercase text-slate bg-gold flex items-center justify-center gap-2 transition-colors"
          style={{ height: "44px", textDecoration: "none" }}
        >
          Claim $250 Travel Cash
        </a>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="text-cream flex items-center justify-center shrink-0"
          style={{
            width: "32px",
            height: "44px",
            opacity: 0.4,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
