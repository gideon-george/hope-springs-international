import Image from 'next/image';
import { asset } from '@/lib/site';

// Interior-page header band: navy overlay on a field photo keeps white text
// readable at every viewport.
export default function PageHero({
  title,
  lead,
  image,
  imageAlt,
}: {
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src={asset(image)}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80"
          aria-hidden
        />
      </div>
      <div className="container-site relative py-16 text-center md:py-24">
        <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}
