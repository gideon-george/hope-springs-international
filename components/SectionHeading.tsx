export default function SectionHeading({
  eyebrow,
  title,
  lead,
  center = true,
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            onDark ? 'text-sky-light' : 'text-sky'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-heading text-2xl font-bold md:text-4xl ${
          onDark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            onDark ? 'text-white/80' : 'text-slate-soft'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
