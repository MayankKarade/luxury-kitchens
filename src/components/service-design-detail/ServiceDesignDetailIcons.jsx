export function DetailIcon({ name, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "chevron-left" || name === "chevron-right") {
    return (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d={name === "chevron-left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    );
  }

  if (name === "expand") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M18 8H8v10M30 8h10v10M8 30v10h10M40 30v10H30" />
        <path d="M18 8 8 18M30 8l10 10M18 40 8 30M30 40l10-10" />
      </svg>
    );
  }

  if (name === "play") {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="rgba(0,0,0,0.42)" stroke="currentColor" strokeWidth="2" />
        <path d="m27 21 16 11-16 11z" fill="currentColor" />
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

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="8" y="11" width="32" height="29" rx="3" />
        <path d="M16 6v9M32 6v9M8 20h32" />
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

  if (name === "star") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="m12 2.5 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2L12 16.8l-5.6 2.9 1.1-6.2L3 9.1l6.2-.9z"
          fill="currentColor"
        />
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

  if (name === "spark") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M24 5 29 19l14 5-14 5-5 14-5-14-14-5 14-5z" />
      </svg>
    );
  }

  if (name === "layout") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M9 10h30v28H9z" />
        <path d="M19 10v28M9 22h30M30 22v16" />
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

  if (name === "counter") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="7" y="15" width="34" height="22" rx="2" />
        <path d="M7 23h34M16 15v22M32 15v22" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <circle cx="24" cy="15" r="7" />
        <path d="M10 40c2-9 7-13 14-13s12 4 14 13" />
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

  return null;
}
