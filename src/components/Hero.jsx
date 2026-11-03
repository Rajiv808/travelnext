
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "DESTINATIONS", href: "#destinations" },
    { name: "JOURNEYS", href: "#packages" },
    { name: "OUR STORY", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#071629] text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/kashmir.jpg')" }}
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/85 via-[#061426]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-transparent to-black/30" />

      {/* FIXED NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 bg-[#071629]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] w-full max-w-[1500px] items-center justify-between px-6 sm:px-10 lg:px-16">

          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-cyan-300/70 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-[#071629]">
              <span className="text-lg font-black">T</span>
            </span>

            <span>
              <span className="block text-lg font-extrabold tracking-[3px]">
                TRAVELNEXT
              </span>
              <span className="block text-[8px] tracking-[3px] text-white/60">
                EXPLORE BEYOND LIMITS
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 text-[10px] font-semibold tracking-[2px] text-white/80 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-cyan-300 ${
                  index === 0 ? "text-cyan-300" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/919477110367"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-3 border border-white/50 px-5 py-3 text-[10px] font-bold tracking-[1.5px] transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#071629] sm:flex"
          >
            PLAN YOUR TRIP
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="grid h-10 w-10 place-items-center border border-white/30 md:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#071629] px-6 py-6 md:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/10 py-4 text-xs font-semibold tracking-[2px] text-white/80 transition hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://wa.me/919477110367"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex items-center justify-between bg-cyan-300 px-5 py-4 text-xs font-bold tracking-wider text-[#071629]"
              >
                PLAN YOUR TRIP
                <ArrowUpRight size={18} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col pt-[82px]">

        <div className="mx-auto flex w-full max-w-[1500px] flex-1 items-center px-6 pb-20 pt-14 sm:px-10 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[1000px]"
          >
            <div className="mb-9 flex items-center gap-4">
              <span className="h-px w-12 bg-cyan-300" />
              <span className="text-[10px] font-semibold tracking-[4px] text-cyan-200 sm:text-xs">
                YOUR JOURNEY BEGINS HERE
              </span>
            </div>

            <h1 className="font-['Manrope'] text-[clamp(58px,10vw,138px)] font-extrabold uppercase leading-[0.88] tracking-[-0.075em]">
              THE WORLD
              <br />
              IS YOURS TO
              <br />
              <span className="text-cyan-300">DISCOVER.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[400px] text-sm leading-8 text-white/75 sm:text-base">
                Go beyond the familiar. Discover extraordinary places,
                experience different cultures and create memories that
                stay with you forever.
              </p>

              <a
                href="#destinations"
                className="group flex w-fit shrink-0 items-center gap-5 border-b border-cyan-300 pb-3 text-xs font-bold tracking-[2px] transition hover:text-cyan-300"
              >
                EXPLORE DESTINATIONS

                <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan-300 text-[#071629] transition group-hover:translate-x-2">
                  <ArrowUpRight size={20} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <div className="mx-auto w-full max-w-[1500px] px-6 pb-7 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/25 pt-6">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="text-[9px] font-semibold tracking-[2px] text-white/65">
                BASED IN KOLKATA, INDIA
              </span>
            </div>

            <a
              href="#destinations"
              className="flex items-center gap-3 text-[9px] font-semibold tracking-[2px] text-white/65 transition hover:text-cyan-300"
            >
              SCROLL TO EXPLORE
              <ArrowDown size={15} />
            </a>

            <span className="text-[9px] tracking-[2px] text-white/50">
              TRAVELNEXT © 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
