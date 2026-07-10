import { Droplets, BookOpen, HeartPulse } from 'lucide-react';

const ICONS = {
  droplets: Droplets,
  'book-open': BookOpen,
  'heart-pulse': HeartPulse,
} as const;

export default function PillarIcon({
  icon,
  className = 'h-6 w-6',
}: {
  icon: keyof typeof ICONS;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} aria-hidden />;
}
