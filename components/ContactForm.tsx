'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';

// This site is fully static (no server / API routes), so the form composes a
// pre-filled WhatsApp message from the field values and opens it — the message
// arrives on the organisation's official WhatsApp number instantly.
export default function ContactForm() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('General enquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const composed =
      `Hi Hope Springs International!\n` +
      `My name is ${name || '(not given)'}.\n` +
      `Topic: ${topic}\n\n` +
      `${message}`;
    window.open(waLink(composed), '_blank', 'noopener,noreferrer');
  };

  const inputClasses =
    'w-full rounded-xl border border-sky-light/50 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-soft/70 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-navy">
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Amina Bello"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-topic" className="mb-1.5 block text-sm font-semibold text-navy">
          What is this about?
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClasses}
        >
          <option>General enquiry</option>
          <option>Donation</option>
          <option>Partnership</option>
          <option>Volunteering</option>
          <option>Community needs assessment request</option>
          <option>Prayer / encouragement</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-navy">
          Your message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us how we can help, or how you'd like to help…"
          className={inputClasses}
        />
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        <MessageCircle className="h-4 w-4" aria-hidden />
        Send via WhatsApp
      </button>
      <p className="text-xs leading-relaxed text-slate-soft">
        Submitting opens WhatsApp with your message pre-filled, addressed to our
        official number — nothing is stored on this website.
      </p>
    </form>
  );
}
