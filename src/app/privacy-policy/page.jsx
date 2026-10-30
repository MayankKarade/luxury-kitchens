import { getPageMetadata } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import LegalPolicyClient from "@/components/legal/LegalPolicyClient";

export const metadata = getPageMetadata('/privacy-policy');

const fallbackPolicy = {
  eyebrow: "Privacy Policy",
  title: "Privacy Policy",
  updatedAt: "From API",
};

export default function PrivacyPolicyPage() {
  return <>
    <StructuredData metadata={metadata} />
    <LegalPolicyClient type="privacy" fallbackPolicy={fallbackPolicy} />
  </>;
}
