
const WHATSAPP_NUMBER = "919477110367";

const services = [
  {
    icon: "✈️",
    title: "Tour Packages",
    description: "Explore beautiful places with planned tour packages.",
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    description: "Find comfortable stays at the right price.",
  },
  {
    icon: "🚗",
    title: "Car & Transfers",
    description: "Enjoy easy and comfortable local travel.",
  },
  {
    icon: "🌍",
    title: "Custom Trips",
    description: "Plan a trip that matches your budget and choice.",
  },
];

export default function Services() {
  const sendEnquiry = (service) => {
    const message = `Hi TravelNext! I want to know more about ${service}.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="services" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Everything for Your Trip
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-600">
            Simple planning, comfortable travel, and memorable holidays.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mb-5 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <button
                onClick={() => sendEnquiry(service.title)}
                className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
