
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Hotel,
  CarFront,
  Utensils,
  MapPinned,
  Headset,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Personalised Travel Planning",
    description: "Journeys designed around your interests and preferences.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Hotel & Accommodation",
    description: "Find comfortable stays for every kind of getaway.",
    icon: Hotel,
  },
  {
    number: "03",
    title: "Transportation",
    description: "Explore convenient travel and local transfer options.",
    icon: CarFront,
  },
  {
    number: "04",
    title: "Local Food Experiences",
    description: "Discover authentic flavours and regional cuisine.",
    icon: Utensils,
  },
  {
    number: "05",
    title: "Sightseeing & Activities",
    description: "Discover attractions, culture and local experiences.",
    icon: MapPinned,
  },
  {
    number: "06",
    title: "Travel Enquiry Assistance",
    description: "Get assistance with your travel planning and enquiries.",
    icon: Headset,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#071629] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-300" />
              <span className="text-[10px] font-bold tracking-[4px] text-cyan-300">
                THE TRAVELNEXT EXPERIENCE
              </span>
            </div>

            <h2 className="font-['Manrope'] text-5xl font-extrabold leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-[82px]">
              Every detail.
              <br />
              <span className="text-cyan-300">Thoughtfully planned.</span>
            </h2>
          </motion.div>

          <p className="max-w-[340px] text-sm leading-8 text-slate-400">
            Great journeys are made of little details. Explore the services
            that help make your travel experience more memorable.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[450px] overflow-hidden rounded-[24px] lg:min-h-[700px]"
          >
            <img
              src="/images/darjeeling.jpg"
              alt="Beautiful mountain travel destination"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-[#061426]/10 to-transparent" />

            <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-[#071629]/35 px-4 py-2 backdrop-blur-md">
              <span className="text-[9px] font-bold tracking-[2px] text-white">
                DISCOVER MORE
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <p className="mb-4 text-[10px] font-bold tracking-[3px] text-cyan-300">
                BEYOND THE ORDINARY
              </p>

              <h3 className="font-['Manrope'] text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                Travel is not
                <br />
                just about places.
              </h3>

              <p className="mt-5 max-w-[350px] text-sm leading-7 text-white/70">
                It's about the people, flavours, landscapes and moments
                that become part of your story.
              </p>

              <a
                href="#destinations"
                className="mt-8 inline-flex items-center gap-4 border-b border-cyan-300 pb-3 text-[10px] font-bold tracking-[2px] text-white transition hover:text-cyan-300"
              >
                FIND YOUR NEXT ESCAPE
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[3px] text-cyan-300">
                WHAT WE OFFER
              </span>
              <span className="text-[10px] tracking-[2px] text-slate-500">
                01 — 06
              </span>
            </div>

            <div className="border-t border-white/15">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.07,
                    }}
                    className="group flex items-center gap-4 border-b border-white/15 py-6 sm:gap-6 sm:py-7"
                  >
                    <span className="w-7 shrink-0 font-['Manrope'] text-xs font-semibold text-slate-500 transition group-hover:text-cyan-300">
                      {service.number}
                    </span>

                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-slate-300 transition duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#071629]">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-['Manrope'] text-base font-bold text-white transition group-hover:text-cyan-300 sm:text-lg">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {service.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </motion.div>
                );
              })}
            </div>

            <a
              href="https://wa.me/919477110367?text=Hello%20TravelNext!%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-fit items-center gap-4 rounded-full bg-[#25D366] px-6 py-4 text-xs font-extrabold text-[#062d17] transition hover:-translate-y-1 hover:bg-[#1fbd5b]"
            >
              DISCUSS YOUR TRAVEL PLANS
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-5 md:grid-cols-2"
        >
          <div className="group relative h-[280px] overflow-hidden rounded-[20px] sm:h-[350px]">
            <img
              src="/images/car.png"
              alt="Travel vehicle"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">
              <p className="text-[9px] font-bold tracking-[3px] text-cyan-300">
                THE JOURNEY MATTERS
              </p>
              <h3 className="mt-2 font-['Manrope'] text-3xl font-extrabold">
                Travel in comfort.
              </h3>
            </div>
          </div>

          <div className="group relative h-[280px] overflow-hidden rounded-[20px] sm:h-[350px]">
            <img
              src="/images/food.png"
              alt="Regional Indian cuisine"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">
              <p className="text-[9px] font-bold tracking-[3px] text-cyan-300">
                TASTE THE DESTINATION
              </p>
              <h3 className="mt-2 font-['Manrope'] text-3xl font-extrabold">
                Discover local flavours.
              </h3>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-slate-400">
            Every destination has a story. Let's help you discover yours.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[2px] text-cyan-300 transition hover:text-white"
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
