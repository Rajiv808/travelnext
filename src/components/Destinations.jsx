
import { motion } from "framer-motion";
import { ArrowUpRight, MoveUpRight, Compass } from "lucide-react";

const destinations = [
  {
    name: "Kashmir",
    location: "INDIA · NORTH",
    description: "Where mountains touch the sky.",
    image: "/images/kashmir.jpg",
    number: "01",
    featured: true,
  },
  {
    name: "Bhutan",
    location: "HIMALAYAS",
    description: "Discover the kingdom of happiness.",
    image: "/images/bhutan.jpg",
    number: "02",
  },
  {
    name: "Sundarban",
    location: "WEST BENGAL",
    description: "An adventure into the wild.",
    image: "/images/sundarban.jpg",
    number: "03",
  },
  {
    name: "Kerala",
    location: "SOUTH INDIA",
    description: "Slow down. Find your paradise.",
    image: "/images/kerala.jpg",
    number: "04",
  },
  {
    name: "Darjeeling",
    location: "WEST BENGAL",
    description: "A beautiful escape in the hills.",
    image: "/images/darjeeling.jpg",
    number: "05",
  },
  {
    name: "Goa",
    location: "INDIA · WEST",
    description: "Let the coastline set you free.",
    image: "/images/goa.jpg",
    number: "06",
  },
];

function DestinationCard({ place, index }) {
  return (
    <motion.a
      href={`https://wa.me/919477110367?text=${encodeURIComponent(
        `Hello TravelNext! I am interested in visiting ${place.name}. Please share the travel packages and details.`
      )}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
      className={`group relative isolate block overflow-hidden rounded-[22px] border border-white/10 bg-[#102943] shadow-[0_20px_60px_rgba(0,0,0,0.22)] ${
        place.featured
          ? "h-[480px] sm:h-[550px] lg:col-span-7 lg:row-span-2 lg:h-full"
          : "h-[300px] sm:h-[350px] lg:col-span-5 lg:h-full"
      } ${
        index >= 3
          ? "lg:col-span-4 lg:h-[250px]"
          : ""
      }`}
    >
      <img
        src={place.image}
        alt={`${place.name} destination`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-[#061426]/15 to-black/10 transition-opacity duration-500 group-hover:from-[#061426]/95" />

      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#071629]/45 px-4 py-2 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        <span className="text-[9px] font-bold tracking-[1.8px] text-white">
          {place.location}
        </span>
      </div>

      <span className="absolute right-5 top-5 font-['Manrope'] text-xs font-semibold tracking-[2px] text-white/80">
        {place.number}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        {place.featured && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-[9px] font-bold tracking-[2px] text-cyan-200 backdrop-blur-md">
            <Compass size={13} />
            FEATURED DESTINATION
          </span>
        )}

        <h3
          className={`font-['Manrope'] font-extrabold tracking-[-0.05em] text-white ${
            place.featured
              ? "text-5xl sm:text-7xl"
              : "text-4xl sm:text-5xl"
          }`}
        >
          {place.name}
        </h3>

        <div className="mt-3 flex items-end justify-between gap-3">
          <p className="max-w-[260px] text-xs leading-6 text-white/70 sm:text-sm">
            {place.description}
          </p>

          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#071629]">
            <ArrowUpRight size={20} />
          </span>
        </div>

        <div className="mt-5 h-px w-full origin-left scale-x-0 bg-cyan-300 transition-transform duration-700 group-hover:scale-x-100" />
      </div>
    </motion.a>
  );
}

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-[#071629] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-64 top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute -right-64 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-300" />
              <span className="text-[10px] font-bold tracking-[4px] text-cyan-300">
                THE WORLD AWAITS
              </span>
            </div>

            <h2 className="font-['Manrope'] text-5xl font-extrabold leading-[1.05] tracking-[-0.065em] sm:text-6xl lg:text-[82px]">
              Places worth
              <br />
              <span className="text-cyan-300">getting lost in.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-[390px] text-sm leading-8 text-slate-400">
              From the quiet beauty of the mountains to the untamed wilderness,
              explore places that turn an ordinary trip into an extraordinary
              experience.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] font-bold tracking-[2px] text-cyan-300">
              <span>EXPLORE OUR COLLECTION</span>
              <MoveUpRight size={16} />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[260px_260px_250px]">
          {destinations.map((place, index) => (
            <DestinationCard
              key={place.name}
              place={place}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-['Manrope'] text-xl font-bold tracking-tight">
              Your next story starts somewhere.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Tell us where you dream of going.
            </p>
          </div>

          <a
            href="https://wa.me/919477110367?text=Hello%20TravelNext!%20I%20would%20like%20to%20plan%20a%20trip."
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-5 rounded-full border border-cyan-300/50 px-6 py-4 text-[10px] font-bold tracking-[2px] text-cyan-300 transition hover:bg-cyan-300 hover:text-[#071629]"
          >
            PLAN YOUR JOURNEY
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
