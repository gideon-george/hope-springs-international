// WhatsApp is the organisation's primary call to action.
const WHATSAPP_NUMBER = '2348035019426';

export const DEFAULT_MESSAGE =
  "Hi Hope Springs International! I'd like to get involved / support your work.";

export function waLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  donate:
    "Hi Hope Springs International! I'd like to make a donation to support your work. Please share how I can give.",
  partner:
    "Hi Hope Springs International! I represent an organisation interested in partnering with you. Let's talk.",
  volunteer:
    "Hi Hope Springs International! I'd like to volunteer my time and skills. How can I help?",
  newsletter:
    "Hi Hope Springs International! I'd like to subscribe to your newsletter and receive updates on your work.",
  general: DEFAULT_MESSAGE,
};
