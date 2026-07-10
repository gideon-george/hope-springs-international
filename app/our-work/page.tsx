import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { asset } from '@/lib/site';
import { PILLARS } from '@/lib/pillars';
import PageHero from '@/components/PageHero';
import PillarIcon from '@/components/PillarIcon';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import VideoPlayer from '@/components/VideoPlayer';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Clean water, education, and healthcare — three pillars of sustainable community transformation, delivered completely free of charge.',
};

// Supporting imagery per pillar (beyond each pillar's card image).
const PILLAR_EXTRAS: Record<string, { image: string; alt: string } | null> = {
  'clean-water': {
    image: '/images/team-celebration.jpg',
    alt: 'The borehole drilling team, muddy from work, celebrating a successful drill with a Hope Springs volunteer.',
  },
  education: null,
  healthcare: {
    image: '/images/community-meeting.jpg',
    alt: 'A visiting clinician sitting with families under a tree during a community health outreach.',
  },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        lead="We build sustainable foundations by focusing on three pillars — and every approved project reaches its community completely free of charge."
        image="/images/borehole-drilling.jpg"
        imageAlt="A borehole drilling rig at work in a rural village."
      />

      <section className="bg-white">
        <div className="container-site space-y-16 py-16 md:space-y-24 md:py-24">
          {PILLARS.map((pillar, i) => {
            const extra = PILLAR_EXTRAS[pillar.slug];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={pillar.slug}>
                <article
                  id={pillar.slug}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    reversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-white">
                        <PillarIcon icon={pillar.icon} />
                      </span>
                      <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">
                        {pillar.title}
                      </h2>
                    </div>
                    <p className="mt-5 text-base leading-relaxed text-slate-soft md:text-lg">
                      {pillar.description}
                    </p>
                    {pillar.slug === 'clean-water' && (
                      <p className="mt-4 rounded-xl bg-sky-tint p-4 text-sm leading-relaxed text-navy">
                        From the drilling rig to the first flow of clean water, each
                        borehole is delivered free of charge and entrusted to the
                        community under agreed stewardship conditions.
                      </p>
                    )}
                    <Link
                      href="/get-involved/"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-sky-deep"
                    >
                      Support {pillar.title.toLowerCase()} projects{' '}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                  <div className="grid gap-4">
                    <div className="relative h-64 overflow-hidden rounded-2xl shadow-md sm:h-80">
                      <Image
                        src={asset(pillar.image)}
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    {extra && (
                      <div className="relative h-44 overflow-hidden rounded-2xl shadow-md sm:h-56">
                        <Image
                          src={asset(extra.image)}
                          alt={extra.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Completed water point video */}
      <section className="bg-sky-tint">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="The Result"
              title="A finished water point, serving its village"
              lead="Clean water flowing daily at a completed Hope Springs International borehole — stewarded by the community it serves."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-10 h-64 max-w-3xl overflow-hidden rounded-2xl shadow-md sm:h-96">
              <VideoPlayer
                src="/videos/water-point-community.mp4"
                poster="/images/water-point-community-poster.jpg"
                label="Community members drawing clean water from the taps of a completed Hope Springs International water point."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
