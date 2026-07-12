import Image from "next/image";

export default function BlogArticleContent({ article }) {
  return (
    <article className="mt-9 text-brand-dark">
      <section className="border-b border-neutral-200 pb-8">
        <h2 className="font-serif text-3xl font-semibold text-neutral-900">
          Introduction
        </h2>
        <p className="mt-4 max-w-3xl text-[15px] font-medium leading-8 text-zinc-700">
          {article.introduction}
        </p>
      </section>

      <div className="space-y-10 pt-8">
        {article.sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-neutral-900">
              {index + 1}. {section.title}
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] font-medium leading-8 text-zinc-700">
              {section.body}
            </p>
            <div className="relative mt-6 aspect-[16/7.2] min-h-[220px] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm">
              {section.image ? (
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className="object-cover"
                />
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
