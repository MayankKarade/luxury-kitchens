export function ServiceDetailIcon({ name, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "user") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <circle cx="24" cy="15" r="7" />
        <path d="M10 40c2-9 7-13 14-13s12 4 14 13" />
        <path d="M14 40h20" />
      </svg>
    );
  }

  if (name === "cube") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 5 16 9v20l-16 9-16-9V14z" />
        <path d="M8 14 24 24l16-10M24 24v19" />
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
        <path d="M19 10v28M9 22h30M29 22v16" />
        <circle cx="14" cy="16" r="1" />
        <circle cx="24" cy="30" r="1" />
        <circle cx="34" cy="16" r="1" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 6 15 6v10c0 10-6 16-15 20C15 38 9 32 9 22V12z" />
        <path d="m19 24 4 4 7-9" />
      </svg>
    );
  }

  if (name === "quality") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 5 6 8 10 1-6 8 2 10-12-5-12 5 2-10-6-8 10-1z" />
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

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="8" y="11" width="32" height="29" rx="3" />
        <path d="M16 6v9M32 6v9M8 20h32" />
        <path d="M17 28h6M27 28h6M17 34h6" />
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

  if (name === "percent") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M13 35 35 13" />
        <circle cx="16" cy="16" r="5" />
        <circle cx="32" cy="32" r="5" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M24 5 29 19l14 5-14 5-5 14-5-14-14-5 14-5z" />
        <path d="M38 6v8M34 10h8" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 6 18 9-18 9-18-9z" />
        <path d="m6 24 18 9 18-9M6 33l18 9 18-9" />
      </svg>
    );
  }

  if (name === "counter") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="7" y="11" width="34" height="26" rx="2" />
        <path d="M7 20h34M16 11v26M32 11v26" />
        <path d="M13 15h6M29 15h6" />
      </svg>
    );
  }

  if (name === "wrench") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M31 8a10 10 0 0 0 9 13L22 39a6 6 0 0 1-8-8l18-18a10 10 0 0 1-1-5z" />
        <circle cx="17" cy="34" r="2" />
      </svg>
    );
  }

  if (name === "panel") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="9" y="8" width="30" height="32" rx="2" />
        <path d="M18 8v32M30 8v32M9 19h30M9 30h30" />
      </svg>
    );
  }

  if (name === "glass") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M15 6h18l-3 18H18zM18 24h12v18H18z" />
        <path d="M22 11h6M22 30h6" />
      </svg>
    );
  }

  return null;
}
