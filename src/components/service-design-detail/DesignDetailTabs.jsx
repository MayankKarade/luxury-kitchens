"use client";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "materials", label: "Materials" },
  { id: "specifications", label: "Specifications" },
  { id: "included", label: "What's Included" },
  { id: "faqs", label: "FAQs" },
];

export default function DesignDetailTabs({ activeTab, onTabChange }) {
  return (
    <div className="border-y border-neutral-200 bg-brand-white px-4 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto  overflow-x-auto no-scrollbar">
        <div
          className="flex min-w-max items-center gap-10"
          role="tablist"
          aria-label="Design detail sections"
        >
          {tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative py-5 text-xs font-extrabold uppercase tracking-wide transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "text-brand-gold"
                  : "text-zinc-700 hover:text-brand-gold"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-gold" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
