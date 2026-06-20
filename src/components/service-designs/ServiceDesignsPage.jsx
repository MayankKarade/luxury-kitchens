import ServiceDesignsBrowser from "./ServiceDesignsBrowser";
import ServiceDesignsHero from "./ServiceDesignsHero";

export default function ServiceDesignsPage({ service, collection }) {
  return (
    <div className="min-h-screen bg-brand-white">
      <ServiceDesignsHero service={service} collection={collection} />
      <ServiceDesignsBrowser service={service} collection={collection} />
    </div>
  );
}
