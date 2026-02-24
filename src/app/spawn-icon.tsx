import type { CSSProperties } from "react";

interface SpawnIconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export function SpawnIcon({ size, className, style }: SpawnIconProps) {
  const s = size !== undefined ? size : 16;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* hub */}
      <circle cx="12" cy="12" r="2.5" />
      {/* 6 spokes at 60° intervals */}
      <line x1="14.5"  y1="12"    x2="20.5"  y2="12"   />
      <line x1="13.25" y1="14.17" x2="16.25" y2="19.2"  />
      <line x1="10.75" y1="14.17" x2="7.75"  y2="19.2"  />
      <line x1="9.5"   y1="12"    x2="3.5"   y2="12"   />
      <line x1="10.75" y1="9.83"  x2="7.75"  y2="4.8"   />
      <line x1="13.25" y1="9.83"  x2="16.25" y2="4.8"   />
      {/* terminal nodes */}
      <circle cx="21"    cy="12"    r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16.75" cy="19.7"  r="1.5" fill="currentColor" stroke="none" />
      <circle cx="7.25"  cy="19.7"  r="1.5" fill="currentColor" stroke="none" />
      <circle cx="3"     cy="12"    r="1.5" fill="currentColor" stroke="none" />
      <circle cx="7.25"  cy="4.3"   r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16.75" cy="4.3"   r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
