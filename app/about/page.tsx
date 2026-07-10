import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Cross, Globe2, MapPin, ArrowRight } from 'lucide-react';
import { MOTTO, TAGLINE, asset } from '@/lib/site';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Hope Springs International is a faith-based charity founded on Christian principles, ministering to the whole person — physical and spiritual — in underserved communities.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        lead={`${MOTTO} ${TAGLINE}`}
        image="/images/community-meeting.jpg"
        imageAlt="Hope Springs team members meeting with a community under a large shade tree."
      />

      {/* Mission */}
      <section className="bg-white">
        <div className="container-site grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              center={false}
              eyebrow="Our Foundation"
              title="Ministry to the whole person"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-soft">
              <p>
                Hope Springs International is a faith-based charity organization
                dedicated to bringing holistic transformation to underserved
                communities. Founded on Christian principles, our ministry is to
                the whole person — serving both physical and spiritual needs.
              </p>
              <p>
                We are committed to breaking the cycle of poverty and spiritual
                darkness through targeted community development. We don&apos;t just
                provide aid; we build sustainable foundations — clean water,
                education, and healthcare that a community can steward for
                generations.
              </p>
            </div>
            <blockquote className="mt-6 rounded-2xl bg-sky-tint p-6">
              <div className="flex gap-3">
                <Cross className="mt-1 h-6 w-6 shrink-0 text-sky" aria-hidden />
                <p className="font-heading text-lg font-semibold leading-relaxed text-navy">
                  “Above all, our ultimate goal is to share the love of God so that
                  people may come to know Jesus Christ as their Lord and Savior.”
                </p>
              </div>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-2xl shadow-md sm:h-[28rem]">
              <Image
                src={asset('/images/team-leaders.jpg')}
                alt="Two Hope Springs International team leaders standing together outside an office building in Nigeria."
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* US–Nigeria partnership */}
      <section className="bg-sky-tint">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title="A US–Nigeria partnership"
              lead="Our field office in Gombe State, Nigeria walks with each community on the ground, while our international headquarters in Gallatin, Tennessee approves and fully funds every project."
            />
          </Reveal>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="relative h-72 overflow-hidden rounded-2xl shadow-md sm:h-96 lg:h-full">
                <Image
                  src={asset('/images/us-nigeria-partnership.jpg')}
                  alt="A Nigerian field staff member and an American volunteer standing side by side in a partner village, the field staffer wearing a Hope Springs borehole logo shirt."
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="flex flex-col gap-6 lg:col-span-2">
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-sky-tint bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-tint text-sky">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                    Gombe Field Office
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                    Our team in Tumfure, Gombe State conducts on-the-ground needs
                    assessments, builds relationships with village leaders, and
                    oversees every project through to delivery.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-sky-tint bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-tint text-sky">
                    <Globe2 className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                    Tennessee Headquarters
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                    From Gallatin, Tennessee, our international headquarters reviews
                    each community&apos;s assessment, grants final approval, and
                    provides full funding — so projects arrive free of charge.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <Link
                  href="/how-we-work/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-sky-deep"
                >
                  How a project comes to life <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src={asset('/images/branding-banner.jpg')}
                alt="Hope Springs International banner: children from partner communities beside a map of Africa, with the words 'Living Water Through Sustainable Skills — Lasting Change, One Village at a Time'."
                width={1600}
                height={534}
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-center text-sm text-slate-soft">
              Our banner carries both promises: living water through sustainable
              skills, and lasting change — one village at a time.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
