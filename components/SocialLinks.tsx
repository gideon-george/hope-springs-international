import { SOCIAL_LINKS } from '@/lib/site';

// lucide-react has retired its brand icons, so the three marks live here as
// plain SVG paths. Icons inherit currentColor from the surrounding link class.
const ICON_PATHS: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  ),
  'X (Twitter)': (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  Instagram: (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.974 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.102.161 3.39.674 2.032 2.032.674 3.39.161 5.102.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.089 1.95.602 3.662 1.96 5.02 1.358 1.358 3.07 1.871 5.02 1.96C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.95-.089 3.662-.602 5.02-1.96 1.358-1.358 1.871-3.07 1.96-5.02.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.089-1.95-.602-3.662-1.96-5.02C20.61.674 18.898.161 16.948.072 15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  ),
};

// Row of social profile links, colour-controlled by the parent via linkClassName.
export default function SocialLinks({
  linkClassName = 'text-white/70 hover:text-white',
  iconClassName = 'h-5 w-5',
}: {
  linkClassName?: string;
  iconClassName?: string;
}) {
  return (
    <ul className="flex items-center gap-4">
      {SOCIAL_LINKS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Hope Springs International on ${social.label}`}
            className={`inline-flex transition-colors ${linkClassName}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={iconClassName}
              aria-hidden
            >
              {ICON_PATHS[social.label]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
