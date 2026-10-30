import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import LegalPolicyClient from "@/components/legal/LegalPolicyClient";

export const metadata = getPageMetadata('/return-and-refund');

const fallbackPolicy = {
  eyebrow: "Return & Refund",
  title: "Return & Refund Policy",
  updatedAt: "From API",
};

export default function ReturnAndRefundPage() {
  return <>
    <StructuredData metadata={metadata} />
    <LegalPolicyClient type="return" fallbackPolicy={fallbackPolicy} />
  </>;
}
