export function ConsultationIcon({ name, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="9" y="11" width="30" height="29" rx="3" />
        <path d="M16 7v8M32 7v8M9 19h30" />
        <path d="m18 29 4 4 8-9" />
      </svg>
    );
  }

  if (name === "quote") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M14 7h16l8 8v26H14z" />
        <path d="M30 7v9h8M20 23h12M20 29h8" />
        <circle cx="34" cy="34" r="6" />
        <path d="m31.5 34 2 2 3.5-4" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M13 38 15 31a17 17 0 1 1 6 4z" />
        <path d="M19 17c.5 7 5 11.5 12 12l3-4-4-3-2 2c-3-1-5-3-6-6l2-2-3-4z" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M17 9h7l3 8-5 3c2 4 5 7 9 9l3-5 8 3v7c0 3-2 5-5 5C21 39 9 27 9 11c0-3 2-5 5-5" />
        <path d="M33 10c3 1 5 3 6 6M32 17c1 .5 2 1.5 2.5 2.5" />
      </svg>
    );
  }

  if (name === "design") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M10 36 36 10l4 4-26 26H10z" />
        <path d="m31 15 2 2M11 27l10 10M30 32h9M34 27v10" />
      </svg>
    );
  }

  if (name === "percent") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M13 35 35 13" />
        <circle cx="16" cy="16" r="5" />
        <circle cx="32" cy="32" r="5" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 6 15 6v10c0 10-6 16-15 20C15 38 9 32 9 22V12z" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <circle cx="24" cy="24" r="17" />
        <path d="M24 14v11l7 4" />
      </svg>
    );
  }

  if (name === "layout") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="8" y="9" width="14" height="13" rx="2" />
        <rect x="26" y="9" width="14" height="13" rx="2" />
        <rect x="8" y="26" width="14" height="13" rx="2" />
        <rect x="26" y="26" width="14" height="13" rx="2" />
        <path d="M15 16h0M33 16h0M15 33h0M33 33h0" />
      </svg>
    );
  }

  if (name === "material") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M10 36c8-18 20-25 28-26-1 9-8 21-26 28" />
        <path d="M17 31c5-2 8-6 10-11M26 35l-7-7M33 27l-6-6" />
      </svg>
    );
  }

  if (name === "estimate") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M14 33c-4-2-6-5-6-9 0-6 5-11 12-11 3-5 12-4 15 1 4 1 7 5 7 10 0 6-5 10-11 10H20" />
        <path d="M18 25h10M18 31h14M18 37h8" />
      </svg>
    );
  }

  return null;
}
