import DesignBenefitStrip from "./DesignBenefitStrip";
import DesignDetailHeader from "./DesignDetailHeader";
import DesignDetailTabs from "./DesignDetailTabs";
import DesignOverview from "./DesignOverview";

export default function ServiceDesignDetailPage({ service, product }) {
  return (
    <div className="min-h-screen bg-brand-white">
      <div className="h-[92px] bg-brand-dark sm:h-[112px]" aria-hidden="true" />
      <DesignDetailHeader service={service} product={product} />
      <DesignDetailTabs />
      <DesignOverview product={product} />
      <DesignBenefitStrip />
    </div>
  );
}
