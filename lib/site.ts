// Central place for real organisation facts. Everything here comes from the
// client's brief — do not add details (emails, account numbers, registration
// numbers) that the organisation has not supplied.

export const SITE_NAME = 'Hope Springs International';
export const MOTTO = 'Lasting change, One village at a time.';
export const TAGLINE = 'Living Water Through Sustainable Skills.';

export const SITE_URL = 'https://gideon-george.github.io/hope-springs-international';

export const PHONE_DISPLAY = '+234 809 100 9155';
export const PHONE_E164 = '+2348091009155';

export const NIGERIA_OFFICE = {
  title: 'Nigeria Field Office',
  lines: [
    'Suite 1, Doho Plaza',
    'Beside Tumfure Divisional Police Headquarters',
    'Tumfure, Gombe State, Nigeria',
    'Postal Code: 771104',
  ],
  // TODO: replace with the exact Google Maps pin for Doho Plaza when available.
  mapQuery: 'Doho Plaza, Tumfure, Gombe State, Nigeria',
};

export const US_OFFICE = {
  title: 'International Headquarters',
  lines: ['2100 Nashville Pike', 'Gallatin, TN 37066', 'United States'],
  mapQuery: '2100 Nashville Pike, Gallatin, TN 37066, USA',
};

// Prefixes public/ asset paths with the GitHub Pages basePath so images and
// videos resolve both locally and on the live site.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/our-work/', label: 'Our Work' },
  { href: '/how-we-work/', label: 'How We Work' },
  { href: '/get-involved/', label: 'Get Involved' },
  { href: '/contact/', label: 'Contact' },
];
