export function RatingStarIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m24 5.5 5.8 11.8 13 1.9-9.4 9.1 2.2 12.9L24 35.1 12.4 41.2l2.2-12.9-9.4-9.1 13-1.9L24 5.5Z" />
    </svg>
  );
}

export function QuoteMarkIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18.5 13.5c-4.8 2.5-7.2 6.2-7.2 11.1v9.9h10.4V24.1h-5.5c.4-2.5 2.1-4.8 5-6.9l-2.7-3.7Z" />
      <path d="M35.5 13.5c-4.8 2.5-7.2 6.2-7.2 11.1v9.9h10.4V24.1h-5.5c.4-2.5 2.1-4.8 5-6.9l-2.7-3.7Z" />
    </svg>
  );
}

export function TrophyIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8h16v7.5c0 7-3.4 12-8 12s-8-5-8-12V8Z" />
      <path d="M16 12H8v4.3c0 5.1 3.7 8.5 9 8.7" />
      <path d="M32 12h8v4.3c0 5.1-3.7 8.5-9 8.7" />
      <path d="M24 27.5V36" />
      <path d="M17 40h14" />
      <path d="M20 36h8" />
    </svg>
  );
}

export function GlobeLineIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" />
      <path d="M7 24h34" />
      <path d="M24 7c5 4.4 7.5 10.1 7.5 17S29 36.6 24 41" />
      <path d="M24 7c-5 4.4-7.5 10.1-7.5 17S19 36.6 24 41" />
    </svg>
  );
}

export function ReviewQuoteIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.3 8.3c-4.7 1.7-7 4.7-7 9.1v6.3h7.4v-7.4H10c.2-2.1 1.6-3.8 4.2-5.1l-.9-2.9Zm13 0c-4.7 1.7-7 4.7-7 9.1v6.3h7.4v-7.4H23c.2-2.1 1.6-3.8 4.2-5.1l-.9-2.9Z" />
    </svg>
  );
}

export function PlayCircleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="27" fill="currentColor" />
      <path d="M23 18.5v19l16-9.5-16-9.5Z" fill="#0b0c10" />
    </svg>
  );
}

export function StarRating() {
  return (
    <div className="flex items-center gap-1 text-brand-gold">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        >
          <path d="m10 1.7 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L10 1.7Z" />
        </svg>
      ))}
    </div>
  );
}
