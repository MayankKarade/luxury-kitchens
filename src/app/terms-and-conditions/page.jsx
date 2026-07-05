import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Netsaarthi",
  description:
    "Review the website and consultation terms for Netsaarthi luxury kitchens and interiors.",
};

const sections = [
  {
    title: "Website Use",
    body: [
      "This website is provided to help visitors learn about Netsaarthi services, locations, projects, and consultation options.",
      "You agree not to misuse the website, interfere with its operation, or submit false or misleading information through any form.",
    ],
  },
  {
    title: "Consultations And Estimates",
    body: [
      "Consultation requests and estimates are subject to review, location, project scope, material availability, and final confirmation from our team.",
      "Any prices, timelines, or project descriptions shown on the website are examples unless confirmed in writing for your specific project.",
    ],
  },
  {
    title: "Content And Images",
    body: [
      "Website images, text, layouts, and branding are used to represent our design direction and service offering. They may include concept visuals or sample project imagery.",
      "You may not copy, republish, or reuse website content for commercial purposes without written permission from Netsaarthi.",
    ],
  },
  {
    title: "Liability",
    body: [
      "We work to keep information accurate and up to date, but the website may contain occasional errors or changes in availability.",
      "Netsaarthi is not responsible for losses caused by reliance on general website information without a confirmed consultation or written agreement.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Clear Terms For A Better Project."
      updatedAt="June 21, 2026"
      sections={sections}
    />
  );
}
