'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SITE_NAME, asset } from '@/lib/site';
import { waLink } from '@/lib/whatsapp';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <header className="sticky top-0 z-50 border-b border-sky-tint bg-white/95 backdrop-blur">
      <nav
        className="container-site flex h-16 items-center justify-between gap-4 md:h-20"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${SITE_NAME} — home`}>
          <Image
            src={asset('/images/logo-mark.png')}
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10"
            priority
          />
          <span className="font-heading text-base font-bold leading-tight text-navy md:text-lg">
            Hope Springs
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky md:text-xs">
              International
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-sky-tint text-sky-deep'
                    : 'text-navy hover:bg-sky-tint/70 hover:text-sky-deep'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-4 !py-2 text-sm"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <Link href="/get-involved/" className="btn-primary !px-5 !py-2 text-sm">
            Donate
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/get-involved/" className="btn-primary !px-4 !py-2 text-xs">
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-navy hover:bg-sky-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-sky-tint bg-white lg:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium ${
                    isActive(link.href)
                      ? 'bg-sky-tint text-sky-deep'
                      : 'text-navy hover:bg-sky-tint/70'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
