const tabs = [
  { label: "Overview", href: "#overview", active: true },
  { label: "Features", href: "#features" },
  { label: "Materials", href: "#materials" },
  { label: "Specifications", href: "#specifications" },
  { label: "What's Included", href: "#included" },
  { label: "FAQs", href: "#faqs" },
];

export default function DesignDetailTabs() {
  return (
    <div className="border-y border-neutral-200 bg-brand-white px-4 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto max-w-7xl overflow-x-auto no-scrollbar">
        <nav className="flex min-w-max items-center gap-10">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className={`relative py-5 text-xs font-extrabold uppercase tracking-wide transition-colors ${
                tab.active
                  ? "text-brand-gold"
                  : "text-zinc-700 hover:text-brand-gold"
              }`}
            >
              {tab.label}
              {tab.active && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-gold" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
