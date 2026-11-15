import { site } from '@/content/site';

const MESSAGE = 'Hi JSJ INFOTECH, I would like to know more about your services.';

// Opens WhatsApp chat with Mr. Subhash (+91 89430 32965) and a preset message.
// wa.me works on mobile (app) and desktop (WhatsApp Web / desktop app).
export function WhatsAppButton() {
  const href = `https://wa.me/${site.phone.tel.replace('+', '')}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JSJ INFOTECH on WhatsApp (opens in a new tab)"
      className="group no-print fixed right-4 bottom-4 z-50 inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] pr-5 pl-4 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-200 hover:-translate-y-0.5 md:right-6 md:bottom-6"
    >
      <svg aria-hidden viewBox="0 0 32 32" className="size-7 fill-current">
        <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.3.6 4.54 1.74 6.52L3 29l6.65-1.71A12.95 12.95 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.6c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.95 1.02 1.05-3.85-.27-.4A10.56 10.56 0 0 1 5.4 16c0-5.85 4.76-10.6 10.6-10.6 5.85 0 10.6 4.75 10.6 10.6 0 5.85-4.75 10.6-10.6 10.6Zm5.81-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="hidden text-[15px] font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
