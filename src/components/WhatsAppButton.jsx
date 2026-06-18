// Floating WhatsApp button (fixed bottom-right, above the chat widget).
const PHONE = "918949472643"; // RGPL WhatsApp number
const MESSAGE = "Hello RGPL, I'd like to know more about your environmental consultancy services.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RGPL on WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 4C9.93 4 4.98 8.95 4.98 15.06c0 1.95.51 3.86 1.48 5.54L4.9 27l6.56-1.72a11 11 0 0 0 4.58 1.01h.01c6.11 0 11.06-4.95 11.06-11.06 0-2.95-1.15-5.73-3.24-7.82A11 11 0 0 0 16.04 4Zm0 20.2h-.01a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-3.89 1.02 1.04-3.79-.22-.35a9.05 9.05 0 0 1-1.39-4.83c0-5.02 4.09-9.11 9.12-9.11 2.44 0 4.72.95 6.44 2.67a9.06 9.06 0 0 1 2.67 6.45c0 5.02-4.09 9.41-8.79 9.41Zm5.01-6.82c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32Z" />
      </svg>
    </a>
  );
}
