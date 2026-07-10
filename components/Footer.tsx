import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import {
  SITE_NAME,
  MOTTO,
  TAGLINE,
  PHONE_DISPLAY,
  PHONE_E164,
  NIGERIA_OFFICE,
  US_OFFICE,
  NAV_LINKS,
  asset,
} from '@/lib/site';
import { waLink } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-1.5">
              <Image
                src={asset('/images/logo-mark.png')}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11"
              />
            </div>
            <p className="font-heading text-lg font-bold leading-tight">
              Hope Springs
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-sky-light">
                International
              </span>
            </p>
          </div>
          <p className="mt-4 font-heading text-sm italic text-sky-light">{MOTTO}</p>
          <p className="mt-2 text-sm text-white/70">{TAGLINE}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            A faith-based charity bringing holistic transformation to underserved
            communities — sharing the love of God through clean water, education,
            and healthcare.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-light">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-light">
            Our Offices
          </h2>
          <address className="mt-4 space-y-5 text-sm not-italic text-white/80">
            <div className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-light" aria-hidden />
              <div>
                <p className="font-semibold text-white">{NIGERIA_OFFICE.title}</p>
                {NIGERIA_OFFICE.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-light" aria-hidden />
              <div>
                <p className="font-semibold text-white">{US_OFFICE.title}</p>
                {US_OFFICE.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-light">
            Get In Touch
          </h2>
          <div className="mt-4 space-y-3">
            <a
              href={`tel:${PHONE_E164}`}
              className="flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-sky-light" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !px-5 !py-2.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat on WhatsApp
            </a>
            <p className="pt-1 text-sm leading-relaxed text-white/70">
              Your support delivers boreholes, learning, and healthcare — completely
              free of charge to the communities we serve.
            </p>
            <Link href="/get-involved/" className="btn-on-dark !px-5 !py-2.5 text-sm">
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-heading italic">{MOTTO}</p>
        </div>
      </div>
    </footer>
  );
}
