import Link from 'next/link';
import { MessageCircle, HeartHandshake } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';
import Reveal from '@/components/Reveal';

// Reusable "join us" band shown near the foot of most pages.
export default function CTASection() {
  return (
    <section className="bg-sky">
      <div className="container-site py-16 text-center md:py-20">
        <Reveal>
          <HeartHandshake className="mx-auto h-10 w-10 text-white/90" aria-hidden />
          <h2 className="mt-4 font-heading text-2xl font-bold text-white md:text-4xl">
            Be Part of Lasting Change
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Every borehole, classroom resource, and medical delivery reaches a village
            completely free of charge — because people like you choose to give,
            partner, and pray.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/get-involved/" className="btn-on-dark w-full sm:w-auto">
              Donate or Partner
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
