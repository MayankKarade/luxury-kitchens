import Image from "next/image";
import Link from "next/link";

import { BlogDetailIcon } from "./BlogDetailIcons";

function SearchBox() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-neutral-900">
        Search
      </h2>
      <div className="mt-4 flex overflow-hidden rounded-md border border-neutral-200 bg-white">
        <input
          type="search"
          placeholder="Search articles..."
          className="h-12 min-w-0 flex-1 px-4 text-sm font-medium text-zinc-700 outline-none placeholder:text-zinc-400"
        />
        <button
          type="button"
          aria-label="Search articles"
          className="flex h-12 w-13 items-center justify-center bg-neutral-900 text-white transition-colors hover:bg-brand-gold hover:text-white"
        >
          <BlogDetailIcon name="search" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function CategoryCard({ categories }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="font-serif text-2xl font-semibold text-neutral-900">
        Categories
      </h2>
      <div className="mt-5 space-y-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between gap-4 text-sm font-semibold text-zinc-700"
          >
            <span>{category.title}</span>
            {category.count ? (
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-extrabold text-zinc-500">
                {category.count}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentPosts({ posts }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="font-serif text-2xl font-semibold text-neutral-900">
        Recent Posts
      </h2>
      <div className="mt-5 space-y-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="grid grid-cols-[120px_1fr] gap-4 group"
          >
            <span className="relative aspect-[16/10] overflow-hidden rounded-md bg-neutral-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="120px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span>
              <span className="block text-sm font-extrabold leading-snug text-neutral-900 transition-colors group-hover:text-brand-gold">
                {post.title}
              </span>
              <span className="mt-2 block text-xs font-semibold text-zinc-500">
                {post.date}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SidebarCTA({ cta }) {
  return (
    <div className="rounded-lg bg-[#071014] p-6 text-white shadow-sm">
      <h2 className="font-serif text-2xl font-semibold">{cta.title}</h2>
      <p className="mt-3 text-sm font-medium leading-6 text-zinc-300">
        {cta.text}
      </p>
      <Link
        href="/consultation"
        className="mt-5 inline-flex h-11 items-center justify-center gap-3 rounded-md bg-brand-gold px-6 text-[11px] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-[#9A0101]"
      >
        Book A Consultation
        <BlogDetailIcon name="calendar" className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function BlogSidebar({ article }) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
      <SearchBox />
      <CategoryCard categories={article.categories} />
      <RecentPosts posts={article.recentPosts} />
      <SidebarCTA cta={article.sidebarCta} />
    </aside>
  );
}
