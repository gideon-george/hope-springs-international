'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { NAV_LINKS, SITE_NAME, DBA_NAME, asset } from '@/lib/site';
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
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 md:gap-2.5" aria-label={`${SITE_NAME} — home`}>
          <Image
            src={asset('/images/logo-mark.png')}
            alt=""
            width={40}
            height={40}
            className="h-8 w-8 shrink-0 md:h-10 md:w-10"
            priority
          />
          <span className="min-w-0 font-heading text-[0.7rem] font-bold leading-tight text-navy md:text-sm xl:text-[0.8rem]">
            Hope Springs International Nigeria
            <span className="block font-body text-[0.55rem] font-semibold normal-case tracking-wide text-sky md:text-[0.62rem] xl:text-[0.58rem]">
              {DBA_NAME}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`whitespace-nowrap rounded-full px-2 py-2 text-sm font-medium transition-colors ${
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

        <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-3.5 !py-2 text-sm"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <Link href="/newsletter/" className="btn-primary !px-4 !py-2 text-sm">
            <Mail className="h-4 w-4" aria-hidden />
            Newsletter
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 xl:hidden">
          <Link href="/newsletter/" className="btn-primary !px-3 !py-1.5 text-[0.68rem]">
            Newsletter
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-1.5 text-navy hover:bg-sky-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-sky-tint bg-white xl:hidden">
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
