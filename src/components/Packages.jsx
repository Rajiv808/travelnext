
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  CheckCircle2,
  Sparkles,
  Send,
  Plane,
} from "lucide-react";

const whatsappNumber = "919477110367";

const packages = [
  {
    name: "Sundarban Adventure",
    location: "West Bengal",
    image: "/images/sundarban.jpg",
    duration: "2 Days / 1 Night",
    type: "Wildlife & Nature",
    price: 4999,
    description:
      "Explore beautiful mangrove forests, river cruises and the unique wildlife of Sundarban.",
    features: [
      "Boat safari experience",
      "Hotel accommodation",
      "Meals included",
      "Local guide assistance",
    ],
    popular: true,
  },
  {
    name: "Bhutan Discovery",
    location: "Bhutan",
    image: "/images/bhutan.jpg",
    duration: "5 Days / 4 Nights",
    type: "International Tour",
    price: 24999,
    description:
      "Discover peaceful monasteries, beautiful valleys and the magical Himalayan kingdom.",
    features: [
      "Paro sightseeing",
      "Thimphu city tour",
      "Hotel accommodation",
      "Transport assistance",
    ],
  },
  {
    name: "Kashmir Paradise",
    location: "Jammu & Kashmir",
    image: "/images/kashmir.jpg",
    duration: "5 Days / 4 Nights",
    type: "Mountain Escape",
    price: 18999,
    description:
      "Experience snow-covered mountains, beautiful valleys and the peaceful charm of Dal Lake.",
    features: [
      "Dal Lake experience",
      "Srinagar sightseeing",
      "Hotel accommodation",
      "Local transportation",
    ],
  },
  {
    name: "Darjeeling Escape",
    location: "West Bengal",
    image: "/images/darjeeling.jpg",
    duration: "3 Days / 2 Nights",
    type: "Hill Station",
    price: 6999,
    description:
      "Enjoy spectacular Himalayan views, tea gardens and the timeless charm of the hills.",
    features: [
      "Tiger Hill sightseeing",
      "Tea garden visit",
      "Hotel accommodation",
      "Local sightseeing",
    ],
  },
  {
    name: "Kerala Experience",
    location: "Kerala",
    image: "/images/kerala.jpg",
    duration: "5 Days / 4 Nights",
    type: "Nature & Relaxation",
    price: 17999,
    description:
      "Relax among beautiful backwaters and discover the natural beauty of Kerala.",
    features: [
      "Alleppey houseboat experience",
      "Backwater sightseeing",
      "Hotel accommodation",
      "Meals as per itinerary",
    ],
  },
  {
    name: "Spiritual India",
    location: "Ayodhya & Varanasi",
    image: "/images/varanasi.jpg",
    duration: "4 Days / 3 Nights",
    type: "Religious Tour",
    price: 9999,
    description:
      "Experience sacred temples, peaceful surroundings and the divine Ganga Aarti.",
    features: [
      "Ayodhya Ram Mandir visit",
      "Varanasi Ganga Aarti",
      "Hotel accommodation",
      "Local transportation",
    ],
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

function PackageCard({ item, index }) {
  const handleBooking = () => {
    const message = `Hello TravelNext!

I am interested in your ${item.name} tour package.

Location: ${item.location}
Duration: ${item.duration}
Displayed starting price: ${formatPrice(item.price)} per person

Please share the final quotation, detailed itinerary, availability and booking details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0c2138] shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-shadow duration-500 hover:border-cyan-300/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]"
    >
      <div className="relative h-[245px] shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/80 via-transparent to-black/15" />

        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#071629]/65 px-4 py-2 text-[9px] font-bold tracking-[1.5px] text-white backdrop-blur-md">
          {item.type.toUpperCase()}
        </span>

        {item.popular && (
          <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-cyan-300 px-3 py-2 text-[9px] font-extrabold tracking-wider text-[#071629]">
            <Sparkles size={13} />
            POPULAR
          </span>
        )}

        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-semibold text-white">
          <Clock3 size={15} className="text-cyan-300" />
          {item.duration}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.8px] text-cyan-300">
          <MapPin size={14} />
          {item.location}
        </div>

        <h3 className="font-['Manrope'] text-[23px] font-extrabold tracking-tight text-white transition-colors group-hover:text-cyan-300">
          {item.name}
        </h3>

        <p className="mt-3 min-h-[66px] text-[13px] leading-7 text-slate-400">
          {item.description}
        </p>

        <div className="my-6 border-t border-white/10 pt-5">
          <p className="mb-4 text-[10px] font-bold tracking-[2px] text-white/80">
            PACKAGE HIGHLIGHTS
          </p>

          <div className="grid grid-cols-1 gap-3">
            {item.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-xs text-slate-300"
              >
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-cyan-300"
                />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto border-t border-white/10 pt-5">
          <p className="text-[9px] font-bold tracking-[2px] text-slate-500">
            STARTING FROM
          </p>

          <div className="mt-1 flex flex-wrap items-baseline gap-2">
            <span className="font-['Manrope'] text-[28px] font-extrabold tracking-tight text-white">
              {formatPrice(item.price)}
            </span>
            <span className="text-[10px] text-slate-400">
              / person
            </span>
          </div>

          <p className="mb-5 mt-1 text-[10px] text-slate-400">
            Indicative price · Final quote on enquiry
          </p>

          <button
            type="button"
            onClick={handleBooking}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-[#062d17] shadow-lg shadow-green-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fbd5b] hover:shadow-green-500/20 active:translate-y-0"
          >
            <Send size={18} />
            Enquire on WhatsApp
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Packages() {
  const customMessage =
    "Hello TravelNext! I want a customised tour package. Please help me plan my trip.";

  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#071629] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute -right-48 bottom-20 h-[450px] w-[450px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-300" />
              <span className="text-[10px] font-bold tracking-[4px] text-cyan-300">
                CURATED TRAVEL EXPERIENCES
              </span>
            </div>

            <h2 className="font-['Manrope'] text-5xl font-extrabold leading-[1.05] tracking-[-0.065em] sm:text-6xl lg:text-[78px]">
              Find your perfect
              <br />
              <span className="text-cyan-300">journey.</span>
            </h2>
          </div>

          <div className="max-w-[390px] lg:pb-2">
            <p className="text-sm leading-8 text-slate-400">
              Discover memorable destinations, comfortable stays and
              exciting adventures. Choose your next journey with TravelNext.
            </p>

            <div className="mt-5 flex items-center gap-3 text-[9px] font-bold tracking-[2px] text-cyan-300">
              <Plane size={15} />
              EXPLORE. EXPERIENCE. REMEMBER.
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item, index) => (
            <PackageCard key={item.name} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[26px] border border-cyan-300/20 bg-gradient-to-r from-[#102d49] via-[#10354e] to-[#0b253e] p-8 sm:p-12 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-cyan-300/10" />
          <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-cyan-300/10" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[700px]">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[3px] text-cyan-300">
                <Sparkles size={15} />
                YOUR JOURNEY, YOUR WAY
              </div>

              <h3 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Dreaming of somewhere
                <span className="text-cyan-300"> different?</span>
              </h3>

              <p className="mt-5 max-w-[560px] text-sm leading-8 text-slate-300">
                Share your destination, budget and travel preferences.
                Let's explore the possibilities for your next journey.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-4 rounded-full bg-[#25D366] px-7 py-4 text-xs font-extrabold tracking-wide text-[#062d17] shadow-lg shadow-green-950/20 transition hover:-translate-y-1 hover:bg-[#1fbd5b]"
            >
              <Send size={17} />
              CUSTOMISE MY TRIP
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
