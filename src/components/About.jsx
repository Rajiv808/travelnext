
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Globe2,
  MapPin,
  Plane,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Travel with purpose",
    description: "Discover destinations that match your interests and travel style.",
  },
  {
    number: "02",
    title: "Your journey, your way",
    description: "Explore travel possibilities with personalised planning.",
  },
  {
    number: "03",
    title: "Discover more",
    description: "Experience the culture, flavours and beauty of every destination.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#091c31] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-16">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-300" />
            <span className="text-[10px] font-bold tracking-[4px] text-cyan-300">
              GET TO KNOW US
            </span>
          </div>

          <h2 className="font-['Manrope'] text-5xl font-extrabold leading-[1.05] tracking-[-0.065em] sm:text-6xl lg:text-[82px]">
            More than a trip.
            <br />
            <span className="text-cyan-300">A way to discover.</span>
          </h2>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[440px] overflow-hidden rounded-[24px] sm:h-[580px]">
              <img
                src="/images/taj-mahal.jpg"
                alt="The Taj Mahal in India"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/65 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 flex items-center gap-3">
                <MapPin size={17} className="text-cyan-300" />
                <span className="text-[10px] font-bold tracking-[3px] text-white">
                  INDIA · A LAND OF STORIES
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 right-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#102943] px-5 py-4 shadow-2xl sm:-right-7 sm:px-7">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-cyan-300/10 text-cyan-300">
                <Compass size={24} />
              </div>
              <div>
                <p className="font-['Manrope'] text-sm font-bold text-white">
                  Explore beyond limits
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Your next journey starts here
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="mb-7 flex items-center gap-3 text-cyan-300">
              <Globe2 size={19} />
              <span className="text-[10px] font-bold tracking-[3px]">
                WELCOME TO TRAVELNEXT
              </span>
            </div>

            <h3 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl">
              The world is full of places waiting to become part of your story.
            </h3>

            <p className="mt-7 text-sm leading-8 text-slate-400">
              TravelNext is a travel brand based in Kolkata, created around
              the idea of making travel discovery simple and inspiring.
              From peaceful mountain escapes to cultural explorations and
              nature-filled adventures, there is always somewhere new to discover.
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              We help travellers explore destinations, discover tour options
              and enquire about journeys that suit their preferences.
              Whether you already know where you want to go or need some
              inspiration, your next adventure can start here.
            </p>

            <div className="mt-10 border-t border-white/10">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="flex gap-5 border-b border-white/10 py-5"
                >
                  <span className="pt-1 text-xs font-bold tracking-[2px] text-cyan-300">
                    {value.number}
                  </span>

                  <div>
                    <h4 className="font-['Manrope'] text-base font-bold text-white">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919477110367?text=Hello%20TravelNext!%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#25D366] px-7 py-4 text-xs font-extrabold text-[#062d17] transition hover:-translate-y-1 hover:bg-[#1fbd5b]"
            >
              LET'S TALK ABOUT TRAVEL
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-5 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <Plane size={23} className="text-cyan-300" />
            <div>
              <p className="text-sm font-bold">Discover destinations</p>
              <p className="mt-1 text-xs text-slate-400">
                Find inspiration for your next trip.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Compass size={23} className="text-cyan-300" />
            <div>
              <p className="text-sm font-bold">Explore experiences</p>
              <p className="mt-1 text-xs text-slate-400">
                Find journeys that suit your interests.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Globe2 size={23} className="text-cyan-300" />
            <div>
              <p className="text-sm font-bold">Start your journey</p>
              <p className="mt-1 text-xs text-slate-400">
                Connect with us about your travel plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
