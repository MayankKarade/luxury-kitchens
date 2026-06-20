export function BlogDetailIcon({ name, className = "" }) {
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
        <rect x="8" y="11" width="32" height="29" rx="3" />
        <path d="M16 7v8M32 7v8M8 20h32" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <circle cx="21" cy="21" r="12" />
        <path d="m31 31 9 9" />
      </svg>
    );
  }

  if (name === "toc") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="M14 12h24M14 24h24M14 36h24" />
        <rect x="6" y="9" width="4" height="6" rx="1" />
        <rect x="6" y="21" width="4" height="6" rx="1" />
        <rect x="6" y="33" width="4" height="6" rx="1" />
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

  if (name === "arrow") {
    return (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }

  return null;
}
