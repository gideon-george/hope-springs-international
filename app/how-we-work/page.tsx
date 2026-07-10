import type { Metadata } from 'next';
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import { asset } from '@/lib/site';
import PageHero from '@/components/PageHero';
import ProcessSteps from '@/components/ProcessSteps';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Every Hope Springs International project follows a rigorous, community-led Needs Assessment — from field evaluation in Gombe to free delivery.',
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="How We Work"
        lead="To ensure lasting impact, everything we do is driven by a rigorous, community-led Needs Assessment."
        image="/images/community-meeting.jpg"
        imageAlt="Hope Springs team members conducting a needs assessment with a community under a shade tree."
      />

      {/* The four steps */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="Four steps from need to lasting change"
              lead="Each project begins with the community itself and ends with a completed project handed over completely free of charge."
            />
          </Reveal>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Step one in the field */}
      <section className="bg-sky-tint">
        <div className="container-site grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-md sm:h-96">
              <Image
                src={asset('/images/community-meeting.jpg')}
                alt="A Hope Springs clinician listening to families during an on-the-ground community assessment beneath a large tree."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              center={false}
              eyebrow="It starts in the village"
              title="Listening before building"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-soft">
              A project never starts at a desk. Our Gombe field office sits down
              with each community — under the tree, in the village square — to
              verify its most critical needs first-hand. The community then agrees
              to specific stewardship conditions, because a project only lasts when
              the village owns it.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'On-the-ground verification by our Gombe field office',
                'Stewardship conditions agreed with the local community',
                'Final approval and full funding from our US headquarters',
                'Delivery to the community completely free of charge',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Free of charge promise */}
      <section className="bg-white">
        <div className="container-site py-16 text-center md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Our Promise"
              title="Completely free of charge"
              lead="Approved projects — including borehole drilling — are delivered to the communities completely free of charge. No fees, no repayment: a gift that reflects the love of God."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-10 h-64 max-w-4xl overflow-hidden rounded-2xl shadow-md sm:h-96">
              <Image
                src={asset('/images/team-celebration.jpg')}
                alt="Drilling crew and villagers celebrating together, covered in mud, after striking water on a successful drilling day."
                fill
                sizes="(max-width: 1280px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-soft">
              A successful drilling day — the moment a village&apos;s water future changes.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
