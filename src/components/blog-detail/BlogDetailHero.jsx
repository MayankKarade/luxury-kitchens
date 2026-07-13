import Image from "next/image";
import Link from "next/link";

import fallbackHeroImg from "../../assets/Home/caliwoodBlogHero.png";
import { BlogDetailIcon } from "./BlogDetailIcons";

function getAuthorInitials(author = "") {
  return author
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((namePart) => namePart[0])
    .join("")
    .toUpperCase();
}

export default function BlogDetailHero({ article }) {
  const authorInitials = getAuthorInitials(article.author);

  return (
    <section className="relative overflow-hidden bg-brand-dark pt-28 text-white sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={fallbackHeroImg}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[540px]  flex-col justify-center px-4 pb-12 sm:px-10 md:px-16">
        <div className="max-w-[620px]">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-sans tracking-[0.12em] text-brand-gold/90 uppercase mb-8">
            <Link
              href="/"
              className="text-zinc-350 text-white font-semibold transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-brand-gold font-normal px-0.5">&gt;</span>
            <Link
              href="/blog"
              className="text-zinc-350 text-white font-semibold transition-colors duration-200"
            >
              Blog
            </Link>
            <span className="text-brand-gold font-normal px-0.5">&gt;</span>
            <span className="text-brand-gold font-semibold hover:font-bold">
              {article.categoryTitle}
            </span>
            <span className="hidden text-brand-gold font-normal px-0.5 sm:inline">
              &gt;
            </span>
            <span className="hidden max-w-[280px] truncate text-brand-gold font-semibold hover:font-bold sm:inline">
              {article.title}
            </span>
          </div>

          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-gold">
            {article.category}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-[60px]">
            {article.title}
          </h1>
          <div className="my-6 h-0.5 w-14 bg-brand-gold" />
          <p className="max-w-lg text-sm font-medium leading-7 text-zinc-200 sm:text-base">
            {article.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-200">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-extrabold text-brand-gold">
                {authorInitials}
              </span>
              <span>
                <span className="block text-white">By {article.author}</span>
                <span className="block text-xs text-zinc-400">
                  {article.authorRole}
                </span>
              </span>
            </div>
            <span className="hidden h-10 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-3">
              <BlogDetailIcon
                name="calendar"
                className="h-7 w-7 text-brand-gold"
              />
              <span>
                <span className="block text-white">{article.date}</span>
                <span className="block text-xs text-zinc-400">
                  {article.readTime}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
