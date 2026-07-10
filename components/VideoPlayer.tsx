'use client';

import { useRef, useEffect, useState } from 'react';
import { asset } from '@/lib/site';

// Lightweight self-hosted video: lazy-loaded when scrolled into view,
// muted + playsInline so it autoplays politely on mobile, with a poster
// so something meaningful shows before (or instead of) playback.
export default function VideoPlayer({
  src,
  poster,
  label,
  className = '',
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      el.play().catch(() => {
        /* autoplay blocked — controls remain available */
      });
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      className={`h-full w-full object-cover ${className}`}
      poster={asset(poster)}
      muted
      loop
      playsInline
      controls
      preload="none"
      aria-label={label}
    >
      {inView && <source src={asset(src)} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
