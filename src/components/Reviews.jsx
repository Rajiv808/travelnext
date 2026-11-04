
import React from "react";

const reviews = [
  {
    name: "Ananya M.",
    initials: "AM",
    trip: "Kashmir getaway",
    quote:
      "The trip felt easy from the very first conversation. Every day had something special.",
  },
  {
    name: "Rohan D.",
    initials: "RD",
    trip: "Kerala escape",
    quote:
      "Loved the relaxed pace and the lovely local places we got to discover.",
  },
  {
    name: "Sneha P.",
    initials: "SP",
    trip: "Goa break",
    quote:
      "A beautiful mix of sightseeing and time to unwind. Planning felt so simple.",
  },
  {
    name: "Vikram K.",
    initials: "VK",
    trip: "Darjeeling trip",
    quote:
      "The mountain views were unforgettable, and the itinerary gave us room to explore.",
  },
  {
    name: "Priya S.",
    initials: "PS",
    trip: "Family holiday",
    quote:
      "A thoughtful plan, helpful communication, and so many lovely moments together.",
  },
  {
    name: "Arjun K.",
    initials: "AK",
    trip: "Varanasi visit",
    quote:
      "We got to experience the destination without worrying about every little detail.",
  },
  {
    name: "Neha M.",
    initials: "NM",
    trip: "Couple's escape",
    quote:
      "The whole journey felt personal, with a good balance of highlights and downtime.",
  },
  {
    name: "Sourav G.",
    initials: "SG",
    trip: "Weekend getaway",
    quote:
      "A wonderful way to see somewhere new together. The memories will stay with us.",
  },
  {
    name: "Tanya I.",
    initials: "TI",
    trip: "Nature escape",
    quote:
      "Clear suggestions, friendly help, and a trip that matched what we wanted.",
  },
  {
    name: "Dev S.",
    initials: "DS",
    trip: "Heritage tour",
    quote:
      "From the first idea to the final stop, it felt like the journey was made for us.",
  },
];

function ReviewCard({ review }) {
  return (
    <article className="group relative flex h-full w-[290px] shrink-0 flex-col overflow-hidden rounded-3xl border border-[#e1e9dd] bg-white p-6 shadow-[0_8px_30px_rgba(24,59,45,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#bdd2bd] hover:shadow-[0_18px_45px_rgba(24,59,45,0.12)] sm:w-[310px] sm:p-7">
      {/* Decorative quote */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-2 font-serif text-8xl leading-none text-[#edf2e9]"
      >
        “
      </span>

      {/* Stars */}
      <div
        className="relative z-10 mb-5 flex items-center gap-1 text-sm tracking-[2px] text-[#bd8b37]"
        aria-label="5 out of 5 stars"
      >
        <span aria-hidden="true">★★★★★</span>
      </div>

      {/* Review text */}
      <p className="relative z-10 mb-7 flex-1 font-serif text-lg leading-8 tracking-[-0.2px] text-[#294638]">
        “{review.quote}”
      </p>

      {/* Reviewer details */}
      <div className="mt-auto flex items-center gap-3 border-t border-[#edf0eb] pt-5">
        <div
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#dce8d8] bg-[#eaf1e6] text-xs font-extrabold tracking-wide text-[#176b45]"
        >
          {review.initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-[#183b2d]">
            {review.name}
          </h3>
          <p className="mt-1 text-xs text-[#7a887c]">
            {review.trip}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3f6ef] text-[#52805d] transition-colors group-hover:bg-[#e5efe1]"
        >
          ↗
        </span>
      </div>
    </article>
  );
}

export default function Reviews() {
  // Duplicate the reviews to create a continuous marquee.
  const loopReviews = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#f0f4eb] via-[#fafbf6] to-[#fffdf8] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#dce8d4]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#eee7d4]/40 blur-3xl"
      />

      {/* Section heading */}
      <div className="relative mx-auto mb-10 max-w-3xl px-5 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dce7d8] bg-white/80 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#6b9a68] shadow-[0_0_0_4px_rgba(107,154,104,0.12)]" />
          <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#237a50] sm:text-xs">
            Notes from the journey
          </span>
        </div>

        <h2
          id="reviews-heading"
          className="mt-6 font-serif text-4xl font-normal leading-[1.12] tracking-[-1.5px] text-[#183b2d] sm:text-5xl md:text-6xl"
        >
          Little stories.
          <br />
          <span className="italic text-[#28734b]">Big smiles.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#718075] sm:text-base sm:leading-8">
          Every journey has a story. Discover what makes
          travelling with TravelNext special.
        </p>

        {/* Decorative divider */}
        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#d7e2d2]" />
          <span className="text-xs text-[#b28b4b]">✳</span>
          <span className="h-px w-10 bg-[#d7e2d2]" />
        </div>
      </div>

      {/* Reviews marquee */}
      <div
        className="reviews-marquee relative z-10 w-full overflow-hidden py-4"
        aria-label="Traveller reviews"
      >
        <div className="reviews-track flex w-max gap-4 px-3 sm:gap-5">
          {loopReviews.map((review, index) => (
            <ReviewCard
              key={`${review.initials}-${index}`}
              review={review}
            />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="relative z-10 mt-7 px-5 text-center">
        <p className="text-[10px] leading-6 text-[#899389] sm:text-xs">
          Sample reviews for demonstration. Replace with genuine
          customer feedback before publishing.
        </p>
      </div>

      {/* Tailwind-compatible custom marquee animation */}
      <style>{`
        @keyframes travelNextReviewsScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .reviews-track {
          animation: travelNextReviewsScroll 65s linear infinite;
          will-change: transform;
        }

        .reviews-marquee:hover .reviews-track,
        .reviews-marquee:focus-within .reviews-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .reviews-track {
            animation-duration: 48s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-track {
            animation: none;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            padding-left: 16px;
            padding-right: 16px;
          }

          .reviews-track > article {
            width: min(100%, 360px);
            flex: 1 1 280px;
          }
        }
      `}</style>
    </section>
  );
}
