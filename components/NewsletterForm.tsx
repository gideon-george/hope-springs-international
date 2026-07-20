'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';

// The site is fully static, so newsletter sign-ups follow the same pattern as
// the contact form: the details arrive as a pre-filled WhatsApp message on the
// organisation's official number, where the team adds the subscriber manually.
export default function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const composed =
      `Hi Hope Springs International!\n` +
      `I'd like to subscribe to your newsletter.\n` +
      `Name: ${name}\n` +
      `Email: ${email}`;
    window.open(waLink(composed), '_blank', 'noopener,noreferrer');
  };

  const inputClasses =
    'w-full rounded-xl border border-sky-light/50 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-soft/70 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="newsletter-name" className="mb-1.5 block text-sm font-semibold text-navy">
          Your name
        </label>
        <input
          id="newsletter-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Amina Bello"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="newsletter-email" className="mb-1.5 block text-sm font-semibold text-navy">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        <MessageCircle className="h-4 w-4" aria-hidden />
        Subscribe via WhatsApp
      </button>
      <p className="text-xs leading-relaxed text-slate-soft">
        Submitting opens WhatsApp with your details pre-filled, addressed to our
        official number — nothing is stored on this website.
      </p>
    </form>
  );
}
