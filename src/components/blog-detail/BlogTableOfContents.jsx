import { BlogDetailIcon } from "./BlogDetailIcons";

export default function BlogTableOfContents({ items }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <BlogDetailIcon name="toc" className="h-5 w-5 text-brand-gold" />
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">
          Table of Contents
        </h2>
      </div>

      <ol className="grid gap-x-12 gap-y-3 md:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-start gap-4 text-sm font-semibold text-zinc-700"
          >
            <span className="min-w-7 text-brand-gold">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
