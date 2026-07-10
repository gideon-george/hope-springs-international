import type { Metadata } from 'next';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_E164,
  NIGERIA_OFFICE,
  US_OFFICE,
} from '@/lib/site';
import { waLink } from '@/lib/whatsapp';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Reach Hope Springs International on WhatsApp or by phone (+234 809 100 9155), or visit our Nigeria field office in Gombe State or international HQ in Gallatin, Tennessee.',
};

const OFFICES = [NIGERIA_OFFICE, US_OFFICE];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        lead="Whether you want to give, partner, volunteer, or tell us about a community in need — we would love to hear from you."
        image="/images/aid-delivery.jpg"
        imageAlt="Hope Springs team members with community leaders during an aid delivery."
      />

      {/* Direct channels + form */}
      <section className="bg-white">
        <div className="container-site grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              center={false}
              eyebrow="Talk to Us"
              title="WhatsApp is the fastest way"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-soft">
              Our team answers the official WhatsApp line from the Gombe field
              office. Message us any time — or call during business hours.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
              <div>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center gap-2.5 text-base font-semibold text-navy hover:text-sky"
                >
                  <Phone className="h-5 w-5 text-sky" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
                <p className="mt-1 pl-8 text-xs text-slate-soft">
                  Official phone &amp; WhatsApp
                </p>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-soft">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky/60" aria-hidden />
                {/* TODO(owner): add the official email address when available. */}
                <span>
                  Email address coming soon — please use WhatsApp or phone for now.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-sky-tint bg-sky-tint/60 p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-navy">
                Send us a message
              </h3>
              <p className="mb-6 mt-1 text-sm text-slate-soft">
                Fill this in and we&apos;ll receive it on WhatsApp.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-sky-tint">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Are"
              title="Two offices, one mission"
              lead="Our field office in Gombe State walks with communities on the ground; our Tennessee headquarters approves and fully funds each project."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {OFFICES.map((office, i) => (
              <Reveal key={office.title} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-sky-tint bg-white shadow-sm">
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky text-white">
                        <MapPin className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="font-heading text-xl font-bold text-navy">
                        {office.title}
                      </h3>
                    </div>
                    <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-slate-soft">
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </address>
                  </div>
                  {/* TODO(owner): replace the address-search embeds with exact
                      Google Maps pins once confirmed on the ground. */}
                  <div className="h-64 w-full">
                    <iframe
                      title={`Map — ${office.title}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
