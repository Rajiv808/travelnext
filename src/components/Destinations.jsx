
const destinations = [
  {
    name: "Kashmir",
    subtitle: "Mountains & magic",
    image: "/images/kashmir.jpg",
    description: "Discover alpine lakes and breathtaking mountain views.",
  },
  {
    name: "Bhutan",
    subtitle: "Find your calm",
    image: "/images/bhutan.jpg",
    description: "Experience peaceful valleys and Himalayan culture.",
  },
  {
    name: "Kerala",
    subtitle: "Slow down, soak in",
    image: "/images/kerala.jpg",
    description: "Explore lush greenery and tranquil backwaters.",
  },
  {
    name: "Goa",
    subtitle: "Sunshine state of mind",
    image: "/images/goa.jpg",
    description: "Enjoy golden beaches and colourful coastal towns.",
  },
  {
    name: "Darjeeling",
    subtitle: "Tea, mist & mountains",
    image: "/images/darjeeling.jpg",
    description: "Wake up to tea gardens and spectacular hill views.",
  },
  {
    name: "Ayodhya",
    subtitle: "Culture & devotion",
    image: "/images/ayodhya.jpg",
    description: "Discover sacred sites and timeless heritage.",
  },
  {
    name: "Kedarnath",
    subtitle: "A journey within",
    image: "/images/kedarnath.jpg",
    description: "Experience a memorable Himalayan pilgrimage.",
  },
  {
    name: "Sundarban",
    subtitle: "Into the wild",
    image: "/images/sundarban.jpg",
    description: "Explore mangrove waterways and extraordinary wildlife.",
  },
  {
    name: "Taj Mahal",
    subtitle: "Timeless wonder",
    image: "/images/taj-mahal.jpg",
    description: "Admire one of India's most iconic monuments.",
  },
  {
    name: "Varanasi",
    subtitle: "Feel the soul of India",
    image: "/images/varanasi.jpg",
    description: "Experience riverside rituals and historic streets.",
  },
];

export default function Destinations() {
  const exploreDestination = (name) => {
    const message = `Hi TravelNext! I'm interested in visiting ${name}. Please share available tour packages, itineraries and prices.`;

    window.open(
      `https://wa.me/919477110367?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="destinations"
      className="bg-[#f2f2e9] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              A little inspiration goes a long way
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-emerald-950 sm:text-5xl">
              Places that stay
              <br />
              with you.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-600">
            Pick a feeling, follow your curiosity, and let us take care of the
            details. Your next favourite place is waiting.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <button
              key={destination.name}
              type="button"
              onClick={() => exploreDestination(destination.name)}
              className={`group relative h-64 overflow-hidden rounded-2xl bg-emerald-100 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-80 ${
                index === 1 || index === 4 ? "lg:translate-y-5" : ""
              }`}
            >
              <img
                src={destination.image}
                alt={destination.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-white sm:p-5">
                <div>
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-[10px] sm:tracking-[0.16em]">
                    {destination.subtitle}
                  </p>
                  <h3 className="font-serif text-xl font-medium sm:text-2xl">
                    {destination.name}
                  </h3>
                </div>

                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/70 text-sm transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-emerald-950 sm:h-10 sm:w-10">
                  ↗
                </span>
              </div>

              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-white/95 p-4 text-xs leading-5 text-gray-700 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {destination.description}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#packages"
            className="inline-flex items-center gap-3 rounded-full bg-emerald-900 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-800"
          >
            Explore Tour Packages
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
