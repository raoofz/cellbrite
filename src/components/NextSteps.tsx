"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 12 3 12 0v-5"/>
      </svg>
    ),
    title: "Utbildning & kurser",
    description: "Kunskap och utbildning för en bättre framtid.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "Jobbmöjligheter",
    description: "Hjälp att hitta vägar till arbete och sysselsättning.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Rådgivning & mentorskap",
    description: "Personligt stöd och vägledning på vägen framåt.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    title: "Återintegration",
    description: "Stöd för en trygg återgång till samhället.",
  },
];

export default function NextSteps() {
  return (
    <section className="py-14 md:py-18 bg-[#f9fafb]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a1f2e] mb-1.5">
          Nästa steg: Vi stödjer människor framåt
        </h2>
        <p className="text-[14px] text-gray-500 mb-10">
          Vi erbjuder verktyg och resurser som kan göra skillnad.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#f8f4ee] flex items-center justify-center mb-4 text-[#1a1f2e]">
                {c.icon}
              </div>
              <h3 className="font-bold text-[15px] text-[#1a1f2e] mb-2">{c.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{c.description}</p>
              <Link
                href="#"
                className="text-[13px] font-semibold text-[#1a1f2e] flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                Läs mer <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
