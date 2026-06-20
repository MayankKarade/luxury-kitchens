const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function ContactIcon({ name, className = "" }) {
  if (name === "clock") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <circle cx="24" cy="24" r="17" />
        <path d="M24 12v13l8 5" />
        <path d="M24 3v5" />
        <path d="M24 40v5" />
        <path d="M3 24h5" />
        <path d="M40 24h5" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <circle cx="24" cy="16" r="8" />
        <path d="M9 41c2.2-9 8-13.5 15-13.5S36.8 32 39 41" />
        <path d="M14 41h20" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <path d="M24 5 39 11v11c0 9.7-5.7 16.3-15 21-9.3-4.7-15-11.3-15-21V11L24 5Z" />
        <path d="m18 24 4 4 8-9" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <path d="M17 8 23 20l-5 4c3 6 7 10 13 13l4-5 12 6c-.8 4.1-4.2 7-8.4 7C18.2 45 3 29.8 3 9.4 3 5.2 5.9 1.8 10 1l7 7Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <rect x="7" y="11" width="34" height="26" rx="3" />
        <path d="m8 14 16 13 16-13" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <path d="M8.5 41.5 11 33a18 18 0 1 1 6.6 5.6L8.5 41.5Z" />
        <path d="M18.5 17.5c.7-1.6 1.7-1.7 2.7-.4l1.6 2.2c.5.8.4 1.5-.2 2.1l-1 1c1.6 2.8 3.8 4.9 6.7 6.4l1-1.1c.6-.6 1.3-.7 2.1-.2l2.4 1.5c1.3.9 1.2 2-.3 2.8-1.7.9-4.1.8-7.1-.5a20.4 20.4 0 0 1-10-9.5c-1.4-2.9-1.5-5.2-.9-6.3Z" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <rect x="8" y="11" width="32" height="29" rx="3" />
        <path d="M16 6v9" />
        <path d="M32 6v9" />
        <path d="M8 20h32" />
        <path d="M17 28h6" />
        <path d="M27 28h6" />
        <path d="M17 34h6" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...iconProps}>
        <path d="M24 44s14-15 14-26A14 14 0 0 0 10 18c0 11 14 26 14 26Z" />
        <circle cx="24" cy="18" r="5" />
      </svg>
    );
  }

  return null;
}
