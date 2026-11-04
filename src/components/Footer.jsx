
const WHATSAPP_NUMBER = "919477110367";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#123c35] px-4 pb-6 pt-14 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-serif text-3xl font-bold tracking-tight"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full rounded-bl-md bg-[#f2b66d] text-xl text-[#123c35]">
                ✳
              </span>
              TravelNext<span className="text-[#f2b66d]">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-emerald-100/75">
              Discover beautiful destinations, meaningful experiences, and
              unforgettable journeys. Your next adventure starts with us.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi TravelNext! I'd like to plan a trip.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f2b66d] px-5 py-3 text-sm font-bold text-[#123c35] transition hover:-translate-y-0.5 hover:bg-[#ffd095]"
            >
              Plan your trip <span>↗</span>
            </a>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#f2b66d]">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-emerald-100/75">
              <li>
                <a className="transition hover:text-white" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white"
                  href="#destinations"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#packages">
                  Tour Packages
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#services">
                  Our Services
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#about">
                  About TravelNext
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#f2b66d]">
              Popular Destinations
            </h3>
            <ul className="space-y-3 text-sm text-emerald-100/75">
              <li>
                <a className="transition hover:text-white" href="#destinations">
                  Kashmir
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#destinations">
                  Kerala
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#destinations">
                  Goa
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#destinations">
                  Darjeeling
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#destinations">
                  Bhutan
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#destinations">
                  Varanasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#f2b66d]">
              Get in Touch
            </h3>

            <div className="space-y-5 text-sm text-emerald-100/75">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <span className="text-lg">◉</span>
                <span>
                  <span className="block font-semibold text-white">
                    WhatsApp
                  </span>
                  Chat with our travel team
                </span>
              </a>

              <a
                href="tel:+919477110367"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <span className="text-lg">☎</span>
                <span>
                  <span className="block font-semibold text-white">Call Us</span>
                  +91 94771 10367
                </span>
              </a>

              <a
                href="#contact"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <span className="text-lg">✉</span>
                <span>
                  <span className="block font-semibold text-white">
                    Travel Enquiries
                  </span>
                  Tell us about your next trip
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-emerald-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} TravelNext. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Made for the journey. Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
