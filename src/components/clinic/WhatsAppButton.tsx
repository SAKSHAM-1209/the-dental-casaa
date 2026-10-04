export function WhatsAppButton() {
  const phoneNumber = "918920605123";

  const whatsappMessage =
    "Hello, I would like to book an appointment at The Dental Casaa.";

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      className="
        whatsapp-fab
        group
        fixed
        bottom-6
        right-6
        z-[9999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition-all
        duration-300
        ease-out
        hover:scale-110
        hover:bg-[#20bd5a]
        hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)]
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#25D366]
        sm:bottom-7
        sm:right-7
      "
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="
          h-8
          w-8
          fill-current
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.14-.42-2.17-1.34-.8-.72-1.34-1.6-1.5-1.9-.14-.3-.01-.46.14-.61.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.62-.93-2.2-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.06 2.86 1.21 3.05.15.2 2.08 3.3 5.07 4.5.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.01 21.8h-.01a9.8 9.8 0 0 1-4.98-1.36l-.36-.21-3.7.97.99-3.62-.23-.37A9.76 9.76 0 0 1 2.2 12.03C2.2 6.62 6.6 2.22 12.02 2.22a9.75 9.75 0 0 1 6.94 2.88 9.73 9.73 0 0 1 2.87 6.94c0 5.41-4.41 9.76-9.82 9.76M20.52 3.5A11.76 11.76 0 0 0 12.01.01C5.5.01.21 5.3.2 11.81c0 2.08.54 4.11 1.58 5.9L.06 24l6.45-1.69a11.9 11.9 0 0 0 5.5 1.4h.01c6.5 0 11.8-5.29 11.8-11.8 0-3.15-1.22-6.11-3.3-8.4" />
      </svg>
    </a>
  );
}