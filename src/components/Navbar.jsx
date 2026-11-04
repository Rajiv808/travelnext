
import { useEffect, useState } from "react";
import { Menu, X, Plane, ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Destinations", href: "#destinations" },
  { name: "Packages", href: "#packages" },
  { name: "Our Services", href: "#services" },
  { name: "About Us", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    closeMenu();

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", href);
    }
  };

  const openWhatsApp = () => {
    const message =
      "Hi TravelNext! I'd like to plan a trip. Please share your travel packages and pricing.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg shadow-emerald-950/5 backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="TravelNext home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-950 text-amber-300 shadow-md shadow-emerald-900/20 transition-transform duration-300 group-hover:rotate-[-8deg]">
            <Plane size={23} strokeWidth={1.8} />
          </span>

          <span className="text-[25px] font-extrabold tracking-tight text-emerald-950">
            TravelNext<span className="text-amber-500">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-emerald-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
          >
            <MessageCircle size={17} />
            Plan My Trip
            <ArrowUpRight size={16} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-950 transition-colors hover:bg-emerald-100 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`absolute transition-all duration-300 ${
              menuOpen
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Menu size={24} />
          </span>

          <span
            className={`absolute transition-all duration-300 ${
              menuOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }`}
          >
            <X size={24} />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-emerald-950/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full z-50 border-t border-emerald-100 bg-white shadow-xl shadow-emerald-950/10 transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(event) => handleNavClick(event, link.href)}
                className="flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800 active:bg-emerald-100"
                style={{
                  transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                }}
              >
                {link.name}
                <ArrowUpRight
                  size={17}
                  className="text-emerald-700/60"
                />
              </a>
            ))}
          </div>

          <div className="mt-4 border-t border-emerald-100 pt-4">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                openWhatsApp();
              }}
              tabIndex={menuOpen ? 0 : -1}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-700 px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-200 hover:from-emerald-900 hover:to-emerald-800 active:scale-[0.98]"
            >
              <MessageCircle size={19} />
              Plan My Trip
              <ArrowUpRight size={18} />
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
              Your next great journey starts here.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
