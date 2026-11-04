
import { useState } from "react";

const WHATSAPP_NUMBER = "919477110367";

const destinations = [
  "Ayodhya",
  "Bhutan",
  "Darjeeling",
  "Goa",
  "Kashmir",
  "Kedarnath",
  "Kerala",
  "Sundarban",
  "Taj Mahal, Agra",
  "Varanasi",
];

export default function Hero() {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2 travellers");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi TravelNext! I'd like to plan a trip.
Destination: ${destination || "Not decided yet"}
Travel date: ${travelDate || "Flexible"}
Travellers: ${travellers}
Please share your packages and pricing.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fbf8f1] pb-16 pt-12 sm:pt-16 lg:pb-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Your next adventure starts here
          </div>

          <h1 className="mt-7 max-w-2xl font-serif text-5xl font-medium leading-[1.08] tracking-tight text-emerald-950 sm:text-6xl lg:text-7xl">
            The world is wide.
            <span className="mt-2 block italic text-amber-600">
              Go feel it.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            From Himalayan sunrises to peaceful days by the sea, we turn your
            travel dreams into unforgettable journeys. Discover beautiful
            destinations with TravelNext.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#packages"
              className="group inline-flex items-center gap-3 rounded-full bg-emerald-900 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/10 transition duration-300 hover:-translate-y-1 hover:bg-emerald-800"
            >
              Explore Our Trips
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#destinations"
              className="inline-flex items-center gap-3 rounded-full border border-emerald-900/15 bg-white px-7 py-4 text-sm font-bold text-emerald-950 transition duration-300 hover:-translate-y-1 hover:border-amber-500"
            >
              Discover Destinations
              <span>↓</span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["✦", "✿", "❋", "☺"].map((symbol, index) => (
                <span
                  key={index}
                  className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-[#fbf8f1] bg-emerald-100 text-sm text-emerald-900"
                  style={{
                    backgroundColor: [
                      "#e9c9aa",
                      "#b6d0c1",
                      "#edb6a2",
                      "#d8d5a8",
                    ][index],
                  }}
                >
                  {symbol}
                </span>
              ))}
            </div>

            <div>
              <div className="text-sm tracking-[0.2em] text-amber-600">
                ★★★★★
              </div>
              <p className="mt-1 text-xs text-gray-600">
                Thoughtful trips, memorable experiences
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[440px] w-full max-w-xl sm:h-[540px]">
          <div className="absolute inset-x-8 inset-y-3 overflow-hidden rounded-t-[48%] rounded-b-3xl bg-emerald-100 shadow-2xl shadow-emerald-950/10 sm:inset-x-12">
            <img
              src="/images/kashmir.jpg"
              alt="Beautiful mountain scenery in Kashmir"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-7 text-white sm:bottom-10 sm:left-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Somewhere worth discovering
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                Kashmir, India
              </h2>
            </div>
          </div>

          <div className="absolute left-0 top-12 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-emerald-950/10 sm:left-1">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-xl">
              ✈
            </span>
            <div>
              <p className="text-sm font-bold text-emerald-950">
                Your kind of adventure
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Personalised just for you
              </p>
            </div>
          </div>

          <div className="absolute bottom-16 right-0 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-emerald-950/10 sm:bottom-20 sm:right-1">
            <div className="flex -space-x-2">
              {["bhutan.jpg", "kerala.jpg", "goa.jpg"].map((image) => (
                <img
                  key={image}
                  src={`/images/${image}`}
                  alt=""
                  className="h-10 w-9 rounded-lg border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-950">
                Beautiful escapes
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Find your somewhere
              </p>
            </div>
          </div>

          <div className="absolute right-2 top-5 text-4xl text-amber-500 sm:right-5 sm:top-8">
            ✳
          </div>

          <div className="absolute bottom-28 left-0 grid h-20 w-20 -rotate-12 place-items-center rounded-full bg-amber-400 text-center text-[10px] font-extrabold leading-5 text-emerald-950 shadow-lg sm:bottom-32 sm:left-1 sm:h-24 sm:w-24">
            GO FAR.
            <br />
            FEEL MORE.
            <br />
            ✦ TRAVELNEXT
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-10">
        <form
          onSubmit={handleSubmit}
          className="grid gap-3 rounded-3xl border border-gray-100 bg-white p-4 shadow-xl shadow-emerald-950/5 sm:p-6 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end"
        >
          <div className="px-2 py-2">
            <label
              htmlFor="destination"
              className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500"
            >
              Where to?
            </label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm text-emerald-950 outline-none transition focus:border-emerald-700"
            >
              <option value="">Choose a destination</option>
              {destinations.map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </select>
          </div>

          <div className="px-2 py-2">
            <label
              htmlFor="travelDate"
              className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500"
            >
              When are you going?
            </label>
            <input
              id="travelDate"
              type="date"
              min={new Date().toLocaleDateString("en-CA")}
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm text-emerald-950 outline-none transition focus:border-emerald-700"
            />
          </div>

          <div className="px-2 py-2">
            <label
              htmlFor="travellers"
              className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500"
            >
              Who's travelling?
            </label>
            <select
              id="travellers"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm text-emerald-950 outline-none transition focus:border-emerald-700"
            >
              <option>Solo traveller</option>
              <option>2 travellers</option>
              <option>3–4 travellers</option>
              <option>5–8 travellers</option>
              <option>9+ travellers</option>
              <option>Family with children</option>
            </select>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-emerald-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            Find My Trip
            <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}
