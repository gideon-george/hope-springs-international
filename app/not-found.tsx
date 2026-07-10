import Link from 'next/link';
import { Droplets } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-sky-tint">
      <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <Droplets className="h-12 w-12 text-sky" aria-hidden />
        <h1 className="mt-5 font-heading text-3xl font-bold text-navy md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-base text-slate-soft">
          The page you&apos;re looking for doesn&apos;t exist — but the mission
          continues. Let us take you back home.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
