// The three pillars, worded per the organisation's brief.
export type Pillar = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: 'droplets' | 'book-open' | 'heart-pulse';
};

export const PILLARS: Pillar[] = [
  {
    slug: 'clean-water',
    title: 'Clean Water',
    short: 'Donating community boreholes to eliminate water scarcity and waterborne diseases.',
    description:
      'Access to safe water changes everything. We donate community boreholes that eliminate water scarcity and waterborne diseases — freeing families from long daily treks and giving whole villages a dependable source of clean, life-giving water.',
    image: '/images/borehole-drilling.jpg',
    imageAlt:
      'A borehole drilling rig at work in a rural community, with local residents watching the drilling.',
    icon: 'droplets',
  },
  {
    slug: 'education',
    title: 'Education',
    short: 'Empowering the next generation with the tools and spaces they need to learn.',
    description:
      'Education breaks the cycle of poverty. We empower the next generation with the tools and spaces they need to learn, so children in underserved communities can build a future full of hope.',
    image: '/images/branding-banner.jpg',
    imageAlt:
      'Hope Springs International banner featuring children from partner communities and a map of Africa.',
    icon: 'book-open',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    short: 'Delivering essential medical support to vulnerable families.',
    description:
      'Good health is the foundation of a thriving community. We deliver essential medical support to vulnerable families, bringing care directly to the villages that need it most.',
    image: '/images/aid-delivery.jpg',
    imageAlt:
      'Team members distributing medical supplies from the back of a van to members of a rural community.',
    icon: 'heart-pulse',
  },
];
