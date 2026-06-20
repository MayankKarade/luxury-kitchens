import BlogArticleContent from "./BlogArticleContent";
import BlogSidebar from "./BlogSidebar";
import BlogTableOfContents from "./BlogTableOfContents";

export default function BlogDetailMain({ article }) {
  return (
    <main className="bg-brand-white px-4 py-9 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <BlogTableOfContents items={article.tableOfContents} />
          <BlogArticleContent article={article} />
        </div>
        <BlogSidebar article={article} />
      </div>
    </main>
  );
}
