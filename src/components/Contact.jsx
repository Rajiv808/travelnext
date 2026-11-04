
import React from "react";
import { MapPin, Phone, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";
const PHONE_NUMBER = "+919477110367";

export default function Contact() {
  const message = encodeURIComponent(
    "Hi TravelNext! I'd like to plan a trip."
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f3f6ef] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-[#1d6745]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border border-[#1d6745]/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d5e4d6] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#23764d]">
              <Sparkles size={14} />
              Let's plan your journey
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#183d2d] sm:text-5xl lg:text-6xl">
              Every great trip
              <br />
              starts with <span className="text-[#2c8055]">hello.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#68796d] sm:text-base">
            Have a destination in mind? Tell us what you're dreaming of.
            We'll help you turn your next getaway into a beautiful memory.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#103f2d] via-[#176442] to-[#287b50] p-7 text-white shadow-xl shadow-[#173e2b]/10 sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-14 text-[190px] leading-none text-white/[0.045]">
              ✳
            </div>

            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d6bd83]">
                TravelNext · Your travel partner
              </p>

              <h3 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let's make it happen.
              </h3>

              <p className="mb-8 max-w-md text-sm leading-7 text-white/75">
                From the first idea to the final itinerary, we're here to
                help you plan a trip that feels right for you.
              </p>

              <div className="space-y-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border-b border-white/15 px-1 py-5 transition hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e6c984]">
                    <MapPin size={21} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/55">
                      Find us
                    </span>
                    <span className="block text-sm font-medium sm:text-base">
                      Kolkata, West Bengal, India
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white/50 transition group-hover:text-[#e6c984]"
                  />
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="group flex items-center gap-4 rounded-2xl border-b border-white/15 px-1 py-5 transition hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e6c984]">
                    <Phone size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/55">
                      Give us a call
                    </span>
                    <span className="block text-sm font-medium sm:text-base">
                      +91 94771 10367
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white/50 transition group-hover:text-[#e6c984]"
                  />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl px-1 py-5 transition hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e6c984]">
                    <MessageCircle size={21} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/55">
                      Quickest way to reach us
                    </span>
                    <span className="block text-sm font-medium sm:text-base">
                      Chat with us on WhatsApp
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white/50 transition group-hover:text-[#e6c984]"
                  />
                </a>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e8c77e] px-6 py-3 text-sm font-semibold text-[#183d2d] transition hover:bg-[#f3d99b]"
                >
                  Plan my trip
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone size={16} />
                  Call us
                </a>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#728477]">
                  Our home base
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#183d2d]">
                  Rooted in Kolkata.
                </h3>
              </div>

              <span className="rounded-full border border-[#dce7d9] bg-white px-4 py-2 text-xs font-medium text-[#54715e]">
                West Bengal, India
              </span>
            </div>

            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[26px] border-4 border-white bg-[#e4ebdf] shadow-lg shadow-[#173e2b]/10 sm:min-h-[400px]">
              <iframe
                title="TravelNext location in Kolkata"
                src="https://maps.google.com/maps?q=Kolkata%2C%20West%20Bengal%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex items-center gap-2 px-1 text-xs leading-6 text-[#68796d] sm:text-sm">
              <Sparkles size={16} className="shrink-0 text-[#287b50]" />
              Wherever you're headed, let's plan it together.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
