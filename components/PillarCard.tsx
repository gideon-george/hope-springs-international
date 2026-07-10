import Image from 'next/image';
import type { Pillar } from '@/lib/pillars';
import { asset } from '@/lib/site';
import PillarIcon from '@/components/PillarIcon';

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sky-tint bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-52 w-full sm:h-56">
        <Image
          src={asset(pillar.image)}
          alt={pillar.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-tint text-sky">
            <PillarIcon icon={pillar.icon} />
          </span>
          <h3 className="font-heading text-xl font-bold text-navy">{pillar.title}</h3>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-soft">
          {pillar.short}
        </p>
      </div>
    </article>
  );
}
