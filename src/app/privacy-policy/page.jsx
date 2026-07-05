import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy Policy | Netsaarthi",
  description:
    "Read how Netsaarthi handles consultation enquiries, contact details, and project information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect the information you choose to share with us, including your name, email address, phone number, location, service interest, consultation preferences, and project details.",
      "We may also receive basic technical information from your browser or device to help us keep the website reliable and secure.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, schedule consultations, prepare estimates, discuss project requirements, and improve our client experience.",
      "We do not sell your personal information. When needed, we may share limited details with trusted team members or service partners involved in handling your request.",
    ],
  },
  {
    title: "Communication",
    body: [
      "By submitting a form or contacting us, you allow Netsaarthi to respond by phone, email, or WhatsApp about your enquiry or consultation request.",
      "You can ask us to stop non-essential communication at any time by contacting our team.",
    ],
  },
  {
    title: "Data Care",
    body: [
      "We take reasonable steps to protect the information shared with us and keep it only for as long as required for business, legal, or support purposes.",
      "If you want to review, update, or request removal of your information, please contact us through the details provided on this website.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your Information. Handled With Care."
      updatedAt="June 21, 2026"
      sections={sections}
    />
  );
}
