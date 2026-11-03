
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05111f] text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 lg:px-16">

        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-3">

          <div>
            <a href="#home">
              <h2 className="text-3xl font-bold tracking-[0.12em]">
                TRAVEL<span className="text-cyan-400">NEXT</span>
              </h2>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Discover new destinations, explore unforgettable experiences
              and make every journey meaningful.
            </p>

            <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-cyan-400">
              EXPLORE BEYOND LIMITS
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em]">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-400">
              <a href="#home" className="transition hover:text-cyan-400">Home</a>
              <a href="#destinations" className="transition hover:text-cyan-400">Destinations</a>
              <a href="#packages" className="transition hover:text-cyan-400">Packages</a>
              <a href="#services" className="transition hover:text-cyan-400">Services</a>
              <a href="#about" className="transition hover:text-cyan-400">About Us</a>
              <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em]">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-slate-400">
              <p className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-cyan-400" />
                Kolkata, West Bengal, India
              </p>

              <a
                href="https://wa.me/919477110367"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-cyan-400"
              >
                <Phone size={18} className="shrink-0 text-cyan-400" />
                +91 94771 10367
              </a>

              <a
                href="https://wa.me/919477110367"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-[#052b18] transition hover:bg-[#20bd5a]"
              >
                Contact on WhatsApp
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {currentYear} TravelNext. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition hover:text-cyan-400"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
