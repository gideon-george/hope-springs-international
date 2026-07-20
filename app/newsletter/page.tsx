import type { Metadata } from 'next';
import { Newspaper, HeartHandshake, Droplets } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import NewsletterForm from '@/components/NewsletterForm';
import SocialLinks from '@/components/SocialLinks';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'Subscribe to the Hope Springs International Nigeria newsletter for field stories, completed water points, and updates from our partner communities.',
};

const HIGHLIGHTS = [
  {
    icon: Droplets,
    title: 'Field stories',
    body: 'Drilling days, first flows of clean water, and the villages behind each project.',
  },
  {
    icon: Newspaper,
    title: 'Project updates',
    body: 'Progress on boreholes, education support, and healthcare outreach as it happens.',
  },
  {
    icon: HeartHandshake,
    title: 'Ways to serve',
    body: 'Upcoming needs, partnership opportunities, and prayer points from the field.',
  },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        title="Newsletter"
        lead="Stay close to the work — stories, photos, and updates from our partner communities in Gombe State, delivered straight to you."
        image="/images/community-meeting.jpg"
        imageAlt="Community members and Hope Springs team members meeting together under a large tree."
      />

      <section className="bg-white">
        <div className="container-site grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              center={false}
              eyebrow="Stay Connected"
              title="What you'll receive"
            />
            <div className="mt-8 space-y-6">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky text-white">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-soft">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky">
                Follow us
              </p>
              <div className="mt-3">
                <SocialLinks
                  linkClassName="text-slate-soft hover:text-sky"
                  iconClassName="h-6 w-6"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-sky-tint bg-sky-tint/60 p-6 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-navy">
                Subscribe to the newsletter
              </h2>
              <p className="mb-6 mt-1 text-sm text-slate-soft">
                Share your details and we&apos;ll add you to the mailing list.
              </p>
              <NewsletterForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
