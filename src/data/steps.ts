export interface ProcessStep {
  step: string;
  number: number;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: "Step 1",
    number: 1,
    title: "Choose a service",
    description:
      "Browse our customized sarees, clay art, sketch portraits, mehndi, or makeup services and choose what fits your celebration.",
  },
  {
    step: "Step 2",
    number: 2,
    title: "Message us on WhatsApp",
    description:
      "Click any 'Enquire on WhatsApp' button to open a direct, friendly chat with Shivangi Saxena.",
  },
  {
    step: "Step 3",
    number: 3,
    title: "Share your requirement & details",
    description:
      "Send your reference photos, custom ideas, preferred designs, and your occasion date or timeline.",
  },
  {
    step: "Step 4",
    number: 4,
    title: "Discuss customization & pricing",
    description:
      "We discuss design details, material choices, availability, and transparent pricing tailored to your request.",
  },
  {
    step: "Step 5",
    number: 5,
    title: "Confirm your order or booking",
    description:
      "Finalize your booking slot or craft schedule with confidence, and let us prepare something truly special for your moment.",
  },
];
