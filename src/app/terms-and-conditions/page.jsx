import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import LegalPolicyClient from "@/components/legal/LegalPolicyClient";

export const metadata = getPageMetadata('/terms-and-conditions');

const fallbackPolicy = {
  eyebrow: "Terms & Conditions",
  title: "Terms & Conditions",
  updatedAt: "From API",
};

export default function TermsAndConditionsPage() {
  return <>
    <StructuredData metadata={metadata} />
    <LegalPolicyClient type="terms" fallbackPolicy={fallbackPolicy} />
  </>;
}
