// The four-step process, worded per the organisation's brief.
// Everything Hope Springs does is driven by a rigorous, community-led
// Needs Assessment.
export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: 'clipboard-check' | 'handshake' | 'building' | 'gift';
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Field Evaluation',
    description:
      "Our Gombe field office conducts on-the-ground assessments to verify the community's critical needs.",
    icon: 'clipboard-check',
  },
  {
    number: 2,
    title: 'Community Partnership',
    description:
      "The local community agrees to and meets specific stewardship conditions to ensure the project's long-term sustainability.",
    icon: 'handshake',
  },
  {
    number: 3,
    title: 'HQ Approval & Funding',
    description:
      'Once conditions are met, the comprehensive assessment is forwarded to our international headquarters in the United States for final approval and full funding.',
    icon: 'building',
  },
  {
    number: 4,
    title: 'Free Delivery',
    description:
      'Approved projects — including borehole drilling — are delivered to the communities completely free of charge.',
    icon: 'gift',
  },
];
