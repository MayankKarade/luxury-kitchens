import Link from "next/link";

export default function LegalPage({ eyebrow, title, updatedAt, sections }) {
  return (
    <main className="bg-[#f8f5ef] text-white">
      <section className="relative overflow-hidden bg-brand-dark px-4 pt-36 pb-20 sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(154,1,1,0.14),transparent_34%),linear-gradient(135deg,rgba(1,1,41,0.68),rgba(1,1,41,0.42))]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-sm leading-7 text-zinc-300 sm:text-base">
            Last updated: {updatedAt}
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-xl border border-black/10 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:p-10">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-2xl text-white sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 font-sans text-sm leading-7 text-neutral-700 sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-black/10 pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-brand-gold px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#9A0101]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
