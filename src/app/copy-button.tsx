"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-btn ${copied ? "copy-btn--copied" : "copy-btn--default"}`}
    >
      {copied ? (
        <>
          <Check size={11} strokeWidth={1.6} />
          Copied
        </>
      ) : (
        <>
          <Copy size={11} strokeWidth={1.3} />
          Copy
        </>
      )}
    </button>
  );
}
