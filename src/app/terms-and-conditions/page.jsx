import LegalPolicyClient from "@/components/legal/LegalPolicyClient";

export const metadata = {
  title: "Terms & Conditions | Netsaarthi",
  description:
    "Review the website and consultation terms for Netsaarthi luxury kitchens and interiors.",
};

const fallbackPolicy = {
  eyebrow: "Terms & Conditions",
  title: "Terms & Conditions",
  updatedAt: "From API",
};

export default function TermsAndConditionsPage() {
  return <LegalPolicyClient type="terms" fallbackPolicy={fallbackPolicy} />;
}
