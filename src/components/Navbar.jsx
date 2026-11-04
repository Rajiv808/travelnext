
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919477110367";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi TravelNext! I'd love to plan my next trip. Please share your travel packages."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-emerald-900/10 bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="TravelNext home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-900 text-xl text-amber-300 shadow-md transition duration-300 group-hover:-rotate-6 group-hover:scale-110">
            ✈
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-emerald-950">
            TravelNext<span className="text-amber-500">.</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.28em] text-gray-500">
              Find your somewhere
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-emerald-900"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={openWhatsApp}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/10 transition duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl"
          >
            Plan My Trip
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-gray-200 bg-white text-emerald-950 transition hover:border-emerald-800 hover:bg-emerald-50 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-2.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-2.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[480px] border-t border-gray-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-5 py-4 sm:px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-900 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-3 opacity-0"
              }`}
            >
              {link.label}
              <span className="text-amber-500">↗</span>
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              closeMenu();
              openWhatsApp();
            }}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 px-5 py-4 font-bold text-white transition hover:bg-emerald-800"
          >
            <span>✈</span>
            Plan My Trip on WhatsApp
            <span>↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}
