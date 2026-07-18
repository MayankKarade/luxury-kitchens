import LegalPolicyClient from "@/components/legal/LegalPolicyClient";

export const metadata = {
  title: "Return & Refund Policy | Netsaarthi",
  description:
    "Review the return and refund policy for Netsaarthi luxury kitchens and interiors.",
};

const fallbackPolicy = {
  eyebrow: "Return & Refund",
  title: "Return & Refund Policy",
  updatedAt: "From API",
};

export default function ReturnAndRefundPage() {
  return <LegalPolicyClient type="return" fallbackPolicy={fallbackPolicy} />;
}
