import BlogCategories from "./BlogCategories";
import BlogHero from "./BlogHero";
import LatestArticles from "./LatestArticles";
import Newsletter from "./Newsletter";

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-brand-white">
      <BlogHero />
      <BlogCategories />
      <LatestArticles />
      <Newsletter />
    </div>
  );
}
