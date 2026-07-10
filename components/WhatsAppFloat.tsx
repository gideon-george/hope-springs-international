import { MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';

// Persistent floating WhatsApp button — the organisation's primary CTA.
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hope Springs International on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
