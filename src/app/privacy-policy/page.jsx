import LegalPolicyClient from "@/components/legal/LegalPolicyClient";

export const metadata = {
  title: "Privacy Policy | Netsaarthi",
  description:
    "Read how Netsaarthi handles consultation enquiries, contact details, and project information.",
};

const fallbackPolicy = {
  eyebrow: "Privacy Policy",
  title: "Privacy Policy",
  updatedAt: "From API",
};

export default function PrivacyPolicyPage() {
  return <LegalPolicyClient type="privacy" fallbackPolicy={fallbackPolicy} />;
}
