import type { Metadata } from 'next';
import Image from 'next/image';
import { HandCoins, Handshake, HeartHandshake, MessageCircle, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_E164, asset } from '@/lib/site';
import { waLink, WA_MESSAGES } from '@/lib/whatsapp';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Get Involved / Donate',
  description:
    'Donate, partner, or volunteer with Hope Springs International — help bring clean water, education, and healthcare to underserved villages free of charge.',
};

const WAYS = [
  {
    icon: HandCoins,
    title: 'Donate',
    body: 'Your gift funds boreholes, learning resources, and medical support — delivered to villages completely free of charge. Reach out on WhatsApp and we will walk you through how to give.',
    cta: 'Give via WhatsApp',
    message: WA_MESSAGES.donate,
  },
  {
    icon: Handshake,
    title: 'Partner',
    body: 'Churches, organisations, and businesses partner with us to fund whole projects — from a single borehole to a multi-village programme. Let us explore what lasting change could look like together.',
    cta: 'Discuss a partnership',
    message: WA_MESSAGES.partner,
  },
  {
    icon: HeartHandshake,
    title: 'Volunteer',
    body: 'From field visits to professional skills — medical, engineering, teaching — volunteers strengthen everything we do. Tell us how you would like to serve.',
    cta: 'Offer your skills',
    message: WA_MESSAGES.volunteer,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        lead="Every borehole, classroom, and clinic visit begins with someone who chose to give. Join us in bringing lasting change — one village at a time."
        image="/images/team-celebration.jpg"
        imageAlt="Drilling team and volunteers celebrating a successful borehole."
      />

      {/* Three ways to help */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Ways to Help"
              title="Give. Partner. Serve."
              lead="However you get involved, 100% of what we deliver reaches communities free of charge."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WAYS.map((way, i) => (
              <Reveal key={way.title} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-sky-tint bg-white p-7 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-white">
                    <way.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">{way.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">{way.body}</p>
                  <a
                    href={waLink(way.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp mt-6 w-full text-sm"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    {way.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Giving details */}
      <section className="bg-sky-tint">
        <div className="container-site grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              center={false}
              eyebrow="Giving Details"
              title="How to give right now"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-soft">
              We are preparing straightforward online and bank giving options. Until
              they are published here, the fastest way to give is to message us
              directly — we will personally guide you through your donation.
            </p>
            {/*
              TODO(owner): add official giving details here when available —
              e.g. bank account details, an online giving platform link, and any
              charitable-registration information. Do not publish account details
              from anywhere other than the organisation itself.
            */}
            <div className="mt-6 rounded-2xl border-2 border-dashed border-sky-light bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky">
                Coming soon
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                Official bank and online giving details will be published here. In
                the meantime, please reach us on WhatsApp or by phone and we will
                help you give securely.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(WA_MESSAGES.donate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp us to give
                </a>
                <a href={`tel:${PHONE_E164}`} className="btn-secondary text-sm">
                  <Phone className="h-4 w-4" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-md sm:h-96">
              <Image
                src={asset('/images/us-nigeria-partnership.jpg')}
                alt="A Nigerian field staff member and an American volunteer standing together in a partner village."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-soft">
              Giving flows through a trusted US–Nigeria partnership: funded from
              Tennessee, delivered hand-in-hand in Gombe State.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
