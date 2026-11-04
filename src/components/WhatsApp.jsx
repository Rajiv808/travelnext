
const WHATSAPP_NUMBER = "919477110367";

function WhatsApp() {
  const message =
    "Hi TravelNext! I'd love to plan a trip. Please share your tour packages and pricing.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TravelNext on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16.02 3C8.85 3 3.02 8.8 3.02 15.93c0 2.28.6 4.5 1.75 6.45L3 29l6.86-1.79a13.1 13.1 0 0 0 6.18 1.57h.01c7.17 0 12.95-5.8 12.95-12.85C29 8.8 23.2 3 16.02 3Zm0 23.55a10.8 10.8 0 0 1-5.5-1.5l-.4-.23-4.08 1.07 1.09-3.98-.26-.41a10.6 10.6 0 0 1-1.63-5.6c0-5.93 4.84-10.75 10.79-10.75 2.88 0 5.58 1.12 7.61 3.15a10.67 10.67 0 0 1 3.16 7.6c0 5.93-4.84 10.75-10.78 10.75Zm5.92-8.05c-.32-.16-1.9-.93-2.2-1.03-.3-.11-.51-.16-.73.16-.22.33-.84 1.03-1.03 1.24-.19.22-.38.25-.7.08-.33-.16-1.37-.5-2.61-1.6-.96-.85-1.61-1.9-1.8-2.23-.19-.33-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.41-.3.33-1.14 1.1-1.14 2.67s1.17 3.1 1.33 3.32c.16.22 2.3 3.5 5.57 4.91.78.34 1.38.55 1.85.7.78.25 1.49.22 2.05.13.63-.1 1.9-.77 2.17-1.51.27-.74.27-1.38.19-1.51-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </a>
  );
}

export default WhatsApp;
