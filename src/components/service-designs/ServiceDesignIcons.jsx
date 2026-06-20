export function ServiceDesignIcon({ name, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "layers") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 7 18 9-18 9-18-9z" />
        <path d="m8 25 16 8 16-8M8 34l16 8 16-8" />
      </svg>
    );
  }

  if (name === "grid") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="8" y="8" width="13" height="13" rx="2" />
        <rect x="27" y="8" width="13" height="13" rx="2" />
        <rect x="8" y="27" width="13" height="13" rx="2" />
        <rect x="27" y="27" width="13" height="13" rx="2" />
      </svg>
    );
  }

  if (name === "layout") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M9 10h30v28H9z" />
        <path d="M19 10v28M9 22h30M30 22v16" />
        <circle cx="14" cy="16" r="1.5" />
        <circle cx="24" cy="30" r="1.5" />
        <circle cx="34" cy="16" r="1.5" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M24 5 29 19l14 5-14 5-5 14-5-14-14-5 14-5z" />
        <path d="M38 7v8M34 11h8" />
      </svg>
    );
  }

  if (name === "counter") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="7" y="15" width="34" height="22" rx="2" />
        <path d="M7 23h34M16 15v22M32 15v22" />
        <path d="M13 11v4M22 9v6M31 11v4M18 29h5M28 29h5" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M39 23.5A15 15 0 0 1 16 36L8 39l3-8A15 15 0 1 1 39 23.5z" />
        <path d="M18 16c1 7 5 11 12 14l3-3-4-4-2 2c-3-2-5-4-6-7l2-2-4-4z" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 6 15 6v10c0 10-6 16-15 20C15 38 9 32 9 22V12z" />
        <path d="m18 24 4 4 8-10" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <circle cx="24" cy="24" r="17" />
        <path d="M24 13v12l8 4" />
      </svg>
    );
  }

  if (name === "service") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M14 31 8 37l3 3 6-6M31 14l6-6 3 3-6 6" />
        <path d="m17 34 17-17M11 14l5-5 7 7-5 5zM30 32l5-5 6 6-5 5z" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M24 39S9 30 9 18a8 8 0 0 1 15-4 8 8 0 0 1 15 4c0 12-15 21-15 21z" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }

  return null;
}
