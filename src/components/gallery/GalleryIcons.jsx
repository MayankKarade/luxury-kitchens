export function GalleryIcon({ name, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "image") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="7" y="9" width="34" height="30" rx="3" />
        <circle cx="18" cy="19" r="4" />
        <path d="m9 34 11-10 8 7 5-5 7 7" />
      </svg>
    );
  }

  if (name === "video") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <rect x="7" y="12" width="28" height="24" rx="3" />
        <path d="m35 20 7-4v16l-7-4" />
        <path d="M17 8v8" />
        <path d="M27 8v8" />
        <path d="M17 32v8" />
        <path d="M27 32v8" />
      </svg>
    );
  }

  if (name === "cube") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <path d="m24 5 16 9v20l-16 9-16-9V14L24 5Z" />
        <path d="M8 14 24 24l16-10" />
        <path d="M24 24v19" />
        <path d="M19 18h5c2.5 0 4 1.2 4 3s-1.4 3-4 3h-4" />
        <path d="M20 30h4c3 0 4.8-1.2 4.8-3.2S27 23.5 24 23.5" />
      </svg>
    );
  }

  if (name === "walk") {
    return (
      <svg viewBox="0 0 48 48" className={className} {...common}>
        <circle cx="28" cy="8" r="4" />
        <path d="m24 17 8 5 5-5" />
        <path d="m25 17-4 11-7 2" />
        <path d="m25 26 5 7-2 10" />
        <path d="m20 29-5 13" />
      </svg>
    );
  }

  if (name === "play") {
    return (
      <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
        <circle cx="28" cy="28" r="27" fill="currentColor" />
        <path d="M23 18.5v19l16-9.5-16-9.5Z" fill="#0b0c10" />
      </svg>
    );
  }

  if (name === "photos") {
    return (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="m6 16 4-4 3 3 2-2 3 3" />
      </svg>
    );
  }

  return null;
}

export function Tour360Icon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="23" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M14 30c2.4-7.2 9.2-12.4 18-12.4 8.6 0 15.8 5 18.3 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 31h8l-4-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 31h-8l4-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="32"
        y="39"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="currentColor"
      >
        360
      </text>
    </svg>
  );
}
