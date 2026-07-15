import BlogCategories from "./BlogCategories";
import BlogHero from "./BlogHero";
import LatestArticles from "./LatestArticles";
import Newsletter from "./Newsletter";

export default function BlogClient() {
  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1800px]">
        <BlogHero />
        <BlogCategories />
        <LatestArticles />
        <Newsletter />
      </div>
    </div>
  );
}
