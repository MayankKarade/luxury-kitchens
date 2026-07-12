function sanitizeHtml(value) {
  if (!value) return "";

  return String(value)
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+=(["']).*?\1/gi, "")
    .replace(/\son\w+=\S+/gi, "")
    .replace(/javascript:/gi, "");
}

export function HtmlContent({ value, className = "" }) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(value) }}
    />
  );
}

export function stripHtml(value) {
  if (!value) return "";

  return sanitizeHtml(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&amp;nbsp;|;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
