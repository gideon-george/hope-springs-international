import type { Metadata } from 'next';
import Image from 'next/image';
import { asset } from '@/lib/site';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import VideoPlayer from '@/components/VideoPlayer';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos and videos from Hope Springs International Nigeria — borehole drilling days, completed water points, aid deliveries, and the communities we serve in Gombe State.',
};

const PHOTOS = [
  {
    src: '/images/borehole-drilling.jpg',
    alt: 'A borehole drilling rig raising its mast over a rural community in Gombe State, Nigeria.',
    caption: 'Drilling day — a new community borehole begins',
  },
  {
    src: '/images/team-celebration.jpg',
    alt: 'The drilling team, muddy from a successful borehole, celebrating with a Hope Springs volunteer taking a group selfie.',
    caption: 'Celebrating a successful drill',
  },
  {
    src: '/images/community-meeting.jpg',
    alt: 'Community members and Hope Springs team members meeting together under a large tree during a village needs assessment.',
    caption: 'Community needs assessment under the village tree',
  },
  {
    src: '/images/aid-delivery.jpg',
    alt: 'Hope Springs team members and community leaders beside a van during a medical supply delivery.',
    caption: 'Medical supplies arriving in a partner village',
  },
  {
    src: '/images/us-nigeria-partnership.jpg',
    alt: 'A Nigerian field staff member and an American volunteer standing together in a partner village.',
    caption: 'A US–Nigeria partnership, side by side in the field',
  },
  {
    src: '/images/team-leaders.jpg',
    alt: 'Two Hope Springs International team leaders standing together outside an office building in Nigeria.',
    caption: 'Our team leaders in Nigeria',
  },
  {
    src: '/images/branding-banner.jpg',
    alt: "Hope Springs International banner: children from partner communities beside a map of Africa, with the words 'Living Water Through Sustainable Skills — Lasting Change, One Village at a Time'.",
    caption: 'Living Water Through Sustainable Skills',
    wide: true,
  },
];

const VIDEOS = [
  {
    src: '/videos/water-point-flowing.mp4',
    poster: '/images/water-point-flowing-poster.jpg',
    label:
      'Clean water flowing from the taps of a completed Hope Springs International community water point.',
    caption: 'Clean water flowing at a completed water point',
  },
  {
    src: '/videos/water-point-community.mp4',
    poster: '/images/water-point-community-poster.jpg',
    label:
      'Community members drawing clean water from the taps of a completed Hope Springs International water point.',
    caption: 'A finished water point serving its village',
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        lead="Scenes from the field — drilling days, flowing water points, aid deliveries, and the communities we walk with in Gombe State, Nigeria."
        image="/images/team-celebration.jpg"
        imageAlt="Drilling team and volunteers celebrating a successful borehole."
      />

      {/* Photos */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Photos"
              title="Moments from the field"
              lead="Every picture is from our own projects and partner communities."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={(i % 3) * 0.08}
                className={photo.wide ? 'sm:col-span-2 lg:col-span-3' : ''}
              >
                <figure className="overflow-hidden rounded-2xl border border-sky-tint bg-white shadow-sm">
                  <div
                    className={`relative w-full ${
                      photo.wide ? 'h-48 sm:h-64 lg:h-80' : 'h-60 sm:h-64'
                    }`}
                  >
                    <Image
                      src={asset(photo.src)}
                      alt={photo.alt}
                      fill
                      sizes={
                        photo.wide
                          ? '100vw'
                          : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      }
                      className={photo.wide ? 'object-contain bg-sky-tint' : 'object-cover'}
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-slate-soft">
                    {photo.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-sky-tint">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Videos"
              title="Watch the water flow"
              lead="Short clips from completed water points — the moment lasting change becomes visible."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {VIDEOS.map((video, i) => (
              <Reveal key={video.src} delay={i * 0.08}>
                <figure className="overflow-hidden rounded-2xl bg-white shadow-md">
                  <div className="relative h-64 w-full sm:h-80">
                    <VideoPlayer
                      src={video.src}
                      poster={video.poster}
                      label={video.label}
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-slate-soft">
                    {video.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
