
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Users,
  Compass,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    travellers: "2 Travellers",
    preferences: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello TravelNext!

I would like to enquire about a trip.

Name: ${form.name}
Phone: ${form.phone}
Destination: ${form.destination}
Travel Date: ${form.date || "Flexible"}
Travellers: ${form.travellers}
Travel Preferences: ${form.preferences || "Not specified"}

Please share the available travel packages and details.`;

    window.open(
      `https://wa.me/919477110367?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#061322] px-5 py-4 text-base text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400 focus:bg-[#091a2e] focus:ring-2 focus:ring-cyan-400/15 [color-scheme:dark]";

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#071629] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3 text-cyan-400">
            <Compass size={18} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              Get In Touch
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Let's plan your
              <span className="block text-cyan-400">
                next journey.
              </span>
            </h2>

            <p className="max-w-xl text-base leading-7 text-slate-400 lg:justify-self-end">
              Have a destination in mind? Share your travel plans with us.
              We'll help you explore the right journey for your next holiday.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-10 h-[260px] overflow-hidden rounded-3xl sm:h-[350px] lg:h-[390px]"
        >
          <img
            src="/images/goa.jpg"
            alt="Beautiful Goa beach destination"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071629]/90 via-[#071629]/45 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-14">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Discover Goa
            </p>

            <h3 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sunsets, beaches
              <span className="block text-cyan-300">
                and unforgettable journeys.
              </span>
            </h3>

            <p className="mt-5 text-sm text-white/80 sm:text-base">
              Your next adventure is waiting.
            </p>
          </div>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.8fr_1fr] lg:gap-9">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-fit rounded-3xl border border-white/10 bg-[#0c2037] p-6 shadow-2xl sm:p-8 lg:p-9"
          >
            <div className="mb-7">
              <h3 className="text-3xl font-semibold">
                Send us an enquiry
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Tell us a little about your trip. We'll take it from there.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    autoComplete="tel"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Preferred Destination *
                </label>
                <input
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Where would you like to travel?"
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={14} className="text-cyan-400" />
                      Travel Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toLocaleDateString("en-CA")}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <Users size={14} className="text-cyan-400" />
                      Number of Travellers
                    </span>
                  </label>
                  <select
                    name="travellers"
                    value={form.travellers}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option>1 Traveller</option>
                    <option>2 Travellers</option>
                    <option>3 Travellers</option>
                    <option>4 Travellers</option>
                    <option>5-6 Travellers</option>
                    <option>Family / Group (6+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Tell us about your preferences
                </label>
                <textarea
                  name="preferences"
                  value={form.preferences}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Budget, hotel preference, sightseeing or special requests..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold text-[#052b18] transition duration-300 hover:bg-[#20bd5a] active:scale-[0.99]"
              >
                <MessageCircle size={19} />
                Send Enquiry on WhatsApp
                <ArrowUpRight
                  size={19}
                  className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs text-slate-500">
                Your enquiry will open directly in WhatsApp.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0c2037]"
          >
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Find Us
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Kolkata, India
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  West Bengal
                </p>
              </div>

              <MapPin size={25} className="text-cyan-400" />
            </div>

            <div className="min-h-[350px] flex-1 lg:min-h-0">
              <iframe
                title="Google Maps - Kolkata West Bengal"
                src="https://maps.google.com/maps?q=Kolkata%2C%20West%20Bengal%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C+West+Bengal%2C+India"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-sm font-semibold text-cyan-400 transition hover:bg-white/[0.03]"
            >
              Open in Google Maps
              <ArrowUpRight size={19} />
            </a>
          </motion.div>
        </div>

        <a
          href="https://wa.me/919477110367"
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0c2037] p-5 transition hover:border-cyan-400/30 lg:max-w-[calc(64.3%-12px)]"
        >
          <div className="rounded-xl bg-white/[0.05] p-3 text-cyan-400">
            <Phone size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              WhatsApp Contact
            </p>
            <p className="mt-1 text-lg font-semibold">
              +91 94771 10367
            </p>
          </div>

          <ArrowUpRight className="ml-auto text-cyan-400" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
