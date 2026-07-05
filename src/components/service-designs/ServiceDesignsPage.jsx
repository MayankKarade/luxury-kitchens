import ServiceDesignsBrowser from "./ServiceDesignsBrowser";
import ServiceDesignsHero from "./ServiceDesignsHero";

export default function ServiceDesignsPage({ service, collection }) {
  return (
    // <div className="min-h-screen bg-brand-white">
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <ServiceDesignsHero service={service} collection={collection} />
        <ServiceDesignsBrowser service={service} collection={collection} />
      </div>
    </div>
  );
}
