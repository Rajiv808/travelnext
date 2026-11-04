
import { useState } from "react";

const WHATSAPP_NUMBER = "919477110367";

const packages = [
  {
    id: 1,
    name: "Kashmir, at your pace",
    destination: "Kashmir",
    duration: "5 nights / 6 days",
    price: 24999,
    category: "mountains",
    tag: "BESTSELLER",
    image: "/images/kashmir.jpg",
    description:
      "Alpine lakes, mountain air, cosy stays and breathtaking Himalayan views.",
    places: [
      "Srinagar",
      "Dal Lake shikara ride",
      "Gulmarg",
      "Pahalgam",
      "Mughal Gardens",
    ],
  },
  {
    id: 2,
    name: "Kerala, unhurried",
    destination: "Kerala",
    duration: "4 nights / 5 days",
    price: 18499,
    category: "nature",
    tag: "SLOW TRAVEL",
    image: "/images/kerala.jpg",
    description:
      "Green backwaters, fragrant food, lush landscapes and a relaxing escape.",
    places: [
      "Kochi",
      "Munnar tea gardens",
      "Alleppey backwaters",
      "Houseboat experience",
    ],
  },
  {
    id: 3,
    name: "Goa, beyond the beach",
    destination: "Goa",
    duration: "3 nights / 4 days",
    price: 12499,
    category: "coast",
    tag: "SUNSHINE FIX",
    image: "/images/goa.jpg",
    description:
      "Golden beaches, colourful streets, Portuguese heritage and coastal sunsets.",
    places: [
      "North Goa beaches",
      "Fort Aguada",
      "Old Goa churches",
      "Panjim Latin Quarter",
      "South Goa coast",
    ],
  },
  {
    id: 4,
    name: "Varanasi, deeply felt",
    destination: "Varanasi",
    duration: "2 nights / 3 days",
    price: 8999,
    category: "culture",
    tag: "SOULFUL INDIA",
    image: "/images/varanasi.jpg",
    description:
      "Ancient lanes, riverside rituals, spiritual experiences and local flavours.",
    places: [
      "Dashashwamedh Ghat",
      "Ganga Aarti",
      "Kashi Vishwanath area",
      "Sarnath",
      "Sunrise boat ride",
    ],
  },
  {
    id: 5,
    name: "Darjeeling in the clouds",
    destination: "Darjeeling",
    duration: "3 nights / 4 days",
    price: 10999,
    category: "mountains",
    tag: "HILL COUNTRY",
    image: "/images/darjeeling.jpg",
    description:
      "Tea gardens, mountain mornings and charming hillside experiences.",
    places: [
      "Tiger Hill sunrise",
      "Batasia Loop",
      "Ghoom Monastery",
      "Tea estate",
      "Darjeeling Mall",
    ],
  },
  {
    id: 6,
    name: "Sundarban, wild at heart",
    destination: "Sundarban",
    duration: "2 nights / 3 days",
    price: 7499,
    category: "nature",
    tag: "WILD & WONDERFUL",
    image: "/images/sundarban.jpg",
    description:
      "Explore winding mangroves, quiet waterways and a memorable nature escape.",
    places: [
      "Godkhali jetty",
      "Mangrove boat safari",
      "Sajnekhali Watch Tower",
      "Village visit",
      "Forest viewpoints",
    ],
  },
];

const filters = [
  { label: "All journeys", value: "all" },
  { label: "Mountain air", value: "mountains" },
  { label: "Culture & heritage", value: "culture" },
  { label: "Nature & slow travel", value: "nature" },
  { label: "Coastal days", value: "coast" },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN").format(price);

function PackageCard({ travelPackage }) {
  const message = encodeURIComponent(
    `Hi TravelNext! I'm interested in the "${travelPackage.name}" package.\n` +
      `Destination: ${travelPackage.destination}\n` +
      `Duration: ${travelPackage.duration}\n` +
      `Advertised starting price: ₹${formatPrice(travelPackage.price)} per person\n` +
      `Please share the detailed itinerary, inclusions, availability and final pricing.`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-stone-100">
        <img
          src={travelPackage.image}
          alt={`${travelPackage.destination} travel package`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold tracking-wide text-emerald-950">
          {travelPackage.tag}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-stone-500">
          <span>◷ {travelPackage.duration}</span>
          <span>⌖ {travelPackage.destination}</span>
        </div>

        <h3 className="mb-2 font-serif text-2xl text-emerald-950">
          {travelPackage.name}
        </h3>

        <p className="mb-5 text-sm leading-6 text-stone-600">
          {travelPackage.description}
        </p>

        <div className="mb-5 border-t border-dashed border-stone-200 pt-4">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
            Tour highlights
          </h4>

          <ul className="space-y-2">
            {travelPackage.places.map((place) => (
              <li
                key={place}
                className="flex items-start gap-2 text-sm leading-5 text-stone-600"
              >
                <span className="mt-0.5 text-emerald-700">✓</span>
                <span>{place}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end justify-between gap-3 border-t border-stone-100 pt-4">
          <div>
            <p className="mb-1 text-xs text-stone-500">
              EST. PRICE / PERSON
            </p>

            <p className="text-xl font-bold text-emerald-950">
              ₹{formatPrice(travelPackage.price)}
              <span className="ml-1 text-xs font-normal text-stone-500">
                onwards
              </span>
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${travelPackage.name} on WhatsApp`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-xl text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
          >
            ↗
          </a>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center rounded-full border border-emerald-900 px-4 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-900 hover:text-white"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function Packages() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPackages =
    activeFilter === "all"
      ? packages
      : packages.filter(
          (travelPackage) => travelPackage.category === activeFilter
        );

  return (
    <section id="packages" className="bg-[#fbf8f1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              Little escapes. Big memories.
            </p>

            <h2 className="font-serif text-4xl tracking-tight text-emerald-950 sm:text-5xl">
              Trips worth dreaming of.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-stone-600">
            Thoughtful itineraries, lovely stays and memorable destinations.
            Choose your favourite escape and let TravelNext help plan your trip.
          </p>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter travel packages"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition ${
                activeFilter === filter.value
                  ? "border-emerald-900 bg-emerald-900 text-white"
                  : "border-stone-300 bg-transparent text-stone-600 hover:border-emerald-900 hover:text-emerald-950"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((travelPackage) => (
            <PackageCard
              key={travelPackage.id}
              travelPackage={travelPackage}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-emerald-950 px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="mb-2 font-serif text-3xl">
                Looking for something different?
              </h3>
              <p className="max-w-xl text-sm leading-6 text-emerald-100">
                Tell us your destination, travel dates and budget. We can help
                you plan a personalised holiday.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi TravelNext! I'd like a customised travel package. Please help me plan my trip."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f2b66d] px-6 py-3.5 text-sm font-bold text-emerald-950 transition hover:bg-amber-300"
            >
              Plan my trip ↗
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-stone-500">
          Prices shown are illustrative starting estimates per person, not
          confirmed quotes. Final prices depend on travel dates, group size,
          accommodation, transport and package inclusions. Please confirm
          availability and final pricing with TravelNext.
        </p>
      </div>
    </section>
  );
}
