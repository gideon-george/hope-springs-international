import { ClipboardCheck, Handshake, Building2, Gift } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/process';
import Reveal from '@/components/Reveal';

const STEP_ICONS = {
  'clipboard-check': ClipboardCheck,
  handshake: Handshake,
  building: Building2,
  gift: Gift,
} as const;

export default function ProcessSteps({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PROCESS_STEPS.map((step, i) => {
        const Icon = STEP_ICONS[step.icon];
        return (
          <Reveal key={step.number} delay={i * 0.08} className="h-full">
            <li className="relative flex h-full flex-col rounded-2xl border border-sky-tint bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span
                  className="font-heading text-4xl font-bold text-sky-tint"
                  style={{ WebkitTextStroke: '1.5px #4FB0E5' }}
                  aria-hidden
                >
                  {String(step.number).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                <span className="sr-only">Step {step.number}: </span>
                {step.title}
              </h3>
              {!compact && (
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                  {step.description}
                </p>
              )}
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
