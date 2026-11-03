
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plane, ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Destinations", href: "#destinations" },
    { label: "Journeys", href: "#packages" },
    { label: "Experiences", href: "#services" },
    { label: "Our Story", href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const bookTrip = () => {
    const message = encodeURIComponent(
      "Hello TravelNext! I would like to plan a trip. Please share your packages."
    );
    window.open(
      `https://wa.me/919477110367?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#071629]/95 py-3 shadow-xl shadow-black/10 backdrop-blur-2xl"
            : "border-white/15 bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-[min(1380px,calc(100%-48px))] items-center justify-between gap-6">

          {/* Brand */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/50 text-cyan-300 transition duration-300 group-hover:rotate-[-12deg] group-hover:bg-cyan-300 group-hover:text-[#071629]">
              <Plane size={21} strokeWidth={1.8} />
            </span>

            <span className="font-['Manrope'] text-[19px] font-extrabold tracking-[1.5px] text-white">
              TRAVEL<span className="text-cyan-300">NEXT</span>
              <span className="mt-1 block text-[8px] font-semibold tracking-[2.5px] text-slate-400">
                EXPLORE BEYOND LIMITS
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-3 text-[12px] font-semibold text-white/75 transition-colors hover:text-cyan-300"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={bookTrip}
            className="hidden shrink-0 items-center gap-4 border border-cyan-300 bg-cyan-300 py-2 pl-5 pr-2 text-[12px] font-extrabold text-[#071629] transition-all duration-300 hover:border-white hover:bg-white md:flex"
          >
            Plan your journey
            <span className="grid h-8 w-8 place-items-center bg-[#071629] text-cyan-300 transition-colors group-hover:bg-cyan-300">
              <ArrowUpRight size={17} />
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center border border-cyan-300/40 bg-cyan-300/10 text-cyan-300 transition hover:bg-cyan-300 hover:text-[#071629] lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] overflow-y-auto bg-[#071629] px-6 pb-10 pt-28 lg:hidden"
          >
            <div className="mx-auto max-w-xl">

              <div className="mb-7 flex justify-between border-b border-white/15 pb-5 text-[10px] font-bold tracking-[2px] text-cyan-300">
                <span>EXPLORE TRAVELNEXT</span>
                <span>KOLKATA · INDIA</span>
              </div>

              <nav>
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="flex min-h-[76px] items-center justify-between border-b border-white/10 py-4 transition-colors hover:text-cyan-300"
                  >
                    <span className="flex items-center gap-5">
                      <span className="text-[11px] text-cyan-300">
                        0{index + 1}
                      </span>
                      <span className="font-['Manrope'] text-2xl font-bold tracking-tight text-white">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight size={21} className="text-cyan-300" />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-9">
                <p className="mb-4 text-xs text-slate-400">
                  HAVE A DESTINATION IN MIND?
                </p>
                <button
                  onClick={bookTrip}
                  className="flex w-full items-center justify-between bg-cyan-300 px-6 py-5 text-sm font-extrabold text-[#071629] transition hover:bg-white"
                >
                  Let's plan a trip
                  <ArrowUpRight size={20} />
                </button>
              </div>

              <p className="mt-10 text-center text-[10px] tracking-[3px] text-slate-500">
                TRAVELNEXT · EXPLORE BEYOND LIMITS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
