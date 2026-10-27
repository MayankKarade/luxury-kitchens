import { HtmlContent } from "./HtmlContent";
import { DetailIcon } from "./ServiceDesignDetailIcons";

export default function DesignHighlights({ features = [] }) {
  if (features.length === 0) return null;

  return (
    <div className="mt-7 grid gap-4 lg:grid-cols-2">
      {features.map((feature) => (
        <section
          key={feature.title}
          className="min-w-0 rounded-xl border border-neutral-200/80 bg-[#faf9f7] p-4 sm:p-5"
        >
          <div className="mb-3 flex items-center gap-3 border-b border-neutral-200/80 pb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gold/8 text-brand-gold">
              <DetailIcon name={feature.icon} className="h-5 w-5" />
            </span>
            <h2 className="text-sm font-bold tracking-wide text-neutral-900">
              {feature.title}
            </h2>
          </div>
          <HtmlContent
            value={feature.text}
            variant="checklist"
            className="text-sm font-medium leading-5 text-zinc-600 xl:[&>ul]:grid xl:[&>ul]:grid-cols-2 xl:[&>ol]:grid xl:[&>ol]:grid-cols-2 [&_ul]:gap-x-6 [&_ol]:gap-x-6"
          />
        </section>
      ))}
    </div>
  );
}
