import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ArrowRight, Cross, Droplets } from 'lucide-react';
import { TAGLINE, asset } from '@/lib/site';
import { waLink } from '@/lib/whatsapp';
import { PILLARS } from '@/lib/pillars';
import PillarCard from '@/components/PillarCard';
import ProcessSteps from '@/components/ProcessSteps';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import VideoPlayer from '@/components/VideoPlayer';

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src={asset('/images/borehole-drilling.jpg')}
            alt="A borehole drilling rig raising its mast over a rural community in Gombe State, Nigeria."
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90"
            aria-hidden
          />
        </div>
        <div className="container-site relative flex flex-col items-center py-20 text-center md:py-32">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-light backdrop-blur">
              <Droplets className="h-3.5 w-3.5" aria-hidden />
              A faith-based charity
            </p>
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
              Lasting change,
              <span className="block text-sky-light">One village at a time.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {TAGLINE} We bring clean water, education, and healthcare to
              underserved communities — completely free of charge.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/get-involved/" className="btn-primary w-full sm:w-auto">
                Get Involved
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

      {/* ---------- Who we are ---------- */}
      <section className="bg-white">
        <div className="container-site grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              center={false}
              eyebrow="Who We Are"
              title="Hope, flowing to the whole person"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-soft">
              <p>
                Hope Springs International is a faith-based charity organization
                dedicated to bringing holistic transformation to underserved
                communities. Founded on Christian principles, our ministry is to
                the whole person — serving both physical and spiritual needs.
              </p>
              <p className="flex gap-3 rounded-xl bg-sky-tint p-4 text-navy">
                <Cross className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden />
                <span>
                  Above all, our ultimate goal is to share the love of God so that
                  people may come to know Jesus Christ as their Lord and Savior.
                </span>
              </p>
              <p>
                We are committed to breaking the cycle of poverty and spiritual
                darkness through targeted community development. We don&apos;t just
                provide aid; we build sustainable foundations.
              </p>
            </div>
            <Link
              href="/about/"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-sky-deep"
            >
              More about us <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl shadow-md">
              <Image
                src={asset('/images/branding-banner.jpg')}
                alt="Hope Springs International banner: children from partner communities beside a map of Africa, with the words 'Living Water Through Sustainable Skills — Lasting Change, One Village at a Time'."
                width={1600}
                height={534}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
            <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl shadow-md sm:h-72">
              <Image
                src={asset('/images/community-meeting.jpg')}
                alt="Community members and Hope Springs team members meeting together under a large tree during a village needs assessment."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Three pillars ---------- */}
      <section className="bg-sky-tint">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Three pillars of transformation"
              lead="We build sustainable foundations by focusing on the essentials every village needs to flourish."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.slug} delay={i * 0.08} className="h-full">
                <PillarCard pillar={pillar} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/our-work/" className="btn-secondary">
              Explore our work <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A community-led Needs Assessment"
              lead="To ensure lasting impact, every project follows a rigorous four-step process — from field evaluation to free delivery."
            />
          </Reveal>
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/how-we-work/" className="btn-secondary">
              See the full process <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Impact strip: water flowing video + photos ---------- */}
      <section className="bg-navy">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              onDark
              eyebrow="Living Water"
              title="When the water flows, everything changes"
              lead="Scenes from our partner communities in Gombe State, Nigeria — completed water points, drilling days, and the people they serve."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal className="relative h-64 overflow-hidden rounded-2xl sm:h-80 md:h-96">
              <VideoPlayer
                src="/videos/water-point-flowing.mp4"
                poster="/images/water-point-flowing-poster.jpg"
                label="Clean water flowing from the taps of a completed Hope Springs International community water point."
              />
            </Reveal>
            <div className="grid gap-4">
              <Reveal delay={0.08} className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
                <Image
                  src={asset('/images/team-celebration.jpg')}
                  alt="The drilling team, muddy from a successful borehole, celebrating with a Hope Springs volunteer taking a group selfie."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.16} className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
                <Image
                  src={asset('/images/aid-delivery.jpg')}
                  alt="Hope Springs team members and community leaders beside a van during a medical supply delivery."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
