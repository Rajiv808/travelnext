
const WHATSAPP_NUMBER = "919477110367";

const benefits = [
  {
    icon: "✦",
    title: "Personalised journeys",
    description:
      "Every traveller is different. We help shape your itinerary around your interests, travel dates and budget.",
  },
  {
    icon: "♡",
    title: "Thoughtful planning",
    description:
      "From choosing destinations to coordinating stays and transfers, we help make planning simpler.",
  },
  {
    icon: "⌖",
    title: "Discover local experiences",
    description:
      "Explore regional food, culture, nature and memorable places beyond the usual tourist trail.",
  },
  {
    icon: "↗",
    title: "Friendly support",
    description:
      "Discuss your plans directly with our team and get help understanding your travel options.",
  },
];

const services = [
  "Custom holiday packages",
  "Hotel and accommodation assistance",
  "Transport and transfer coordination",
  "Family and group holidays",
  "Nature and adventure trips",
  "Cultural and spiritual tours",
];

export default function About() {
  const whatsappMessage = encodeURIComponent(
    "Hi TravelNext! I'd like to know more about your travel services and holiday packages."
  );

  return (
    <section id="about" className="overflow-hidden bg-[#fbf8f1]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">
              Get to know TravelNext
            </p>

            <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              Every journey has a story.
              <span className="mt-2 block italic text-orange-600">
                Let's make yours beautiful.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
              At TravelNext, we believe travel is about more than reaching a
              destination. It is about discovering new places, experiencing
              different cultures and creating memories that stay with you.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-stone-600">
              Whether you dream of Himalayan landscapes, peaceful backwaters,
              golden beaches or India's spiritual heritage, we help you explore
              your options and plan a journey that feels right for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Plan your journey <span className="ml-2">↗</span>
              </a>

              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-7 py-3.5 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900"
              >
                Explore packages
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-t-[48%] rounded-b-3xl bg-emerald-100">
              <img
                src="/images/kashmir.jpg"
                alt="Beautiful Himalayan scenery for your next adventure"
                loading="lazy"
                className="h-[380px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-5 left-3 max-w-xs rounded-2xl border border-stone-100 bg-white p-5 shadow-xl sm:-left-5 sm:p-6">
              <p className="font-serif text-2xl text-emerald-950">
                Your journey, your way.
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Thoughtful travel ideas, personal attention and memories worth
                bringing home.
              </p>
            </div>

            <div className="absolute right-2 top-8 rounded-full bg-[#f2b66d] px-5 py-3 text-xs font-bold tracking-wide text-emerald-950 shadow-lg sm:-right-4">
              GO FAR. FEEL MORE.
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              The TravelNext difference
            </p>

            <h3 className="font-serif text-3xl text-emerald-950 sm:text-4xl">
              Travel planning with you in mind.
            </h3>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              We focus on making it easier to explore, compare options and plan
              your next escape with confidence.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4ecdf] text-2xl text-emerald-900">
                  {benefit.icon}
                </div>

                <h4 className="mb-3 font-serif text-xl text-emerald-950">
                  {benefit.title}
                </h4>

                <p className="text-sm leading-7 text-stone-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 rounded-3xl bg-emerald-950 p-7 text-white sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              Where would you like to go?
            </p>

            <h3 className="font-serif text-3xl leading-tight sm:text-4xl">
              From the first idea to your next adventure.
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-emerald-100">
              Tell us what kind of holiday you have in mind. We can help you
              explore destinations, understand package options and plan the
              details around your needs.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 sm:p-8">
            <h4 className="mb-5 font-serif text-2xl">
              How we can help
            </h4>

            <ul className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-sm leading-6 text-emerald-50"
                >
                  <span className="text-orange-300">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#f2b66d] px-6 py-4 text-sm font-bold text-emerald-950 transition hover:bg-amber-300"
            >
              Talk to TravelNext on WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
