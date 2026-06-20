import BlogDetailHero from "./BlogDetailHero";
import BlogDetailMain from "./BlogDetailMain";

export default function BlogDetailPage({ article }) {
  return (
    <div className="min-h-screen bg-brand-white">
      <BlogDetailHero article={article} />
      <BlogDetailMain article={article} />
    </div>
  );
}
